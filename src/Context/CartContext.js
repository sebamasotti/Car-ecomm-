import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);

    const addToCart = (item) => {
        setCartList([
            ...cartList,
            {
            id: item.id,
            name: item.name,
            modelos: item.modelos, 
            img: item.img,
            valor: item.valor,
            counter: item.counter
        }])
    }

    return (  
        <CartContext.Provider value={{cartList, addToCart}} >
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;