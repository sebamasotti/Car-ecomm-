import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const CartWidget = () => {
    return (
        <>
        <div className="cartContainer">
            <ShoppingCartIcon className="cartIcon"/>
            <p className="cartCant">2</p>
        </div>
        </>
    );
}

export default CartWidget;