import { useState } from 'react';
import CopyToClipBoard from 'react-copy-to-clipboard';
import { getSyllabograms } from '../ime/syllabograms';
import { getLogograms } from '../ime/logograms';

function CandidatePage() {
  // word input
  const [input, setInput] = useState('');

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  // clear input
  const handleClear = () => {
    setInput('');
  };

  // radio buttons
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (
    changeEvent: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedOption(changeEvent.target.value);
  };

  // candidates
  const [items, setItems] = useState([
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 },
  ]);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const handleCycle = () => {
    const index = items.indexOf(selectedItem);
    setSelectedItem(items[(index + 1) % items.length]);
  };

  const syllabograms: string[] = getSyllabograms(input);
  const logograms: string[][][] = getLogograms(input);

  const noRuby: string[] = syllabograms.map((syl, idx, arr) => {
    const sliced = syl.slice(1);
    if (logograms[idx] && logograms[idx][0])
      return logograms[idx][0][0] + sliced;
    else return syl;
  });

  return (
    <div style={{ fontFamily: 'IBM Plex Mono', fontSize: 36 }}>
      拍羅馬字, 輸出文字
      <label>
        <br />
        <input
          type="text"
          value={input}
          onChange={handleChange}
          style={{ fontFamily: 'IBM Plex Mono', fontSize: 36 }}
        />
      </label>
      <button onClick={handleClear}>Clear</button>
      <br />
      <li>{syllabograms.join('')}</li>
      <li>{syllabograms.map((it) => it + ',')}</li>
      <CopyToClipBoard text={syllabograms.join('')}>
        <button disabled={syllabograms.join('') === ''}>Copy</button>
      </CopyToClipBoard>
      <br />
      {/* The logograms for both combining form and uncombining form. */}
      <li>
        {syllabograms.map((val, idx, arr) => (
          <li>
            {val +
              ':' +
              (logograms[idx] ? logograms[idx].map((it) => it) : '[]') +
              '.'}
          </li>
        ))}
      </li>
      <CopyToClipBoard text={logograms.join('.')}>
        <button disabled={logograms.join('') === ''}>Copy</button>
      </CopyToClipBoard>
      <br />
      <li>{noRuby}</li>
      <CopyToClipBoard text={noRuby.join('')}>
        <button disabled={noRuby.join('') === ''}>Copy</button>
      </CopyToClipBoard>
      <br />
      <form>
        {syllabograms.map((val, idx) => (
          <div>
            <label>
              <input
                type="radio"
                value={'option' + idx}
                checked={selectedOption === 'option' + idx}
                onChange={handleOptionChange}
              />
              {val + logograms[idx] ? logograms[idx].map((it) => it) : '[]'}
              option{idx}
            </label>
          </div>
        ))}
      </form>
      <br />
      <div>
        <button onClick={handleCycle}>Cycle Items</button>
        <ul>
          {items.map((item) => (
            <li key={item.value}>
              <button
                style={{
                  fontWeight: item === selectedItem ? 'bold' : 'normal',
                }}
                onClick={() => setSelectedItem(item)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CandidatePage;
