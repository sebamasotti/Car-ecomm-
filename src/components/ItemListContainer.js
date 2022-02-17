import { useEffect,useState } from 'react';
import ItemList from './ItemList';
import data from './data';
import { useParams } from 'react-router-dom';
import loadingGif from '../assets/loading.gif';

const ItemlistContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {idCategory} = useParams();
    const loadingImg = loadingGif;

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
    const category = () => {
        if (idCategory === undefined) {
            customFetch(2000, data)
        .then(res => setProducts(res))
        .then(() => setLoading(false))
        .catch(error => console.log(error))
        } else {
            customFetch(500, data().filter(item => item.idCategory === idCategory))
        .then(res => setProducts(res))
        .then(() => setLoading(false))
        .catch(error => console.log(error))
        }          
    }

    useEffect(()=> {
        category()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[idCategory])
    
    return (
        <div className="itemlistContainer">
            {loading ?  <img src={loadingImg} alt="cargando.." /> : 
            <ItemList  products={products}/>}           
        </div>
    );
    
}
export default ItemlistContainer;