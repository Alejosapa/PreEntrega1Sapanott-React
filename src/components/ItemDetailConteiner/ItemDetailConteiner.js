import { useEffect , useState } from "react"
import { getProductosById } from "../AsyncMock/AsyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"




const ItemDetailContainer = () =>{
    const [productos, setProductos] = useState(null)

    const {itemId} = useParams()

    useEffect(() =>{
        getProductosById(itemId)
            .then(Response =>{
                setProductos(Response)
            })
            .catch(error =>{
                console.error(error)
            })

    }, [itemId])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...productos}/>
        </div>
    )
}

export default ItemDetailContainer;