import { useState } from 'react';
import { PhrasalInflectionAnalyzer } from 'taipa/lib/dparser/analyzer';
import { TonalTransitivePhraseme } from 'taipa/lib/dparser/phraseme';

function PhrasalVerbPage() {
    const [input, setInput] = useState();

    const handleChange = function(e: React.ChangeEvent<HTMLInputElement>) {
        setInput(e.target.value)
    };

    const phrasalVerbs = [
        ['koannw', 'diurh'],
        ['longw', 'diurh']
    ];

    const matches = phrasalVerbs.filter(x => x.join(' ') === input);

    const phinfl = new PhrasalInflectionAnalyzer();
    
    let fr1 
    if(matches[0]) {
        fr1 = phinfl.analyzeTransitive(matches[0][0], matches[0][1]);
    }

    let forms: TonalTransitivePhraseme[] = [];
    if(fr1) forms = [fr1];

    return (

        <div>
            <label>拍羅馬字, 輸出繼續形
            <br/>
            <input  type='text' list="phrasalverbs" onChange={handleChange}/></label>
            <datalist id="phrasalverbs">
                {phrasalVerbs.map(x => <option key={x[0] + x[1]} value={x[0] + ' ' + x[1]}/> )}
            </datalist>
            {forms.map(x => (<a>{x.proceedingForms[0].literal} </a>))}
        </div>
    )
}

export default PhrasalVerbPage