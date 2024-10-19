import Link from "next/link";

function category() {
    return (
        <section className="home-page flex-column center">
            <h1>This is login Page</h1>
            <ul className="tabs flex-row center">
                <li>
                    <Link href='/category/crypto'>Crypto Price</Link>
                </li>
            </ul>
        </section>
    )
}

export default category