import {
  analyzeIntoSyllables,
  getUncombiningForms,
  pairsToString,
} from 'taipa';

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

  const logograms: string[][][] = [];

  if (syllables.length == 0) {
    if (keys.includes(input)) {
      const arr: string[] = dict[input];
      // console.info('>' + arr[1]);
      logograms.push([arr]);
    }
  } else {
    syllables.forEach((ltrSndPairs) => {
      const lookup = pairsToString(ltrSndPairs);
      if (lookup.length > 0 && keys.includes(lookup)) {
        let fldValue: string[] = [];

        fldValue = dict[lookup] || [];

        logograms.push([fldValue]);
      } else if (lookup.length > 0) {
        const forms = getUncombiningForms(lookup);
        const results = forms
          .map((it) => {
            if (keys.includes(it)) {
              return dict[it];
            } else {
              // in case of 1st tone, ~f.
              return [];
            }
          })
          .filter((it) => it.length > 0);

        logograms.push(results);
      }
    });
  }
  return logograms;
}
