import { Client } from 'taipa';
import { useState } from 'react';

function TaiKanaPage() {
  const [input, setInput] = useState('');
  const cli = new Client();
  const ta = cli.processTonal(input);
  const seqs = ta.blockSequences.filter(x => x.length > 0);

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
      {seqs.map(x => (
        <li> {x} </li>
      ))}
    </div>
  );
}

export default TaiKanaPage;
