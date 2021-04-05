import {
  TwJaExample,
  HanjiReading,
  KanjiReading,
  KanaCharacter,
  TwJaDefinition,
  TwEntry,
  JaMeaning,
  TwReference,
  TwJaDefinitionReference,
  JaMeaningReference,
  SymbolNumber,
} from '../widgets/taizjitt';
import {
  JaEntry,
  JaReference,
  JaTwExample,
  TwMeaning,
  JaTwDefinition,
} from '../widgets/jitwtaix';

function FuriganaPage() {
  const jinx = new HanjiReading('人', 'jinx');
  const butt = new HanjiReading('物', 'butt');
  const uahh = new HanjiReading('活', 'uahh');
  const siy = new HanjiReading('死', 'siy');
  const thien = new HanjiReading('天', 'thien');
  const tez = new HanjiReading('地', 'tez');
  const mihh = new HanjiReading('物', 'mihh');
  const mnghh = new HanjiReading('物', 'mnghh');
  const kiannz = new HanjiReading('件', 'kiannz');
  const kongy = new HanjiReading('講', 'kongy');
  const uez = new HanjiReading('話', 'uez');
  const chiannx = new HanjiReading('成', 'chiannx');
  const siauy = new HanjiReading('狂', 'siauy');
  const ex = new HanjiReading('的', 'ex');
  const suannw = new HanjiReading('散', 'suannw');

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
  const mono = new KanjiReading('物', 'mono');
  const i = new KanjiReading('語', 'i');
  const o = new KanaCharacter('o');
  const to = new KanaCharacter('to');
  const u = new KanaCharacter('u');
  const ni = new KanaCharacter('ni');
  const na = new KanaCharacter('na');
  const ru = new KanaCharacter('ru');

  return (
    <div>
      {/* taizjitt */}
      <TwEntry pronunciation={'tanx'} hanjis={['陳']} />
      <JaMeaning abbreviation={'姓'} meanings={[[cin]]} note={''} />
      <TwJaDefinition
        abbreviation={''}
        meanings={[[jin], [nin], [hito], [nin, gen]]}
        examples={[
          [
            [thien, tez, jinx],
            [ten, ci, jin],
          ],
        ]}
        note={''}
      />

      <TwJaExample twString={[jinx, butt]} jaString={[jin, buchu]} />
      <TwJaExample
        twString={[siy, butt, uahh, butt]}
        jaString={[si, buchu, to, sei, buchu]}
      />
      <br />
      <TwEntry pronunciation={'it'} hanjis={['壹']} />
      <TwJaDefinition
        abbreviation={'姓'}
        meanings={[[new KanjiReading('壹', 'ici')]]}
        examples={[[[], []]]}
        note={''}
      />
      <TwReference
        pronunciation={''}
        twStrings={[[new HanjiReading('一', 'it')]]}
      />
      <br />
      <TwEntry pronunciation={'uinny'} hanjis={['袂', '阮', '抁']} />
      <TwReference
        pronunciation={'ngy'}
        twStrings={[
          [new HanjiReading('袂', '')],
          [new HanjiReading('阮', '')],
          [new HanjiReading('抁', '')],
        ]}
      />
      <br />
      <JaMeaning
        abbreviation={'八聲の一'}
        meanings={[[new KanjiReading('下平', 'kahyau')]]}
        note={''}
      />
      <JaMeaningReference
        abbreviation={''}
        meaning={[
          [new HanjiReading('湖', 'ox')],
          [new KanaCharacter('no')],
          [new SymbolNumber('㊄')],
        ]}
      />
      <TwJaDefinitionReference
        number={new SymbolNumber('㊀')}
        meaning={[
          [
            new HanjiReading('山', 'suann'),
            new HanjiReading('柑', 'kam'),
            new HanjiReading('仔', 'ay'),
          ],
          [new KanaCharacter('no')],
          [new SymbolNumber('㊃')],
        ]}
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
      <br />
      <JaEntry
        pronunciationKata={'モノ'}
        pronunciationHira={''}
        abbreviation={'名'}
        kanji={'物'}
      />
      <TwMeaning meanings={[[mihh], [mnghh], [mihh, kiannz]]} />
      <JaTwExample jaExample={[mono, o, i, u]} twExamples={[[kongy, uez]]} />
      <JaTwExample
        jaExample={[mono, ni, na, ru]}
        twExamples={[[chiannx, mihh]]}
      />
      <br />
      <JaEntry
        pronunciationKata={'モノグルイ'}
        pronunciationHira={'ものぐるひ'}
        abbreviation={'名'}
        kanji={'物狂'}
      />
      <TwMeaning meanings={[[siauy, ex]]} />
      <br />
      <JaEntry
        pronunciationKata={'ヨオカイ'}
        pronunciationHira={'よおかい'}
        abbreviation={'名'}
        kanji={'溶解'}
      />
      <JaTwDefinition
        abbreviation={''}
        examples={[
          [
            [new KanjiReading('水', ''), new KanjiReading('中', '')],
            [[suannw]],
          ],
        ]}
        references={[]}
      />
      <br />
      <JaEntry
        pronunciationKata={'ヨロズ'}
        pronunciationHira={'よろづ'}
        abbreviation={'數'}
        kanji={'萬'}
      />
      <JaTwDefinition
        abbreviation={''}
        examples={[
          [
            [new KanjiReading('事', '')],
            [[new HanjiReading('各', 'kok'), new HanjiReading('項', 'hangz')]],
          ],
        ]}
        references={[]}
      />
      <br />
      <JaEntry
        pronunciationKata={'ハタ'}
        pronunciationHira={''}
        abbreviation={'接'}
        kanji={'將'}
      />
      <TwMeaning
        meanings={[
          [new HanjiReading('亦', 'iaz')],
          [new HanjiReading('亦', 'iaz'), new HanjiReading('是', 'siz')],
        ]}
      />
      <JaReference pronunciations={['タダシワ', 'マタワ']} />
    </div>
  );
}

export default FuriganaPage;
