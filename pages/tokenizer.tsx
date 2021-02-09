import { Client, getLatinSyllableCompositions, PositionalLetter } from 'taipa';
import { useState } from 'react';

function TokenizerPage() {
  const [input, setInput] = useState('');

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  const letterSeqs: PositionalLetter[][][] = getLatinSyllableCompositions(input);
  const stringSeqs = letterSeqs.map(x =>
    x.map(y => y.map(z => z.toString()).join(''))
  );
  const possibleTokens = stringSeqs.map(x =>
    x.filter((v, i, a) => i == a.length - 1)
  );
  const joinedTokens = possibleTokens.join(' ');

  const cli = new Client();

  const taTonals = possibleTokens.map(x => x.map(y => cli.processTonal(y)));
  const taikanaSeqs = taTonals.map(x =>
    x.map(y => y.blockSequences.filter(x => x.length > 0))
  );

  return (
    <div>
      羅馬字 syllable tokenizer
      <label>
        <br />
        <input type="text" value={input} onChange={handleChange} />
      </label>
      <br />
      {joinedTokens}
      <br />
      taikana
      {taikanaSeqs.map(x => x.map(y => y.map(z => <li> {z} </li>)))}
    </div>
  );
}

export default TokenizerPage;
