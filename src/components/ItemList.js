import { useEffect, useState } from 'react';
import Item from './Item';
import data from './data';

const ItemList = () => {

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
        <div className="listado">
            {products.map(item => 
                <Item className ="card"
                key={item.id} 
                name={item.name} 
                modelos={item.modelos} 
                img= {item.img} />
                )}
        </div>
        
    );
    
}

export default ItemList;