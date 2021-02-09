import { useState } from 'react';
import {
  tonalInflectionAnalyzer,
  TonalLetterTags,
  TonalDesinenceInflection,
  getToneEndingNumbersTwo,
  getToneEndingNumbersThree,
  getToneEndingNumber,
} from 'taipa';

function TonePatternWordsPage() {
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
  let tokens: string[] = [];
  if (input) {
    tokens = input.split(' ');
  }
  let items: (number | undefined)[] = [];
  if (tokens.length > 0) {
    const ls1 = tokens.map(it =>
      tia.lexAnalyze(it, new TonalDesinenceInflection())
    );
    items = ls1.map(it =>
      mapTonal.has(it.getInflectionalEnding().toString())
        ? mapTonal.get(it.getInflectionalEnding().toString())
        : mapFinal.has(it.getAllomorphicEnding().toString())
          ? mapFinal.get(it.getAllomorphicEnding().toString())
          : 1
    );
  }

  let numArray: number [] = [];
  if(tokens.length == 1) {
    numArray.push(getToneEndingNumber(tokens[0]));
  } else if(tokens.length == 2) {
    numArray = getToneEndingNumbersTwo(tokens[0], tokens[1]);
  } else if(tokens.length == 3) {
    numArray = getToneEndingNumbersThree(tokens[0], tokens[1], tokens[2]);
  } else if(tokens.length >= 4) {
    tokens.map(it => numArray.push(getToneEndingNumber(it)));
  }

  const phrases = [
    'ciet tngh',
    'hoz goaz',
    'kongy aw',
    'giurx ez',
    'chongx cut khih',
    'chau laiz chau khiw',
  ];

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
      <br/>
      {items}
      <br/>
      {numArray}
    </div>
  );
}

export default TonePatternWordsPage;
