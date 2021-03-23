import { Client } from 'taipa';

abstract class Block {}

export class HanjiReading extends Block {
  // thokwim
  constructor(public hanji: string, public pronunciation: string) {
    super();
  }
}

export class KanjiReading extends Block {
  // yomikata
  constructor(public kanji: string, public pronunciation: string) {
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
  kanjiReadings: KanjiReading[];
}) => {
  const cli = new Client();

  return (
    <div>
      {props.hanjiReadings.map(it => (
        <SpanHanji
          characters={it.hanji}
          furigana={cli.processTonal(it.pronunciation).blockSequences[0]}
        />
      ))}
      {'='}
      {props.kanjiReadings.map(it => (
        <SpanHanji
          characters={it.kanji}
          furigana={cli.processKana(it.pronunciation).blockSequences[0]}
        />
      ))}
    </div>
  );
};
