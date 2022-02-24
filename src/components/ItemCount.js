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
            <h3 className="btn btn-info disabled" style={{color: 'darkslateblue'}}>{counter}</h3>
            <div>
            <button className="btn btn-primary" style={{margin:'1rem'}} onClick={increment}>+</button>
            <button className="btn btn-primary" style={{margin:'1rem'}} onClick={decrement}>-</button>
            </div>
            <button className="btn btn-primary" onClick={() => {onAdd(counter)}}>Add to Cart</button>
        </div>
    );
}

export default ItemCount;