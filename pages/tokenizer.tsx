import { Client } from 'taipa';
import { useState } from 'react';

function TokenizerPage() {
  const [input, setInput] = useState('');

  const cli = new Client();
  const taTonal = cli.processTonal(input);
  const taikanaSeqs = taTonal.blockSequences.filter(x => x.length > 0);
  const taKana = cli.processKana(input);
  const kanaSeqs = taKana.blockSequences.filter(x => x.length > 0);


  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  return (
    <div>
      羅馬字 tokenizer
      <label>
        <br />
        <input type="text" value={input} onChange={handleChange} />
      </label>
      {taikanaSeqs.map(x => (
        <li> {x + '(taikana)'} </li>
      ))}
      {kanaSeqs.map(x => (
        <li> {x + ' (kana)'} </li>
      ))}
    </div>
  );
}

export default TokenizerPage;
