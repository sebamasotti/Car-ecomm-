import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CartWidget = () => {

    const cartCant = useContext(CartContext);   
    return (
        <>
        <div className="cartContainer">
            <Link to="/cart" ><ShoppingCartIcon className="cartIcon"/> </Link>            
            {cartCant.cartList.length >0 &&
                <div className="cartCant">{cartCant.cartCant()}</div>}
        </div>
        </>
    );
}

export default CartWidget;