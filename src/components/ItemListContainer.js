import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import data from "./data";
import { useParams } from "react-router-dom";
import loadingGif from "../assets/loading.gif";
import customFetch from "../helpers/helpCustomFetch";

const ItemlistContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idCategory } = useParams();
    const loadingImg = loadingGif;

    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        }, 2000);
        customFetch(2000, data)
        .then((catalogo) =>
            setProducts(
            idCategory
                ? catalogo.filter((item) => item.idCategory === idCategory)
                : catalogo
            )
        )
        .catch((error) => console.log(error));
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
