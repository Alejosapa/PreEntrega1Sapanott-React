import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Timestamp } from "firebase/firestore";
import { collection, addDoc} from "firebase/firestore";
import { db } from "../config/firebase";
import CheckoutForm from "../CheckoutForm/CheckoutForm";


const Checkout = () =>{
    const [ loading , setLoading ] = useState(false)
    const [ orderId , setOrderId ] = useState("")

    const { cart , total , clearCart } = useContext(CartContext)

    const crearOrder = async ({nombre, telefono, email})=>{
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    nombre,telefono,email
                },
                Items : cart,
                total : total(),
                date : Timestamp.fromDate(new Date())
            }
            const orderRef = collection(db, "order")
            const orderAdded = await addDoc(orderRef, objOrder)
            setOrderId(orderAdded.id)
            clearCart()
        } catch (error) {
            console.log(error)
        } finally{
            setLoading(false)
        }
            
        
    }

    if(loading){
        return <h1>Se esta generando su orden...</h1>
    }

    if(orderId){
        return <h1>El id de su orden es: {orderId}</h1>
    }

    return(
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirmado={crearOrder}/>
        </div>
    )


}

export default Checkout;