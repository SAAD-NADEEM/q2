import Logo from "./Logo";
import Navbar from "./Navbar";

function Header(): JSX.Element {
    return (
        <header className="header-home flex-column">
            <div className="top flex-row">
                <Logo />
                <Navbar />
            </div>
            <div className="bottom"><p>Crafted with Next.js & Tailwind - where performance meets style.</p></div>
        </header>
    );
};

export default Header;