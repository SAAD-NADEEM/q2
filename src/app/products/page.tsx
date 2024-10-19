import Link from "next/link"

function products() {

    return (
        <section className="home-page flex-column center">
            <h1>Products</h1>
            <ul className="tabs flex-row center">
                <li>
                    <Link href='/products/product1'>Product 1</Link>
                </li>
            </ul>
        </section>
    )
}

export default products