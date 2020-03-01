import Link from 'next/link';

function Home() {
    return (
        <ul>
            <li>
                <Link href="/word">
                    <a>單語</a>
                </Link>
            </li>
            <li>
                <Link href="/replacive">
                    <a>replacive</a>
                </Link>
            </li>
            <li>
                <Link href="/additive">
                    <a>additive</a>
                </Link>
            </li>
            <li>
                <Link href="/phrasalverb">
                    <a>phrasal verb</a>
                </Link>
            </li>
            <li>
                <Link href="/surfaceform">
                    <a>surface form</a>
                </Link>
            </li>
            <li>
                <Link href="/eadjective">
                    <a>e-adjective</a>
                </Link>
            </li>
            <li>
                <Link href="/composition">
                    <a>composition</a>
                </Link>
            </li>
            <li>
                <Link href="/prediction">
                    <a>prediction</a>
                </Link>
            </li>
            <li>
                <Link href="/kana">
                    <a>kana</a>
                </Link>
            </li>
        </ul>
    );
}

export default Home;
