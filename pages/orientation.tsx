import { useState } from 'react';
import { Client } from 'taipa';

const rubyStyle = {
  backgroundColor: 'papayawhip',
  fontFamily: 'IBM Plex Mono',
  fontSize: '450%',
  writingMode: 'vertical-rl' as 'vertical-rl',
  // -webkit-writing-mode: vertical-rl;
  // -moz-writing-mode: vertical-rl;
  textOrientation: 'upright' as 'upright',
};

const rtStyle = {
  backgroundColor: 'mistyrose',
  textAlign: 'center' as 'center',
  verticalAlign: 'middle',
};

const toneStyle = {
  backgroundColor: 'plum',
  textAlign: 'center' as 'center',
};

function OrientationPage() {
  const [input, setInput] = useState('');
  const cli = new Client();
  const ta = cli.processTonal(input);
  const seqs = ta.blockSequences.filter((x) => x.length > 0);

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
      <div>
        <ruby style={rubyStyle}>
          事
          <rt style={rtStyle}>
            <ruby>
              {seqs[0]}
              <rt style={toneStyle}></rt>
            </ruby>
          </rt>
        </ruby>
      </div>
      <div>
        <ruby style={rubyStyle}>
          事<rt style={rtStyle}>タィ³チ³</rt>
        </ruby>
        <ruby style={rubyStyle}>
          事<rt style={rtStyle}>スˉ</rt>
        </ruby>
      </div>
    </div>
  );
}

export default OrientationPage;
