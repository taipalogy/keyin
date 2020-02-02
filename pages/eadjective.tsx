import { useState } from 'react';
import { TonalPhrasalInflector, Adnominal} from 'taipa';

function EAdjectivePage() {
    const [input, setInput] = useState();

    const handleChange = function(e: React.ChangeEvent<HTMLInputElement>) {
        setInput(e.target.value)
    };

    const eAdjectives = [
        ['sin', 'e'],
        ['quz', 'ez'],
        ['soew', 'ew']
    ];

    const matches = eAdjectives.filter(x => x.join(' ') === input);

    const phinfl = new TonalPhrasalInflector();
    
    let fr1 = phinfl.analyzeAdjective('', '', new Adnominal()); 
    if(matches[0]) {
        fr1 = phinfl.analyzeAdjective(matches[0][0], matches[0][1], new Adnominal());
    }

    const forms = fr1.getProceedingForms()

    return (

        <div>
            <label>拍羅馬字, 輸出繼續形
            <br/>
            <input  type='text' list="adjectives" onChange={handleChange}/></label>
            <datalist id="adjectives">
                {eAdjectives.map(x => <option key={x[0] + x[1]} value={x[0] + ' ' + x[1]}/> )}
            </datalist>
            {forms.map(x => (<a>{x.literal} </a>))}
        </div>
    )
}

export default EAdjectivePage