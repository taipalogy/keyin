import { Client } from 'taipa';
import { Furigana } from '../widgets/furigana';

class HanjiReading {
  // thokwim
  constructor(public hanji: string, public pronunciation: string) {}
}

class KanjiReading {
  // yomikata
  constructor(public kanji: string, public pronunciation: string) {}
}

class Example {}

function FuriganaPage() {
  const cli = new Client();

  const jinx = new HanjiReading('人', 'jinx');
  const jinxta = cli.processTonal(jinx.pronunciation);
  const butt = new HanjiReading('物', 'butt');
  const buttta = cli.processTonal(butt.pronunciation);
  const jin = new KanjiReading('人', 'jin');
  const jinta = cli.processKana(jin.pronunciation);
  const mono = new KanjiReading('物', 'mono');
  const monota = cli.processKana(mono.pronunciation);

  return (
    <div>
      <Furigana character={jinx.hanji} furigana={jinxta.blockSequences[0]} />
      <Furigana character={butt.hanji} furigana={buttta.blockSequences[0]} />
      =
      <Furigana character={jin.kanji} furigana={jinta.blockSequences[0]} />
      <Furigana character={mono.kanji} furigana={monota.blockSequences[0]} />
    </div>
  );
}

export default FuriganaPage;
