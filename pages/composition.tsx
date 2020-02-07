import { useReducer, useState } from 'react'

import { TonalInflector, TonalCombiningForms, TonalDesinenceInflection, TonalLemmatizer, TonalLemmatizationAnalyzer, Client } from 'taipa';

class Segment {
    literal: string = '';

    constructor(str: string) {
        this.literal = str;
    }

    isBaseForm(str: string) {
        if(str === this.literal) return true;
        return false;
    }

    isProceedingForm(str: string) {
        const infl = new TonalInflector();
        const lx = infl.inflect(this.literal, new TonalCombiningForms(), new TonalDesinenceInflection());
        if (lx.getProceedingForms().filter(x => x.literal === str).length > 0) return true;
        return false;
    }

    includes(str: string) {
        if(this.isBaseForm(str) || this.isProceedingForm(str)) return true;
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
        options: opt2,
    },
    {
        segment: sek,
        options: opt3
    }
]

const cli = new Client();

function getSeqs(alphabet: string, str: string) {
    if(alphabet == 'kana') {
        const ta = cli.processKana(str);
        return ta.blockSequences.filter(x => x.length > 0);
    } else if(alphabet == 'daizgiy') {
        const ta = cli.processTonal(str);
        return ta.word.syllables.flatMap(x => x.literal);
    }
    return [];
}

let seqs: string[] = [];
let alphabet = '';
let fcolor = {};


function CompositionPage() {
    const [scanned, setScanned] = useState();
    const [selected, setSelected] = useState();
    const [input, setInput] = useState();

    const handleChange = function(e: React.ChangeEvent<HTMLInputElement>) {
        setScanned(e.target.value);
    };

    const handleSelectedChange = function(e: React.ChangeEvent<HTMLInputElement>) {
        setSelected(e.target.value);
    };

    const handleInputChange = function(e: React.ChangeEvent<HTMLInputElement>) {
        setInput(e.target.value);
    };

    let segNo: number = -1;
    let combiningSegNo: number = -1;

    // const baseForms = ['pah', 'jiz', 'sek'];
    // const proceedingForms = ['pahy', 'jiw', 'sekf']; 

    const tl = new TonalLemmatizationAnalyzer();
    const mphs = tl.morphAnalyze(scanned);
    const len = mphs.length;

    if(mphs) {
        for(let i = 0; i < mphs.length; i++) {
            // const str: string = scanned;
            //str && str.length > 0 && 
            if(mphs[i] && segments[i]) {
                if(i < segments.length - 1 && segments[i].segment.isProceedingForm(mphs[i].syllable.literal) ||
                    i == segments.length - 1 && segments[i].segment.isBaseForm(mphs[i].syllable.literal)) {
                        combiningSegNo = i;
                } else {
                    break;
                }
            }
        }
    }

    for(let i = 0; i < segments.length; i++) {
        if(mphs && mphs[i] && segments[i]) {
            if(segments[i].segment.includes(mphs[i].syllable.literal)) {
                segNo = i;
            }
        }
    }

    const ti = new TonalInflector();
    const lx = ti.inflect('pah', new TonalCombiningForms(), new TonalDesinenceInflection())
    const candidates = [lx.word.literal, lx.getProceedingForms()[1].literal];

    let options: string[] = [];

    if(segNo >= 0) {
        if(combiningSegNo < segNo) options = segments[combiningSegNo + 1].options;
        else options = segments[segNo].options;
    }
    
    if(opt2.filter(x => x.includes(selected)).length > 0) {
        alphabet = selected;
        seqs = getSeqs(alphabet, input);
    } else {
        seqs = getSeqs(alphabet, input);
    }

    if(opt3.filter(x => x.includes(selected)).length > 0) {
        const str: string = selected;
        fcolor = {color: str};
    }


    return (
        <div>
            {'segNo:' + segNo + '.'}
            {'combinginSegNo:' + combiningSegNo + '.'}
            {mphs.map(x => x.syllable.literal)}
            <input type='text' list="words" value={scanned} name="scanned" onChange={handleChange} />
            <datalist id="words">
                {candidates.map(item => <option key={item} value={item}/> )}
            </datalist>
            <br/>
            <div>
                {options.map((opt, i) => (
                    <div key={i}>
                        <input type="radio" checked={selected === opt} onChange={handleSelectedChange} value={opt} />{opt}
                    </div>
                ))
            }
            </div>
            <div style={fcolor}>
            {segNo == 1 || segNo == 2 ? <input type='text' value={input} onChange={handleInputChange} /> : null}
            {segNo == 1 || segNo == 2 ? seqs.map(x => (<li> {x} </li>)) : null}
            </div>
        </div>
    )
}
  
export default CompositionPage