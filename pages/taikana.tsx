import { Client } from 'taipa';
import { useState } from 'react';
import CopyToClipBoard from 'react-copy-to-clipboard';

const cellStyle = {
  backgroundColor: 'papayawhip',
  border: '1px solid white',
  color: 'black',
  // fontFamily: 'Monaco',
  // fontSize: 24,
  columnWidth: 35,
  rowHeight: 20,
  backgroundColorAlphabet: 'mistyrose',
};

function TaiKanaPage() {
  const [input, setInput] = useState('');
  // const [openTip, setOpenTip] = useState<boolean>(false);

  const tokens: string[] = [];

  const matchArr = input.match(/\w+/g);
  if (matchArr) {
    matchArr.filter((it) => it != undefined).map((it) => tokens.push(it));
  }

  const cli = new Client();
  const tas = tokens.map((it) => cli.processTonal(it));
  const listOfSeqs = tas.map((it) =>
    it.blockSequences.filter((it) => it.length > 0)
  );

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  /*
  const handleCloseTip = (): void => {
    setOpenTip(false);
  };

  const handleClickButton = (): void => {
    setOpenTip(true);
  };
*/

  const textTaikana = listOfSeqs.map((it) => it[0]).join('');

  return (
    <div style={{ fontFamily: 'IBM Plex Mono', fontSize: 36 }}>
      拍羅馬字, 輸出台灣語假名
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
      {listOfSeqs.map((x) => (
        <li>
          {x.length == 0
            ? ''
            : x.length == 1
            ? x[0]
            : x.length == 2
            ? x[0] + ', ' + x[1]
            : ''}
        </li>
      ))}
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
    </div>
  );
}

export default TaiKanaPage;
