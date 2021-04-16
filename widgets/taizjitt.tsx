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

export class KatakanaCharacter extends JaCharacter {
  constructor(public kanas: string) {
    super();
  }
}

abstract class SymbolCharacter implements Character {}

export class Symbol extends SymbolCharacter {
  constructor(public symbol: string) {
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

export const Symbols = (props: { symbols: SymbolCharacter[] }) => {
  return (
    <span>
      {props.symbols.map((it, index) =>
        it instanceof Symbol ? (
          <SymbolSpan key={index} symbol={it.symbol} />
        ) : (
          ''
        )
      )}
    </span>
  );
};

/** A japanese sentence with taiwanese references. */
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
        ) : it instanceof KatakanaCharacter ? (
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
  twString: TwCharacter[];
  jaString: Array<Character[]>;
}) => {
  return (
    <span>
      <TwSentence twString={props.twString} />
      {props.jaString.length > 0 && props.twString.length > 0 ? '=' : ''}
      {props.jaString.map((it, index) =>
        it[0] && it[0] instanceof JaCharacter ? (
          <JaSentence key={index} jaString={it} isKata={false} />
        ) : it[0] && it[0] instanceof SymbolCharacter ? (
          <Symbols key={index} symbols={it} />
        ) : (
          ''
        )
      )}
      {props.jaString.length > 0 && props.twString.length > 0 ? '。' : ''}
    </span>
  );
};

export const JaMeaningReference = (props: {
  abbreviations: string[];
  meaning: Array<Character[]>;
}) => {
  return (
    <span>
      {props.abbreviations.length > 0 && props.abbreviations[0].length > 0
        ? props.abbreviations.map(it => ' (' + it + ')')
        : ''}
      {props.meaning.map((it, index) =>
        it[0] && it[0] instanceof TwCharacter ? (
          <TwReference key={index} twStrings={[it]} pronunciation={''} />
        ) : it[0] && it[0] instanceof JaCharacter ? (
          <JaSentence key={index} jaString={it} isKata={false} />
        ) : it[0] && it[0] instanceof SymbolCharacter ? (
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
  abbreviations: string[];
  meaning: Array<JaCharacter[]>;
}) => {
  return (
    <span>
      {props.abbreviations.length > 0 && props.abbreviations[0].length > 0
        ? props.abbreviations.map(it => ' (' + it + ')')
        : ''}
      {props.meaning.map((it, index) =>
        it[0] && it[0] instanceof JaCharacter ? (
          <JaSentence key={index} jaString={it} isKata={false} />
        ) : it[0] && it[0] instanceof TwCharacter ? (
          <TwReference key={index} pronunciation={''} twStrings={[it]} />
        ) : it[0] && it[0] instanceof SymbolCharacter ? (
          <Symbols key={index} symbols={it} />
        ) : (
          ''
        )
      )}
      {'。'}
    </span>
  );
};

type TwJaExamplePair = [TwCharacter[], Array<Character[]>];

export const TwJaDefinitionReference = (props: {
  number: Symbol;
  meaning: Array<Character[]>;
}) => {
  return (
    <span>
      {<Symbols symbols={[props.number]} />}
      {props.meaning.map((it, index) =>
        it[0] && it[0] instanceof JaCharacter ? (
          <JaSentence key={index} jaString={it} isKata={false} />
        ) : it[0] && it[0] instanceof TwCharacter ? (
          <TwReference key={index} pronunciation={''} twStrings={[it]} />
        ) : it[0] && it[0] instanceof SymbolCharacter ? (
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
  number: Symbol;
  abbreviations: string[];
  meanings: Array<Character[]>;
  examples: Array<TwJaExamplePair>;
}) => {
  return (
    <span>
      {props.meanings.map((it, index) => (
        <JaMeaning
          key={index}
          abbreviations={props.abbreviations}
          meaning={[it]}
        />
      ))}
      {props.examples.map((it, index) => (
        <TwJaExample key={index} twString={it[0]} jaString={it[1]} />
      ))}
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

export const TwEntry = (props: {
  pronunciations: string[];
  hanjis: string[];
}) => {
  return (
    <span>
      {props.pronunciations.map(
        it => cli.processTonal(it).blockSequences[0] + ' '
      )}
      {props.hanjis.map(it => it + '。')}
    </span>
  );
};
/*
export const Note = (props: { text: string }) => {
  return (
    <span>
      {'('}
      {props.text}
      {')'}
    </span>
  );
};
*/
