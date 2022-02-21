import { useEffect, useState } from "react";
import data from "./data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import loadingGif from "../assets/loading.gif";
import customFetch from "../helpers/helpCustomFetch";

    const ItemDetailContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const loadingImg = loadingGif;
    const { idItem } = useParams();

    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        }, 2000);
        customFetch(2000, data)
        .then((catalogo) => {
            const elemfiltrado = catalogo.find(
            (item) => item.id === parseInt(idItem)
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
            />
        )}
        </div>
    );
};

export default ItemDetailContainer;
