import { useState } from 'react';
import { HintProcessor, Group, Entry } from '../src/hint';

function HintPage() {
  const [input, setInput] = useState('');

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  const group = new Group();
  group.entries = [new Entry('hoefcia'), new Entry('hefcia')];
  const hp = new HintProcessor(group);
  const len = hp.getCurrentLen(input);

  return (
    <div>
      拍羅馬字, 顯示 hint
      <label>
        <br />
        <input type="text" list="words" value={input} onChange={handleChange} />
      </label>
      {hp.targets[hp.idx]}, {hp.tails[hp.idx]}
      <br />
      {hp.literals[hp.idx]}
      <br />
      {len}
      <br />
      {len < hp.literals[hp.idx].length ? hp.hints[hp.idx].hint : ''}
    </div>
  );
}

export default HintPage;
