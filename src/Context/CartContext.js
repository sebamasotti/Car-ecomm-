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
        let result =cartList.filter(itemFil => itemFil.id !== item.id);
        setCartList(result);
        console.log("Clicked", result);
    };
    const deleteAllCar = () => {
        setCartList([])
    }

    const cartCant = () => {
        let cant = cartList.map(item => item.counter)
        return cant.reduce(((previus,current) => previus + current), 0)
    }

    return (
        <CartContext.Provider value={{ cartList, addToCart, deleteItem, deleteAllCar, cartCant }}>
        {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
