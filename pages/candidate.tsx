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

  // radio buttons. syllables
  const [selectedOption, setSelectedOption] = useState<string>();

  // items. candidates
  // const [items, setItems] = useState([{ label: '', value: 0 }]);
  const [selectedItem, setSelectedItem] = useState<{
    label: string;
    value: number;
  }>();

  // candidates
  const syllabograms: string[] = getSyllabograms(input);
  const logograms: string[][][] = getLogograms(input);
  let incrementor: number = 0;

  console.log('----------------------------------------');
  const candidates: { label: string; value: number }[] = [];

  console.log(
    'candidates>' +
      candidates.map((elem) => elem.label + ',' + elem.value + '.')
  );
  if (logograms.length > 0 && Number(selectedOption) >= 0) {
    logograms[Number(selectedOption)].flatMap((tones) =>
      tones.map((lggrm) =>
        candidates.push({ label: lggrm, value: incrementor++ })
      )
    );
  }
  console.log('logograms>' + logograms);
  console.log(
    'logograms[Number(selectedOption)]>' + logograms[Number(selectedOption)]
  );

  const handleOptionChange = (
    changeEvent: React.ChangeEvent<HTMLInputElement>
  ) => {
    // console.log(
    //   'selectedOption>' +
    //     Number(selectedOption) +
    //     'changeEvent>' +
    //     changeEvent.target.value
    // );
    setSelectedOption(changeEvent.target.value);
    // console.log('selectedOption>' + Number(selectedOption));

    // console.log(
    //   'candidates>' +
    //     candidates.map((elem) => elem.label + ',' + elem.value + '.')
    // );
    // console.log('items>' + items);
    // setItems(candidates);
    // console.log('items>' + items);
  };

  const handleCycle = () => {
    // const index = items.indexOf(selectedItem);
    // setSelectedItem(items[(index + 1) % items.length]);
  };

  console.log('selectedOption>' + selectedOption);
  console.log('selectedItem>' + selectedItem?.label + selectedItem?.value);
  const selectedValue: number = selectedItem?.value ? selectedItem?.value : 0;
  const noRuby: string[] = syllabograms.map((syl, idx, arr) => {
    const sliced = syl.slice(1);
    // if (logograms[idx] && logograms[idx][0])
    // return logograms[idx][0][0] + sliced;
    if (candidates && candidates[selectedValue]) {
      return candidates[selectedValue].label + sliced;
    } else return syl;
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
      <div>
        {syllabograms.map((val, idx) => (
          <li>
            <label>
              <input
                type="radio"
                value={idx}
                checked={selectedOption === idx.toString()}
                onChange={handleOptionChange}
              />
              {val + logograms[idx] ? logograms[idx].map((it) => it) : ''}
              syllable{idx}
            </label>
          </li>
        ))}
        {selectedOption && <p>You selected syllable {selectedOption}!</p>}
        {selectedOption &&
          logograms[Number(selectedOption)].map((baseForms, inx, arr) => (
            <li>
              {baseForms.map((frm) => (
                <button>{frm}</button>
              ))}
            </li>
          ))}
      </div>
      <br />
      <div>
        {/* <button onClick={handleCycle}>Cycle Items</button> */}
        {selectedItem && <p>You have selected {selectedItem.label}</p>}
        <ul>
          {candidates.map((cand) => (
            <li key={cand.value}>
              <button
                style={{
                  fontWeight: cand === selectedItem ? 'bold' : 'normal',
                }}
                onClick={() => setSelectedItem(cand)}
              >
                {cand.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CandidatePage;
