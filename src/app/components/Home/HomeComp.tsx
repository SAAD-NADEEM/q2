import Link from "next/link";

function HomeComp(): JSX.Element {
    return (
        <>
            <section className="home-page flex-column center">
                <h1>This is The Home Page</h1>
                <div className="assignments">
                    <div className="cards">
                        <div className="card">
                            <Link href='/assignment_2'>
                                <h1>Assignment 02</h1>
                                <p>class 05</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeComp;