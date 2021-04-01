import { Client } from 'taipa';

export const cli = new Client();

export abstract class TwString {}

export class HanjiReading extends TwString {
  // thokwim
  constructor(public hanji: string, public pronunciation: string) {
    super();
  }
}

export abstract class JaString {}

export class KanjiReading extends JaString {
  // yomikata
  constructor(public kanji: string, public pronunciation: string) {
    super();
  }
}

export class KanaString extends JaString {
  constructor(public kanas: string) {
    super();
  }
}

export const HanjiSpan = (props: { characters: string; furigana: string }) => (
  <ruby>
    {props.characters}
    <rt>{props.furigana}</rt>
  </ruby>
);

export const KanjiSpan = (props: { characters: string; furigana: string }) => (
  <ruby>
    {props.characters}
    <rt>{props.furigana}</rt>
  </ruby>
);

export const KanaSpan = (props: { characters: string }) => (
  <span>{props.characters}</span>
);

export const TwSentence = (props: { hanjiReadings: TwString[] }) => {
  return (
    <span>
      {props.hanjiReadings.map((it, index) =>
        it instanceof HanjiReading ? (
          <HanjiSpan
            key={index}
            characters={it.hanji}
            furigana={cli.processTonal(it.pronunciation).blockSequences[0]}
          />
        ) : (
          ''
        )
      )}
    </span>
  );
};

export const JaSentence = (props: { kanjiReadings: JaString[] }) => {
  return (
    <span>
      {props.kanjiReadings.map((it, index) =>
        it instanceof KanjiReading ? (
          <KanjiSpan
            key={index}
            characters={it.kanji}
            furigana={cli.processKana(it.pronunciation).blockSequences[1]}
          />
        ) : it instanceof KanaString ? (
          <KanaSpan
            key={index}
            characters={cli.processKana(it.kanas).blockSequences[1]}
          />
        ) : (
          ''
        )
      )}
    </span>
  );
};

export const TwJaExample = (props: {
  twStrings: TwString[];
  jaStrings: JaString[];
}) => {
  return (
    <span>
      <TwSentence hanjiReadings={props.twStrings} />
      {'='}
      <JaSentence kanjiReadings={props.jaStrings} />
      {'。'}
    </span>
  );
};

export const JaMeaning = (props: {
  abbreviation: string;
  meanings: Array<JaString[]>;
}) => {
  return (
    <span>
      {' (' + props.abbreviation + ')'}
      {props.meanings
        .map((it, index) => <JaSentence key={index} kanjiReadings={it} />)
        .map((it, index) => (
          <span key={index}>{it}。</span>
        ))}
    </span>
  );
};

type TwJaExamplePair = [TwString[], JaString[]];

export const TwJaDefinition = (props: {
  abbreviation: string;
  meanings: Array<JaString[]>;
  examples: Array<TwJaExamplePair>;
}) => {
  return (
    <span>
      {props.abbreviation.length > 0 ? '(' + props.abbreviation + ')' : ''}
      {props.meanings
        .map((it, index) => <JaSentence key={index} kanjiReadings={it} />)
        .map((it, index) => (
          <span key={index}>{it}。</span>
        ))}
      {props.examples.map((it, index) => (
        <TwJaExample key={index} twStrings={it[0]} jaStrings={it[1]} />
      ))}
    </span>
  );
};

export const TwReference = (props: {
  pronunciations: string[];
  hanjis: string[];
}) => {
  return (
    <span>
      {'['}
      {props.pronunciations.join('。')}
      {']。'}
    </span>
  );
};

export const TwEntry = (props: { pronunciation: string; hanji: string }) => {
  return (
    <span>
      {cli.processTonal(props.pronunciation).blockSequences[0] +
        ' ' +
        props.hanji}
      {'。'}
    </span>
  );
};
