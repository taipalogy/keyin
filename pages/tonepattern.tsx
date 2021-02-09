import { useState } from 'react';
import {
  tonalInflectionAnalyzer,
  TonalCombiningForms,
  TonalLetterTags,
  extractTones,
} from 'taipa';

function TonePatternPage() {
  const [input, setInput] = useState('');

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
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
    .set(TonalLetterTags.p, 4)
    .set(TonalLetterTags.t, 4)
    .set(TonalLetterTags.k, 4)
    .set(TonalLetterTags.h, 4)
    .set(TonalLetterTags.pp, 8)
    .set(TonalLetterTags.tt, 8)
    .set(TonalLetterTags.kk, 8)
    .set(TonalLetterTags.hh, 8);

  const tia = tonalInflectionAnalyzer;
  const ms1 = tia.morphAnalyze(input, new TonalCombiningForms());
  const items = ms1.map(it =>
    mapTonal.has(it.allomorph.tonal.toString())
      ? mapTonal.get(it.allomorph.tonal.toString())
      : mapFinal.get(it.allomorph.toString())
        ? mapFinal.get(it.allomorph.toString())
        : 1
  );

  const numArray = extractTones(ms1.map(it => it.syllable.literal).join(''));

  const words = [
    'chongwthaiwgiy',
    'phannyphannykiurw',
    'angfangwangx',
    'siurfsiurzsiur',
    'liyleykiurw',
  ];

  return (
    <div>
      <label>
        拍羅馬字, 輸出聲調模式
        <br />
        <input type="text" list="entries" onChange={handleChange} />
      </label>
      <datalist id="entries">
        {words.map(it => (
          <option key={it} value={it} />
        ))}
      </datalist>
      {items}
      <br/>
      {numArray.getToneNumbers()}
    </div>
  );
}

export default TonePatternPage;
