import { useState } from 'react';
import {
  TonalCombiningForms,
  tonalInflectionAnalyzer,
  TonalDesinenceInflection,
  graphAnalyzeTonal,
} from 'taipa';
import { TonalInflectionLexeme } from 'taipa';
import { TonalCombiningMorpheme } from 'taipa';
import { lowerLettersTonal } from 'taipa';
import { TonalLetterTags } from 'taipa';
import { AlphabeticGrapheme } from 'taipa';
import { getSyllabograms } from '../ime/syllabograms';

function AdditivePage() {
  const [input, setInput] = useState('');

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  const syllableSeqs = [['hue', 'ki']];

  const patterns = [
    [TonalLetterTags.w, TonalLetterTags.x], // 35
    [TonalLetterTags.f, TonalLetterTags.w], // 13
    [TonalLetterTags.z], // 71
  ];

  const matches = syllableSeqs.filter((x) => x.join('') === input);
  const tia = tonalInflectionAnalyzer;

  let gs1: AlphabeticGrapheme[] = [];
  let gs2: AlphabeticGrapheme[] = [];
  if (matches.length > 0) {
    gs1 = graphAnalyzeTonal(matches[0][0]);
    gs2 = graphAnalyzeTonal(matches[0][1]);
  }

  const ms1: TonalCombiningMorpheme[] = tia.morphAnalyze(
    gs1,
    new TonalCombiningForms()
  );
  const ms2: TonalCombiningMorpheme[] = tia.morphAnalyze(
    gs2,
    new TonalCombiningForms()
  );
  const ms3: TonalCombiningMorpheme[] = tia.morphAnalyze(
    gs1,
    new TonalCombiningForms()
  );
  const ms4: TonalCombiningMorpheme[] = tia.morphAnalyze(
    gs2,
    new TonalCombiningForms()
  );
  const ms5: TonalCombiningMorpheme[] = tia.morphAnalyze(
    gs1,
    new TonalCombiningForms()
  );
  const ms6: TonalCombiningMorpheme[] = tia.morphAnalyze(
    gs2,
    new TonalCombiningForms()
  );

  if (ms1[0] && ms2[0]) {
    ms1[0].syllable.pushLetter(lowerLettersTonal.get(patterns[0][0]));
    ms2[0].syllable.pushLetter(lowerLettersTonal.get(patterns[0][1]));
  }

  if (ms3[0] && ms4[0]) {
    ms3[0].syllable.pushLetter(lowerLettersTonal.get(patterns[1][0]));
    ms4[0].syllable.pushLetter(lowerLettersTonal.get(patterns[1][1]));
  }

  if (ms5[0] && ms6[0]) {
    ms5[0].syllable.pushLetter(lowerLettersTonal.get(patterns[2][0]));
  }

  const lx1 = tia.lexAnalyze([ms1, ms2].flat(), new TonalDesinenceInflection());
  const lx2 = tia.lexAnalyze([ms3, ms4].flat(), new TonalDesinenceInflection());
  const lx3 = tia.lexAnalyze([ms5, ms6].flat(), new TonalDesinenceInflection());

  const forms: TonalInflectionLexeme[] = [lx1, lx2, lx3];

  return (
    <div style={{ fontFamily: 'IBM Plex Mono', fontSize: 36 }}>
      <label>
        拍羅馬字, 輸出有超分節接辭个單語，無聲調音節加上超分節接辭：
        <br />
        <input
          type="text"
          list="stems"
          onChange={handleChange}
          style={{ fontFamily: 'IBM Plex Mono', fontSize: 36 }}
        />
      </label>
      <datalist id="stems">
        {syllableSeqs.map((x) => (
          <option key={x[0] + x[1]} value={x[0] + x[1]} />
        ))}
      </datalist>
      {forms.map((x) => (
        <a>
          {x.word.literal +
            ', ' +
            getSyllabograms(x.word.literal).join('') +
            '.'}{' '}
        </a>
      ))}
    </div>
  );
}

export default AdditivePage;
