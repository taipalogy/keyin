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
            <Table.HeaderCell colSpan="17">初聲</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>{TonalLetterTags.b.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.c.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.ch.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.d.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.g.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.h.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.j.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.k.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.l.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.m.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.n.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.ng.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.p.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.q.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.s.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.t.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.v.toString()}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Table celled striped collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="28">中聲</Table.HeaderCell>
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
            <Table.Cell>{TonalLetterTags.m.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.n.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.ng.toString()}</Table.Cell>
            <Table.Cell>
              {TonalLetterTags.a.toString() + TonalLetterTags.i.toString()}
            </Table.Cell>
            <Table.Cell>
              {TonalLetterTags.a.toString() + TonalLetterTags.u.toString()}
            </Table.Cell>
            <Table.Cell>
              {TonalLetterTags.i.toString() + TonalLetterTags.a.toString()}
            </Table.Cell>
            <Table.Cell>
              {TonalLetterTags.i.toString() + TonalLetterTags.e.toString()}
            </Table.Cell>
            <Table.Cell>
              {TonalLetterTags.i.toString() + TonalLetterTags.o.toString()}
            </Table.Cell>
            <Table.Cell>
              {TonalLetterTags.i.toString() + TonalLetterTags.u.toString()}
            </Table.Cell>
            <Table.Cell>
              {TonalLetterTags.i.toString() + TonalLetterTags.ur.toString()}
            </Table.Cell>
            <Table.Cell>
              {TonalLetterTags.o.toString() + TonalLetterTags.a.toString()}
            </Table.Cell>
            <Table.Cell>
              {TonalLetterTags.o.toString() + TonalLetterTags.e.toString()}
            </Table.Cell>
            <Table.Cell>
              {TonalLetterTags.u.toString() + TonalLetterTags.i.toString()}
            </Table.Cell>
            <Table.Cell>
              {TonalLetterTags.or.toString() + TonalLetterTags.e.toString()}
            </Table.Cell>
            <Table.Cell>
              {TonalLetterTags.ir.toString() + TonalLetterTags.i.toString()}
            </Table.Cell>
            <Table.Cell>
              {TonalLetterTags.o.toString() + TonalLetterTags.er.toString()}
            </Table.Cell>
            <Table.Cell>
              {TonalLetterTags.i.toString() +
                TonalLetterTags.a.toString() +
                TonalLetterTags.i.toString()}
            </Table.Cell>
            <Table.Cell>
              {TonalLetterTags.i.toString() +
                TonalLetterTags.a.toString() +
                TonalLetterTags.u.toString()}
            </Table.Cell>
            <Table.Cell>
              {TonalLetterTags.o.toString() +
                TonalLetterTags.a.toString() +
                TonalLetterTags.i.toString()}
            </Table.Cell>
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
      <Table celled striped collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="26">終聲</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>{TonalLetterTags.p.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.t.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.k.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.h.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.pp.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.tt.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.kk.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.hh.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.b.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.g.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.j.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.l.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.s.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.bb.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.gg.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.jj.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.ll.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.ss.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.m.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.n.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.ng.toString()}</Table.Cell>
            <Table.Cell>
              {TonalLetterTags.m.toString() + TonalLetterTags.h.toString()}
            </Table.Cell>
            <Table.Cell>
              {TonalLetterTags.m.toString() + TonalLetterTags.hh.toString()}
            </Table.Cell>
            <Table.Cell>
              {TonalLetterTags.n.toString() + TonalLetterTags.h.toString()}
            </Table.Cell>
            <Table.Cell>
              {TonalLetterTags.ng.toString() + TonalLetterTags.h.toString()}
            </Table.Cell>
            <Table.Cell>
              {TonalLetterTags.ng.toString() + TonalLetterTags.hh.toString()}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Table celled striped collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="9">聲調</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>{TonalLetterTags.f.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.y.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.w.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.x.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.z.toString()}</Table.Cell>
            <Table.Cell>{TonalLetterTags.xx.toString()}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}

export default TaiKanaPage;
