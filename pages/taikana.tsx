import { Client, TonalLetterTags } from 'taipa';
import { useState } from 'react';
import { Table } from 'semantic-ui-react';

function TaiKanaPage() {
  const [input, setInput] = useState('');

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

  return (
    <div>
      拍羅馬字, 輸出台灣語假名
      <label>
        <br />
        <input type="text" value={input} onChange={handleChange} />
      </label>
      {listOfSeqs.map(x => (
        <li> {x} </li>
      ))}
      <li>{listOfSeqs.map(y => y[0]).join('')}</li>
      <Table celled striped collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="9">中聲</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>{TonalLetterTags.a.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.e.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.i.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.o.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.u.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.ur.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.or.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.ir.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.er.toString()}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Table celled striped collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>鼻音化</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>{TonalLetterTags.nn.toString()}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}

export default TaiKanaPage;
