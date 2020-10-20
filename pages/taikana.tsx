import { Client, TonalLetterTags } from 'taipa';
import { useState } from 'react';
import { FixedSizeGrid, GridChildComponentProps } from 'react-window';
import CopyToClipBoard from 'react-copy-to-clipboard';

// alphabet
const letter20 = [
  { letter: TonalLetterTags.a.toString(), hanji: '阿' },
  { letter: TonalLetterTags.b.toString(), hanji: '米' },
  { letter: TonalLetterTags.bb.toString(), hanji: '' },
  { letter: TonalLetterTags.c.toString(), hanji: '市' },
  { letter: TonalLetterTags.ch.toString(), hanji: '志' },
  { letter: TonalLetterTags.d.toString(), hanji: '池' },
  { letter: TonalLetterTags.e.toString(), hanji: '个' },
  { letter: TonalLetterTags.er.toString(), hanji: '' },
  { letter: TonalLetterTags.f.toString(), hanji: '' },
  { letter: TonalLetterTags.g.toString(), hanji: '牛' },
  { letter: TonalLetterTags.gg.toString(), hanji: '' },
  { letter: TonalLetterTags.h.toString(), hanji: '火' },
  { letter: TonalLetterTags.hh.toString(), hanji: '頁' },
  { letter: TonalLetterTags.i.toString(), hanji: '衣' },
  { letter: TonalLetterTags.ir.toString(), hanji: '去' },
  { letter: TonalLetterTags.j.toString(), hanji: '而' },
  { letter: TonalLetterTags.k.toString(), hanji: '去' },
  { letter: TonalLetterTags.kk.toString(), hanji: '目' },
  { letter: TonalLetterTags.l.toString(), hanji: '女' },
  { letter: TonalLetterTags.ll.toString(), hanji: '' },
];

// alphabet
const letter21 = [
  { letter: TonalLetterTags.m.toString(), hanji: '乜' },
  { letter: TonalLetterTags.n.toString(), hanji: '尼' },
  { letter: TonalLetterTags.ng.toString(), hanji: '午' },
  { letter: TonalLetterTags.nn.toString(), hanji: '井' },
  { letter: TonalLetterTags.o.toString(), hanji: '芋' },
  { letter: TonalLetterTags.or.toString(), hanji: '蚵' },
  { letter: TonalLetterTags.p.toString(), hanji: '皮' },
  { letter: TonalLetterTags.pp.toString(), hanji: '入' },
  { letter: TonalLetterTags.q.toString(), hanji: '古' },
  { letter: TonalLetterTags.s.toString(), hanji: '示' },
  { letter: TonalLetterTags.ss.toString(), hanji: '' },
  { letter: TonalLetterTags.t.toString(), hanji: '土' },
  { letter: TonalLetterTags.tt.toString(), hanji: '日' },
  { letter: TonalLetterTags.u.toString(), hanji: '宇' },
  { letter: TonalLetterTags.ur.toString(), hanji: '蚵' },
  { letter: TonalLetterTags.v.toString(), hanji: '比' },
  { letter: TonalLetterTags.w.toString(), hanji: '' },
  { letter: TonalLetterTags.x.toString(), hanji: '' },
  { letter: TonalLetterTags.xx.toString(), hanji: '' },
  { letter: TonalLetterTags.y.toString(), hanji: '' },
  { letter: TonalLetterTags.z.toString(), hanji: '' },
];

// 初聲(語頭子音)
const initials = [
  TonalLetterTags.b.toString(),
  TonalLetterTags.c.toString(),
  TonalLetterTags.ch.toString(),
  TonalLetterTags.d.toString(),
  TonalLetterTags.g.toString(),
  TonalLetterTags.h.toString(),
  TonalLetterTags.j.toString(),
  TonalLetterTags.k.toString(),
  TonalLetterTags.l.toString(),
  TonalLetterTags.m.toString(),
  TonalLetterTags.n.toString(),
  TonalLetterTags.ng.toString(),
  TonalLetterTags.p.toString(),
  TonalLetterTags.q.toString(),
  TonalLetterTags.s.toString(),
  TonalLetterTags.t.toString(),
  TonalLetterTags.v.toString(),
];

// 中聲(母音, 準母音)
const medials = [
  TonalLetterTags.a.toString(),
  TonalLetterTags.e.toString(),
  TonalLetterTags.i.toString(),
  TonalLetterTags.o.toString(),
  TonalLetterTags.u.toString(),
  TonalLetterTags.ur.toString(),
  TonalLetterTags.or.toString(),
  TonalLetterTags.ir.toString(),
  TonalLetterTags.er.toString(),
  TonalLetterTags.m.toString(),
  TonalLetterTags.n.toString(),
  TonalLetterTags.ng.toString(),
  TonalLetterTags.a.toString() + TonalLetterTags.i.toString(),
  TonalLetterTags.a.toString() + TonalLetterTags.u.toString(),
  TonalLetterTags.i.toString() + TonalLetterTags.a.toString(),
  TonalLetterTags.i.toString() + TonalLetterTags.e.toString(),
  TonalLetterTags.i.toString() + TonalLetterTags.o.toString(),
  TonalLetterTags.i.toString() + TonalLetterTags.u.toString(),
  TonalLetterTags.i.toString() + TonalLetterTags.ur.toString(),
  TonalLetterTags.o.toString() + TonalLetterTags.a.toString(),
  TonalLetterTags.o.toString() + TonalLetterTags.e.toString(),
  TonalLetterTags.u.toString() + TonalLetterTags.i.toString(),
  TonalLetterTags.or.toString() + TonalLetterTags.e.toString(),
  TonalLetterTags.ir.toString() + TonalLetterTags.i.toString(),
  TonalLetterTags.i.toString() +
  TonalLetterTags.a.toString() +
  TonalLetterTags.i.toString(),
  TonalLetterTags.i.toString() +
  TonalLetterTags.a.toString() +
  TonalLetterTags.u.toString(),
  TonalLetterTags.o.toString() +
  TonalLetterTags.a.toString() +
  TonalLetterTags.i.toString(),
];

// 鼻音化
const nasalizations = [TonalLetterTags.nn.toString()];

// 終聲(語尾子音, 聲調)
const finals = [
  TonalLetterTags.p.toString(),
  TonalLetterTags.t.toString(),
  TonalLetterTags.k.toString(),
  TonalLetterTags.h.toString(),
  TonalLetterTags.pp.toString(),
  TonalLetterTags.tt.toString(),
  TonalLetterTags.kk.toString(),
  TonalLetterTags.hh.toString(),
  TonalLetterTags.b.toString(),
  TonalLetterTags.g.toString(),
  TonalLetterTags.j.toString(),
  TonalLetterTags.l.toString(),
  TonalLetterTags.s.toString(),
  TonalLetterTags.bb.toString(),
  TonalLetterTags.gg.toString(),
  TonalLetterTags.ll.toString(),
  TonalLetterTags.ss.toString(),
  TonalLetterTags.m.toString(),
  TonalLetterTags.n.toString(),
  TonalLetterTags.ng.toString(),
  TonalLetterTags.m.toString() + TonalLetterTags.h.toString(),
  TonalLetterTags.m.toString() + TonalLetterTags.hh.toString(),
  TonalLetterTags.n.toString() + TonalLetterTags.h.toString(),
  TonalLetterTags.ng.toString() + TonalLetterTags.h.toString(),
  TonalLetterTags.ng.toString() + TonalLetterTags.hh.toString(),
];

// 聲調
const tonals = [
  { letter: TonalLetterTags.f.toString(), number: 1 },
  { letter: TonalLetterTags.y.toString(), number: 2 },
  { letter: TonalLetterTags.w.toString(), number: 3 },
  { letter: TonalLetterTags.x.toString(), number: 5 },
  { letter: TonalLetterTags.z.toString(), number: 7 },
  { letter: TonalLetterTags.xx.toString(), number: 9 },
];

const cellStyle = {
  backgroundColor: 'papayawhip',
  border: '1px solid white',
  color: 'black',
  // fontFamily: 'Monaco',
  // fontSize: 24,
  columnWidth: 32,
  rowHeight: 25,
  backgroundColorAlphabet: 'mistyrose',
}

function TaiKanaPage() {
  const [input, setInput] = useState('');
  // const [openTip, setOpenTip] = useState<boolean>(false);

  const tokens: string[] = [];

  const matchArr = input.match(/\w+/g);
  if (matchArr) {
    matchArr.filter(it => it != undefined).map(it => tokens.push(it));
  }

  const cli = new Client();
  const tas = tokens.map(it => cli.processTonal(it));
  const listOfSeqs = tas.map(it =>
    it.blockSequences.filter(it => it.length > 0)
  );

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  /*
  const handleCloseTip = (): void => {
    setOpenTip(false);
  };

  const handleClickButton = (): void => {
    setOpenTip(true);
  };
*/

  const textTaikana = listOfSeqs.map(y => y[0]).join('');

  const CellLetters = ({
    columnIndex,
    rowIndex,
    style,
  }: GridChildComponentProps) => (
      <div
        className={
          columnIndex % 2
            ? rowIndex % 2 == 0
              ? 'GridItemOdd'
              : 'GridItemEven'
            : rowIndex % 2
              ? 'GridItemOdd'
              : 'GridItemEven'
        }
        style={Object.assign(
          rowIndex % 2 == 0
            ? {
              backgroundColor: cellStyle.backgroundColorAlphabet,
              border: '1px solid white',
              color: cellStyle.color,
            }
            : {}, style
        )}
      >
        {rowIndex == 0
          ? columnIndex >= 0 && letter20[columnIndex]
            ? letter20[columnIndex].letter
            : ''
          : rowIndex == 1
            ? columnIndex >= 0 && letter20[columnIndex]
              ? letter20[columnIndex].hanji
              : ''
            : rowIndex == 2
              ? columnIndex >= 0 && letter21[columnIndex]
                ? letter21[columnIndex].letter
                : ''
              : rowIndex == 3
                ? columnIndex >= 0 && letter21[columnIndex]
                  ? letter21[columnIndex].hanji
                  : ''
                : ''}
      </div>
    );

  const TableAlphabet = () => (
    <FixedSizeGrid
      className="GridAlphabet"
      columnCount={21}
      columnWidth={cellStyle.columnWidth}
      rowCount={4}
      rowHeight={cellStyle.rowHeight}
      height={4 * cellStyle.rowHeight}
      width={letter21.length * (cellStyle.columnWidth + 1)}
      style={{ textAlign: 'center' }}
    >
      {CellLetters}
    </FixedSizeGrid>
  );

  const CellInitials = ({
    columnIndex,
    rowIndex,
    style,
  }: GridChildComponentProps) => (
      <div
        style={Object.assign(
          {
            backgroundColor: cellStyle.backgroundColor,
            border: '1px solid white',
            color: cellStyle.color,
          }, style
        )}
      >
        {
          initials[columnIndex]
        }
      </div>);

  const TableInitials = () => (
    <FixedSizeGrid
      className="GridInitials"
      columnCount={initials.length}
      columnWidth={cellStyle.columnWidth}
      rowCount={1}
      rowHeight={cellStyle.rowHeight}
      height={cellStyle.rowHeight + 2}
      width={initials.length * (cellStyle.columnWidth + 1)}
      style={{ textAlign: 'center' }}
    >
      {CellInitials}
    </FixedSizeGrid>
  );

  const CellMedials = ({
    columnIndex,
    rowIndex,
    style,
  }: GridChildComponentProps) => (
      <div
        style={Object.assign(
          {
            backgroundColor: cellStyle.backgroundColor,
            border: '1px solid white',
            color: cellStyle.color,
          }, style
        )}
      >
        {
          medials[columnIndex]
        }
      </div>);

  const TableMedials = () => (
    <FixedSizeGrid
      className="GridMedials"
      columnCount={medials.length}
      columnWidth={cellStyle.columnWidth}
      rowCount={1}
      rowHeight={cellStyle.rowHeight}
      height={cellStyle.rowHeight + 2}
      width={medials.length * (cellStyle.columnWidth + 1)}
      style={{ textAlign: 'center' }}
    >
      {CellMedials}
    </FixedSizeGrid>
  );

  const CellNasalizations = ({
    columnIndex,
    rowIndex,
    style,
  }: GridChildComponentProps) => (
      <div
        style={Object.assign(
          {
            backgroundColor: cellStyle.backgroundColor,
            border: '1px solid white',
            color: cellStyle.color,
          }, style
        )}
      >
        {
          nasalizations[columnIndex]
        }
      </div>);

  const TableNasalizations = () => (
    <FixedSizeGrid
      className="GridNasalizations"
      columnCount={nasalizations.length}
      columnWidth={cellStyle.columnWidth}
      rowCount={1}
      rowHeight={cellStyle.rowHeight}
      height={cellStyle.rowHeight + 2}
      width={nasalizations.length * cellStyle.columnWidth + 2}
      style={{ textAlign: 'center' }}
    >
      {CellNasalizations}
    </FixedSizeGrid>
  );

  const CellFinals = ({
    columnIndex,
    rowIndex,
    style,
  }: GridChildComponentProps) => (
      <div
        style={Object.assign(
          {
            backgroundColor: cellStyle.backgroundColor,
            border: '1px solid white',
            color: cellStyle.color,
          }, style
        )}
      >
        {
          finals[columnIndex]
        }
      </div>);

  const TableFinals = () => (
    <FixedSizeGrid
      className="GridFinals"
      columnCount={finals.length}
      columnWidth={cellStyle.columnWidth}
      rowCount={1}
      rowHeight={cellStyle.rowHeight}
      height={cellStyle.rowHeight + 2}
      width={finals.length * (cellStyle.columnWidth + 1)}
      style={{ textAlign: 'center' }}
    >
      {CellFinals}
    </FixedSizeGrid>
  );

  const CellTonals = ({
    columnIndex,
    rowIndex,
    style,
  }: GridChildComponentProps) => (
      <div
        style={Object.assign(
          rowIndex == 0
            ? {
              backgroundColor: cellStyle.backgroundColor,
              border: '1px solid white',
              color: cellStyle.color,
            }
            : {}, style
        )}
      >
        {
          rowIndex == 0 ? tonals[columnIndex].letter : rowIndex == 1 ? tonals[columnIndex].number : ''
        }
      </div>);

  const TableTonals = () => (
    <FixedSizeGrid
      className="GridTonals"
      columnCount={tonals.length}
      columnWidth={cellStyle.columnWidth}
      rowCount={2}
      rowHeight={cellStyle.rowHeight}
      height={2 * cellStyle.rowHeight}
      width={tonals.length * (cellStyle.columnWidth + 1)}
      style={{ textAlign: 'center' }}
    >
      {CellTonals}
    </FixedSizeGrid>
  );

  return (
    <div>
      拍羅馬字, 輸出台灣語假名
      <label>
        <br />
        <input type="text" value={input} onChange={handleChange} />
      </label>
      <br />
      {listOfSeqs.map(x => (
        <li>
          {x.length == 0
            ? ''
            : x.length == 1
              ? x[0]
              : x.length == 2
                ? x[0] + ', ' + x[1]
                : ''}
        </li>
      ))}
      <br />
      <li>{textTaikana}</li>
      <CopyToClipBoard text={textTaikana}>
        <button
          disabled={textTaikana === ''}
        // onClick={handleClickButton}
        >
          Copy
        </button>
      </CopyToClipBoard>
      <br />
      <table>
        <thead><tr><th align="left">Alphabet</th></tr></thead>
        <tbody>
          <tr>
            <td>
              <TableAlphabet />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <table>
        <thead><tr><th align="left">初聲(語頭子音)</th></tr></thead>
        <tbody>
          <tr>
            <td>
              <TableInitials />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <table>
        <thead><tr><th align="left">中聲(母音, 準母音)</th></tr></thead>
        <tbody>
          <tr>
            <td>
              <TableMedials />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <table>
        <thead><tr><th align="left">鼻音化</th></tr></thead>
        <tbody>
          <tr>
            <td>
              <TableNasalizations />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <table>
        <thead><tr><th align="left">終聲(語尾子音, 聲調)</th></tr></thead>
        <tbody>
          <tr>
            <td>
              <TableFinals />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <table>
        <thead><tr><th align="left">聲調</th></tr></thead>
        <tbody>
          <tr>
            <td>
              <TableTonals />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TaiKanaPage;
