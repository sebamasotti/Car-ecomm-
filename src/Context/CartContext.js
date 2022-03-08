import { createContext, useState} from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    // useEffect(() => {
    //     console.log(cartList);
    // }, [cartList]);

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
    const deleteItem = (id) => {
        let result = cartList.filter(itemFil => itemFil.id !== id);
        setCartList(result);
    };
    const deleteAllCar = () => {
        setCartList([]);
    };

    const cartCant = () => {
        let cant = cartList.map((item) => item.counter);
        return cant.reduce((previus, current) => previus + current, 0);
    };
    const calcTotalItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].valor * cartList[index].counter; 
    }
    const calcSubTotal = () => {
        let totalItem = cartList.map((item => calcTotalItem(item.idItem)));
        return totalItem.reduce((previusValue, currentValue) => previusValue + currentValue);
    }

    const taxes = () => {
        return calcSubTotal() * 0.21;
    }

    const calcTotal= () => {
        return calcSubTotal();
    }

    return (
        <CartContext.Provider
        value={{ cartList, addToCart, deleteItem, deleteAllCar, cartCant, calcSubTotal, calcTotalItem, taxes, calcTotal }}
        >
        {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
