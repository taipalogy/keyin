import { analyzeIntoSyllables, getStandaloneForms, pairsToString } from 'taipa';

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
    }
  } else {
    syllables.forEach((ltrSndPairs, ind, arr) => {
      const lookup = pairsToString(ltrSndPairs);
      if (lookup.length > 0 && keys.includes(lookup) && ind == arr.length - 1) {
        // get the logograms for the last syllable which holds the base form
        logograms.push([dict[lookup] || []]);
      } else if (lookup.length > 0 && ind < arr.length - 1) {
        // get the logograms for syllables except for the last one
        const standaloneForms = getStandaloneForms(lookup);
        const lggrmsUForms = standaloneForms
          .map((it) => {
            if (keys.includes(it)) {
              return dict[it];
            } else {
              // in case of 1st tone, ~f.
              return [];
            }
          })
          .filter((it) => it.length > 0);

        logograms.push(lggrmsUForms);
      }
    });
  }
  return logograms;
}
