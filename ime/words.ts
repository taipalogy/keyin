import { Client, TokenAnalysis, TonalWord } from 'taipa';
import {
  tonalLemmatizationAnalyzer,
  getLetterSoundPairsSequential,
  TonalUncombiningForms,
} from 'taipa';
import { lemmatize } from 'taipa';
import { getStems, getInflectionalSuffixes } from '../util/process';

// read a file in react
const dictVocab = require('./vocabulary.json');

// this typing is required by react
interface DictVocabType {
  [key: string]: string[];
}

function analyzeIntoSequence(input: string) {
  const cli = new Client();
  const tla = tonalLemmatizationAnalyzer;
  const ta: TokenAnalysis = cli.processTonal(input.toString().trim());
  const wrd = ta.word as TonalWord; // type casting

  const pairs = getLetterSoundPairsSequential(
    tla
      .morphAnalyze(wrd.literal, new TonalUncombiningForms([]))
      .map((x) => x.sounds)
  );

  return pairs;
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
    const chars: string[] = letterSoundPairs.map((pair) => {
      return pair[0];
    });

    const entry: string = chars.join('');
    if (entry.length > 0 && keys.includes(entry)) {
      words.push(dict[entry][0]);
    }
  }
  return words;
}
