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

class Symbol implements Character {
  symbol: string = '';
}

class LeftSquareBracket extends Symbol {
  symbol: string = '[';
}

class RightSquareBracket extends Symbol {
  symbol: string = ']';
}

export class CircledIdeographFive extends Symbol {
  symbol: string = '㊄';
}

export class CircledIdeographFour extends Symbol {
  symbol: string = '㊃';
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

/** A japanese sentence with taiwanese references. */
export const JaSentence = (props: { string: Character[]; isKata: boolean }) => {
  for (let i = 0; i < props.string.length; i++) {
    if (props.string[i] instanceof HanjiReading) {
      if (i == 0) {
        props.string.splice(0, 0, new LeftSquareBracket());
      } else if (i > 0 && props.string[i - 1] instanceof JaCharacter) {
        props.string.splice(i, 0, new LeftSquareBracket());
      } else if (props.string[i + 1] instanceof JaCharacter) {
        props.string.splice(i + 1, 0, new RightSquareBracket());
      }
      if (i > 0 && i == props.string.length - 1) {
        props.string.splice(i + 1, 0, new RightSquareBracket());
      }
    }
  }

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
        ) : it instanceof HanjiReading ? (
          <HanjiSpan
            key={index}
            characters={it.hanji}
            rubi={cli.processTonal(it.pronunciation).blockSequences[0]}
          />
        ) : it instanceof Symbol ? (
          <span key={index}>{`${it.symbol}`}</span>
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

export const JaMeaning = (props: {
  abbreviation: string;
  meanings: Array<Character[]>;
}) => {
  return (
    <span>
      {' (' + props.abbreviation + ')'}
      {props.meanings
        .map((it, index) => (
          <JaSentence key={index} string={it} isKata={false} />
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
  meanings: Array<Character[]>;
  examples: Array<TwJaExamplePair>;
  note: string;
}) => {
  return (
    <span>
      {props.abbreviation.length > 0 ? '(' + props.abbreviation + ')' : ''}
      {props.meanings
        .map((it, index) => (
          // <JaSentence key={index} jaString={it} isKata={false} />
          <JaMeaning
            abbreviation={props.abbreviation}
            meanings={props.meanings}
          />
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
