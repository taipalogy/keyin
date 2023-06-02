import { useState } from 'react';
import CopyToClipBoard from 'react-copy-to-clipboard';
import { getSyllabograms } from '../ime/syllabograms';
import { getLogograms } from '../ime/logograms';

function InputMethodPage() {
  const [input, setInput] = useState('');

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  const syllabograms: string[] = getSyllabograms(input);
  const logograms: string[] = getLogograms(input);

  const karacters: string[] = syllabograms.map((syl, idx, arr) => {
    const sli = syl.slice(1);
    if (logograms[idx]) return logograms[idx] + sli;
    else return syl;
  });

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
      <li>{syllabograms.map((it) => it + ',')}</li>
      <CopyToClipBoard text={syllabograms.join('')}>
        <button
          disabled={syllabograms.join('') === ''}
          // onClick={handleClickButton}
        >
          Copy
        </button>
      </CopyToClipBoard>
      <br />
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
      <li>{karacters}</li>
      <CopyToClipBoard text={karacters.join('')}>
        <button
          disabled={karacters.join('') === ''}
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
