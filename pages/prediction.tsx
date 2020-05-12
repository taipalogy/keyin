import { useState } from 'react';
import { graphAnalyzeTonal, predict } from 'taipa';

function PredictionPage() {
  const [input, setInput] = useState('');

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  const gs = graphAnalyzeTonal(input);

  const tuples = predict(gs.map(x => x.letter).map(y => y.literal));

  return (
    <div>
      拍羅馬字, 輸出 prediction
      <label>
        <br />
        <input type="text" value={input} onChange={handleChange} />
      </label>
      <br />
      tuples
      {tuples.map(x => (
        <li>{x[0] + ', ' + x[1]}</li>
      ))}
    </div>
  );
}

export default PredictionPage;
