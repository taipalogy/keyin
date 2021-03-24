import { Client } from 'taipa';

const cli = new Client();

abstract class TwString {}

export class HanjiReading extends TwString {
  // thokwim
  constructor(public hanji: string, public pronunciation: string) {
    super();
  }
}

abstract class JaString {}

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

const TwSentence = (props: { hanjiReadings: TwString[] }) => {
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

const JaSentence = (props: { kanjiReadings: JaString[] }) => {
  return (
    <span>
      {props.kanjiReadings.map((it, index) =>
        it instanceof KanjiReading ? (
          <KanjiSpan
            key={index}
            characters={it.kanji}
            furigana={cli.processKana(it.pronunciation).blockSequences[0]}
          />
        ) : it instanceof KanaString ? (
          <KanaSpan characters={cli.processKana(it.kanas).blockSequences[0]} />
        ) : (
          ''
        )
      )}
    </span>
  );
};

export const Example = (props: {
  twStrings: TwString[];
  jaStrings: JaString[];
}) => {
  return (
    <div>
      <TwSentence hanjiReadings={props.twStrings} />
      {'='}
      <JaSentence kanjiReadings={props.jaStrings} />
    </div>
  );
};
