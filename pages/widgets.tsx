import { Client } from 'taipa';
import { useState, useReducer } from 'react';
import { Table } from 'semantic-ui-react';
import { HintProcessor, Group, Entry, Highlight } from '../src/hint';

const words = [
  { hanyjiz: '粽', lurzmafjiz: 'changw' },
  { hanyjiz: '欉', lurzmafjiz: 'changx' },
];

function WidgetsPage() {
  const [inputZero, setInputXXX] = useState('');
  const [inputOne, setInputOne] = useState('');

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInputXXX(e.target.value);
  };

  const handleChangeOne = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInputOne(e.target.value);
  };

  const cli = new Client();

  const group = new Group();
  group.entries = [
    new Entry(words[0].lurzmafjiz),
    new Entry(words[1].lurzmafjiz),
  ];
  const hp = new HintProcessor(group);
  const idxWordZero = 0;
  const idxWordOne = 1;
  const hlZero: Highlight = hp.getTarget(inputZero, idxWordZero);
  const hlOne: Highlight = hp.getTarget(inputOne, idxWordOne);

  return (
    <div>
      widgets
      <br />
      <Table celled striped collapsing>
        <Table.Body>
          <Table.Row>
            <Table.Cell>{words[idxWordZero].hanyjiz}</Table.Cell>
            <Table.Cell>{words[idxWordOne].hanyjiz}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>{words[idxWordZero].lurzmafjiz}</Table.Cell>
            <Table.Cell>{words[idxWordOne].lurzmafjiz}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              {cli
                .processTonal(words[idxWordZero].lurzmafjiz)
                .blockSequences.filter(it => it.length > 0)}
            </Table.Cell>
            <Table.Cell>
              {cli
                .processTonal(words[idxWordOne].lurzmafjiz)
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
              <input type="text" value={inputZero} onChange={handleChange} />
            </Table.Cell>
            <Table.Cell>
              <text style={{ color: 'red' }}>{hlOne.target}</text>
              {hlOne.tail}
              <br />
              {hlOne.hint.hint}
              <br />
              <input type="text" value={inputOne} onChange={handleChangeOne} />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}

export default WidgetsPage;
