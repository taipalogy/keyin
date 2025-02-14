import { useState } from 'react';

const containerStyle = {
  padding: '20px',
  display: 'flex',
  flexDirection: 'column' as const,
  minHeight: '100vh'
};

const displayContainerStyle = {
  display: 'flex',
  gap: '40px',
  marginTop: '20px'
};

const verticalTextStyle = {
  writingMode: 'vertical-rl' as const,
  textOrientation: 'mixed' as const,
  minHeight: '400px',
  fontSize: '64px',
  border: '1px solid #eee',
  padding: '20px',
  backgroundColor: '#fafafa'
};

const inputStyle = {
  padding: '8px',
  margin: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '16px',
  width: '200px'
};

function OrientationPage() {
  const [kanji, setKanji] = useState('');
  const [furigana, setFurigana] = useState('');
  const [entries, setEntries] = useState<Array<{kanji: string, furigana: string}>>([]);

  const handleKanjiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKanji(e.target.value);
  };

  const handleFuriganaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFurigana(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (kanji && furigana) {
      setEntries([...entries, { kanji, furigana }]);
      setKanji('');
      setFurigana('');
    }
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            漢字:
            <input
              type="text"
              value={kanji}
              onChange={handleKanjiChange}
              style={inputStyle}
              placeholder="Enter hanji (e.g., 事)"
            />
          </label>
        </div>
        <div>
          <label>
            フリガナ:
            <input
              type="text"
              value={furigana}
              onChange={handleFuriganaChange}
              style={inputStyle}
              placeholder="Enter furigana (e.g., タィ³チ³)"
            />
          </label>
        </div>
        <button 
          type="submit" 
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          Add Entry
        </button>
      </form>

      <div style={displayContainerStyle}>
        {/* User Input Section */}
        <div style={{...verticalTextStyle, flex: 1}}>
          <h3 style={{marginBottom: '1em'}}>Your Input</h3>
          {entries.length > 0 ? (
            entries.map((entry, index) => (
              <div key={index} style={{ marginLeft: '20px' }}>
                <ruby>
                  {entry.kanji}
                  <rt style={{ fontSize: '0.4em' }}>{entry.furigana}</rt>
                </ruby>
              </div>
            ))
          ) : (
            <div style={{ color: '#888' }}>Entries will appear here</div>
          )}
        </div>

        {/* Rashomon Reference Section */}
        <div style={{...verticalTextStyle, flex: 1}}>
          <h3 style={{marginBottom: '1em'}}>Reference</h3>
          <div>
            <ruby>事<rt>タィ³チ³</rt></ruby>，
            <ruby>大條<rt>뚜ァ³띠ァゥ⁵</rt></ruby>，
            <ruby>發生<rt>ファッ¹シㆁ</rt></ruby>，
            <ruby>テㇰ<rt>的</rt></ruby>，
            <ruby>事<rt>こと</rt></ruby>，
            <ruby>羅生門<rt>らしょうもん</rt></ruby>，
            <ruby>時代<rt>시대</rt></ruby>，
            <ruby>文化<rt>문화</rt></ruby>，
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrientationPage;
