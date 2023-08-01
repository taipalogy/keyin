import { useState } from 'react';
import { getSyllabograms } from '../ime/syllabograms';
import CopyToClipBoard from 'react-copy-to-clipboard';

function MultiwordinputPage() {
  const [input, setInput] = useState('');

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  const handleClear = () => {
    setInput('');
  };

  const separator: RegExp = /[ ]+/;
  const tokens: string[] = input.split(separator);
  const syllabograms: string[] = [];
  tokens.forEach((val) => syllabograms.push(getSyllabograms(val).join('')));

  return (
    <div style={{ fontFamily: 'IBM Plex Mono', fontSize: 36 }}>
      拍羅馬字, 輸出文字
      <label>
        <br />
        <input
          type="text"
          value={input}
          onChange={handleChange}
          style={{ fontFamily: 'IBM Plex Mono', fontSize: 36 }}
        />
      </label>
      <button onClick={handleClear}>Clear</button>
      <br />
      {syllabograms}
      <br />
      <CopyToClipBoard text={syllabograms.join('')}>
        <button
          disabled={syllabograms.join('') === ''}
          // onClick={handleClickButton}
        >
          Copy
        </button>
      </CopyToClipBoard>
    </div>
  );
}

export default MultiwordinputPage;
