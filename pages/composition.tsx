import { useReducer, useState } from 'react'

import { TonalInflector, TonalCombiningForms, TonalDesinenceInflection, TonalLemmatizer, TonalLemmatizationAnalyzer, Client } from 'taipa';

const inflective = function(str: string) {
    const infl = new TonalInflector();
    const base = str;
    const lx = infl.inflect(base, new TonalCombiningForms(), new TonalDesinenceInflection());
    return (s: string) => {
        console.log(`base: ${base}. s: ${s}`);
        if (lx.getProceedingForms().filter(x => x.literal === s).length > 0) return true;
        return false;
    };
};


const pah = inflective('pah');
const jiz = inflective('jiz');
const sek = inflective('sek');

const opt1 = ['type'];
const opt2 = ['daizgiy', 'kana'];
const opt3 = ['blue', 'green', 'red'];

const segments = [
    {
        lexeme: pah,
        options: opt1
    },
    {
        lexeme: jiz,
        options: opt2,
    },
    {
        lexeme: sek,
        options: opt3
    }
]

console.log(opt1);
console.log(opt2);
console.log(opt3);

const composite2 = function() {
    const opti = opt2;
    return (str: string[]) => {
        console.log(`str: ${str}`);
        if (str) {
            return opti.map(x => [str[0], x]);
        } else return [];
    };
};

const composite3 = function() {
    const opti = opt3;
    return (str: string[]) => {
        console.log(`str: ${str}`);
        if (str) {
            return opti.map(x => [str[0], str[1], x]);
        }
    };
};

const emptyFunc = function(str: string[]) {
    const empty: string[][] = new Array();
    return empty;
};
let comp2 = emptyFunc;

if (pah('pahy')) {
    comp2 = composite2();
    const doc2 = comp2([opt1[0]]);
    console.log(doc2);
    const comp3 = composite3();
    const doc3 = comp3(doc2[0]);
    console.log(doc3);
}

const cli = new Client();

function getSeqs(alphabet: string, str: string) {
    if(alphabet == 'kana') {
        const ta = cli.processKana(str);
        return ta.blockSequences.filter(x => x.length > 0);
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

    let segs: number = -1;
    const baseForms = ['pah', 'jiz', 'sek'];
    const proceedingForms = ['pahy', 'jiw', 'sekf']; 

    const tl = new TonalLemmatizationAnalyzer();
    for(let i = 0; i < baseForms.length; i++) {
        const str: string = scanned;
        if(str && str.length > 0) {
            if(str.search(baseForms[i]) >= 0 || str.search(proceedingForms[i]) >= 0) {
                segs = i;
            }
        }
    }

    const ti = new TonalInflector();
    const lx = ti.inflect('pah', new TonalCombiningForms(), new TonalDesinenceInflection())
    const candidates = [lx.word.literal, lx.getProceedingForms()[1].literal];

    let options: string[] = [];

    if(segs >= 0) {
        options = segments[segs].options;
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
            {segs == 1 || segs == 2 ? <input type='text' value={input} onChange={handleInputChange} /> : null}
            {segs == 1 || segs == 2 ? seqs.map(x => (<li> {x} </li>)) : null}
            </div>
        </div>
    )
}
  
export default CompositionPage