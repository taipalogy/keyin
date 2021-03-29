import { useState } from 'react';
import { Client } from 'taipa';

const spanStyle = {
  fontFamily: 'IBM Plex Mono',
  fontSize: 72,
  width: 180,
  color: 'black',
};

const rubiStyle = {
  backgroundColor: 'papayawhip',
  rubyPosition: 'under' as 'under',
  rubyMerge: 'separate' as 'separate',
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
      <span>
        <ruby style={spanStyle}>
          <ruby>
            天<rp>(</rp>
            <rt style={rubiStyle}>{seqs[0]}</rt>
            <rp>)</rp>
          </ruby>
          <rp>（</rp>
          <rt>{input}</rt>
          <rp>）</rp>
        </ruby>
      </span>
    </div>
  );
}

export default FuriganaPage;
