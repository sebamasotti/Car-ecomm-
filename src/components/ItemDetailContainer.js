import { useEffect,useState } from 'react';
import data from './data';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import loadingGif from '../assets/loading.gif';

const ItemDetailContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const loadingImg = loadingGif;
    const {idITem} = useParams();

    let listado = true;

    const customFetch = (timeout, task) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (listado) {
                    resolve(task)
                } else {
                    reject("No se pudo")
                }
            }, timeout);
        },)
    }
    const IDItem = () => {
            customFetch(500, data().filter(item => item.id === parseInt(idITem)))
        .then(res => setProducts(res))
        .then(() => setLoading(false))
        .catch(error => console.log(error))     
    }

    useEffect(()=> {
        IDItem()
        console.log(idITem);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[idITem])

    return (
        <div className="itemListContainer">
        {loading ?  <img src={loadingImg} alt="cargando.." /> : 
            <ItemDetail products={products} />}
        </div>
    );
    
}

export default ItemDetailContainer;