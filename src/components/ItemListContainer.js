import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import loadingGif from "../assets/loading.gif";
import { firestoreFetch } from "../utils/firestoreFetch";

const ItemlistContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idCategory } = useParams();
    const loadingImg = loadingGif;

    useEffect(() => {
        setLoading(false);
        firestoreFetch(idCategory)
        .then((data) =>
            setProducts(
            idCategory
                ? data.filter((item) => item.idCategory === idCategory)
                : data
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
