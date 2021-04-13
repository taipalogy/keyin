import { useState } from 'react';
import { Client } from 'taipa';

const spanStyle = {};

const rubiStyle = {
  backgroundColor: 'papayawhip',
  fontSize: '450%',
};

const rtStyle = {
  backgroundColor: 'mistyrose',
  // fontSize: '125%',
  textAlign: 'center' as 'center',
  writingMode: 'vertical-rl' as 'vertical-rl',
  verticalAlign: 'middle',
  display: 'inline',
};

const toneStyle = {
  backgroundColor: 'lightskyblue',
  fontSize: '125%',
  textAlign: 'center' as 'center',
  writingMode: 'initial' as 'initial',
};

function FuriganaPage() {
  const [input, setInput] = useState('');
  const cli = new Client();
  const ta = cli.processTonal(input);
  const seqs = ta.blockSequences.filter(x => x.length > 0);

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  return (
    <div>
      拍 rubi
      <label>
        <br />
        <input type="text" value={input} onChange={handleChange} />
      </label>
      <br />
      <span style={spanStyle}>
        <ruby style={rubiStyle}>
          松
          <rt style={rtStyle}>
            <ruby>
              {seqs[0]}
              <rt style={toneStyle}>⟨</rt>
            </ruby>
          </rt>
        </ruby>
      </span>
    </div>
  );
}

export default FuriganaPage;
