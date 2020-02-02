import { useState } from 'react';
import { TonalCombiningForms, TonalInflectionAnalyzer, TonalDesinenceInflection } from 'taipa';
import { TonalInflectionLexeme } from 'taipa';
import { TonalCombiningMorpheme } from 'taipa';
import { lowerLettersOfTonal } from 'taipa'

import { TonalLetterTags } from 'taipa/lib/tonal/version2';
import { AlphabeticGrapheme } from 'taipa/lib/grapheme';

function AdditivePage() {
    const [input, setInput] = useState();

    const handleChange = function(e: React.ChangeEvent<HTMLInputElement>) {
        setInput(e.target.value)
    };

    const syllableSeqs = [
        ['hoe', 'qi'],
    ];

    const patterns = [
            [TonalLetterTags.w, TonalLetterTags.x], // 35
            [TonalLetterTags.f, TonalLetterTags.w], // 13
            [TonalLetterTags.z], // 71
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
    const ms5: TonalCombiningMorpheme[] = tia.morphAnalyze(gs1, new TonalCombiningForms());
    const ms6: TonalCombiningMorpheme[] = tia.morphAnalyze(gs2, new TonalCombiningForms());

    if(ms1[0] && ms2[0]) {
        ms1[0].syllable.pushLetter(lowerLettersOfTonal.get(patterns[0][0]));
        ms2[0].syllable.pushLetter(lowerLettersOfTonal.get(patterns[0][1]));
    }

    if(ms3[0] && ms4[0]) {
        ms3[0].syllable.pushLetter(lowerLettersOfTonal.get(patterns[1][0]));
        ms4[0].syllable.pushLetter(lowerLettersOfTonal.get(patterns[1][1]));
    }

    if(ms5[0] && ms6[0]) {
        ms5[0].syllable.pushLetter(lowerLettersOfTonal.get(patterns[2][0]));
    }

    const lx1 = tia.lexAnalyze([ms1, ms2].flat(), new TonalDesinenceInflection());
    const lx2 = tia.lexAnalyze([ms3, ms4].flat(), new TonalDesinenceInflection());
    const lx3 = tia.lexAnalyze([ms5, ms6].flat(), new TonalDesinenceInflection());

    const forms: TonalInflectionLexeme[] = [lx1, lx2, lx3];
    
    return (

        <div>
            <label>拍羅馬字, 輸出單語
            <br/>
            <input  type='text' list="stems" onChange={handleChange}/></label>
            <datalist id="stems">
                {syllableSeqs.map(x => <option key={x[0] + x[1]} value={x[0] + x[1]}/> )}
            </datalist>
            {forms.map(x => (<a>{x.word.literal} </a>))}
        </div>
    )
}

export default AdditivePage