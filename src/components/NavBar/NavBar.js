import CartWidget from "../CartWidget/CartWidget.js";


function NavBar(){

    return(
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <h1 className="title">Karka Pilchas</h1>
                    <nav>
                    <div className="columns">

                        <ul>
                            
                        </ul>
                    </div>
                    </nav>
                    <CartWidget itemCount={0}/>
                </div>
            </section>
        </div>
    );
};

export default NavBar;