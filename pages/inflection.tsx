import { inflectDesinence } from 'taipa';
import { useState } from 'react';
import { getSyllabograms } from '../ime/syllabograms';

function InflectionPage() {
  const [input, setInput] = useState('');

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  const lexeme = inflectDesinence(input);
  const forms: string[] = [];

  lexeme.getForms().map((v) => forms.push(v.literal));

  const syllabograms: string[] = [];

  forms.length > 0
    ? forms.forEach((f) => syllabograms.push(getSyllabograms(f).join('')))
    : [];

  return (
    <div style={{ fontFamily: 'IBM Plex Mono', fontSize: 36 }}>
      拍羅馬字, 輸出屈折形：
      <label>
        <br />
        <input
          type="text"
          value={input}
          onChange={handleChange}
          style={{ fontFamily: 'IBM Plex Mono', fontSize: 36 }}
        />{' '}
      </label>
      {forms.map((frm) => (
        <li> {frm} </li>
      ))}
      <br />
      {syllabograms.map((grm) => (
        <li>{grm}</li>
      ))}
    </div>
  );
}

export default InflectionPage;
