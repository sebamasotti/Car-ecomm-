import { useState } from "react";

const ItemCount = () => {
    const [counter, setCounter] = useState (0);

    const increment = () => {  
        setCounter(counter + 1);        
    }
    const decrement = () => {  
        setCounter(counter - 1);
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