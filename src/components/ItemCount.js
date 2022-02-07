import { useState } from "react";

const ItemCount = () => {
    const [counter, setCounter] = useState (0);

    let stock;

    const increment = () => {  
        stock= 5;
        if (counter - stock) {           
        setCounter(counter + 1);     
        }    
    }
    const decrement = () => {  
        stock=0;
        if (counter + stock) {
            setCounter(counter - 1);    
        }
    }     

    return (
        <div className="contador">
            <p>{counter}</p>
            <div>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
            </div>
        </div>
    );
}

export default ItemCount;