import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import loadingGif from "../assets/loading.gif";
import db from "../utils/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";


const ItemlistContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idCategory } = useParams();
    const loadingImg = loadingGif;

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
            .then(data => setProducts(
                idCategory
                ? data.filter((item) => item.idCategory === idCategory)
                : data
            )
            )
            .catch(error => console.log(error))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idCategory]);

    return (
        <div className="itemlistContainer">
        {loading ? (
            <img src={loadingImg} alt="cargando.." />
        ) : (
            <ItemList products={products} />
        )}
        </div>
    );
};
export default ItemlistContainer;
