import { useReducer, useState } from 'react'

import { TonalInflector, TonalCombiningForms, TonalDesinenceInflection, TonalLemmatizer, TonalLemmatizationAnalyzer } from 'taipa';

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
const opt2 = ['daizgiy', 'kana', 'hangul'];
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

console.log(['add', 'increase']);
console.log(['time', 'clock', 'alarm']);

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

function CompositionPage() {
    const [scanned, setScanned] = useState();
    const [selected, setSelected] = useState();

    const handleChange = function(e: React.ChangeEvent<HTMLInputElement>) {
        setScanned(e.target.value);
    };

    const handleSelectedChange = function(e: React.ChangeEvent<HTMLInputElement>) {
        setSelected(e.target.value);
    };

    let segs: number = -1;
    const baseForms = ['pah', 'jiz', 'sek'];
    const proceedingForms = ['pahy', 'jiw', 'sekf']; 

    const tl = new TonalLemmatizationAnalyzer();
    for(let i = 0; i < baseForms.length; i++) {
        if(baseForms[i].search(scanned) >= 0 || proceedingForms[i].search(scanned) >= 0) {
            segs = i;
        }
    }

    const ti = new TonalInflector();
    const lx = ti.inflect('pah', new TonalCombiningForms(), new TonalDesinenceInflection())
    const candidates = [lx.word.literal, lx.getProceedingForms()[1].literal];

    let options: string[] = [];

    if(segs >= 0) options = segments[segs].options;

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
        </div>
    )
}
  
export default CompositionPage