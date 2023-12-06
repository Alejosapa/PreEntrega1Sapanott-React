
import CartWidget from "./components/CartWidget";

function NavBar(){

    return(
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <h1 className="title">Karka Pilchas</h1>
                    <nav>
                    <div className="columns">
                        <ul>
                            <li className="column is-4"><a href="ll">Ropa</a></li>
                            <li className="column is-4"><a href="ll">Acerca de nosotros</a></li>
                            <li className="column is-4"><a href="ll">Contactanos</a></li>
                        </ul>
                        <CartWidget className="column is-4"/>
                    </div>
                    </nav>
                </div>
            </section>
        </div>
    );
};

export default NavBar;