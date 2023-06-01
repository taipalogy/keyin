import { lemmatize } from 'taipa';
import { getStems, getInflectionalSuffixes } from '../util/process';

import { analyzeIntoSyllables } from './syllabograms';
// read a file in react
const dictHanji = require('./hanji.json');

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
    for (const key of keys) {
      if (key === input) {
        const arr: string[] = dict[key];
        const chrs = arr.join(',');
        // console.info(chrs);
        logograms.push(chrs);
      }
    }
  } else {
    syllables.forEach((ltrSndPairs) => {
      const chars: string[] = ltrSndPairs.map(
        (pair: [string, string], idx, arrPairs) => {
          return pair[0];
        }
      );

      const syl = chars.join('');
      console.log(chars.join(''));

      let fldValue: string[] = [];

      const lxLemma = lemmatize(syl);
      const lemmas = lxLemma.getLemmas().map((x) => x.literal);

      if (lemmas.length > 0) {
        fldValue = dict[lemmas[0]] || [];
      } else {
        fldValue = dict[syl] || [];
      }
      logograms.push(fldValue[0]);
    });
  }
  return logograms;
}
