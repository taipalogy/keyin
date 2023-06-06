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

  const logograms: string[] = [];

  if (syllables.length == 0) {
    if (keys.includes(input)) {
      const arr: string[] = dict[input];
      // console.info('>' + arr[1]);
      logograms.push(arr[0]);
    }
  } else {
    syllables.forEach((ltrSndPairs) => {
      const lookup = pairsToString(ltrSndPairs);
      if (lookup.length > 0 && keys.includes(lookup)) {
        let fldValue: string[] = [];

        fldValue = dict[lookup] || [];

        logograms.push(fldValue[0]);
      } else if (lookup.length > 0) {
        const forms = getUncombiningForms(lookup);
        const results = forms.map((it) => {
          if (keys.includes(it)) {
            return dict[it];
          } else return [];
        });

        results.map((it) => it.map((i) => logograms.push(i)));
      }
    });
  }
  return logograms;
}
