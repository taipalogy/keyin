import React from 'react';
import * as Taipa from 'taipa';

export const cli = new Taipa.Client();

interface Character {}

class String {
  constructor(public chars: Character[]) {}
}

export abstract class TwCharacter implements Character {}

export class HanjiReading extends TwCharacter {
  // thokwim
  constructor(public hanji: string, public pronunciation: string) {
    super();
  }
}

export abstract class JaCharacter implements Character {}

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

abstract class Symbol implements Character {}

export class SymbolNumber extends Symbol {
  constructor(public number: string) {
    super();
  }
}

export const HanjiSpan = (props: { characters: string; rubi: string }) => (
  <ruby>
    {props.characters}
    <rt>{props.rubi}</rt>
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

export const SymbolSpan = (props: { symbol: string }) => (
  <span>{props.symbol}</span>
);

export const TwSentence = (props: { twString: TwCharacter[] }) => {
  return (
    <span>
      {props.twString.map((it, index) =>
        it instanceof HanjiReading ? (
          <HanjiSpan
            key={index}
            characters={it.hanji}
            rubi={cli.processTonal(it.pronunciation).blockSequences[0]}
          />
        ) : (
          ''
        )
      )}
    </span>
  );
};

export const Symbols = (props: { symbols: Symbol[] }) => {
  return (
    <span>
      {props.symbols.map((it, index) =>
        it instanceof SymbolNumber ? (
          <SymbolSpan key={index} symbol={it.number} />
        ) : (
          ''
        )
      )}
    </span>
  );
};

/** A japanese sentence with taiwanese references. */
export const JaSentence = (props: {
  string: JaCharacter[];
  isKata: boolean;
}) => {
  return (
    <span>
      {props.string.map((it, index) =>
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
      <JaSentence string={props.jaString} isKata={false} />
      {props.jaString.length > 0 && props.twString.length > 0 ? '。' : ''}
    </span>
  );
};

export const JaMeaningReference = (props: { meaning: Array<Character[]> }) => {
  return (
    <span>
      {props.meaning.map((it, index) =>
        it[0] && it[0] instanceof TwCharacter ? (
          <TwReference key={index} twStrings={[it]} pronunciation={''} />
        ) : it[0] && it[0] instanceof JaCharacter ? (
          <JaSentence key={index} string={it} isKata={false} />
        ) : it[0] && it[0] instanceof Symbol ? (
          <Symbols key={index} symbols={it} />
        ) : (
          ''
        )
      )}
      {'。'}
    </span>
  );
};

export const JaMeaning = (props: {
  abbreviation: string;
  meanings: Array<JaCharacter[]>;
}) => {
  return (
    <span>
      {props.abbreviation.length > 0 ? ' (' + props.abbreviation + ')' : ''}
      {props.meanings
        .map((it, index) =>
          it[0] && it[0] instanceof JaCharacter ? (
            <JaSentence key={index} string={it} isKata={false} />
          ) : (
            ''
          )
        )
        .map((it, index) => (
          <span key={index}>{it}。</span>
        ))}
    </span>
  );
};

type TwJaExamplePair = [TwCharacter[], JaCharacter[]];

export const TwJaDefinitionReference = (props: {
  meaning: Array<Character[]>;
}) => {
  return (
    <span>
      {props.meaning.map((it, index) =>
        it[0] && it[0] instanceof JaCharacter ? (
          <JaSentence key={index} string={it} isKata={false} />
        ) : it[0] && it[0] instanceof TwCharacter ? (
          <TwReference key={index} pronunciation={''} twStrings={[it]} />
        ) : it[0] && it[0] instanceof Symbol ? (
          <Symbols key={index} symbols={it} />
        ) : (
          ''
        )
      )}
      {'。'}
    </span>
  );
};

export const TwJaDefinition = (props: {
  abbreviation: string;
  meanings: Array<Character[]>;
  examples: Array<TwJaExamplePair>;
  note: string;
}) => {
  return (
    <span>
      {props.meanings.map((it, index) => (
        <JaMeaning abbreviation={props.abbreviation} meanings={[it]} />
      ))}
      {props.examples.map((it, index) => (
        <TwJaExample key={index} twString={it[0]} jaString={it[1]} />
      ))}
      {props.note.length > 0 ? <Note text={props.note} /> : ''}
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
      {']'}
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
