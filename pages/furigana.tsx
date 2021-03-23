import { Example, HanjiReading, KanjiReading } from '../widgets/example';

function FuriganaPage() {
  const jinx = new HanjiReading('人', 'jinx');
  const butt = new HanjiReading('物', 'butt');
  const jin = new KanjiReading('人', 'jin');
  const buchu = new KanjiReading('物', 'buchu');

  return (
    <div>
      <Example hanjiReadings={[jinx, butt]} kanjiReadings={[jin, buchu]} />
    </div>
  );
}

export default FuriganaPage;
