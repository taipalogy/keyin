import { useState } from 'react';
import { inflectTransfix } from 'taipa';
import { getSyllabograms } from '../ime/syllabograms';

function TransfixInflectionPage() {
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

  const syllabograms: string[] = [];

  items.length > 0 ? syllabograms.push(getSyllabograms(items[0]).join('')) : '';

  return (
    <div style={{ fontFamily: 'IBM Plex Mono', fontSize: 36 }}>
      <label>
        拍羅馬字, 輸出單語个屈折形佫顯示貫通接辭个屈折
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
      {items}. {syllabograms}
    </div>
  );
}

export default TransfixInflectionPage;
