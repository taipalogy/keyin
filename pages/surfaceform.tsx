import { getSurfaceForms } from '../src/process'
import { useState } from 'react'
import { TonalAssimilator, AssimiDirection } from 'taipa';

function SurfaceFormPage() {
    const [input, setInput] = useState();

    const handleChange = function(e: React.ChangeEvent<HTMLInputElement>) {
        setInput(e.target.value)
    };

    const words = [
        'lakkwex',
        'hietfkiw',
        'qapfbay',
        'chappwex',
        'cutfmiax',
        'qutflatt',
    ]

    const assim = new TonalAssimilator();
    const lx = assim.assimilate(input, AssimiDirection.regressive);
    const surfaceForm = getSurfaceForms(lx.word.literal, lx.getProceedingForms()[0].literal);

    return (
        <div>拍羅馬字, 輸出表面形
            <label>
                <br />
                    <input type='text' list="words" value={input} onChange={handleChange} />
                    <datalist id="words">
                        {words.map(item => <option key={item} value={item}/> )}
                    </datalist>
            </label>

            <br />
            {surfaceForm.map(x => (
                <li>{x}</li>)
            )}
        </div>)
}
  
export default SurfaceFormPage