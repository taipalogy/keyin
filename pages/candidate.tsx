import { useState } from 'react';
import CopyToClipBoard from 'react-copy-to-clipboard';
import { getSyllabograms } from '../ime/syllabograms';
import { getLogograms } from '../ime/logograms';

// hanji selections
const selections: Array<string> = new Array<string>();

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
  const [selectedItem, setSelectedItem] = useState<{
    label: string;
    value: number;
  }>();

  // candidates
  const syllabograms: string[] = getSyllabograms(input);
  const logograms: string[][][] = getLogograms(input);
  let incrementor: number = 0;

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
    setSelectedOption(changeEvent.target.value);
  };

  console.log('selectedOption>' + selectedOption);
  console.log('selectedItem>' + selectedItem?.label + selectedItem?.value);
  const selectedSyllable: number = selectedOption ? Number(selectedOption) : 0;
  const selectedHanji: number = selectedItem?.value ? selectedItem?.value : 0;
  if (candidates[selectedHanji]) {
    selections[selectedSyllable] = candidates[selectedHanji].label;
  }
  console.log(selections);

  const noRuby: string[] = syllabograms.map((syl, idx, arr) => {
    const sliced = syl.slice(1);
    if (logograms[idx] && logograms[idx][0]) {
      return logograms[idx][0][0] + sliced;
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
      </div>
      <br />
      <div>
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
        {
          <p>
            You have selected {selections.map((s) => s)}.{' '}
            {noRuby.map((syl, idx) =>
              selections[idx] ? selections[idx] + syl.slice(1) : syl
            )}
          </p>
        }
      </div>
    </div>
  );
}

export default CandidatePage;
