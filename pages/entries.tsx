import {
  TwJaExample,
  HanjiReading,
  KanjiReading,
  KanaString,
  TwDefinition,
  TwEntry,
  Meaning,
} from '../widgets/entry';
import { JaEntry, JaReference, TwMeaning } from '../widgets/entryjt';

function FuriganaPage() {
  const jinx = new HanjiReading('人', 'jinx');
  const butt = new HanjiReading('物', 'butt');
  const uahh = new HanjiReading('活', 'uahh');
  const siy = new HanjiReading('死', 'siy');
  const thien = new HanjiReading('天', 'thien');
  const tez = new HanjiReading('地', 'tez');
  const mihh = new HanjiReading('物', 'mihh');
  const kiannz = new HanjiReading('件', 'kiannz');

  const jin = new KanjiReading('人', 'jin');
  const nin = new KanjiReading('人', 'nin');
  const hito = new KanjiReading('人', 'hito');
  const buchu = new KanjiReading('物', 'buchu');
  const sei = new KanjiReading('生', 'sei');
  const si = new KanjiReading('死', 'si');
  const ten = new KanjiReading('天', 'ten');
  const ci = new KanjiReading('地', 'ci');
  const gen = new KanjiReading('間', 'gen');
  const cin = new KanjiReading('陳', 'cin');
  const to = new KanaString('to');

  return (
    <div>
      {/* taizjitt */}
      <TwEntry pronunciation={'tanx'} hanji={'陳'} />
      <Meaning abbreviation={'姓'} meanings={[[cin]]} />
      <TwDefinition
        note={''}
        meanings={[[jin], [nin], [hito], [nin, gen]]}
        examples={[
          [
            [thien, tez, jinx],
            [ten, ci, jin],
          ],
        ]}
      />

      <TwJaExample twStrings={[jinx, butt]} jaStrings={[jin, buchu]} />
      <TwJaExample
        twStrings={[siy, butt, uahh, butt]}
        jaStrings={[si, buchu, to, sei, buchu]}
      />
      <br />
      {/* jitwtaix */}
      <JaEntry
        pronunciationKata={'ブッケン'}
        pronunciationHira={''}
        abbreviation={'名'}
        kanji={'物件'}
      />
      <TwMeaning meanings={[[mihh, kiannz]]} />
      <JaReference pronunciations={['モノ']} />
    </div>
  );
}

export default FuriganaPage;
