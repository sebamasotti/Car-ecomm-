import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    useEffect(() => {
        console.log(cartList);
    }, [cartList]);

    const addToCart = (item, counter) => {
        const inCart = cartList.find(
        (productInCart) => productInCart.id === item.id
        );
        if (inCart) {
        setCartList(
            cartList.map((productInCart) => {
            if (productInCart.id === item.id) {
                return { ...inCart, counter: inCart.counter + counter };
            } else return productInCart;
            })
        );
        } else {
        setCartList([
            ...cartList,
            {
            id: item.id,
            name: item.name,
            modelos: item.modelos,
            img: item.img,
            valor: item.valor,
            counter: counter,
            },
        ]);
        }
    };
    const deleteItem = (item) => {
        const inCart = cartList.find(
        (productInCart) => productInCart.id === item.id
        );
        if (inCart.counter === 1) {
        setCartList(
            cartList.filter((productInCart) => productInCart.id !== item.id)
        );
        } else {
        setCartList((productInCart) => {
            if (productInCart.id === item.id) {
            return { ...inCart, counter: inCart.counter - 1 };
            } else {
            return productInCart;
            }
        });
        }
    };
    const deleteAllCar = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{ cartList, addToCart, deleteItem, deleteAllCar }}>
        {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
