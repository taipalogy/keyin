import {
  Client,
  TokenAnalysis,
  tonalLemmatizationAnalyzer,
  TonalWord,
} from 'taipa';
import { TonalUncombiningForms } from 'taipa';
import { analyzeIntoSyllables } from './syllabograms';

// read a file in react
const dictHanji = require('./hanjis.json');

// this typing is required by react
interface DictHanjiType {
  [key: string]: string[];
}

export function getLogograms(data: any) {
  const input = data.toString().trim();
  const dict: DictHanjiType = dictHanji;
  const keys = Object.keys(dict);
  const syllables = analyzeIntoSyllables(input);

  const logograms: string[] = [];

  if (syllables.length == 0) {
    if (keys.includes(input)) {
      const arr: string[] = dict[input];
      // console.info('>' + arr[1]);
      logograms.push(arr[0]);
    }
  } else {
    syllables.forEach((ltrSndPairs) => {
      const chars: string[] = ltrSndPairs.map(
        (pair: [string, string], idx, arrPairs) => {
          return pair[0];
        }
      );

      const syl = chars.join('');
      // console.log(chars.join(''));

      let fldValue: string[] = [];

      fldValue = dict[syl] || [];

      logograms.push(fldValue[0]);

      const cli = new Client();
      const tla = tonalLemmatizationAnalyzer;
      const ta: TokenAnalysis = cli.processTonal(syl.toString().trim());
      const wrd = ta.word as TonalWord; // type casting

      const forms = tla
        .morphAnalyze(wrd.literal, new TonalUncombiningForms([]))
        .map((mrfm) => mrfm.getForms().map((frm) => frm.literal));
      // console.log('>' + input + '>' + syl);
      // forms.map((frm) => console.log(frm));
    });
  }
  return logograms;
}
