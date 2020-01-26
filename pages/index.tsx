import Link from 'next/link'

function Home() {
    return (
        <ul>
            <li>
                <Link href="/word">
                    <a>單語</a>
                </Link>
            </li>
            <li>
                <Link href="/convnounadv">
                    <a>名詞轉換副詞</a>
                </Link>
            </li>
            <li>
                <Link href="/kana">
                    <a>kana</a>
                </Link>
            </li>
        </ul>        
    )
}

export default Home