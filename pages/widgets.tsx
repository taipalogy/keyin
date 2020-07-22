import { Client } from 'taipa';
import { useState } from 'react';
import { Table } from 'semantic-ui-react';
import { HintProcessor, Group, Entry } from '../src/hint';

const words = [
  { hanyjiz: '粽', lurzmafjiz: 'changw' },
  { hanyjiz: '欉', lurzmafjiz: 'changx' },
];

function WidgetsPage() {
  const [inputOne, setInput] = useState('');

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  const cli = new Client();

  const group = new Group();
  group.entries = [
    new Entry(words[0].lurzmafjiz),
    new Entry(words[1].lurzmafjiz),
  ];
  const hp = new HintProcessor(group);
  const idxWordOne = 0;
  const { posTarget, target, tail } = hp.getTarget(inputOne, idxWordOne);

  return (
    <div>
      widgets
      <br />
      {posTarget}
      <Table celled striped collapsing>
        <Table.Body>
          <Table.Row>
            <Table.Cell>{words[idxWordOne].hanyjiz}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>{words[idxWordOne].lurzmafjiz}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              {cli
                .processTonal(words[idxWordOne].lurzmafjiz)
                .blockSequences.filter(it => it.length > 0)}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <text style={{ color: 'red' }}>{target}</text>
              {tail}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <input type="text" value={inputOne} onChange={handleChange} />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}

export default WidgetsPage;
