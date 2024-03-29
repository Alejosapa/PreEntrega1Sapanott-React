import { Link } from "react-router-dom";

const Item = ({id, name, img, price, stock}) => {

    return (

        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{name}</h2>
            </header>

            <picture className="ItemPicture">
                <img src={img} alt={name} className="ItemImg"/>
            </picture>

            <section className="Info">
                <p className="Price">Precio: ${price}</p>
                <p className="Stock">Stock disponible: {stock}</p>
            </section>

            <footer className="ItemFooter">
                <Link to={`/item/${id}`}>Ver detalles</Link>
            </footer>
        </article>
    );
};

export default Item;