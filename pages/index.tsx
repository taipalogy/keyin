import Link from 'next/link'

function Home() {
    return (
        <ul>
            <li>
                <Link href="/lurzmafjiz">
                    <a>台語</a>
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