export const Furigana = (props: { hanji: string; furigana: string }) => (
  <p>
    <ruby>
      {props.hanji}
      <rt>{props.furigana}</rt>
    </ruby>
  </p>
);
