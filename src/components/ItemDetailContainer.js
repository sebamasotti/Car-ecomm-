import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import loadingGif from "../assets/loading.gif";
import { firestoreFetchOne } from "../helpers/firestoreFetch";

const ItemDetailContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const loadingImg = loadingGif;
    const { idItem } = useParams();

    useEffect(() => {
        setLoading(false);
        firestoreFetchOne(idItem)
        .then((result) => setProducts(result))
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
