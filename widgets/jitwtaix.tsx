import { TwCharacter, TwSentence, JaCharacter, JaSentence } from './taizjitt';

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

type JaTwExamplePair = [JaCharacter[], Array<TwCharacter[]>];

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
        <JaSentence key={index} jaString={it[0]} isKata={true} />
      ))}
      {'」'}
      {props.examples.map(it =>
        it[1].map((it, index) => <TwSentence key={index} twString={it} />)
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

export const TwMeaning = (props: { meanings: Array<TwCharacter[]> }) => {
  return (
    <span>
      {props.meanings
        .map((it, index) => <TwSentence key={index} twString={it} />)
        .map((it, index) => (
          <span key={index}>{it}。</span>
        ))}
    </span>
  );
};

export const JaTwExample = (props: {
  jaExample: JaCharacter[];
  twExamples: Array<TwCharacter[]>;
}) => {
  return (
    <span>
      {'「'}
      <JaSentence jaString={props.jaExample} isKata={true} />
      {'」'}
      {props.twExamples.map((it, index) => (
        <TwSentence key={index} twString={it} />
      ))}
      {'。'}
    </span>
  );
};
