import { useState } from 'react';
import CopyToClipBoard from 'react-copy-to-clipboard';
import { getSyllabograms } from '../ime/syllabograms';
import { getIdeograms } from '../ime/ideograms';

function InputMethodPage() {
  const [input, setInput] = useState('');

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  const syllabograms = getSyllabograms(input);
  const ideograms = getIdeograms(input);

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
      <li>{ideograms}</li>
      <CopyToClipBoard text={syllabograms}>
        <button
          disabled={syllabograms === ''}
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
