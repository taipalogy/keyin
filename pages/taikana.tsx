import { Client } from 'taipa';
import { useState } from 'react';

function TaiKanaPage() {
  const [input, setInput] = useState('');

  const tokens: string[] = [];

  const matchArr = input.match(/\w+/g);
  if (matchArr) {
    matchArr.filter(it => it != undefined).map(it => tokens.push(it));
  }

  const cli = new Client();
  const tas = tokens.map(it => cli.processTonal(it));
  const listOfSeqs = tas.map(it =>
    it.blockSequences.filter(it => it.length > 0)
  );

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  return (
    <div>
      拍羅馬字, 輸出台灣語假名
      <label>
        <br />
        <input type="text" value={input} onChange={handleChange} />
      </label>
      {listOfSeqs.map(x => (
        <li> {x} </li>
      ))}
      <li>{listOfSeqs.map(y => y[0]).join('')}</li>
    </div>
  );
}

export default TaiKanaPage;
