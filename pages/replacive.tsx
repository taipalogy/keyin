import { useState } from 'react';
import { inflectTransfix } from 'taipa';

function ReplacivePage() {
  const [input, setInput] = useState('');

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  const words = [
    'chitwpaiy',
    'chitwkua',
    'puannytang',
    'tangzsixay',
    'tamwpurhxay',
  ];

  const lx = inflectTransfix(input);
  let items: string[] = [];
  if (words.includes(input)) {
    items = lx.getForms().map((x) => x.literal);
  }

  return (
    <div style={{ fontFamily: 'IBM Plex Mono', fontSize: 36 }}>
      <label>
        拍羅馬字, 輸出 inflected form
        <br />
        <input
          type="text"
          list="entries"
          onChange={handleChange}
          style={{ fontFamily: 'IBM Plex Mono', fontSize: 36 }}
        />
      </label>
      <datalist id="entries">
        {words.map((item) => (
          <option key={item} value={item} />
        ))}
      </datalist>
      {items}
    </div>
  );
}

export default ReplacivePage;
