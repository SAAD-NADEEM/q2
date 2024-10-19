import Link from "next/link"

function Navbar():JSX.Element {

    return (
        <nav className="header-nav flex-column center">
            <h1>Navigation Bar</h1>
            <ul className="tabs flex-row center" >
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/login'>Login</Link>
                </li>
                <li>
                    <Link href='/products'>Products</Link>
                </li>
                <li>
                    <Link href='/category'>Category</Link>
                </li>
                <li>
                    <Link href='/tailwind'>Tailwind</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar