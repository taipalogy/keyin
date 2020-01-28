import { useState } from 'react';
import { TonalCombiningForms, TonalInflectionAnalyzer, TonalDesinenceInflection } from 'taipa';

import { lowerLettersOfTonal, TonalLetterTags } from 'taipa/lib/tonal/version2';
import { AlphabeticGrapheme } from 'taipa/lib/grapheme';
import { TonalInflectionLexeme } from 'taipa/lib/dparser/lexeme';
import { TonalCombiningMorpheme } from 'taipa/lib/dparser/morpheme';

function AdditivePage() {
    const [input, setInput] = useState();

    const handleChange = function(e: React.ChangeEvent<HTMLInputElement>) {
        setInput(e.target.value)
    };

    const syllableSeqs = [
        ['qong', 'qo'],
    ];

    const patterns = [
            [TonalLetterTags.z, TonalLetterTags.w], // 73
            [TonalLetterTags.f, TonalLetterTags.y], // 12
        ]

    const matches = syllableSeqs.filter(x => x.join('') === input);
    const tia = new TonalInflectionAnalyzer();

    let gs1: AlphabeticGrapheme[] = [];
    let gs2: AlphabeticGrapheme[] = [];
    if(matches.length > 0) {
        gs1 = tia.graphAnalyze(matches[0][0]);
        gs2 = tia.graphAnalyze(matches[0][1]);
    }

    const ms1: TonalCombiningMorpheme[] = tia.morphAnalyze(gs1, new TonalCombiningForms());
    const ms2: TonalCombiningMorpheme[] = tia.morphAnalyze(gs2, new TonalCombiningForms());
    const ms3: TonalCombiningMorpheme[] = tia.morphAnalyze(gs1, new TonalCombiningForms());
    const ms4: TonalCombiningMorpheme[] = tia.morphAnalyze(gs2, new TonalCombiningForms());

    if(ms1[0] && ms2[0]) {
        ms1[0].syllable.pushLetter(lowerLettersOfTonal.get(patterns[0][0]));
        ms2[0].syllable.pushLetter(lowerLettersOfTonal.get(patterns[0][1]));
    }

    if(ms3[0] && ms4[0]) {
        ms3[0].syllable.pushLetter(lowerLettersOfTonal.get(patterns[1][0]));
        ms4[0].syllable.pushLetter(lowerLettersOfTonal.get(patterns[1][1]));
    }

    const lx1 = tia.lexAnalyze([ms1, ms2].flat(), new TonalDesinenceInflection());
    const lx2 = tia.lexAnalyze([ms3, ms4].flat(), new TonalDesinenceInflection());

    const items: TonalInflectionLexeme[] = [lx1, lx2];
    
    return (

        <div>
            <label>拍羅馬字, 輸出單語
            <br/>
            <input  type='text' list="phrasalverbs" onChange={handleChange}/></label>
            <datalist id="phrasalverbs">
                {syllableSeqs.map(item => <option key={item[0] + item[1]} value={item[0] + item[1]}/> )}
            </datalist>
            {items.map(x => (<a>{x.word.literal} </a>))}
        </div>
    )
}

export default AdditivePage