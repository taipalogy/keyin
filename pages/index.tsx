import Link from 'next/link';

function Home() {
  return (
    <div>
      <fieldset>
        <legend>Input Method</legend>
        <ul>
          <li>
            <a href="inputmethod">input method</a>
          </li>
          <li>
            <a href="multiwordinput">multiword input</a>
          </li>
          <li>
            <a href="candidate">candidate</a>
          </li>
        </ul>
      </fieldset>
      <fieldset>
        <legend>Metaplasm</legend>
        <ul>
          <li>
            <a href="transfixinflection">transfix inflection</a>
          </li>
          <li>
            <a href="eadjective">e-adjective</a>
          </li>
          <li>
            <a href="surfaceform">surface form</a>
          </li>
          <li>
            <a href="phrasalverb">phrasal verb</a>
          </li>
          <li>
            <a href="inflection">inflection</a>
          </li>
        </ul>
      </fieldset>
      <fieldset>
        <legend>Kana</legend>
        <ul>
          <li>
            <a href="taikana">taiwanese kana</a>
          </li>
          <li>
            <a href="kana">kana</a>
          </li>
        </ul>
      </fieldset>
      <fieldset>
        <legend>Tone Pattern</legend>
        <ul>
          <li>
            <a href="tonepattern">tone pattern</a>
          </li>
          <li>
            <a href="tonepatternwords">tone pattern - words</a>
          </li>
        </ul>
      </fieldset>
      <fieldset>
        <legend>Rhetoric</legend>
        <ul>
          <li>
            <a href="rime">rime</a>
          </li>
          <li>
            <a href="alliteration">alliteration</a>
          </li>
        </ul>
      </fieldset>
      <fieldset>
        <legend>Text</legend>
        <ul>
          <li>
            <a href="taizjitt">臺日</a>
          </li>
          <li>
            <a href="jittwtaix">日臺</a>
          </li>
          <li>
            <a href="kuaxay">歌仔</a>
          </li>
          <li>
            <a href="entries">entries</a>
          </li>
        </ul>
      </fieldset>
      <fieldset>
        <legend>Typing Practice</legend>
        <ul>
          <li>
            <a href="inputcells">input cells</a>
          </li>
          <li>
            <a href="hint">hint</a>
          </li>
        </ul>
      </fieldset>
      <fieldset>
        <legend>Word Formation</legend>
        <ul>
          <li>
            <a href="word">單語</a>
          </li>
          <li>
            <a href="suprafix">suprafix</a>
          </li>
        </ul>
      </fieldset>
      <fieldset>
        <legend>Orientation</legend>
        <ul>
          {' '}
          <li>
            <a href="orientation">orientation</a>
          </li>
        </ul>
      </fieldset>
      <fieldset>
        <legend>Others</legend>
        <ul>
          <li>
            <a href="composition">composition</a>
          </li>
          <li>
            <a href="tokenizer">羅馬字 syllable tokenizer</a>
          </li>
          <li>
            <a href="toneless">toneless</a>
          </li>
        </ul>
      </fieldset>
    </div>
  );
}

export default Home;
