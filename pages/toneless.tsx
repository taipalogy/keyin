import { useState } from 'react';
import { getSyllabograms } from '../ime/syllabograms';
import { TonalLetterTags, getSyllablesStart } from 'taipa';

function ToneLess() {
  const [input, setInput] = useState('');

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  const syllabograms: string[] = getSyllabograms(input);
  let toneless: string[] = [];

  // console.log(syllabograms[0]);
  let sliced = '';
  if (
    input[input.length - 1] === TonalLetterTags.y ||
    input[input.length - 1] === TonalLetterTags.w ||
    input[input.length - 1] === TonalLetterTags.x ||
    input[input.length - 1] === TonalLetterTags.z
  ) {
    sliced = syllabograms[0].slice(0, syllabograms[0].length - 1);
  }
  // console.log(sliced);

  return (
    <div style={{ fontFamily: 'IBM Plex Mono', fontSize: 36 }}>
      拍羅馬字, 輸出無聲調个一个音節
      <label>
        <br />
        <input
          type="text"
          value={input}
          onChange={handleChange}
          style={{ fontFamily: 'IBM Plex Mono', fontSize: 36 }}
        />
      </label>
      <br />
      toneless syllables:
      {input.length > 0
        ? getSyllablesStart(input)
            .filter(
              (val) =>
                val.length == input.length ||
                (val.length == input.length + 1 &&
                  (val[input.length] === TonalLetterTags.y ||
                    val[input.length] === TonalLetterTags.w ||
                    val[input.length] === TonalLetterTags.x ||
                    val[input.length] === TonalLetterTags.z))
            )
            .join(',')
        : ''}
      <br />
      <li>{sliced.length > 0 ? sliced : syllabograms[0]}</li>
    </div>
  );
}

export default ToneLess;
