import { useState } from "react"



function ItemCount({stock, initial, onAdd}) {
    const  [cantidad, setCantidad] = useState(initial)

    function sumar(){
        if(cantidad < stock){
            setCantidad(cantidad+1)
        }
        
    }
    function restar(){
        if(cantidad > 1){
            setCantidad(cantidad-1)
        }
        
    }

    return(
        <div className="counter">
            <div className="controls">
                <button className="button" onClick={sumar}>-</button>
                <h3>{cantidad}</h3>
                <button className="button" onClick={restar}>+</button>
            </div>
            <div>
                <button className="button" onClick={()=> onAdd(cantidad)} disabled = {!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}
export default ItemCount;