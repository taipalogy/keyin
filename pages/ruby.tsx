import { useState } from 'react';
import { Client } from 'taipa';

const spanStyle = {};

const rubyStyle = {
  backgroundColor: 'papayawhip',
  fontSize: '450%',
  fontFamily: 'IBM Plex Mono',
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
  backgroundColor: 'plum',
  fontSize: '125%',
  textAlign: 'center' as 'center',
  writingMode: 'initial' as 'initial',
};

function RubyPage() {
  const [input, setInput] = useState('');
  const cli = new Client();
  const ta = cli.processTonal(input);
  const seqs = ta.blockSequences.filter(x => x.length > 0);

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  return (
    <div>
      拍 ruby
      <label>
        <br />
        <input type="text" value={input} onChange={handleChange} />
      </label>
      <br />
      <span style={spanStyle}>
        <ruby style={rubyStyle}>
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

export default RubyPage;
