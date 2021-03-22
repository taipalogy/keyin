export const Furigana = (props: { character: string; furigana: string }) => (
  <ruby>
    {props.character}
    <rt>{props.furigana}</rt>
  </ruby>
);
