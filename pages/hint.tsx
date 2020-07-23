import { useState } from 'react';
import { Highlighter, Group, Entry } from '../src/highlight';

function HintPage() {
  const [input, setInput] = useState('');

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  const group = new Group();
  group.entries = [new Entry('hoefcia'), new Entry('hefcia')];
  const hp = new Highlighter(group);
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
      {hlt.posTarget < hp.literals[0].length ? hp.hints[0].hint : ''}
    </div>
  );
}

export default HintPage;
