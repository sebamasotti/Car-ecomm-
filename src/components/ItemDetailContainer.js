import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import loadingGif from "../assets/loading.gif";
import db from "../utils/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

    const ItemDetailContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const loadingImg = loadingGif;
    const { idItem } = useParams();

    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        }, 500);

        const firestoreFetch = async () => {
            const listadoProductos = await getDocs(collection(db, "products"));
            const dataFirestore = listadoProductos.docs.map( document => ({
                id: document.id,
                ...document.data()
            }))
            return dataFirestore;
        }
        firestoreFetch()            
        .then((catalogo) => {
            const elemfiltrado = catalogo.find(
            (item) => item.id === idItem
            );

            setProducts(elemfiltrado);
        })
        .catch((error) => console.log(error));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idItem]);

    return (
        <div className="itemListContainer">
        {loading ? (
            <img src={loadingImg} alt="cargando.." />
        ) : (
            <ItemDetail
            name={products.name}
            modelos={products.modelos}
            img={products.img}
            valor={products.valor}
            id={products.id}
            />
        )}
        </div>
    );
};

export default ItemDetailContainer;
