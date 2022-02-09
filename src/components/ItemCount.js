import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [counter, setCounter] = useState (initial);

    const increment = () => {  
        if (counter < stock) {           
        setCounter(counter + 1);     
        }    
    }
    const decrement = () => {
        if (counter >initial) {
            setCounter(counter - 1);    
        }
    }     

    return (
        <div className="contador">
            <p>{counter}</p>
            <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            </div>
            <button onClick={() => {onAdd(counter)}}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;