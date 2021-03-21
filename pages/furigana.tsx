import { Client } from 'taipa';
import { Furigana } from '../widgets/furigana';

class HanjiReading {
  hanji: string = '';
  reading: string = '';
}

function FuriganaPage() {
  const hr = new HanjiReading();
  hr.hanji = '武藝';
  hr.reading = 'bufgez';
  const cli = new Client();
  const ta = cli.processTonal(hr.reading);

  return (
    <div>
      <Furigana hanji={hr.hanji} furigana={ta.blockSequences[0]} />
    </div>
  );
}

export default FuriganaPage;
