import { Client } from 'taipa';
import { useState } from 'react';
import CopyToClipBoard from 'react-copy-to-clipboard';
import { getSyllabograms } from '../ime/twkana';

function InputMethodPage() {
  const [input, setInput] = useState('');

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  const tokens: string[] = [];

  /*
  const matchArr = input.match(/\w+/g);
  if (matchArr) {
    matchArr.filter((it) => it != undefined).map((it) => tokens.push(it));
  }

  const cli = new Client();
  const tas = tokens.map((it) => cli.processTonal(it));

  const listOfSeqs = tas.map((it) =>
    it.blockSequences.filter((it) => it.length > 0)
  );

  const textTaikana = listOfSeqs.map((y) => y[0]).join('');
*/

  const textTaikana = getSyllabograms(input);

  return (
    <div style={{ fontFamily: 'IBM Plex Mono', fontSize: 16 }}>
      拍羅馬字, 輸出文字
      <label>
        <br />
        <input
          type="text"
          value={input}
          onChange={handleChange}
          style={{ fontFamily: 'IBM Plex Mono', fontSize: 16 }}
        />
      </label>
      <br />
      <li>{textTaikana}</li>
      <CopyToClipBoard text={textTaikana}>
        <button
          disabled={textTaikana === ''}
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
