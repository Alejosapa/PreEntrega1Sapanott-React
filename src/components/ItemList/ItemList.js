import Item from "../Item/Item";
import "./ItemList.css"

const ItemList = ({products}) =>{

    return(
        <div ClassName="listaProductos">
            {products.map(prod => <item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList;