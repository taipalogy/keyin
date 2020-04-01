import { useState } from 'react';
import { tonalInflectionAnalyzer, TonalCombiningForms, TonalLetterTags, TonalCombiningMorpheme, TonalDesinenceInflection } from 'taipa';

function TonePatternWordsPage() {
    const [input, setInput] = useState('');

    const handleChange = function(e: React.ChangeEvent<HTMLInputElement>) {
        setInput(e.target.value);
    };

    const mapTonal = new Map<string, number>()
        .set(TonalLetterTags.f, 1)
        .set(TonalLetterTags.y, 2)
        .set(TonalLetterTags.w, 3)
        .set(TonalLetterTags.x, 5)
        .set(TonalLetterTags.z, 7)
        .set(TonalLetterTags.xx, 9);

    const mapFinal = new Map<string, number>()
        .set(TonalLetterTags.zero, 1)
        .set(TonalLetterTags.p, 4)
        .set(TonalLetterTags.t, 4)
        .set(TonalLetterTags.k, 4)
        .set(TonalLetterTags.h, 4)
        .set(TonalLetterTags.pp, 8)
        .set(TonalLetterTags.tt, 8)
        .set(TonalLetterTags.kk, 8)
        .set(TonalLetterTags.hh, 8);

    const tia = tonalInflectionAnalyzer;
    let tokens: string[] = [];
    if(input) {
        tokens = input.split(' ');
    }
    let items: (number | undefined)[] = [];
    if(tokens.length > 0) {
        const ls1 = tokens.map(it => tia.lexAnalyze(it, new TonalDesinenceInflection()));
        items = ls1.map(it =>
            mapTonal.has(it.getInflectionalEnding().toString())
                ? mapTonal.get(it.getInflectionalEnding().toString())
                : mapFinal.get(it.getAllomorphicEnding().toString())
        );
    }

    const phrases = ['ciet dngh', 'hoz goaz', 'qongy aw', 'giurx ez', 'chongx cut kih', 'chau laiz chau kiw'];

    return (
        <div>
            <label>
                拍羅馬字, 輸出聲調模式
                <br />
                <input type="text" list="entries" onChange={handleChange} />
            </label>
            <datalist id="entries">
                {phrases.map(it => (
                    <option key={it} value={it} />
                ))}
            </datalist>
            {items}
        </div>
    );
}

export default TonePatternWordsPage;
