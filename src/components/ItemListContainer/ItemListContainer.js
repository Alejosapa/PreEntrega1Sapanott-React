
import { useState , useEffect} from "react";
import { getProductosByCategoria as getProductsByCategory, getProducts } from "../asyncMock.js";
import ItemList from "../ItemList/ItemList.js";
import { useParams } from "react-router-dom";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db} from "../config/firebaseConfig";

function ItemListContainer({greeting}){

    const [products , setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(()=>{

        const collectionRef = categoryId
            ? query(collection(db, "items"),where("category", "==",categoryId ))
            : collection(db, "items")

        getDocs(collectionRef)
            .then(Response=>{
                const productsAdapted = Response.docs.map(doc=>{
                    const data = doc.data()
                    return { id:doc.id, ...data }
                })
                setProducts(productsAdapted)
            })
            .catch(error=>{
                console.log(error)
            })
            
    }, [categoryId])

    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    );
};

export default ItemListContainer;