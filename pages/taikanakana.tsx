import { Client } from 'taipa';
import { useState } from 'react';

let previous: string[] = [];
let previousLurmaji: string = '';
let sliced: string = '';
let slicedSeqs: string[] = [];

function TaiKanaKanaPage() {
  const [input, setInput] = useState('');

  const cli = new Client();
  const tonalTa = cli.processTonal(input);
  const taikanaSeqs = tonalTa.blockSequences.filter(x => x.length > 0);
  const kanaTa = cli.processKana(input);
  const kanaSeqs = kanaTa.blockSequences.filter(x => x.length > 0);

  if (input.length == 0) {
    slicedSeqs = [];
    sliced = '';
    previous = [];
  }
  if (taikanaSeqs.length > 0) {
    previous = taikanaSeqs;
    previousLurmaji = input;
  } else if (taikanaSeqs.length == 0) {
    sliced = input.slice(previousLurmaji.length);
    const slicedTa = cli.processTonal(sliced);
    slicedSeqs = slicedTa.blockSequences.filter(x => x.length > 0);
  }
  
  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  return (
    <div>
      拍羅馬字, 輸出台灣語假名甲假名
      <label>
        <br />
        <input type="text" value={input} onChange={handleChange} />
      </label>
      {taikanaSeqs.map(x => (
        <li> {x} </li>
      ))}
      {kanaSeqs.map(x => (
        <li> {x} </li>
      ))}
      {previous.map(x => (
        <li> {x + slicedSeqs} </li>
      ))}
    </div>
  );
}

export default TaiKanaKanaPage;
