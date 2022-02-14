import { useEffect,useState } from 'react';
import data from './data';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const [products, setProducts] = useState([]);

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

    useEffect(()=> {
        customFetch(2, data)
        .then(res => setProducts(res))
        .catch(error => console.log(error))
        
    },[])

    return (
        <div className="itemListContainer">
            <ItemDetail products={products} />
        </div>
    );
    
}

export default ItemDetailContainer;