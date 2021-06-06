import { useState } from 'react';
import {
  tonalLemmatizationAnalyzer,
  lemmatize,
  graphAnalyzeTonal,
  inflectDesinence,
  TonalSoundTags,
  TonalLetterTags,
} from 'taipa';
import { freeToneLettersTonal } from 'taipa/lib/tonal/version2';
import { TonalUncombiningForms } from 'taipa/lib/unchange/metaplasm';
import {
  getInflectionalSuffixes,
  getStems,
  getSoundSequences,
} from '../util/process';

function WordPage() {
  const [input, setInput] = useState('');

  const tla = tonalLemmatizationAnalyzer;

  const letters = graphAnalyzeTonal(input).map(
    x => x.letter && x.letter.literal
  );

  const soundSeqs = getSoundSequences(
    tla.morphAnalyze(input, new TonalUncombiningForms([])).map(x => x.sounds)
  );

  const transfix: string[] = [];
  soundSeqs
    .map(x => x[0])
    .map(y => {
      if (freeToneLettersTonal.includes(y)) transfix.push(y);
    });

  const uncombiningSeqs = tla
    .morphAnalyze(input, new TonalUncombiningForms([]))
    .map(it =>
      it
        .getForms()
        .map(it => it.literal)
        .join(', ')
    )
    .filter(it => it.length > 0);

  const lxLemma = lemmatize(input);
  const stems = getStems(lxLemma.word.literal, lxLemma.getInflectionalEnding());
  const inflectionalSuffixes = getInflectionalSuffixes(
    lxLemma.getInflectionalEnding()
  );
  const lemmas = lxLemma.getLemmas().map(x => x.literal);

  const lxInflect = inflectDesinence(input);
  const proceedingForms = lxInflect.getForms().map(x => x.literal);

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  return (
    <div>
      拍羅馬字, 輸出 lemmas, stem, inflectional suffix, proceeding forms, sound
      sequences, uncombining form sequences, 甲 letters
      <label>
        <br />
        <input type="text" value={input} onChange={handleChange} />
      </label>
      <br />
      lemmas
      {lemmas.map(x => (
        <li>{x}</li>
      ))}
      <br />
      stem
      {stems.map(x => (
        <li>{x}</li>
      ))}
      <br />
      inflectional suffix
      {inflectionalSuffixes.map(x => (
        <li>{x}</li>
      ))}
      <br />
      proceeding forms
      {proceedingForms.map(x => (
        <li>{x}</li>
      ))}
      <br />
      sound sequences
      {soundSeqs.map(x => (
        <li>{x[0] + ' - ' + x[1]}</li>
      ))}
      <br />
      transfix: {transfix.join(', ')}
      <br />
      uncombining form sequences
      {uncombiningSeqs.map(x => (
        <li>{x}</li>
      ))}
      <br />
      letters: {letters.join(', ')}
    </div>
  );
}

export default WordPage;
