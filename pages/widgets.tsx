import { Client } from 'taipa';
import { useReducer, useState } from 'react';
import { Table } from 'semantic-ui-react';
import { Highlighter, Entry, Highlight } from '../src/highlight';

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

const sentence = ['hitf', 'chanz', 'daiwchiw'];
let currWord: number = 0;

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

  return (
    <div>
      widgets
      <br />
      1.
      <Table celled striped collapsing>
        <Table.Body>
          <Table.Row>
            <Table.Cell>{wordsChang[wordsChang[0].index].hanyjiz}</Table.Cell>
            <Table.Cell>{wordsChang[wordsChang[1].index].hanyjiz}</Table.Cell>
            <Table.Cell>{wordsChang[wordsChang[2].index].hanyjiz}</Table.Cell>
            <Table.Cell>{wordsChang[wordsChang[3].index].hanyjiz}</Table.Cell>
            <Table.Cell>{wordsChang[wordsChang[4].index].hanyjiz}</Table.Cell>
            <Table.Cell>{wordsChang[wordsChang[5].index].hanyjiz}</Table.Cell>
            <Table.Cell>{wordsChang[wordsChang[6].index].hanyjiz}</Table.Cell>
            <Table.Cell>{wordsChang[wordsChang[7].index].hanyjiz}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              {wordsChang[wordsChang[0].index].lurzmafjiz}
            </Table.Cell>
            <Table.Cell>
              {wordsChang[wordsChang[1].index].lurzmafjiz}
            </Table.Cell>
            <Table.Cell>
              {wordsChang[wordsChang[2].index].lurzmafjiz}
            </Table.Cell>
            <Table.Cell>
              {wordsChang[wordsChang[3].index].lurzmafjiz}
            </Table.Cell>
            <Table.Cell>
              {wordsChang[wordsChang[4].index].lurzmafjiz}
            </Table.Cell>
            <Table.Cell>
              {wordsChang[wordsChang[5].index].lurzmafjiz}
            </Table.Cell>
            <Table.Cell>
              {wordsChang[wordsChang[6].index].lurzmafjiz}
            </Table.Cell>
            <Table.Cell>
              {wordsChang[wordsChang[7].index].lurzmafjiz}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              {cli
                .processTonal(wordsChang[wordsChang[0].index].lurzmafjiz)
                .blockSequences.filter(it => it.length > 0)}
            </Table.Cell>
            <Table.Cell>
              {cli
                .processTonal(wordsChang[wordsChang[1].index].lurzmafjiz)
                .blockSequences.filter(it => it.length > 0)}
            </Table.Cell>
            <Table.Cell>
              {cli
                .processTonal(wordsChang[wordsChang[2].index].lurzmafjiz)
                .blockSequences.filter(it => it.length > 0)}
            </Table.Cell>
            <Table.Cell>
              {
                cli
                  .processTonal(wordsChang[wordsChang[3].index].lurzmafjiz)
                  .blockSequences.filter(it => it.length > 0)[1]
              }
            </Table.Cell>
            <Table.Cell>
              {cli
                .processTonal(wordsChang[wordsChang[4].index].lurzmafjiz)
                .blockSequences.filter(it => it.length > 0)}
            </Table.Cell>
            <Table.Cell>
              {cli
                .processTonal(wordsChang[wordsChang[5].index].lurzmafjiz)
                .blockSequences.filter(it => it.length > 0)}
            </Table.Cell>
            <Table.Cell>
              {cli
                .processTonal(wordsChang[wordsChang[6].index].lurzmafjiz)
                .blockSequences.filter(it => it.length > 0)}
            </Table.Cell>
            <Table.Cell>
              {cli
                .processTonal(wordsChang[wordsChang[7].index].lurzmafjiz)
                .blockSequences.filter(it => it.length > 0)}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <text style={{ color: 'red' }}>{hltChangZero.target}</text>
              {hltChangZero.tail}
              <br />
              {hltChangZero.hint.hint}
              <br />
              <input
                type="text"
                value={input.inputZero}
                name="inputZero"
                onChange={handleChangeChang}
              />
            </Table.Cell>
            <Table.Cell>
              <text style={{ color: 'red' }}>{hltChangOne.target}</text>
              {hltChangOne.tail}
              <br />
              {hltChangOne.hint.hint}
              <br />
              <input
                type="text"
                value={input.inputOne}
                name="inputOne"
                onChange={handleChangeChang}
              />
            </Table.Cell>
            <Table.Cell>
              <text style={{ color: 'red' }}>{hltChangTwo.target}</text>
              {hltChangTwo.tail}
              <br />
              {hltChangTwo.hint.hint}
              <br />
              <input
                type="text"
                value={input.inputTwo}
                name="inputTwo"
                onChange={handleChangeChang}
              />
            </Table.Cell>
            <Table.Cell>
              <text style={{ color: 'red' }}>{hltChangThree.target}</text>
              {hltChangThree.tail}
              <br />
              {hltChangThree.hint.hint}
              <br />
              <input
                type="text"
                value={input.inputThree}
                name="inputThree"
                onChange={handleChangeChang}
              />
            </Table.Cell>
            <Table.Cell>
              <text style={{ color: 'red' }}>{hltChangFour.target}</text>
              {hltChangFour.tail}
              <br />
              {hltChangFour.hint.hint}
              <br />
              <input
                type="text"
                value={input.inputFour}
                name="inputFour"
                onChange={handleChangeChang}
              />
            </Table.Cell>
            <Table.Cell>
              <text style={{ color: 'red' }}>{hltChangFive.target}</text>
              {hltChangFive.tail}
              <br />
              {hltChangFive.hint.hint}
              <br />
              <input
                type="text"
                value={input.inputFive}
                name="inputFive"
                onChange={handleChangeChang}
              />
            </Table.Cell>
            <Table.Cell>
              <text style={{ color: 'red' }}>{hltChangSix.target}</text>
              {hltChangSix.tail}
              <br />
              {hltChangSix.hint.hint}
              <br />
              <input
                type="text"
                value={input.inputSix}
                name="inputSix"
                onChange={handleChangeChang}
              />
            </Table.Cell>
            <Table.Cell>
              <text style={{ color: 'red' }}>{hltChangSeven.target}</text>
              {hltChangSeven.tail}
              <br />
              {hltChangSeven.hint.hint}
              <br />
              <input
                type="text"
                value={input.inputSeven}
                name="inputSeven"
                onChange={handleChangeChang}
              />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <br />
      2.
      <Table celled striped collapsing>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              {wordsItfditt[wordsItfditt[0].index].hanyjiz}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <text style={{ color: 'red' }}>{hltItfdittTen.target}</text>
              {hltItfdittTen.tail}
              <br />
              {hltItfdittTen.hint.hint}
              <br />
              <input
                type="text"
                value={input.inputTen}
                name="inputTen"
                onChange={handleChangeItfditt}
              />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <text style={{ color: 'red' }}>{hltItfdittEleven.target}</text>
              {hltItfdittEleven.tail}
              <br />
              {hltItfdittEleven.hint.hint}
              <br />
              <input
                type="text"
                value={input.inputEleven}
                name="inputEleven"
                onChange={handleChangeItfditt}
              />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <text style={{ color: 'red' }}>{hltItfdittTwelve.target}</text>
              {hltItfdittTwelve.tail}
              <br />
              {hltItfdittTwelve.hint.hint}
              <br />
              <input
                type="text"
                value={input.inputTwelve}
                name="inputTwelve"
                onChange={handleChangeItfditt}
              />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <br />
      3.
      <Table celled striped collapsing>
        <Table.Body>
          <Table.Row>
            <Table.Cell>{wordsMizmix[wordsMizmix[0].index].hanyjiz}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <text style={{ color: 'red' }}>{hltMizmixTwenty.target}</text>
              {hltMizmixTwenty.tail}
              <br />
              {hltMizmixTwenty.hint.hint}
              <br />
              <input
                type="text"
                value={input.inputTwenty}
                name="inputTwenty"
                onChange={handleChangeMizmix}
              />
            </Table.Cell>
            <Table.Cell>
              <text style={{ color: 'red' }}>{hltMizmixTwentyOne.target}</text>
              {hltMizmixTwentyOne.tail}
              <br />
              {hltMizmixTwentyOne.hint.hint}
              <br />
              <input
                type="text"
                value={input.inputTwentyOne}
                name="inputTwentyOne"
                onChange={handleChangeMizmix}
              />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <br />
      4.
      <Table celled striped collapsing>
        <Table.Body>
          <Table.Row>
            <Table.Cell>{sentence.map(it => it).join(' ')}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <text style={{ color: 'red' }}>{hltSentenceThirty.target}</text>
            {hltSentenceThirty.tail}
            <br />
            {hltSentenceThirty.hint.hint}
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <input
                type="text"
                value={inputThirty}
                // name="inputThirty"
                onChange={handleChangeSentence}
              />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <br />
      5.
      <Table celled striped collapsing>
        <Table.Body>
          <Table.Row>
            <Table.Cell>單語</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>danzgiy</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>タヌ⎸ギイ⎛</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}

export default WidgetsPage;
