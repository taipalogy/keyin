import { useReducer } from 'react';

import {
    TonalInflector,
    TonalCombiningForms,
    TonalDesinenceInflection,
    TonalLemmatizationAnalyzer,
    Client
} from 'taipa';

class Segment {
    literal: string = '';

    constructor(str: string) {
        this.literal = str;
    }

    isBaseForm(str: string) {
        if (str === this.literal) return true;
        return false;
    }

    isProceedingForm(str: string) {
        const infl = new TonalInflector();
        const lx = infl.inflect(this.literal, new TonalCombiningForms(), new TonalDesinenceInflection());
        if (lx.getProceedingForms().filter(x => x.literal === str).length > 0) return true;
        return false;
    }

    includes(str: string) {
        if (this.isBaseForm(str) || this.isProceedingForm(str)) return true;
        return false;
    }
}

const pah = new Segment('pah');
const jiz = new Segment('jiz');
const sek = new Segment('sek');

const opt1 = ['type'];
const opt2 = ['daizgiy', 'kana'];
const opt3 = ['blue', 'green', 'red'];

const segments = [
    {
        segment: pah,
        options: opt1
    },
    {
        segment: jiz,
        options: opt2
    },
    {
        segment: sek,
        options: opt3
    }
];

const cli = new Client();

function getSeqs(alphabet: string, str: string) {
    if (alphabet == opt2[1]) {
        const ta = cli.processKana(str);
        return ta.blockSequences.filter(x => x.length > 0);
    } else if (alphabet == opt2[0]) {
        const ta = cli.processTonal(str);
        return ta.word.syllables.flatMap(x => x.literal);
    }
    return [];
}

let seqs: string[] = []; // output sequences
let alphabet = '';
let fcolor = {}; // font color

const ti = new TonalInflector();
const lx1 = ti.inflect(segments[0].segment.literal, new TonalCombiningForms(), new TonalDesinenceInflection());
const lx2 = ti.inflect(segments[1].segment.literal, new TonalCombiningForms(), new TonalDesinenceInflection());
const candidates = [
    lx1.word.literal,
    lx1.getProceedingForms()[1].literal + lx2.word.literal,
    lx1.getProceedingForms()[1].literal + lx2.getProceedingForms()[0].literal + segments[2].segment.literal
];

function CompositionPage() {
    const [input, setInput] = useReducer((state: any, newState: any) => ({ ...state, ...newState }), {
        scanned: '',
        selected: '',
        typed: '',
    });

    const handleChange = function(e: React.ChangeEvent<HTMLInputElement>) {
        const name = e.target.name;
        const value = e.target.value;
        setInput({ [name]: value });
    };

    let segNo: number = -1; // no. of segment
    let combinedSegNo: number = -1; // no. of combined segments
    let optNo = -1; // which radio button and input field to be displayed

    const tl = new TonalLemmatizationAnalyzer();
    const mphs = tl.morphAnalyze(input.scanned);

    if (mphs) {
        for (let i = 0; i < mphs.length; i++) {
            if (mphs[i] && segments[i]) {
                if (
                    (i < segments.length - 1 && segments[i].segment.isProceedingForm(mphs[i].syllable.literal)) ||
                    (i == segments.length - 1 && segments[i].segment.isBaseForm(mphs[i].syllable.literal))
                ) {
                    combinedSegNo = i;
                } else {
                    break;
                }
            }
        }
    }

    for (let i = 0; i < segments.length; i++) {
        if (mphs && mphs[i] && segments[i]) {
            if (segments[i].segment.includes(mphs[i].syllable.literal)) {
                segNo = i;
            }
        }
    }

    let options: string[] = [];

    if (segNo >= 0) {
        if (combinedSegNo < segNo) {
            options = segments[combinedSegNo + 1].options;
            optNo = combinedSegNo + 1;
        } else {
            options = segments[segNo].options;
            optNo = segNo;
        }
    }

    if (opt2.filter(x => x.includes(input.selected)).length > 0) {
        alphabet = input.selected;
        seqs = getSeqs(alphabet, input.typed);
    } else {
        seqs = getSeqs(alphabet, input.typed);
    }

    if (opt3.filter(x => x.includes(input.selected)).length > 0) {
        const str: string = input.selected;
        fcolor = { color: str };
    }

    return (
        <div>
            <input type="text" list="words" value={input.scanned} name="scanned" onChange={handleChange} />
            <datalist id="words">
                {candidates.map(item => (
                    <option key={item} value={item} />
                ))}
            </datalist>
            <br />
            <div>
                {options.map((checked_opt, i) => (
                    <div key={i}>
                        <input
                            type="radio"
                            checked={input.selected === checked_opt}
                            name="selected"
                            onChange={handleChange}
                            value={checked_opt}
                        />
                        {checked_opt}
                    </div>
                ))}
            </div>
            <div style={fcolor}>
                {optNo > 0 ? <input type="text" value={input.typed} name="typed" onChange={handleChange} /> : null}
                {optNo > 0 ? seqs.map(x => <li> {x} </li>) : null}
            </div>
        </div>
    );
}

export default CompositionPage;
