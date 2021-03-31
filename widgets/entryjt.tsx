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

export const JaDefinition = (props: {
  abbreviation: string;
  meanings: Array<TwString[]>;
  reference: string;
}) => {
  return <span></span>;
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
  jaStrings: JaString[];
  twStrings: TwString[];
}) => {
  return (
    <span>
      {'「'}
      <JaSentence kanjiReadings={props.jaStrings} />
      {'」'}
      <TwSentence hanjiReadings={props.twStrings} />
      {'。'}
    </span>
  );
};
