import { useState } from 'react'
import { TonalInflectionAnalyzer, ThirdCombiningForm, TransfixInflection } from 'taipa';
import { itemize } from '../src/process'

function ConvNounAdvPage() {
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
    if(lx.otherForms[0]) items = itemize(lx.otherForms[0].literal);

    return (
        <div>
            <label>拍名詞, 輸出副詞
            <br/>
            <input  type='text' list="phrasalverbs" onChange={handleChange}/></label>
            <datalist id="phrasalverbs">
                {nouns.map(item => <option key={item} value={item}/> )}
            </datalist>
            {items}
        </div>
    )
}

export default ConvNounAdvPage