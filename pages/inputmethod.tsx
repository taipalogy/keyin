import { useState } from 'react';
import CopyToClipBoard from 'react-copy-to-clipboard';
import { getSyllabograms } from '../ime/syllabograms';
import { getLogograms } from '../ime/logograms';

function InputMethodPage() {
  const [input, setInput] = useState('');

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  const syllabograms = getSyllabograms(input);
  const logograms = getLogograms(input);

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
      <br />
      <li>{syllabograms}</li>
      <CopyToClipBoard text={syllabograms}>
        <button
          disabled={syllabograms === ''}
          // onClick={handleClickButton}
        >
          Copy
        </button>
      </CopyToClipBoard>
      <li>{logograms}</li>
      <CopyToClipBoard text={logograms.join('')}>
        <button
          disabled={logograms.join('') === ''}
          // onClick={handleClickButton}
        >
          Copy
        </button>
      </CopyToClipBoard>
      <br />
    </div>
  );
}

export default InputMethodPage;
