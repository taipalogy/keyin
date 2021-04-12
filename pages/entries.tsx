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
  Symbol,
  KatakanaCharacter,
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
      <TwEntry pronunciations={['tanx']} hanjis={['陳']} />
      <JaMeaning abbreviations={['姓']} meaning={[[cin]]} />
      <TwJaDefinition
        abbreviations={['']}
        meanings={[[jin], [nin], [hito], [nin, gen]]}
        examples={[[[thien, tez, jinx], [[ten, ci, jin]]]]}
      />

      <TwJaExample twString={[jinx, butt]} jaString={[[jin, buchu]]} />
      <TwJaExample
        twString={[siy, butt, uahh, butt]}
        jaString={[[si, buchu, to, sei, buchu]]}
      />
      <br />
      <TwEntry pronunciations={['it']} hanjis={['壹']} />
      <TwJaDefinition
        abbreviations={['姓']}
        meanings={[[new KanjiReading('壹', 'ici')]]}
        examples={[[[], []]]}
      />
      <TwReference
        pronunciation={''}
        twStrings={[[new HanjiReading('一', 'it')]]}
      />
      <br />
      <TwEntry pronunciations={['uinny']} hanjis={['袂', '阮', '抁']} />
      <TwReference
        pronunciation={'ngy'}
        twStrings={[
          [new HanjiReading('袂', '')],
          [new HanjiReading('阮', '')],
          [new HanjiReading('抁', '')],
        ]}
      />
      <br />
      <TwReference
        pronunciation={''}
        twStrings={[
          [new HanjiReading('研', 'gieny')],
          [new HanjiReading('研', 'ngaiy')],
          [new HanjiReading('研', 'gany')],
          [new HanjiReading('研', '')],
          [new HanjiReading('研', 'ngiriy')],
        ]}
      />
      <br />
      <TwReference
        pronunciation={''}
        twStrings={[
          [new HanjiReading('髻', 'kuew')],
          [new HanjiReading('髻', 'korw')],
        ]}
      />
      <br />
      <TwReference
        pronunciation={'gingy'}
        twStrings={[[new HanjiReading('眼', '')], [new HanjiReading('研', '')]]}
      />
      <br />
      <TwEntry pronunciations={['giy']} hanjis={['圉', '語', '敔']} />
      <TwReference
        pronunciation={'guy'}
        twStrings={[
          [new HanjiReading('圉', '')],
          [new HanjiReading('語', '')],
          [new HanjiReading('敔', '')],
        ]}
      />
      <br />
      <JaMeaning
        abbreviations={[]}
        meaning={[
          [new Symbol('(')],
          [new KanjiReading('八聲の一', '')],
          [new Symbol(')')],
          [new KanjiReading('下平', 'kahyau')],
        ]}
      />
      <JaMeaning
        abbreviations={[]}
        meaning={[[new KanjiReading('剛', 'kichu'), new KanaCharacter('i')]]}
      />
      <JaMeaning
        abbreviations={[]}
        meaning={[
          [new Symbol('(')],
          [new HanjiReading('軟', 'lngy')],
          [new KanjiReading('の反對', '')],
          [new Symbol(')')],
          [new HanjiReading('硬', 'ngez')],
        ]}
      />
      <br />
      <JaMeaningReference
        abbreviations={['']}
        meaning={[
          [new HanjiReading('湖', 'ox')],
          [new KanaCharacter('no')],
          [new Symbol('㊄')],
        ]}
      />
      <JaMeaningReference
        abbreviations={['同']}
        meaning={[
          [
            new HanjiReading('起', 'khiy'),
            new HanjiReading('來', 'laix'),
            new HanjiReading('行', 'kiannx'),
          ],
          [new Symbol('(')],
          [
            new KanjiReading('起', 'o'),
            new KanaCharacter('ki'),
            new KanaCharacter('te'),
            new KanjiReading('步', 'aru'),
            new KanaCharacter('ke'),
          ],
          [new Symbol(')')],
          [
            new KanaCharacter('no'),
            new KanjiReading('音', 'im'),
            new KanjiReading('便', 'pienz'),
          ],
        ]}
      />
      <TwJaDefinitionReference
        number={new Symbol('㊀')}
        meaning={[
          [
            new HanjiReading('山', 'suann'),
            new HanjiReading('柑', 'kam'),
            new HanjiReading('仔', 'ay'),
          ],
          [new KanaCharacter('no')],
          [new Symbol('㊃')],
        ]}
      />
      <TwJaDefinition
        abbreviations={['姓']}
        meanings={[[new KanjiReading('壹', 'ici')]]}
        examples={[[[], []]]}
      />
      <br />
      <TwEntry pronunciations={['ongx', 'siannx']} hanjis={['王城']} />
      <TwJaDefinition
        abbreviations={['']}
        meanings={[
          [new KanjiReading('王', 'wau'), new KanjiReading('城', 'jou')],
        ]}
        examples={[[[], []]]}
      />
      <TwJaDefinition
        abbreviations={['']}
        meanings={[
          [
            new KanjiReading('安', 'an'),
            new KanjiReading('平', 'pin'),
            new KanaCharacter('no'),
            new KatakanaCharacter('zeirandeia'),
            new KanjiReading('城', 'jyau'),
          ],
        ]}
        examples={[[[], []]]}
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
