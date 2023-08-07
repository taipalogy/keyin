import { useState } from 'react';
import { getSyllabograms } from '../ime/syllabograms';
import {
  TonalSpellingTags,
  analyzeIntoSyllables,
  getSyllablesEnd,
  getSyllablesInclude,
} from 'taipa';

function RimePage() {
  const [input, setInput] = useState('');

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  const syllables = analyzeIntoSyllables(input);
  const rime: string[] = [];
  let target = '';
  if (syllables.length == 1) {
    target = getSyllabograms(syllables[0].map((it) => it[0]).join('')).join('');
    syllables[0].map((it) => {
      if (it[1] !== TonalSpellingTags.initialConsonant) rime.push(it[0]);
    });
  }

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
      rime:
      {getSyllabograms(rime.length > 0 ? rime.join('') : '')} ({rime.join('')})
      <br />
      rimes:
      {rime.length > 0
        ? getSyllablesEnd(rime.join(''))
            .map((it) => getSyllabograms(it))
            .join(',')
        : ''}
    </div>
  );
}

export default RimePage;
