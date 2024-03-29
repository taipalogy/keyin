import { useState } from 'react';
import CopyToClipBoard from 'react-copy-to-clipboard';
import { getSyllabograms } from '../ime/syllabograms';
import { getLogograms } from '../ime/logograms';

// hanji selections
const selections: Array<string> = new Array<string>();
let currentSyllable: number = -1;

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
  const [selectedSylOption, setSelectedOption] = useState<string>();

  // items. candidates
  const [selectedCandItem, setSelectedItem] = useState<{
    label: string;
    value: number;
  }>();

  // candidates
  const syllabograms: string[] = getSyllabograms(input);
  const logograms: string[][][] = getLogograms(input);
  let incrementor: number = 0;

  const candidates: { label: string; value: number }[] = [];

  if (logograms.length > 0 && Number(selectedSylOption) >= 0) {
    logograms[Number(selectedSylOption)].flatMap((tones) =>
      tones.map((lggrm) =>
        candidates.push({ label: lggrm, value: incrementor++ })
      )
    );
  }
  console.log(
    'candidates>' +
      candidates.map((elem) => elem.value + ',' + elem.label + '.')
  );
  console.log('logograms>' + logograms);
  console.log(
    'all logograms for this selected syllable>' +
      logograms[Number(selectedSylOption)]
  );

  const handleOptionChange = (
    changeEvent: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedOption(changeEvent.target.value);
  };

  console.log('selected syllable option>' + selectedSylOption);
  console.log(
    'selectedItem>' + selectedCandItem?.label + selectedCandItem?.value
  );
  const selectedSyllable: number = selectedSylOption
    ? Number(selectedSylOption)
    : 0;
  const selectedHanji: number = selectedCandItem?.value
    ? selectedCandItem?.value
    : 0;
  if (candidates[selectedHanji] && currentSyllable == selectedSyllable) {
    selections[selectedSyllable] = candidates[selectedHanji].label;
  }
  currentSyllable = selectedSyllable;
  console.log(selections);

  const noRuby: string[] = syllabograms.map((syl, idx, arr) => {
    const sliced = syl.slice(1);
    if (logograms[idx] && logograms[idx][0]) {
      return logograms[idx][0][0] + sliced;
    } else return syl;
  });

  const noRubyHanjiSelected = noRuby.map((syl, idx) =>
    selections[idx] ? selections[idx] + syl.slice(1) : syl
  );

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
      <div>
        {syllabograms.map((val, idx) => (
          <li>
            <label>
              <input
                type="radio"
                value={idx}
                checked={selectedSylOption === idx.toString()}
                onChange={handleOptionChange}
              />
              {logograms[idx] ? val + ':' + logograms[idx].map((it) => it) : ''}
            </label>
          </li>
        ))}
        {selectedSylOption && <p>You selected syllable {selectedSylOption}!</p>}
      </div>
      <hr />
      <div>
        <ul>
          {candidates.map((cand) => (
            <li key={cand.value}>
              <button
                style={{
                  fontWeight: cand === selectedCandItem ? 'bold' : 'normal',
                  fontSize: '36px',
                }}
                onClick={() => setSelectedItem(cand)}
              >
                {cand.label}
              </button>
            </li>
          ))}
        </ul>
        {selectedCandItem && <p>You have selected {selectedCandItem.label}</p>}
      </div>
      <hr />
      <div>
        {noRubyHanjiSelected}
        <CopyToClipBoard text={noRubyHanjiSelected.map((syl) => syl).join('')}>
          <button
            disabled={
              noRubyHanjiSelected.map((syl) => syl).join('').length == 0
            }
          >
            Copy
          </button>
        </CopyToClipBoard>
        {selections.length > 0 && (
          <p> You have selected {selections.map((s) => s)}.</p>
        )}
      </div>
    </div>
  );
}

export default CandidatePage;
