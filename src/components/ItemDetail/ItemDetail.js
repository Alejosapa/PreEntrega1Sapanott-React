import ItemCount from "../ItemCount/ItemCount"
import {useContext, useState} from 'react';
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, img, category, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const Item = {id, name, price};

        addItem(Item, quantity);
    };

    return (
        <article>
            <header>
                <h2>{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="itemImg" />
            </picture>
            <div>
                <p>Categoría: {category}</p>
                <p>Precio: ${price}</p>
            </div>
            <footer className="footer">
                {quantityAdded > 0 ? (
                    <Link to='/cart' className="option">Terminar compra</Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                )}
            </footer>
        </article>
    );
}

export default ItemDetail;