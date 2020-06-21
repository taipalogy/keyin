import { Client, graphAnalyzeTonal, TonalLetterTags } from 'taipa';
import {
  initialSounds,
  nasalizationSounds,
  medialSounds,
} from 'taipa/lib/tonal/version2';
import { useState } from 'react';

let previousLetter: string = '';
let previousLength: number = 0;
// let movingBackward: boolean = false;

// the current index and the next one form a token
const indices: number[] = [];

function TokenizerPage() {
  const [input, setInput] = useState('');

  const cli = new Client();
  const taTonal = cli.processTonal(input);
  const taikanaSeqs = taTonal.blockSequences.filter(x => x.length > 0);
  const taKana = cli.processKana(input);
  const kanaSeqs = taKana.blockSequences.filter(x => x.length > 0);

  const tokenized: Array<string[]> = new Array();

  const letters = graphAnalyzeTonal(input).map(
    x => x.letter && x.letter.literal
  );

  const characters = input.split('');

  const soundSeqs = taTonal.soundSequences.flatMap(x =>
    x.map(y => y.toString())
  );

  // lastLetter is set before previousLetter
  const lastLetter = letters[letters.length - 1];
  const tmpPreviousLetter = previousLetter; // for debugging, logging

  // if (previousLength > input.length) {
  //   movingBackward = true;
  // } else if (previousLength < input.length) {
  //   movingBackward = false;
  // }

  let sliced;
  if (initialSounds.includes(lastLetter)) {
    if (
      initialSounds.includes(lastLetter) &&
      initialSounds.includes(previousLetter)
    ) {
      if (
        lastLetter === TonalLetterTags.ch &&
        previousLetter === TonalLetterTags.c
      ) {
        indices.pop();
        sliced = input.slice(0, characters.length - 2);
        if (!indices.includes(input.length - 2))
          indices.push(characters.length - 2);
      } else if (
        previousLetter === TonalLetterTags.ng &&
        initialSounds.includes(lastLetter)
      ) {
        indices.push(characters.length - 1);
      }
    } else {
      // } else if (!medialSounds.includes(previousLetter) && !movingBackward) {
      // when moving forward
      // if the previous letter is not an medial
      sliced = input.slice(0, characters.length - 1);
      if (!indices.includes(input.length - 1))
        indices.push(characters.length - 1);
    }
  } else if (
    nasalizationSounds.includes(lastLetter) &&
    previousLetter === TonalLetterTags.n
  ) {
    // when an n followed by another n.
    indices.pop();
  } else if (
    previousLength > input.length &&
    initialSounds.includes(previousLetter)
  ) {
    // moving backward and removed the pushed index
    indices.pop();
  } else if (
    lastLetter === TonalLetterTags.tt &&
    (previousLetter === TonalLetterTags.t ||
      medialSounds.includes(previousLetter))
  ) {
    // tt is not an initial
    indices.pop();
  }

  // previousLetter could be the preceding letter when moving forward or the following letter when moving backward
  // previousLetter is set later than lastLetter
  previousLetter = lastLetter;
  previousLength = input.length;

  if (indices.length > 0) {
    for (let i = 0, j = 1; j < indices.length; i++, j++) {
      const syl = cli.processTonal(input.slice(indices[i], indices[j]))
        .blockSequences;
      tokenized.push(syl);
    }
    if (input.length - indices[indices.length - 1] > 0) {
      // the last syllable, if available
      const syl = cli.processTonal(
        input.slice(indices[indices.length - 1], input.length)
      ).blockSequences;
      tokenized.push(syl);
    }
  }

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  return (
    <div>
      拍羅馬字, 輸出台灣語假名甲假名
      <label>
        <br />
        <input type="text" value={input} onChange={handleChange} />
      </label>
      {taikanaSeqs.map(x => (
        <li> {x + ' <-taikana'} </li>
      ))}
      {kanaSeqs.map(x => (
        <li> {x + ' <-kana'} </li>
      ))}
      {tokenized.map(x => (
        <li> {x + '<-tokenized'} </li>
      ))}
      {/* <li>
        indices:
        {indices.map(x => x.toString()).join(',')}
      </li>
      <li>number of initial consonants: {indices.length}</li>
      <li>previousLetter: {tmpPreviousLetter}</li>
      <li>lettersLength: {letters.length}</li>
      <li>soundSeqsLength: {soundSeqs.length}</li>
      <li>
        sliced:
        {sliced}
      </li>
      <li>characters: {characters.join(', ')}</li>
      <li>letters: {letters.join(', ')}</li>
      <li>soundSeqs: {soundSeqs}</li> */}
    </div>
  );
}

export default TokenizerPage;
