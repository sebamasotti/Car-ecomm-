import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <>
        <div className="cartContainer">
            <Link to="/cart" ><ShoppingCartIcon className="cartIcon"/> </Link>            
            <p className="cartCant">2</p>
        </div>
        </>
    );
}

export default CartWidget;