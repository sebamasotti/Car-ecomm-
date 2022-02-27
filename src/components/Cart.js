import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import {
Card,
CardBody,
CardTitle,
CardSubtitle,
CardText,
Button,
} from "reactstrap";
// import { Link } from "react-router-dom";

const Cart = () => {
const test = useContext(CartContext);
// console.log(test.cartList[0].id);
return (
<div style={{ padding: "1rem" }} className="container">
    <div
    style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    }}
    >
    <h2>Su Carrito: 🛒 </h2>
    {test.cartList.length > 0 ? (
        <Button
        onClick={test.deleteAllCar}
        className="btn btn-outline-danger"
        style={{ width: "50%", margin: "1rem", marginLeft: "25%" }}
        >
        Eliminar Carrito Completo
        </Button>
    ) : (
        <div
        style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            margin: "1rem",
            padding: "1rem",
        }}
        >
        <h2>Su carrito esta Vacio</h2>
        <Link
            to={"/"}
            style={{ textDecoration: "none", marginLeft: "2rem" }}
        >
            {" "}
            <Button className="btn btn-dark">Ver Productos</Button>{" "}
        </Link>
        </div>
    )}
    </div>
    {test.cartList.length !== 0 &&
    test.cartList.map((item) => (
        <Card
        key={item.id}
        style={{ padding: "0,5rem", height: "600px", width: "400px" }}
        >
        <CardBody style={{ padding: "0,5rem" }}>
            <CardTitle tag="h5">{item.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
            {item.modelos}
            </CardSubtitle>
        </CardBody>
        <img
            style={{ padding: "1rem" }}
            alt={item.name}
            src={item.img}
            height="400"
            width="100%"
        />
        <CardBody style={{ padding: "1rem" }}>
            <CardText>Usted ha seleccionado {item.counter} un.</CardText>
            <CardTitle tag="h5">Valor Unitario: US${item.valor}</CardTitle>
            <CardTitle tag="h5">
            Valor total: US${item.counter * item.valor}
            </CardTitle>
            <Button
            onClick={test.deleteItem}
            className="btn btn-outline-danger"
            style={{ width: "50%", margin: "1rem", marginLeft: "25%" }}
            >
            Eliminar
            </Button>
        </CardBody>
        </Card>
    ))}
</div>
);
};

export default Cart;
