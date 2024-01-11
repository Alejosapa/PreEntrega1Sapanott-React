import { useState } from "react"

function ItemCount({ stock, initial, onAdd }) {
    const [quantity, setQuantity] = useState(initial);

    const sumar = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    }

    const restar = () => {
        if (quantity> 0) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className="counter">
            <div className="controls">
                <button className="button" onClick={restar} disabled={quantity === 0}>Sacar</button>
                <h3>{quantity}</h3>
                <button className="button" onClick={sumar} disabled={quantity === stock}>Agregar</button>
            </div>
            <div>
                <button className="button" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    );
}
export default ItemCount;