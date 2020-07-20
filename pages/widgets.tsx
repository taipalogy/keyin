import { Client } from 'taipa';
import { useState } from 'react';
import { Table } from 'semantic-ui-react';

const words = ['chang'];

function WidgetsPage() {
  const [input, setInput] = useState('');

  const cli = new Client();

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  return (
    <div>
      widgets
      <Table celled striped collapsing>
        <Table.Body>
          <Table.Row>
            <Table.Cell>棕</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>{words[0]}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              {cli
                .processTonal(words[0])
                .blockSequences.filter(it => it.length > 0)}
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
