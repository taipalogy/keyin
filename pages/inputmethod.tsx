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

  const handleClear = () => {
    setInput('');
  };

  const syllabograms: string[] = getSyllabograms(input);
  const logograms: string[][][] = getLogograms(input);
  const words: string[] = getWords(input);

  const noRuby: string[] = syllabograms.map((syl, idx, arr) => {
    const sliced = syl.slice(1);
    if (logograms[idx] && logograms[idx][0])
      return logograms[idx][0][0] + sliced;
    else return syl;
  });

  const rubyHead: string[] = syllabograms.map((syl, idx, arr) => {
    const sliced = syl.slice(1);
    const substr = syl.substring(0, 1);
    if (logograms[idx] && logograms[idx][0])
      return (
        '<ruby>' +
        logograms[idx][0][0] +
        '<rt>' +
        substr +
        '</rt></ruby>' +
        sliced
      );
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
      <button onClick={handleClear}>Clear</button>
      <br />
      <li>{syllabograms.join('')}</li>
      <li>{syllabograms.map((it) => it + ',')}</li>
      <CopyToClipBoard text={syllabograms.join('')}>
        <button disabled={syllabograms.join('') === ''}>Copy</button>
      </CopyToClipBoard>
      <br />
      {/* The logograms for both combining form and uncombining form. */}
      <li>
        {syllabograms.map((val, idx, arr) => (
          <li>
            {val +
              ':' +
              (logograms[idx] ? logograms[idx].map((it) => it) : '[]') +
              '.'}
          </li>
        ))}
      </li>
      <CopyToClipBoard text={logograms.join('.')}>
        <button disabled={logograms.join('') === ''}>Copy</button>
      </CopyToClipBoard>
      <br />
      <li>{noRuby}</li>
      <CopyToClipBoard text={noRuby.join('')}>
        <button disabled={noRuby.join('') === ''}>Copy</button>
      </CopyToClipBoard>
      <br />
      <li>{rubyHead}</li>
      <CopyToClipBoard text={rubyHead.join('')}>
        <button disabled={rubyHead.join('') === ''}>Copy</button>
      </CopyToClipBoard>
      <br />
      <li>{words}</li>
      <CopyToClipBoard text={words.join('')}>
        <button disabled={words.join('') === ''}>Copy</button>
      </CopyToClipBoard>
      <br />
      {/* rubyWhole */}
      <li>
        {'<ruby>' + words + '<rt>' + syllabograms.join('') + '</rt></ruby>'}
      </li>
      <CopyToClipBoard
        text={
          '<ruby>' + words + '<rt>' + syllabograms.join('') + '</rt></ruby>'
        }
      >
        <button disabled={words.join('') === ''}>Copy</button>
      </CopyToClipBoard>
    </div>
  );
}

export default InputMethodPage;
