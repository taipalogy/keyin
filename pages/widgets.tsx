import { Client } from 'taipa';
import { CSSProperties, useReducer, useState } from 'react';
import { Highlighter, Entry, Highlight } from '../src/highlight';
import { FixedSizeGrid, GridChildComponentProps } from 'react-window';

const wordsChang: Entry[] = [
  { index: 0, hanyjiz: '棕', lurzmafjiz: 'chang' },
  { index: 1, hanyjiz: '粽ハァ⤇', lurzmafjiz: 'changy' },
  { index: 2, hanyjiz: '粽', lurzmafjiz: 'changw' },
  { index: 3, hanyjiz: 'サ̅ㇰ', lurzmafjiz: 'chak' },
  { index: 4, hanyjiz: '欉', lurzmafjiz: 'changx' },
  { index: 5, hanyjiz: '棕簑', lurzmafjiz: 'changz' },
  { index: 6, hanyjiz: 'サ̅ㇰ⤇', lurzmafjiz: 'chakk' },
  { index: 7, hanyjiz: '昨昏', lurzmafjiz: 'changxx' },
];

const wordsItfditt = [
  {
    index: 0,
    hanyjiz: '一直',
    lurzmafjiz: 'itfditt',
  },
  { index: 1, hanyjiz: '', lurzmafjiz: 'itfditw' },
  { index: 2, hanyjiz: '', lurzmafjiz: 'itfditf' },
];

const wordsMizmix = [
  { index: 0, hanyjiz: '綿綿', lurzmafjiz: 'mizmix' },
  { index: 1, hanyjiz: '', lurzmafjiz: 'mixxmix' },
];

const sentence = ['hitf', 'chanz', 'daiwchiw', 'chinz', 'doaw', 'diaux'];
let currWord: number = 0;

const divStyle = {
  // workaround: https://github.com/cssinjs/jss/issues/1344
  display: 'flex',
  flexDirection: 'column' as 'column',
  alignItems: 'center',
  // backgroundColor: 'papayawhip',
  border: '1px solid silver',
  // color: 'black',
  fontFamily: 'IBM Plex Mono',
  // fontSize: 24,
  padding: '5px',
  width: '170px',
  color: 'black',
};

const divStyleFont = {
  fontFamily: 'IBM Plex Mono',
  color: 'black',
};

const divStyleTwoColumns = {
  border: '1px solid silver',
  fontFamily: 'IBM Plex Mono',
  padding: '5px',
  width: '365px',
  color: 'black',
};

const divStyleEightColumns = {
  border: '1px solid silver',
  fontFamily: 'IBM Plex Mono',
  padding: '5px',
  width: '1460px',
  color: 'black',
};

const divStyleHorizontal = {
  display: 'flex',
  flexDirection: 'row' as 'row',
};

const cellStyle = {
  backgroundColor: 'papayawhip',
  border: '1px dotted white',
  columnWidth: 173,
  rowHeight: 25,
};

const cellStyleTwoRows = (rowIndex: number, style: CSSProperties) => {
  if (rowIndex % 2 == 0)
    return Object.assign(
      {
        border: cellStyle.border,
        backgroundColor: 'mistyrose',
      },
      style
    );
  return Object.assign(
    {
      border: cellStyle.border,
      textAlign: 'right',
      fontWeight: 100,
    },
    style
  );
};

const cellStyleFiveRows = (rowIndex: number, style: CSSProperties) => {
  if (rowIndex == 3)
    return Object.assign(
      {
        border: cellStyle.border,
        backgroundColor: 'mistyrose',
      },
      style
    );
  else if (rowIndex == 0 || rowIndex == 1 || rowIndex == 2)
    return Object.assign(
      {
        border: cellStyle.border,
        backgroundColor: 'papayawhip',
      },
      style
    );
  return Object.assign(
    {
      border: cellStyle.border,
      textAlign: 'right',
      fontWeight: 100,
    },
    style
  );
};

const gridStyle1x2 = {
  columnCount: 1,
  rowCount: 2,
  height: cellStyle.rowHeight * 2 + 2,
  width: cellStyle.columnWidth + 2,
};

const gridStyle1x5 = {
  columnCount: 1,
  rowCount: 5,
  height: cellStyle.rowHeight * 5 + 15,
  width: cellStyle.columnWidth + 8,
};

const inputStyle = {
  fontFamily: 'IBM Plex Mono',
  fontSize: '16px',
  maxWidth: '140px',
};

function WidgetsPage() {
  const [input, setInput] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      inputZero: '',
      inputOne: '',
      inputTwo: '',
      inputThree: '',
      inputFour: '',
      inputFive: '',
      inputSix: '',
      inputSeven: '',

      inputTen: '',
      inputEleven: '',
      inputTwelve: '',

      inputTwenty: '',
      inputTwentyOne: '',
    }
  );
  const [inputThirty, setInputThirty] = useState('');

  const handleChangeChang = function (e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ [name]: value });
    // e.target.focus();
  };

  const handleChangeItfditt = function (
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ [name]: value });
  };

  const handleChangeMizmix = function (e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ [name]: value });
  };

  const handleChangeSentence = function (
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setInputThirty(e.target.value);
  };

  const cli = new Client();

  const hltChang = new Highlighter(wordsChang);
  const hltChangZero: Highlight = hltChang.getTarget(
    input.inputZero,
    wordsChang[0].index
  );
  const hltChangOne: Highlight = hltChang.getTarget(
    input.inputOne,
    wordsChang[1].index
  );
  const hltChangTwo: Highlight = hltChang.getTarget(
    input.inputTwo,
    wordsChang[2].index
  );
  const hltChangThree: Highlight = hltChang.getTarget(
    input.inputThree,
    wordsChang[3].index
  );
  const hltChangFour: Highlight = hltChang.getTarget(
    input.inputFour,
    wordsChang[4].index
  );
  const hltChangFive: Highlight = hltChang.getTarget(
    input.inputFive,
    wordsChang[5].index
  );
  const hltChangSix: Highlight = hltChang.getTarget(
    input.inputSix,
    wordsChang[6].index
  );
  const hltChangSeven: Highlight = hltChang.getTarget(
    input.inputSeven,
    wordsChang[7].index
  );

  const hltItfditt = new Highlighter(wordsItfditt);
  const hltItfdittTen: Highlight = hltItfditt.getTarget(
    input.inputTen,
    wordsItfditt[0].index
  );
  const hltItfdittEleven: Highlight = hltItfditt.getTarget(
    input.inputEleven,
    wordsItfditt[1].index
  );
  const hltItfdittTwelve: Highlight = hltItfditt.getTarget(
    input.inputTwelve,
    wordsItfditt[2].index
  );

  const hltMizmix = new Highlighter(wordsMizmix);
  const hltMizmixTwenty: Highlight = hltMizmix.getTarget(
    input.inputTwenty,
    wordsMizmix[0].index
  );
  const hltMizmixTwentyOne: Highlight = hltMizmix.getTarget(
    input.inputTwentyOne,
    wordsMizmix[1].index
  );

  const entries: Entry[] = [];
  for (let i = 0; i < sentence.length; i++) {
    entries.push({ index: i, hanyjiz: '', lurzmafjiz: sentence[i] });
  }

  const hltSentence = new Highlighter(entries);

  let hltSentenceThirty: Highlight = new Highlight();
  hltSentenceThirty = hltSentence.getTarget(
    inputThirty ? inputThirty : '',
    currWord
  );

  if (
    hltSentenceThirty.tail.length == 0 &&
    inputThirty &&
    inputThirty === sentence[currWord]
  ) {
    currWord + 1 < sentence.length ? currWord++ : (currWord = 0);
    setInputThirty('');
  }

  const CellChang = ({
    columnIndex,
    rowIndex,
    style,
  }: GridChildComponentProps) => (
    <div style={cellStyleFiveRows(rowIndex, style)}>
      {rowIndex == 0 ? (
        <div>{wordsChang[0].hanyjiz}</div>
      ) : rowIndex == 1 ? (
        wordsChang[0].lurzmafjiz
      ) : rowIndex == 2 ? (
        cli
          .processTonal(wordsChang[0].lurzmafjiz)
          .blockSequences.filter(it => it.length > 0)
          .join(', ')
      ) : rowIndex == 3 ? (
        <div>
          <text style={{ color: 'red' }}>{hltChangZero.target}</text>
          {hltChangZero.tail}
        </div>
      ) : rowIndex == 4 ? (
        <div>{hltChangZero.hint.text}</div>
      ) : (
        <div />
      )}
    </div>
  );

  const GridChang = () => (
    <FixedSizeGrid
      className="GridChang"
      columnCount={gridStyle1x5.columnCount}
      columnWidth={cellStyle.columnWidth}
      rowCount={gridStyle1x5.rowCount}
      rowHeight={cellStyle.rowHeight}
      height={gridStyle1x5.height}
      width={gridStyle1x5.width}
    >
      {CellChang}
    </FixedSizeGrid>
  );

  const CellChangy = ({
    columnIndex,
    rowIndex,
    style,
  }: GridChildComponentProps) => (
    <div style={cellStyleFiveRows(rowIndex, style)}>
      {rowIndex == 0 ? (
        <div>{wordsChang[1].hanyjiz}</div>
      ) : rowIndex == 1 ? (
        wordsChang[1].lurzmafjiz
      ) : rowIndex == 2 ? (
        cli
          .processTonal(wordsChang[1].lurzmafjiz)
          .blockSequences.filter(it => it.length > 0)
          .join(', ')
      ) : rowIndex == 3 ? (
        <div>
          <text style={{ color: 'red' }}>{hltChangOne.target}</text>
          {hltChangOne.tail}
        </div>
      ) : rowIndex == 4 ? (
        <div>{hltChangOne.hint.text}</div>
      ) : (
        <div />
      )}
    </div>
  );

  const GridChangy = () => (
    <FixedSizeGrid
      className="GridChangy"
      columnCount={gridStyle1x5.columnCount}
      columnWidth={cellStyle.columnWidth}
      rowCount={gridStyle1x5.rowCount}
      rowHeight={cellStyle.rowHeight}
      height={gridStyle1x5.height}
      width={gridStyle1x5.width}
    >
      {CellChangy}
    </FixedSizeGrid>
  );

  const CellChangw = ({
    columnIndex,
    rowIndex,
    style,
  }: GridChildComponentProps) => (
    <div style={cellStyleFiveRows(rowIndex, style)}>
      {rowIndex == 0 ? (
        <div>{wordsChang[2].hanyjiz}</div>
      ) : rowIndex == 1 ? (
        wordsChang[2].lurzmafjiz
      ) : rowIndex == 2 ? (
        cli
          .processTonal(wordsChang[2].lurzmafjiz)
          .blockSequences.filter(it => it.length > 0)
          .join(', ')
      ) : rowIndex == 3 ? (
        <div>
          <text style={{ color: 'red' }}>{hltChangTwo.target}</text>
          {hltChangTwo.tail}
        </div>
      ) : rowIndex == 4 ? (
        <div>{hltChangTwo.hint.text}</div>
      ) : (
        <div />
      )}
    </div>
  );

  const GridChangw = () => (
    <FixedSizeGrid
      className="GridChangw"
      columnCount={gridStyle1x5.columnCount}
      columnWidth={cellStyle.columnWidth}
      rowCount={gridStyle1x5.rowCount}
      rowHeight={cellStyle.rowHeight}
      height={gridStyle1x5.height}
      width={gridStyle1x5.width}
    >
      {CellChangw}
    </FixedSizeGrid>
  );

  const CellChak = ({
    columnIndex,
    rowIndex,
    style,
  }: GridChildComponentProps) => (
    <div style={cellStyleFiveRows(rowIndex, style)}>
      {rowIndex == 0 ? (
        <div>{wordsChang[3].hanyjiz}</div>
      ) : rowIndex == 1 ? (
        wordsChang[3].lurzmafjiz
      ) : rowIndex == 2 ? (
        cli
          .processTonal(wordsChang[3].lurzmafjiz)
          .blockSequences.filter(it => it.length > 0)
          .join(', ')
      ) : rowIndex == 3 ? (
        <div>
          <text style={{ color: 'red' }}>{hltChangThree.target}</text>
          {hltChangThree.tail}
        </div>
      ) : rowIndex == 4 ? (
        <div>{hltChangThree.hint.text}</div>
      ) : (
        <div />
      )}
    </div>
  );

  const GridChak = () => (
    <FixedSizeGrid
      className="GridChak"
      columnCount={gridStyle1x5.columnCount}
      columnWidth={cellStyle.columnWidth}
      rowCount={gridStyle1x5.rowCount}
      rowHeight={cellStyle.rowHeight}
      height={gridStyle1x5.height}
      width={gridStyle1x5.width}
    >
      {CellChak}
    </FixedSizeGrid>
  );

  const CellChangx = ({
    columnIndex,
    rowIndex,
    style,
  }: GridChildComponentProps) => (
    <div style={cellStyleFiveRows(rowIndex, style)}>
      {rowIndex == 0 ? (
        <div>{wordsChang[4].hanyjiz}</div>
      ) : rowIndex == 1 ? (
        wordsChang[4].lurzmafjiz
      ) : rowIndex == 2 ? (
        cli
          .processTonal(wordsChang[4].lurzmafjiz)
          .blockSequences.filter(it => it.length > 0)
          .join(', ')
      ) : rowIndex == 3 ? (
        <div>
          <text style={{ color: 'red' }}>{hltChangFour.target}</text>
          {hltChangFour.tail}
        </div>
      ) : rowIndex == 4 ? (
        <div>{hltChangFour.hint.text}</div>
      ) : (
        <div />
      )}
    </div>
  );

  const GridChangx = () => (
    <FixedSizeGrid
      className="GridChangx"
      columnCount={gridStyle1x5.columnCount}
      columnWidth={cellStyle.columnWidth}
      rowCount={gridStyle1x5.rowCount}
      rowHeight={cellStyle.rowHeight}
      height={gridStyle1x5.height}
      width={gridStyle1x5.width}
    >
      {CellChangx}
    </FixedSizeGrid>
  );

  const CellChangz = ({
    columnIndex,
    rowIndex,
    style,
  }: GridChildComponentProps) => (
    <div style={cellStyleFiveRows(rowIndex, style)}>
      {rowIndex == 0 ? (
        <div>{wordsChang[5].hanyjiz}</div>
      ) : rowIndex == 1 ? (
        wordsChang[5].lurzmafjiz
      ) : rowIndex == 2 ? (
        cli
          .processTonal(wordsChang[5].lurzmafjiz)
          .blockSequences.filter(it => it.length > 0)
          .join(', ')
      ) : rowIndex == 3 ? (
        <div>
          <text style={{ color: 'red' }}>{hltChangFive.target}</text>
          {hltChangFive.tail}
        </div>
      ) : rowIndex == 4 ? (
        <div>{hltChangFive.hint.text}</div>
      ) : (
        <div />
      )}
    </div>
  );

  const GridChangz = () => (
    <FixedSizeGrid
      className="GridChangz"
      columnCount={gridStyle1x5.columnCount}
      columnWidth={cellStyle.columnWidth}
      rowCount={gridStyle1x5.rowCount}
      rowHeight={cellStyle.rowHeight}
      height={gridStyle1x5.height}
      width={gridStyle1x5.width}
    >
      {CellChangz}
    </FixedSizeGrid>
  );

  const CellChakk = ({
    columnIndex,
    rowIndex,
    style,
  }: GridChildComponentProps) => (
    <div style={cellStyleFiveRows(rowIndex, style)}>
      {rowIndex == 0 ? (
        <div>{wordsChang[6].hanyjiz}</div>
      ) : rowIndex == 1 ? (
        wordsChang[6].lurzmafjiz
      ) : rowIndex == 2 ? (
        cli
          .processTonal(wordsChang[6].lurzmafjiz)
          .blockSequences.filter(it => it.length > 0)
          .join(', ')
      ) : rowIndex == 3 ? (
        <div>
          <text style={{ color: 'red' }}>{hltChangSix.target}</text>
          {hltChangSix.tail}
        </div>
      ) : rowIndex == 4 ? (
        <div>{hltChangSix.hint.text}</div>
      ) : (
        <div />
      )}
    </div>
  );

  const GridChakk = () => (
    <FixedSizeGrid
      className="GridChakk"
      columnCount={gridStyle1x5.columnCount}
      columnWidth={cellStyle.columnWidth}
      rowCount={gridStyle1x5.rowCount}
      rowHeight={cellStyle.rowHeight}
      height={gridStyle1x5.height}
      width={gridStyle1x5.width}
    >
      {CellChakk}
    </FixedSizeGrid>
  );

  const CellChangxx = ({
    columnIndex,
    rowIndex,
    style,
  }: GridChildComponentProps) => (
    <div style={cellStyleFiveRows(rowIndex, style)}>
      {rowIndex == 0 ? (
        <div>{wordsChang[7].hanyjiz}</div>
      ) : rowIndex == 1 ? (
        wordsChang[7].lurzmafjiz
      ) : rowIndex == 2 ? (
        cli
          .processTonal(wordsChang[7].lurzmafjiz)
          .blockSequences.filter(it => it.length > 0)
          .join(', ')
      ) : rowIndex == 3 ? (
        <div>
          <text style={{ color: 'red' }}>{hltChangSeven.target}</text>
          {hltChangSeven.tail}
        </div>
      ) : rowIndex == 4 ? (
        <div>{hltChangSeven.hint.text}</div>
      ) : (
        <div />
      )}
    </div>
  );

  const GridChangxx = () => (
    <FixedSizeGrid
      className="GridChangxx"
      columnCount={gridStyle1x5.columnCount}
      columnWidth={cellStyle.columnWidth}
      rowCount={gridStyle1x5.rowCount}
      rowHeight={cellStyle.rowHeight}
      height={gridStyle1x5.height}
      width={gridStyle1x5.width}
    >
      {CellChangxx}
    </FixedSizeGrid>
  );

  const CellItfditt = ({
    columnIndex,
    rowIndex,
    style,
  }: GridChildComponentProps) => (
    <div style={cellStyleTwoRows(rowIndex, style)}>
      {rowIndex == 0 ? (
        <div>
          <text style={{ color: 'red' }}>{hltItfdittTen.target}</text>
          {hltItfdittTen.tail}
        </div>
      ) : rowIndex == 1 ? (
        <div>{hltItfdittTen.hint.text}</div>
      ) : (
        <div />
      )}
    </div>
  );

  const GridItfditt = () => (
    <FixedSizeGrid
      className="GridItfditt"
      columnCount={gridStyle1x2.columnCount}
      columnWidth={cellStyle.columnWidth}
      rowCount={gridStyle1x2.rowCount}
      rowHeight={cellStyle.rowHeight}
      height={gridStyle1x2.height}
      width={gridStyle1x2.width}
    >
      {CellItfditt}
    </FixedSizeGrid>
  );

  const CellItfditw = ({
    columnIndex,
    rowIndex,
    style,
  }: GridChildComponentProps) => (
    <div style={cellStyleTwoRows(rowIndex, style)}>
      {rowIndex == 0 ? (
        <div>
          <text style={{ color: 'red' }}>{hltItfdittEleven.target}</text>
          {hltItfdittEleven.tail}
        </div>
      ) : rowIndex == 1 ? (
        <div>{hltItfdittEleven.hint.text}</div>
      ) : (
        <div />
      )}
    </div>
  );

  const GridItfditw = () => (
    <FixedSizeGrid
      className="GridItfditw"
      columnCount={gridStyle1x2.columnCount}
      columnWidth={cellStyle.columnWidth}
      rowCount={gridStyle1x2.rowCount}
      rowHeight={cellStyle.rowHeight}
      height={gridStyle1x2.height}
      width={gridStyle1x2.width}
    >
      {CellItfditw}
    </FixedSizeGrid>
  );

  const CellItfditf = ({
    columnIndex,
    rowIndex,
    style,
  }: GridChildComponentProps) => (
    <div style={cellStyleTwoRows(rowIndex, style)}>
      {rowIndex == 0 ? (
        <div>
          <text style={{ color: 'red' }}>{hltItfdittTwelve.target}</text>
          {hltItfdittTwelve.tail}
        </div>
      ) : rowIndex == 1 ? (
        <div>{hltItfdittTwelve.hint.text}</div>
      ) : (
        <div />
      )}
    </div>
  );

  const GridItfditf = () => (
    <FixedSizeGrid
      className="GridItfditf"
      columnCount={gridStyle1x2.columnCount}
      columnWidth={cellStyle.columnWidth}
      rowCount={gridStyle1x2.rowCount}
      rowHeight={cellStyle.rowHeight}
      height={gridStyle1x2.height}
      width={gridStyle1x2.width}
    >
      {CellItfditf}
    </FixedSizeGrid>
  );

  const CellMizmix = ({
    columnIndex,
    rowIndex,
    style,
  }: GridChildComponentProps) => (
    <div style={cellStyleTwoRows(rowIndex, style)}>
      {rowIndex == 0 ? (
        <div>
          <text style={{ color: 'red' }}>{hltMizmixTwenty.target}</text>
          {hltMizmixTwenty.tail}
        </div>
      ) : rowIndex == 1 ? (
        <div>{hltMizmixTwenty.hint.text}</div>
      ) : (
        <div />
      )}
    </div>
  );

  const GridMizmix = () => (
    <FixedSizeGrid
      className="GridMizmix"
      columnCount={gridStyle1x2.columnCount}
      columnWidth={cellStyle.columnWidth}
      rowCount={gridStyle1x2.rowCount}
      rowHeight={cellStyle.rowHeight}
      height={gridStyle1x2.height}
      width={gridStyle1x2.width}
    >
      {CellMizmix}
    </FixedSizeGrid>
  );

  const CellMixxmix = ({
    columnIndex,
    rowIndex,
    style,
  }: GridChildComponentProps) => (
    <div style={cellStyleTwoRows(rowIndex, style)}>
      {rowIndex == 0 ? (
        <div>
          <text style={{ color: 'red' }}>{hltMizmixTwentyOne.target}</text>
          {hltMizmixTwentyOne.tail}
        </div>
      ) : rowIndex == 1 ? (
        <div>{hltMizmixTwentyOne.hint.text}</div>
      ) : (
        <div />
      )}
    </div>
  );

  const GridMixxmix = () => (
    <FixedSizeGrid
      className="GridMixxmix"
      columnCount={gridStyle1x2.columnCount}
      columnWidth={cellStyle.columnWidth}
      rowCount={gridStyle1x2.rowCount}
      rowHeight={cellStyle.rowHeight}
      height={gridStyle1x2.height}
      width={gridStyle1x2.width}
    >
      {CellMixxmix}
    </FixedSizeGrid>
  );

  const CellSentence = ({
    columnIndex,
    rowIndex,
    style,
  }: GridChildComponentProps) => (
    <div style={cellStyleTwoRows(rowIndex, style)}>
      {rowIndex == 0 ? (
        <div>
          <text style={{ color: 'red' }}>{hltSentenceThirty.target}</text>
          {hltSentenceThirty.tail}
        </div>
      ) : rowIndex == 1 ? (
        <div>{hltSentenceThirty.hint.text}</div>
      ) : (
        <div />
      )}
    </div>
  );

  const GridSentence = () => (
    <FixedSizeGrid
      className="GridSentence"
      columnCount={gridStyle1x2.columnCount}
      columnWidth={cellStyle.columnWidth}
      rowCount={gridStyle1x2.rowCount}
      rowHeight={cellStyle.rowHeight}
      height={gridStyle1x2.height}
      width={gridStyle1x2.width}
    >
      {CellSentence}
    </FixedSizeGrid>
  );

  const CellDanzgiy = ({
    columnIndex,
    rowIndex,
    style,
  }: GridChildComponentProps) => (
    <div>
      {rowIndex == 0 ? (
        <div>{'單語'}</div>
      ) : rowIndex == 1 ? (
        <div>{'danzgiy'}</div>
      ) : rowIndex == 2 ? (
        <div>{'タヌ⎸ギイ⎛'}</div>
      ) : rowIndex == 3 ? (
        <div>{'danzguy'}</div>
      ) : rowIndex == 4 ? (
        <div>{'タヌ⎸グウ⎛'}</div>
      ) : (
        <div />
      )}
    </div>
  );

  const GridDanzgiy = () => (
    <FixedSizeGrid
      className="GridDanzgiy"
      columnCount={gridStyle1x5.columnCount}
      columnWidth={cellStyle.columnWidth}
      rowCount={gridStyle1x5.rowCount}
      rowHeight={cellStyle.rowHeight}
      height={gridStyle1x5.height}
      width={gridStyle1x5.width}
    >
      {CellDanzgiy}
    </FixedSizeGrid>
  );

  return (
    <div>
      widgets
      <br />
      1.
      <div style={divStyleEightColumns}>
        <div>{'chang'}</div>
        <div style={divStyleHorizontal}>
          <div style={divStyle}>
            <GridChang />
            <input
              type="text"
              value={input.inputZero}
              name="inputZero"
              onChange={handleChangeChang}
              style={inputStyle}
            />
          </div>
          <div style={divStyle}>
            <GridChangy />
            <input
              type="text"
              value={input.inputOne}
              name="inputOne"
              onChange={handleChangeChang}
              style={inputStyle}
            />
          </div>
          <div style={divStyle}>
            <GridChangw />
            <input
              type="text"
              value={input.inputTwo}
              name="inputTwo"
              onChange={handleChangeChang}
              style={inputStyle}
            />
          </div>
          <div style={divStyle}>
            <GridChak />
            <input
              type="text"
              value={input.inputThree}
              name="inputThree"
              onChange={handleChangeChang}
              style={inputStyle}
            />
          </div>
          <div style={divStyle}>
            <GridChangx />
            <input
              type="text"
              value={input.inputFour}
              name="inputFour"
              onChange={handleChangeChang}
              style={inputStyle}
            />
          </div>
          <div style={divStyle}>
            <GridChangz />
            <input
              type="text"
              value={input.inputFive}
              name="inputFive"
              onChange={handleChangeChang}
              style={inputStyle}
            />
          </div>
          <div style={divStyle}>
            <GridChakk />
            <input
              type="text"
              value={input.inputSix}
              name="inputSix"
              onChange={handleChangeChang}
              style={inputStyle}
            />
          </div>
          <div style={divStyle}>
            <GridChangxx />
            <input
              type="text"
              value={input.inputSeven}
              name="inputSeven"
              onChange={handleChangeChang}
              style={inputStyle}
            />
          </div>
        </div>
      </div>
      2.
      <div style={divStyle}>
        {wordsItfditt[0].hanyjiz}
        <GridItfditt />
        <input
          type="text"
          value={input.inputTen}
          name="inputTen"
          onChange={handleChangeItfditt}
          style={inputStyle}
        />
        <GridItfditw />
        <input
          type="text"
          value={input.inputEleven}
          name="inputEleven"
          onChange={handleChangeItfditt}
          style={inputStyle}
        />
        <GridItfditf />
        <input
          type="text"
          value={input.inputTwelve}
          name="inputTwelve"
          onChange={handleChangeItfditt}
          style={inputStyle}
        />
      </div>
      3.
      <div style={divStyleTwoColumns}>
        <div>{wordsMizmix[0].hanyjiz}</div>
        <div style={divStyleHorizontal}>
          <div style={divStyle}>
            <GridMizmix />
            <input
              type="text"
              value={input.inputTwenty}
              name="inputTwenty"
              onChange={handleChangeMizmix}
              style={inputStyle}
            />
          </div>
          <div style={divStyle}>
            <GridMixxmix />
            <input
              type="text"
              value={input.inputTwentyOne}
              name="inputTwentyOne"
              onChange={handleChangeMizmix}
              style={inputStyle}
            />
          </div>
        </div>
      </div>
      4.
      <div style={divStyleFont}>
        {sentence.map(it => it).join(' ')}
        <GridSentence />
        <input
          type="text"
          value={inputThirty}
          // name="inputThirty"
          onChange={handleChangeSentence}
          style={inputStyle}
        />
      </div>
      5.
      <div style={divStyleFont}>
        <GridDanzgiy />
      </div>
    </div>
  );
}

export default WidgetsPage;
