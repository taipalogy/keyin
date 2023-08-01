import { useState } from 'react';
import CopyToClipBoard from 'react-copy-to-clipboard';
import { getSyllabograms } from '../ime/syllabograms';
import { getLogograms } from '../ime/logograms';
import { getWords } from '../ime/words';

function InputMethodPage() {
  const [input, setInput] = useState('');

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  const syllabograms: string[] = getSyllabograms(input);
  const logograms: string[][][] = getLogograms(input);
  const words: string[] = getWords(input);

  const karacters: string[] = syllabograms.map((syl, idx, arr) => {
    const sli = syl.slice(1);
    if (logograms[idx] && logograms[idx][0]) return logograms[idx][0][0] + sli;
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
      <li>{syllabograms.join('')}</li>
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
      <li>
        {syllabograms.map(
          (val, idx, arr) =>
            val +
            ':' +
            (logograms[idx] ? logograms[idx].map((it) => it) : '[]') +
            '.'
        )}
      </li>
      <CopyToClipBoard text={logograms.join('.')}>
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
      <li>{words}</li>
      <CopyToClipBoard text={words.join('')}>
        <button
          disabled={words.join('') === ''}
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
