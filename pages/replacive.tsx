import { useState } from 'react';
import { TonalInflector } from 'taipa';

function ReplacivePage() {
    const [input, setInput] = useState();

    const handleChange = function(e: React.ChangeEvent<HTMLInputElement>) {
        setInput(e.target.value);
    };

    const nouns = ['chittwvaiy', 'chittwqoa', 'voannydang', 'dangzsixay', 'damwvurhhxay'];

    const ti = new TonalInflector();
    const lx = ti.inflectTransfix(input);
    let items: string[] = [];
    if (nouns.includes(input)) {
        items = lx.getForms().map(x => x.literal);
    }

    return (
        <div>
            <label>
                拍羅馬字, 輸出 inflected form
                <br />
                <input type="text" list="nouns" onChange={handleChange} />
            </label>
            <datalist id="nouns">
                {nouns.map(item => (
                    <option key={item} value={item} />
                ))}
            </datalist>
            {items}
        </div>
    );
}

export default ReplacivePage;
