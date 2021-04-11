import { useState } from 'react';
import { Client } from 'taipa';

const spanStyle = {};

const rubiStyle = {
  backgroundColor: 'papayawhip',
  fontSize: '350%',
  // rubyOverhang: 'auto',
  // display: 'inline',
  // verticalAlign: 'middle',
  // writingMode: 'vertical-rl' as 'vertical-rl',
  // rubyPosition: 'over' as 'over',

  // text: 'mixed',
};

const rtStyle = {};

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
          天<rt style={rtStyle}>{seqs[0]}</rt>
        </ruby>
      </span>
    </div>
  );
}

export default FuriganaPage;
