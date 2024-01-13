import React from "react";
import { useContext } from "react";
import CartContext from '../../context/CartContext';



const CartItem = ({ item }) =>{
    const { removeItem } = useContext(CartContext)

    return(
        <div>
            <div className="carrito">
                <h2>
                    {item.name}
                </h2>  
                <p>
                    Cantidad: {item.cantidad}
                </p>
                <p>
                    Subtotal: {item.cantidad * item.price}
                </p>
                <button className="button" onClick={()=> removeItem(item.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default CartItem;