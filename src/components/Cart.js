import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { collection, serverTimestamp, setDoc, doc } from "firebase/firestore";
import db from "../utils/firebaseConfig";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    } from "reactstrap";

const Cart = () => {
    const test = useContext(CartContext);

    const createOrder = () => {
        let order = {
            buyer: {
                name: "sebastian",
                email: "seba@seba.com",
                phone: "12345678",
            },
            date: serverTimestamp(),
            item: test.cartList.map((it) => {
                return { id: it.id, price: it.valor, title: it.name, cant: it.counter };
            }),
            total: test.calcTotal(),
        };

        const createOrderFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        };

        createOrderFirestore()
        .then((info) => {
            test.deleteAllCar();
        })
        .catch((error) => console.log(error));
    };

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
        <div
            style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            padding: "1rem",
            }}
        >
        <div>
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
                <CardTitle tag="h5">
                    Valor Unitario: US${item.valor}
                </CardTitle>
                <CardTitle tag="h5">
                    Valor total: US${item.counter * item.valor}
                </CardTitle>
                <Button
                    onClick={() => test.deleteItem(item.id)}
                    className="btn btn-outline-danger"
                    style={{ width: "50%", margin: "1rem", marginLeft: "25%" }}
                >
                    Eliminar
                </Button>
                </CardBody>
            </Card>
            ))}
        </div>

        <div style={{ margin: "1rem", padding: "1rem" }}>
        {test.cartList.length > 0 && (
            <div>
            <Card className="text-white bg-dark" style={{ height: "400px" }}>
                <CardBody>
                <CardTitle
                    tag="h1"
                    style={{ margin: "2rem", textAlign: "center" }}
                >
                    ORDER
                </CardTitle>
                <CardTitle tag="h5">
                    Sub Total: US$ {test.calcSubTotal()}{" "}
                </CardTitle>
                <CardTitle tag="h5">Taxes: US$ {test.taxes()} </CardTitle>
                <CardTitle tag="h5" style={{ marginTop: "2rem" }}>
                    Total: US$ {test.calcTotal() + test.taxes()}{" "}
                </CardTitle>
                </CardBody>
                <Button
                onClick={createOrder}
                className="btn btn-dark"
                style={{ margin: "2rem" }}
                >
                Check Out
                </Button>
            </Card>
            </div>
            )}
            </div>
        </div>
        </div>
    );
};

export default Cart;
