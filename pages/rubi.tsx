import { useState } from 'react';

const spanStyle = {
  fontFamily: 'IBM Plex Mono',
  fontSize: 72,
  width: 180,
  color: 'black',
};

const rubiStyle = {
  backgroundColor: 'papayawhip',
};

function FuriganaPage() {
  const [input, setInput] = useState('');

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
        <ruby>
          天<rt style={rubiStyle}>{input}</rt>
        </ruby>
      </span>
    </div>
  );
}

export default FuriganaPage;
