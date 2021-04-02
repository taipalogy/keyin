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

export const TwSentence = (props: { twString: TwCharacter[] }) => {
  return (
    <span>
      {props.twString.map((it, index) =>
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
  jaString: JaCharacter[];
  isKata: boolean;
}) => {
  return (
    <span>
      {props.jaString.map((it, index) =>
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
  twString: TwCharacter[];
  jaString: JaCharacter[];
}) => {
  return (
    <span>
      <TwSentence twString={props.twString} />
      {props.jaString.length > 0 && props.twString.length > 0 ? '=' : ''}
      <JaSentence jaString={props.jaString} isKata={false} />
      {props.jaString.length > 0 && props.twString.length > 0 ? '。' : ''}
    </span>
  );
};

export const JaEmbeddedReference = (props: { jaString: JaCharacter[] }) => {};

export const JaMeaning = (props: {
  abbreviation: string;
  meanings: Array<JaCharacter[]>;
}) => {
  return (
    <span>
      {' (' + props.abbreviation + ')'}
      {props.meanings
        .map((it, index) => (
          <JaSentence key={index} jaString={it} isKata={false} />
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
  note: string;
}) => {
  return (
    <span>
      {props.abbreviation.length > 0 ? '(' + props.abbreviation + ')' : ''}
      {props.meanings
        .map((it, index) => (
          <JaSentence key={index} jaString={it} isKata={false} />
        ))
        .map((it, index) => (
          <span key={index}>{it}。</span>
        ))}
      {props.examples.map((it, index) => (
        <TwJaExample key={index} twString={it[0]} jaString={it[1]} />
      ))}
      {props.note.length > 0 ? <Note text={props.note} /> : ''}
    </span>
  );
};

export const TwJaDefinitionReference = (props: { meaning: TwCharacter[] }) => {
  return (
    <span>
      <TwReference pronunciation={''} twStrings={[props.meaning]} />
    </span>
  );
};

export const TwReference = (props: {
  pronunciation: string;
  twStrings: Array<TwCharacter[]>;
}) => {
  return (
    <span>
      {'['}
      {cli.processTonal(props.pronunciation).blockSequences[0]}
      {props.pronunciation.length == 0
        ? props.twStrings
            .map<React.ReactNode>((it, index) => (
              <TwSentence key={index} twString={it} />
            ))
            .reduce((prev, curr) => [prev, '、', curr])
        : props.twStrings.map<React.ReactNode>((it, index) => (
            <span key={index}>
              <TwSentence key={index} twString={it} />。
            </span>
          ))}
      {']。'}
    </span>
  );
};

export const TwEntry = (props: { pronunciation: string; hanjis: string[] }) => {
  return (
    <span>
      {cli.processTonal(props.pronunciation).blockSequences[0] + ' '}
      {props.hanjis.map(it => it + '。')}
    </span>
  );
};

export const Note = (props: { text: string }) => {
  return (
    <span>
      {'('}
      {props.text}
      {')'}
    </span>
  );
};
