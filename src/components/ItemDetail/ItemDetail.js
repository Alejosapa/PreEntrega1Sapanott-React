import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id,name,img, category,price,stock}) =>{
    
    
    return(
        <article>
            <header>
                <h2>{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="itemimg"/>
            </picture>
            <div>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    precio: ${price}
                </p>
            </div>
            <footer className="footer">
                <ItemCount initial={0} stock={stock} onAdd={(cantidad) => console.log("Agregado",cantidad)}/>
            </footer>
        </article>
    )
}

export default ItemDetail;