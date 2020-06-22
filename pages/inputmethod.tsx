import { Client, graphAnalyzeTonal, TonalLetterTags } from 'taipa';
import {
  initialSounds,
  nasalizationSounds,
  medialSounds,
} from 'taipa/lib/tonal/version2';
import { useState } from 'react';

let deletedLetter: string = '';
let previousLength: number = 0;
let precedingLetters: string[] = [];
let precedingLetter: string = '';
let movingForward: boolean = true; // moving backward when false

// the current index and the next one are the boundary of a token
const indices: number[] = [];

function InputMethodPage() {
  const [input, setInput] = useState('');

  const cli = new Client();
  const taTonal = cli.processTonal(input);
  const taikanaSeqs = taTonal.blockSequences.filter(x => x.length > 0);
  const taKana = cli.processKana(input);
  const kanaSeqs = taKana.blockSequences.filter(x => x.length > 0);

  const delimited: Array<string[]> = new Array();

  const letters = graphAnalyzeTonal(input).map(
    x => x.letter && x.letter.literal
  );

  const characters = input.split('');

  const soundSeqs = taTonal.soundSequences.flatMap(x =>
    x.map(y => y.toString())
  );

  // lastLetter is set before previousLetter
  const lastLetter = letters[letters.length - 1];

  if (previousLength > input.length) {
    movingForward = false;
    precedingLetters.pop();
  } else if (previousLength < input.length) {
    movingForward = true;
    precedingLetters.push(lastLetter);
  }
  previousLength = input.length;

  precedingLetter = precedingLetters[precedingLetters.length - 2]; // for debugging, logging

  let sliced;
  if (initialSounds.includes(lastLetter) && movingForward == true) {
    if (initialSounds.includes(precedingLetter)) {
      if (
        lastLetter === TonalLetterTags.ch &&
        precedingLetter === TonalLetterTags.c
      ) {
        indices.pop();
        sliced = input.slice(0, characters.length - 2);
        if (!indices.includes(input.length - 2))
          indices.push(characters.length - 2);
      } else if (
        precedingLetter === TonalLetterTags.ng &&
        initialSounds.includes(lastLetter) &&
        movingForward == true
      ) {
        indices.push(characters.length - 1);
      }
    } else {
      // if the previous letter is not an medial
      sliced = input.slice(0, characters.length - 1);
      if (!indices.includes(input.length - 1))
        indices.push(characters.length - 1);
    }
  } else if (
    nasalizationSounds.includes(lastLetter) &&
    precedingLetter === TonalLetterTags.n
  ) {
    // when an n followed by another n.
    indices.pop();
  } else if (movingForward == false && initialSounds.includes(deletedLetter)) {
    // moving backward and removed the pushed index
    indices.pop();
    if (
      initialSounds.includes(lastLetter) &&
      deletedLetter === TonalLetterTags.ng
    ) {
      // in case of letter n. when g is dropped from ng
      indices.push(characters.length - 1);
    }
  } else if (
    lastLetter === TonalLetterTags.tt &&
    (precedingLetter === TonalLetterTags.t ||
      medialSounds.includes(precedingLetter))
  ) {
    // tt is not an initial
    indices.pop();
  }

  // deleted letter is used when moving backward
  deletedLetter = lastLetter;

  if (indices.length > 0) {
    for (let i = 0, j = 1; j < indices.length; i++, j++) {
      const syl = cli.processTonal(input.slice(indices[i], indices[j]))
        .blockSequences;
      delimited.push(syl);
    }
    if (input.length - indices[indices.length - 1] > 0) {
      // the last syllable, if available
      const syl = cli.processTonal(
        input.slice(indices[indices.length - 1], input.length)
      ).blockSequences;
      delimited.push(syl);
    }
  }

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  return (
    <div>
      輸入法
      <label>
        <br />
        <input type="text" value={input} onChange={handleChange} />
      </label>
      {taikanaSeqs.map(x => (
        <li> {x + '(taikana)'} </li>
      ))}
      {kanaSeqs.map(x => (
        <li> {x + ' (kana)'} </li>
      ))}
      {delimited.map(x => (
        <li> {x + '(delimited)'} </li>
      ))}
      {/* <li>
        indices:
        {indices.map(x => x.toString()).join(',')}
      </li>
      <li>number of initial consonants: {indices.length}</li>
      <li>precedingLetter: {precedingLetter}</li>
      <li>lettersLength: {letters.length}</li>
      <li>soundSeqsLength: {soundSeqs.length}</li>
      <li>
        sliced:
        {sliced}
      </li>
      <li>characters: {characters.join(', ')}</li>
      <li>letters: {letters.join(', ')}</li>
      <li>last letters: {letters[letters.length - 1]}</li>
      <li>soundSeqs: {soundSeqs}</li> */}
    </div>
  );
}

export default InputMethodPage;
