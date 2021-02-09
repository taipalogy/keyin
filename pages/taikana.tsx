import { Client, TonalLetterTags } from 'taipa';
import { useState } from 'react';
import { FixedSizeGrid, GridChildComponentProps } from 'react-window';
import CopyToClipBoard from 'react-copy-to-clipboard';

// alphabet
const letters20FirstHalf = [
  { letter: TonalLetterTags.a.toString(), hanjis: ['阿'] },
  { letter: TonalLetterTags.b.toString(), hanjis: ['米'] },
  { letter: TonalLetterTags.bb.toString(), hanjis: [''] },
  { letter: TonalLetterTags.c.toString(), hanjis: ['市'] },
  { letter: TonalLetterTags.ch.toString(), hanjis: ['志'] },
  { letter: TonalLetterTags.e.toString(), hanjis: ['个', '益'] },
  { letter: TonalLetterTags.f.toString(), hanjis: [''] },
  { letter: TonalLetterTags.g.toString(), hanjis: ['牛'] },
  { letter: TonalLetterTags.gg.toString(), hanjis: [''] },
  { letter: TonalLetterTags.h.toString(), hanjis: ['火'] },
  { letter: TonalLetterTags.hh.toString(), hanjis: ['灱'] },
  { letter: TonalLetterTags.i.toString(), hanjis: ['衣'] },
  { letter: TonalLetterTags.ir.toString(), hanjis: ['去'] },
  { letter: TonalLetterTags.j.toString(), hanjis: ['而'] },
  { letter: TonalLetterTags.k.toString(), hanjis: ['古'] },
  { letter: TonalLetterTags.kh.toString(), hanjis: ['去'] },
  { letter: TonalLetterTags.kk.toString(), hanjis: ['目'] },
  { letter: TonalLetterTags.l.toString(), hanjis: ['女'] },
  { letter: TonalLetterTags.ll.toString(), hanjis: [''] },
  { letter: TonalLetterTags.m.toString(), hanjis: ['乜'] },
];

// alphabet
const letter20SecondHalf = [
  { letter: TonalLetterTags.n.toString(), hanjis: ['尼'] },
  { letter: TonalLetterTags.ng.toString(), hanjis: ['午'] },
  { letter: TonalLetterTags.nn.toString(), hanjis: ['井'] },
  { letter: TonalLetterTags.o.toString(), hanjis: ['芋'] },
  { letter: TonalLetterTags.or.toString(), hanjis: ['蚵'] },
  { letter: TonalLetterTags.p.toString(), hanjis: ['比'] },
  { letter: TonalLetterTags.ph.toString(), hanjis: ['皮'] },
  { letter: TonalLetterTags.pp.toString(), hanjis: ['入'] },
  { letter: TonalLetterTags.s.toString(), hanjis: ['示'] },
  { letter: TonalLetterTags.ss.toString(), hanjis: [''] },
  { letter: TonalLetterTags.t.toString(), hanjis: ['池'] },
  { letter: TonalLetterTags.th.toString(), hanjis: ['土'] },
  { letter: TonalLetterTags.tt.toString(), hanjis: ['日'] },
  { letter: TonalLetterTags.u.toString(), hanjis: ['宇'] },
  { letter: TonalLetterTags.ur.toString(), hanjis: ['蚵'] },
  { letter: TonalLetterTags.w.toString(), hanjis: [''] },
  { letter: TonalLetterTags.x.toString(), hanjis: [''] },
  { letter: TonalLetterTags.xx.toString(), hanjis: [''] },
  { letter: TonalLetterTags.y.toString(), hanjis: [''] },
  { letter: TonalLetterTags.z.toString(), hanjis: [''] },
];

// 初聲(語頭子音)
const initials = [
  TonalLetterTags.b.toString(),
  TonalLetterTags.c.toString(),
  TonalLetterTags.ch.toString(),
  TonalLetterTags.g.toString(),
  TonalLetterTags.h.toString(),
  TonalLetterTags.j.toString(),
  TonalLetterTags.k.toString(),
  TonalLetterTags.kh.toString(),
  TonalLetterTags.l.toString(),
  TonalLetterTags.m.toString(),
  TonalLetterTags.n.toString(),
  TonalLetterTags.ng.toString(),
  TonalLetterTags.p.toString(),
  TonalLetterTags.ph.toString(),
  TonalLetterTags.s.toString(),
  TonalLetterTags.t.toString(),
  TonalLetterTags.th.toString(),
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
  TonalLetterTags.ir.toString() + TonalLetterTags.i.toString(),
  TonalLetterTags.or.toString() + TonalLetterTags.e.toString(),
  TonalLetterTags.u.toString() + TonalLetterTags.a.toString(),
  TonalLetterTags.u.toString() + TonalLetterTags.e.toString(),
  TonalLetterTags.u.toString() + TonalLetterTags.i.toString(),
  TonalLetterTags.i.toString() +
    TonalLetterTags.a.toString() +
    TonalLetterTags.i.toString(),
  TonalLetterTags.i.toString() +
    TonalLetterTags.a.toString() +
    TonalLetterTags.u.toString(),
  TonalLetterTags.u.toString() +
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
  columnWidth: 35,
  rowHeight: 20,
  backgroundColorAlphabet: 'mistyrose',
};

const gridStyleNx1 = {
  rowCount: 1,
  height: cellStyle.rowHeight + 2,
  columnWidth: 40,
};

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
        rowIndex % 4 == 0
          ? {
              backgroundColor: cellStyle.backgroundColorAlphabet,
              border: '1px solid white',
              color: cellStyle.color,
            }
          : {
          },
        style
      )}
    >
      {rowIndex == 0
        ? columnIndex >= 0 && letters20FirstHalf[columnIndex]
          ? letters20FirstHalf[columnIndex].letter
          : ''
        : rowIndex == 1
        ? columnIndex >= 0 && letters20FirstHalf[columnIndex]
          ? letters20FirstHalf[columnIndex].hanjis[0]
          : ''
        : rowIndex == 2
        ? columnIndex == 5
          ? letters20FirstHalf[columnIndex].hanjis[1]
          : ''
        : rowIndex == 3
        ? columnIndex == 5
          ? letters20FirstHalf[columnIndex].hanjis[2]
          : ''
        : rowIndex == 4
        ? columnIndex >= 0 && letter20SecondHalf[columnIndex]
          ? letter20SecondHalf[columnIndex].letter
          : ''
        : rowIndex == 5
        ? columnIndex >= 0 && letter20SecondHalf[columnIndex]
          ? letter20SecondHalf[columnIndex].hanjis[0]
          : ''
        : ''}
    </div>
  );

  const TableAlphabet = () => (
    <FixedSizeGrid
      className="GridAlphabet"
      columnCount={20}
      columnWidth={cellStyle.columnWidth}
      rowCount={gridStyleNx1.rowCount * 8}
      rowHeight={cellStyle.rowHeight}
      height={gridStyleNx1.height * 8}
      width={letters20FirstHalf.length * (cellStyle.columnWidth + 1)}
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
        },
        style
      )}
    >
      {initials[columnIndex]}
    </div>
  );

  const TableInitials = () => (
    <FixedSizeGrid
      className="GridInitials"
      columnCount={initials.length}
      columnWidth={gridStyleNx1.columnWidth}
      rowCount={gridStyleNx1.rowCount}
      rowHeight={cellStyle.rowHeight}
      height={gridStyleNx1.height}
      width={initials.length * (gridStyleNx1.columnWidth + 1)}
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
        },
        style
      )}
    >
      {medials[columnIndex]}
    </div>
  );

  const TableMedials = () => (
    <FixedSizeGrid
      className="GridMedials"
      columnCount={medials.length}
      columnWidth={gridStyleNx1.columnWidth}
      rowCount={gridStyleNx1.rowCount}
      rowHeight={cellStyle.rowHeight}
      height={gridStyleNx1.height}
      width={medials.length * (gridStyleNx1.columnWidth + 1)}
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
        },
        style
      )}
    >
      {nasalizations[columnIndex]}
    </div>
  );

  const TableNasalizations = () => (
    <FixedSizeGrid
      className="GridNasalizations"
      columnCount={nasalizations.length}
      columnWidth={gridStyleNx1.columnWidth}
      rowCount={gridStyleNx1.rowCount}
      rowHeight={cellStyle.rowHeight}
      height={gridStyleNx1.height}
      width={nasalizations.length * gridStyleNx1.columnWidth + 2}
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
        },
        style
      )}
    >
      {finals[columnIndex]}
    </div>
  );

  const TableFinals = () => (
    <FixedSizeGrid
      className="GridFinals"
      columnCount={finals.length}
      columnWidth={gridStyleNx1.columnWidth}
      rowCount={gridStyleNx1.rowCount}
      rowHeight={cellStyle.rowHeight}
      height={gridStyleNx1.height}
      width={finals.length * (gridStyleNx1.columnWidth + 1)}
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
          : {},
        style
      )}
    >
      {rowIndex == 0
        ? tonals[columnIndex].letter
        : rowIndex == 1
        ? tonals[columnIndex].number
        : ''}
    </div>
  );

  const TableTonals = () => (
    <FixedSizeGrid
      className="GridTonals"
      columnCount={tonals.length}
      columnWidth={gridStyleNx1.columnWidth}
      rowCount={gridStyleNx1.rowCount * 2}
      rowHeight={cellStyle.rowHeight}
      height={gridStyleNx1.height * 2}
      width={tonals.length * (gridStyleNx1.columnWidth + 1)}
      style={{ textAlign: 'center' }}
    >
      {CellTonals}
    </FixedSizeGrid>
  );

  return (
    <div style={{ fontFamily: 'IBM Plex Mono', fontSize: 16 }}>
      拍羅馬字, 輸出台灣語假名
      <label>
        <br />
        <input
          type="text"
          value={input}
          onChange={handleChange}
          style={{ fontFamily: 'IBM Plex Mono', fontSize: 16 }}
        />
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
      <div>
        <div>Alphabet</div>
        <TableAlphabet />
      </div>
      <br />
      <div>
        <div>初聲(語頭子音)</div>
        <TableInitials />
      </div>{' '}
      <br />
      <div>
        <div>中聲(母音, 準母音)</div>
        <TableMedials />
      </div>
      <br />
      <div>
        <div>鼻音化</div>
        <TableNasalizations />
      </div>{' '}
      <br />
      <div>
        <div>終聲(語尾子音, 聲調)</div>
        <TableFinals />
      </div>
      <br />
      <div>
        <div>聲調</div>
        <TableTonals />
      </div>
    </div>
  );
}

export default TaiKanaPage;
