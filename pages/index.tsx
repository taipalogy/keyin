import Link from 'next/link';

function Home() {
  return (
    <ul>
      <li>
        <Link href="word">
          <a>單語</a>
        </Link>
      </li>
      <li>
        <Link href="replacive">
          <a>replacive</a>
        </Link>
      </li>
      <li>
        <Link href="additive">
          <a>additive</a>
        </Link>
      </li>
      <li>
        <Link href="phrasalverb">
          <a>phrasal verb</a>
        </Link>
      </li>
      <li>
        <Link href="surfaceform">
          <a>surface form</a>
        </Link>
      </li>
      <li>
        <Link href="eadjective">
          <a>e-adjective</a>
        </Link>
      </li>
      <li>
        <Link href="composition">
          <a>composition</a>
        </Link>
      </li>
      <li>
        <Link href="prediction">
          <a>prediction</a>
        </Link>
      </li>
      <li>
        <Link href="tonepattern">
          <a>tone pattern</a>
        </Link>
      </li>
      <li>
        <Link href="tonepatternwords">
          <a>tone pattern - words</a>
        </Link>
      </li>
      <li>
        <Link href="kana">
          <a>kana</a>
        </Link>
      </li>
      <li>
        <Link href="hint">
          <a>hint</a>
        </Link>
      </li>
      <li>
        <Link href="taikana">
          <a>taiwanese kana</a>
        </Link>
      </li>
      <li>
        <Link href="daizjitt">
          <a>臺日</a>
        </Link>
      </li>
      <li>
        <a href="jittwdaix">日臺</a>
      </li>
      <li>
        <Link href="qoaxay">
          <a>歌仔</a>
        </Link>
      </li>
      <li>
        <Link href="tokenizer">
          <a>羅馬字 syllable tokenizer</a>
        </Link>
      </li>
      <li>
        <Link href="widgets">
          <a>widgets</a>
        </Link>
      </li>
    </ul>
  );
}

export default Home;
