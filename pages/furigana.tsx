import {
  Example,
  HanjiReading,
  KanjiReading,
  KanaString,
} from '../widgets/entry';

function FuriganaPage() {
  const jinx = new HanjiReading('人', 'jinx');
  const butt = new HanjiReading('物', 'butt');
  const jin = new KanjiReading('人', 'jin');
  const buchu = new KanjiReading('物', 'buchu');

  const uahh = new HanjiReading('活', 'uahh');
  const siy = new HanjiReading('死', 'siy');
  const sei = new KanjiReading('生', 'sei');
  const si = new KanjiReading('死', 'si');
  const to = new KanaString('to');

  return (
    <div>
      <Example twStrings={[jinx, butt]} jaStrings={[jin, buchu]} />
      <Example
        twStrings={[siy, butt, uahh, butt]}
        jaStrings={[si, buchu, to, sei, buchu]}
      />
    </div>
  );
}

export default FuriganaPage;
