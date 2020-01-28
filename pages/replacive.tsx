import { useState } from 'react';
import { TonalInflectionAnalyzer, ThirdCombiningForm, TransfixInflection } from 'taipa';

function ReplacivePage() {
    const [input, setInput] = useState();

    const handleChange = function(e: React.ChangeEvent<HTMLInputElement>) {
        setInput(e.target.value)
    };

    const nouns = [
        'chittwvaiy',
        'chittwqoa',
        'voannydang',
        'dangzsixay',
    ];

    const tia = new TonalInflectionAnalyzer();
    const lx = tia.analyze(input, new ThirdCombiningForm(), new TransfixInflection());
    let items: string[] = [];
    if(nouns.includes(input)) {
        items = lx.otherForms.map(x => x.literal);
    }

    return (
        <div>
            <label>拍羅馬字, 輸出 inflected form
            <br/>
            <input  type='text' list="phrasalverbs" onChange={handleChange}/></label>
            <datalist id="phrasalverbs">
                {nouns.map(item => <option key={item} value={item}/> )}
            </datalist>
            {items}
        </div>
    )
}

export default ReplacivePage