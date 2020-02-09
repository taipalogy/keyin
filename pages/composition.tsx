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

// radio groups
const optGroup1 = ['type'];
const optGroup2 = ['daizgiy', 'kana'];
const optGroup3 = ['blue', 'green', 'red'];

const segments = [
    {
        segment: pah,
        options: optGroup1
    },
    {
        segment: jiz,
        options: optGroup2
    },
    {
        segment: sek,
        options: optGroup3
    }
];

const cli = new Client();

function getSeqs(alphabet: string, str: string) {
    if (alphabet == optGroup2[1]) {
        const ta = cli.processKana(str);
        return ta.blockSequences.filter(x => x.length > 0);
    } else if (alphabet == optGroup2[0]) {
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
        selectedOne: '',
        typed: '',
        selectedTwo: '',
        selectedThree: '',
    });

    const handleChange = function(e: React.ChangeEvent<HTMLInputElement>) {
        const name = e.target.name;
        const value = e.target.value;
        setInput({ [name]: value });
    };

    let segIdx: number = -1; // no. of segment
    let combinedSegIdx: number = -1; // no. of combined segments
    let optIdx = -1; // which radio button and input field to be displayed

    const tl = new TonalLemmatizationAnalyzer();
    const mphs = tl.morphAnalyze(input.scanned);

    if (mphs) {
        for (let i = 0; i < mphs.length; i++) {
            if (mphs[i] && segments[i]) {
                if (
                    (i < segments.length - 1 && segments[i].segment.isProceedingForm(mphs[i].syllable.literal)) ||
                    (i == segments.length - 1 && segments[i].segment.isBaseForm(mphs[i].syllable.literal))
                ) {
                    combinedSegIdx = i;
                } else {
                    break;
                }
            }
        }
    }

    for (let i = 0; i < segments.length; i++) {
        if (mphs && mphs[i] && segments[i]) {
            if (segments[i].segment.includes(mphs[i].syllable.literal)) {
                segIdx = i;
            }
        }
    }

    let options: string[] = [];

    if (segIdx >= 0) {
        if (combinedSegIdx < segIdx) {
            options = segments[combinedSegIdx + 1].options;
            optIdx = combinedSegIdx + 1;
        } else {
            options = segments[segIdx].options;
            optIdx = segIdx;
        }
    }

    if (optGroup2.filter(x => x.includes(input.selectedTwo)).length > 0) {
        alphabet = input.selectedTwo;
        seqs = getSeqs(alphabet, input.typed);
    } else {
        seqs = getSeqs(alphabet, input.typed);
    }

    if (optGroup3.filter(x => x.includes(input.selectedThree)).length > 0) {
        const str: string = input.selectedThree;
        fcolor = { color: str };
    }

    let isDisabled = true;
    if(optIdx > 0) isDisabled = false;

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
                {optIdx == 0 && options.map((checked_opt, i) => (
                    <div key={i}>
                        <input
                            type="radio"
                            checked={input.selectedOne === checked_opt}
                            name="selectedOne"
                            onChange={handleChange}
                            value={checked_opt}
                        />
                        {checked_opt}
                    </div>
                ))}
                {optIdx == 1 && options.map((checked_opt, i) => (
                    <div key={i}>
                        <input
                            type="radio"
                            checked={input.selectedTwo === checked_opt}
                            name="selectedTwo"
                            onChange={handleChange}
                            value={checked_opt}
                        />
                        {checked_opt}
                    </div>
                ))}
                {optIdx == 2 && options.map((checked_opt, i) => (
                    <div key={i}>
                        <input
                            type="radio"
                            checked={input.selectedThree === checked_opt}
                            name="selectedThree"
                            onChange={handleChange}
                            value={checked_opt}
                        />
                        {checked_opt}
                    </div>
                ))}
            </div>
            <div style={fcolor}>
                {optIdx > 0 && <input type="text" disabled={isDisabled} value={input.typed} name="typed" onChange={handleChange} />}
                {seqs.map(x => <li> {x} </li>)}
            </div>
        </div>
    );
}

export default CompositionPage;
