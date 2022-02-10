import { useEffect,useState } from 'react';
import ItemList from './ItemList';
import data from './data';


const ItemlistContainer = () => {

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
        customFetch(2000, data)
        .then(res => setProducts(res))
        .catch(error => console.log(error))
        
    },[])

    return (
        <div className="itemlistContainer">
            <ItemList products={products} />
        </div>
    );
    
}

export default ItemlistContainer;