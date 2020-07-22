import { Client } from 'taipa';
import { useReducer } from 'react';
import { Table } from 'semantic-ui-react';
import { Highlighter, Group, Entry, Highlight } from '../src/highlight';

const words = [
  { index: 0, hanyjiz: '粽', lurzmafjiz: 'changw' },
  { index: 1, hanyjiz: '欉', lurzmafjiz: 'changx' },
];

function WidgetsPage() {
  const [input, setInput] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      inputZero: '',
      inputOne: '',
    }
  );

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ [name]: value });
  };

  const cli = new Client();

  const group = new Group();
  group.entries = [
    new Entry(words[0].lurzmafjiz),
    new Entry(words[1].lurzmafjiz),
  ];

  const hlt = new Highlighter(group);
  const hlZero: Highlight = hlt.getTarget(input.inputZero, words[0].index);
  const hlOne: Highlight = hlt.getTarget(input.inputOne, words[1].index);

  return (
    <div>
      widgets
      <br />
      <Table celled striped collapsing>
        <Table.Body>
          <Table.Row>
            <Table.Cell>{words[words[0].index].hanyjiz}</Table.Cell>
            <Table.Cell>{words[words[1].index].hanyjiz}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>{words[words[0].index].lurzmafjiz}</Table.Cell>
            <Table.Cell>{words[words[1].index].lurzmafjiz}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              {cli
                .processTonal(words[words[0].index].lurzmafjiz)
                .blockSequences.filter(it => it.length > 0)}
            </Table.Cell>
            <Table.Cell>
              {cli
                .processTonal(words[words[1].index].lurzmafjiz)
                .blockSequences.filter(it => it.length > 0)}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <text style={{ color: 'red' }}>{hlZero.target}</text>
              {hlZero.tail}
              <br />
              {hlZero.hint.hint}
              <br />
              <input
                type="text"
                value={input.inputZero}
                name="inputZero"
                onChange={handleChange}
              />
            </Table.Cell>
            <Table.Cell>
              <text style={{ color: 'red' }}>{hlOne.target}</text>
              {hlOne.tail}
              <br />
              {hlOne.hint.hint}
              <br />
              <input
                type="text"
                value={input.inputOne}
                name="inputOne"
                onChange={handleChange}
              />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}

export default WidgetsPage;
