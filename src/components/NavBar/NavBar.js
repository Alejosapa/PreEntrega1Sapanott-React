import CartWidget from "../CartWidget/CartWidget.js";
import { NavLink} from "react-router-dom";
import "./NavBar.css" 

function NavBar(){

    return(
        <nav>
            <section className="hero is-primary">
                <div className="hero-body">
                    <h1 className="title">Karka Pilchas</h1>
                    <NavLink to="/" className="active">Inicio</NavLink>
                    <NavLink to="/category/remeras" className="nav-link">Remeras</NavLink>
                    <NavLink to="/category/pantalones" className="nav-link">Pantalones</NavLink>
                    <NavLink to="/category/buzos" className="nav-link">Buzos</NavLink>
                    <CartWidget itemCount={0}/>
                </div>
            </section>
        </nav>
    );
};

export default NavBar;