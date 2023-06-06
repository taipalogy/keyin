import { analyzeIntoSequence, getLemmas, pairsToString } from 'taipa';

// read a file in react
const dictVocab = require('./vocabulary.json');

// this typing is required by react
interface DictVocabType {
  [key: string]: string[];
}

export function getWords(data: any) {
  const input = data.toString().trim();
  const dict: DictVocabType = dictVocab;

  const keys = Object.keys(dict);
  const letterSoundPairs = analyzeIntoSequence(input);

  const words: string[] = [];

  if (letterSoundPairs.length == 0) {
    if (keys.includes(input)) {
      const arr: string[] = dict[input];
      // console.info('>' + arr[1]);
      words.push(arr[0]);
    }
  } else {
    const lookup = pairsToString(letterSoundPairs);
    if (lookup.length > 0 && keys.includes(lookup)) {
      // the vocab contains the word
      words.push(dict[lookup][0]);
    } else if (lookup.length > 0) {
      // the vocab doesn't contain the word
      // if the vocab contains the lemmas of the word
      const lemmas = getLemmas(lookup);
      const results = lemmas.map((it) => {
        if (keys.includes(it)) {
          return dict[it];
        } else return [];
      });

      results.map((it) => it.map((i) => words.push(i)));
    }
  }
  return words;
}
