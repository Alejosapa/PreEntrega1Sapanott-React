import { useEffect , useState } from "react";
import { getProductosById } from "../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";import { useParams } from "react-router-dom";

import { getDoc, doc } from 'firebase/firestore';
import { db } from "../config/firebase";
import { Link } from "react-router-dom";

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);

        const docRef = doc(db, 'items', itemId);

        getDoc(docRef)
            .then(response => {
                if (response.exists()) {
                    const data = response.data();
                    const productAdapted = { id: response.id, ...data };
                    setProductos(productAdapted);
                } else {
                    setError("El producto no existe en Firebase.");
                }
            })
            .catch(error => {
                console.error(error);
                setError("Error al cargar el producto desde Firebase.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId]);

    if (loading) {
        return <h1>Cargando...</h1>;
    }

    if (error) {
        return (
            <div>
                <h1>Error</h1>
                <p>{error}</p>
                <Link to="/">Volver a la página de inicio</Link>
            </div>
        );
    }

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...productos} />
        </div>
    );
};

export default ItemDetailContainer;