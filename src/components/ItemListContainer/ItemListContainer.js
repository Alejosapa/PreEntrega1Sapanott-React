
import { useState , useEffect} from "react";
import { getProducts, getProductsByCategory} from "../components/asyncMock.js";
import ItemList from "../components/ItemList/ItemList.js";
import { useParams } from "react-router-dom";

function ItemListContainer({greeting}){

    const [products , setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(()=>{

        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId).then(response =>{setProducts(response)})
        .catch(error =>{console.error(error)})
            
    },[categoryId])

    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    );
};

export default ItemListContainer;