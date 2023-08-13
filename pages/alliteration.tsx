import { useState } from 'react';
import { getSyllabograms } from '../ime/syllabograms';
import { analyzeIntoSequence, getSyllablesStart } from 'taipa';

function AlliterationPage() {
  const [input, setInput] = useState('');

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  const seq = analyzeIntoSequence(input);
  let firstLetter = '';
  if (seq.length > 0) {
    firstLetter = seq[0][0];
  }

  return (
    <div style={{ fontFamily: 'IBM Plex Mono', fontSize: 36 }}>
      拍羅馬字, 輸出頭韻
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
      頭文字:
      {firstLetter}
      <br />
      頭韻:
      {firstLetter.length > 0
        ? getSyllablesStart(firstLetter)
            .map((it) => getSyllabograms(it))
            .join(',')
        : ''}
    </div>
  );
}

export default AlliterationPage;
