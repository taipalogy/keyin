import {
  Example,
  HanjiReading,
  KanjiReading,
  KanaString,
  Definition,
} from '../widgets/entry';

function FuriganaPage() {
  const jinx = new HanjiReading('人', 'jinx');
  const butt = new HanjiReading('物', 'butt');
  const uahh = new HanjiReading('活', 'uahh');
  const siy = new HanjiReading('死', 'siy');
  const thien = new HanjiReading('天', 'thien');
  const tez = new HanjiReading('地', 'tez');

  const jin = new KanjiReading('人', 'jin');
  const buchu = new KanjiReading('物', 'buchu');
  const sei = new KanjiReading('生', 'sei');
  const si = new KanjiReading('死', 'si');
  const ten = new KanjiReading('天', 'ten');
  const ci = new KanjiReading('地', 'ci');
  const to = new KanaString('to');

  return (
    <div>
      <Example twStrings={[jinx, butt]} jaStrings={[jin, buchu]} />
      <Example
        twStrings={[siy, butt, uahh, butt]}
        jaStrings={[si, buchu, to, sei, buchu]}
      />
      <Definition
        meanings={[[jin]]}
        examples={[
          [
            [thien, tez, jinx],
            [ten, ci, jin],
          ],
        ]}
      />
    </div>
  );
}

export default FuriganaPage;
