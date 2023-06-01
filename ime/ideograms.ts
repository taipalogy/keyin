import { analyzeIntoSyllables } from './syllabograms';
// read a file in react
const dictHanji = require('./hanji.json');

// this typing is required by react
interface DictHanjiType {
  [key: string]: string[];
}

export function getIdeograms(data: any) {
  const input = data.toString().trim();
  const dict: DictHanjiType = dictHanji;
  const keys = Object.keys(dict);
  const syllables = analyzeIntoSyllables(input);

  const ideograms: string[] = [];

  if (syllables.length == 0) {
    for (const key of keys) {
      if (key === input) {
        const arr: string[] = dict[key];
        const chrs = arr.join(',');
        // console.info(chrs);
        ideograms.push(chrs);
      }
    }
  } else {
    syllables.forEach((ltrSndPairs) => {
      const latin: string[] = ltrSndPairs.map(
        (pair: [string, string], idx, arrPairs) => {
          return pair[0];
        }
      );
      const fldValue: string[] = dict[latin.join()] || [];
      ideograms.push(fldValue[0]);
    });
  }
  return ideograms;
}
