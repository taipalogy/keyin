import { Client } from 'taipa';

export class HanjiReading {
  // thokwim
  constructor(public hanji: string, public pronunciation: string) {}
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

export const SpanHanji = (props: { characters: string; furigana: string }) => (
  <ruby>
    {props.characters}
    <rt>{props.furigana}</rt>
  </ruby>
);

export const SpanKanji = (props: { characters: string; furigana: string }) => (
  <ruby>
    {props.characters}
    <rt>{props.furigana}</rt>
  </ruby>
);

export const SpanKana = (props: { characters: string }) => props.characters;

export const Example = (props: {
  hanjiReadings: HanjiReading[];
  kanjiReadings: JaString[];
}) => {
  const cli = new Client();

  return (
    <div>
      {props.hanjiReadings.map((it, index) => (
        <SpanHanji
          key={index}
          characters={it.hanji}
          furigana={cli.processTonal(it.pronunciation).blockSequences[0]}
        />
      ))}
      {'='}
      {props.kanjiReadings.map((it, index) =>
        it instanceof KanjiReading ? (
          <SpanKanji
            key={index}
            characters={it.kanji}
            furigana={cli.processKana(it.pronunciation).blockSequences[0]}
          />
        ) : it instanceof KanaString ? (
          it.kanas
        ) : (
          ''
        )
      )}
    </div>
  );
};
