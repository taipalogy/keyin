import { useState } from 'react';
import { getSyllabograms } from '../ime/syllabograms';
import { TonalSpellingTags, analyzeIntoSyllables } from 'taipa';

function RimePage() {
  const [input, setInput] = useState('');

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  const syllables = analyzeIntoSyllables(input);
  const vwls: string[] = [];
  let target = '';
  if (syllables.length == 1) {
    target = getSyllabograms(syllables[0].map((it) => it[0]).join('')).join('');
    syllables[0].map((it) => {
      if (it[1] === TonalSpellingTags.vowel) vwls.push(it[0]);
    });
  }

  const rimes = getSyllabograms(vwls[vwls.length - 1]);

  return (
    <div style={{ fontFamily: 'IBM Plex Mono', fontSize: 36 }}>
      拍羅馬字, 輸出韻
      <label>
        <br />
        <input
          type="text"
          value={input}
          onChange={handleChange}
          style={{ fontFamily: 'IBM Plex Mono', fontSize: 36 }}
        />
      </label>
      <br />
      input:{target}
      <br />
      rimes:{rimes}
    </div>
  );
}

export default RimePage;
