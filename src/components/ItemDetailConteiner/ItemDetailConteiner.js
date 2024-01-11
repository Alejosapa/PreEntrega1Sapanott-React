import { useEffect , useState } from "react";
import { getProductosById } from "../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";import { useParams } from "react-router-dom";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const ItemDetailContainer = () =>{
    const [productos, setProductos] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(() =>{
        setLoading(true)

        const docRef = doc(db,'products', itemId)

            getDoc(docRef)
                .then(Response =>{
                    const data= Response.data()
                    const productsAdapted = {id: Response.id, ...data}
                    setProductos(productsAdapted)
                })
                .catch(error =>{
                    console.error(error)
                })
                .finally(()=>{
                    setLoading(false)
                })
    }, [itemId])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...productos}/>
        </div>
    )
}

export default ItemDetailContainer;