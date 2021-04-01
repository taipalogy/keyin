import { TwString, TwSentence, JaString, JaSentence } from './entry';

export const JaEntry = (props: {
  pronunciationKata: string; // katakana
  pronunciationHira: string; // hiragana
  abbreviation: string;
  kanji: string;
}) => {
  return (
    <span>
      {props.pronunciationKata}
      {props.pronunciationHira.length > 0
        ? '(' + props.pronunciationHira + ')'
        : ''}
      {' (' + props.abbreviation + ')' + props.kanji}
      {'。'}
    </span>
  );
};

type JaTwExamplePair = [JaString[], Array<TwString[]>];

export const JaTwDefinition = (props: {
  abbreviation: string;
  examples: Array<JaTwExamplePair>;
  references: string[];
}) => {
  return (
    <span>
      {'◉'}
      {props.abbreviation.length > 0 ? '(' + props.abbreviation + ')' : ''}
      {'「'}
      {props.examples.map((it, index) => (
        <JaSentence key={index} kanjiReadings={it[0]} />
      ))}
      {'」'}
      {props.examples.map(it =>
        it[1].map((it, index) => <TwSentence key={index} hanjiReadings={it} />)
      )}
      {'。'}
    </span>
  );
};

export const JaReference = (props: { pronunciations: string[] }) => {
  return (
    <span>
      {'['}
      {props.pronunciations.join('。')}
      {']。'}
    </span>
  );
};

export const TwMeaning = (props: { meanings: Array<TwString[]> }) => {
  return (
    <span>
      {props.meanings
        .map((it, index) => <TwSentence key={index} hanjiReadings={it} />)
        .map((it, index) => (
          <span key={index}>{it}。</span>
        ))}
    </span>
  );
};

export const JaTwExample = (props: {
  jaExample: JaString[];
  twExamples: Array<TwString[]>;
}) => {
  return (
    <span>
      {'「'}
      <JaSentence kanjiReadings={props.jaExample} />
      {'」'}
      {props.twExamples.map((it, index) => (
        <TwSentence key={index} hanjiReadings={it} />
      ))}
      {'。'}
    </span>
  );
};
