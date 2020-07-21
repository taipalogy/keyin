import { Client } from 'taipa';
import { useState } from 'react';
import { Table } from 'semantic-ui-react';
import { HintProcessor, Group, Entry } from '../src/hint';

const words = [
  { hanyjiz: '粽', lurzmafjiz: 'changw' },
  { hanyjiz: '欉', lurzmafjiz: 'changx' },
];

function WidgetsPage() {
  const [input, setInput] = useState('');

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
  const idxWord = 1;
  hp.idx = idxWord;
  const len = hp.getCurrentLen(input);

  return (
    <div>
      widgets
      <br />
      {len}
      <Table celled striped collapsing>
        <Table.Body>
          <Table.Row>
            <Table.Cell>{words[idxWord].hanyjiz}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>{words[idxWord].lurzmafjiz}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              {cli
                .processTonal(words[idxWord].lurzmafjiz)
                .blockSequences.filter(it => it.length > 0)}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <text style={{ color: 'red' }}>{hp.targets[hp.idx]}</text>
              {hp.tails[hp.idx]}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <input type="text" value={input} onChange={handleChange} />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}

export default WidgetsPage;
