import { useState } from 'react';
import { Highlighter } from '../src/highlight';

function HintPage() {
  const [input, setInput] = useState('');

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  const words = [
    { index: 0, hanyjiz: '', lurzmafjiz: 'hoefcia' },
    { index: 1, hanyjiz: '', lurzmafjiz: 'hefcia' },
  ];
  const hp = new Highlighter(words);
  const hlt = hp.getTarget(input, 0);

  return (
    <div>
      拍羅馬字, 顯示 hint
      <label>
        <br />
        <input type="text" list="words" value={input} onChange={handleChange} />
      </label>
      {hp.targets[0]}, {hp.tails[0]}
      <br />
      {hp.literals[0]}
      <br />
      {hlt.posTarget}
      <br />
      {hlt.posTarget < hp.literals[0].length ? hp.hints[0].text : ''}
    </div>
  );
}

export default HintPage;
