import { Client } from 'taipa';

export const cli = new Client();

export abstract class TwCharacter {}

export class HanjiReading extends TwCharacter {
  // thokwim
  constructor(public hanji: string, public pronunciation: string) {
    super();
  }
}

export abstract class JaCharacter {}

export class KanjiReading extends JaCharacter {
  // yomikata
  constructor(public kanji: string, public pronunciation: string) {
    super();
  }
}

export class KanaCharacter extends JaCharacter {
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

export const TwSentence = (props: { hanjiReadings: TwCharacter[] }) => {
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

export const JaSentence = (props: {
  kanjiReadings: JaCharacter[];
  isKata: boolean;
}) => {
  return (
    <span>
      {props.kanjiReadings.map((it, index) =>
        it instanceof KanjiReading ? (
          <KanjiSpan
            key={index}
            characters={it.kanji}
            furigana={
              props.isKata
                ? cli.processKana(it.pronunciation).blockSequences[1]
                : cli.processKana(it.pronunciation).blockSequences[0]
            }
          />
        ) : it instanceof KanaCharacter ? (
          <KanaSpan
            key={index}
            characters={
              props.isKata
                ? cli.processKana(it.kanas).blockSequences[1]
                : cli.processKana(it.kanas).blockSequences[0]
            }
          />
        ) : (
          ''
        )
      )}
    </span>
  );
};

export const TwJaExample = (props: {
  twStrings: TwCharacter[];
  jaStrings: JaCharacter[];
}) => {
  return (
    <span>
      <TwSentence hanjiReadings={props.twStrings} />
      {'='}
      <JaSentence kanjiReadings={props.jaStrings} isKata={false} />
      {'。'}
    </span>
  );
};

export const JaMeaningWithReference = (props: {
  twString: TwCharacter[];
  jaString: JaCharacter[];
}) => {};

export const JaMeaning = (props: {
  abbreviation: string;
  meanings: Array<JaCharacter[]>;
}) => {
  return (
    <span>
      {' (' + props.abbreviation + ')'}
      {props.meanings
        .map((it, index) => (
          <JaSentence key={index} kanjiReadings={it} isKata={false} />
        ))
        .map((it, index) => (
          <span key={index}>{it}。</span>
        ))}
    </span>
  );
};

type TwJaExamplePair = [TwCharacter[], JaCharacter[]];

export const TwJaDefinition = (props: {
  abbreviation: string;
  meanings: Array<JaCharacter[]>;
  examples: Array<TwJaExamplePair>;
}) => {
  return (
    <span>
      {props.abbreviation.length > 0 ? '(' + props.abbreviation + ')' : ''}
      {props.meanings
        .map((it, index) => (
          <JaSentence key={index} kanjiReadings={it} isKata={false} />
        ))
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
  hanjiReadings: TwCharacter[];
}) => {
  return (
    <span>
      {'['}
      {props.pronunciations}
      {<TwSentence hanjiReadings={props.hanjiReadings} />}
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
