import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';

const Cart = () => {

    const test = useContext(CartContext);
    console.log(test.cartList);
    return ( 
        <div style={{padding: '1rem'}} className="container">
            <h2>Su Carrito: 🛒 </h2>
        {
        test.cartList.length !==0 && (
            test.cartList.map(item => (
                <Card key={item.id} style={{padding: '0,5rem', height:'700px', width:'700px'}}>
                <CardBody style={{padding: '0,5rem'}} >
                <CardTitle tag="h5">
                    {item.name}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    {item.modelos}
                </CardSubtitle>
                </CardBody>
                <img style={{padding: '1rem'}}
                alt={item.name}
                src={item.img}
                height= "400"
                width="100%"
                
                />
                <CardBody style={{padding: '1rem'}}>
                <CardText  >
                    Usted ha seleccionado {item.counter} un. 
                </CardText>
                <CardTitle tag="h5">
                    Valor Unitario: {item.valor}
                </CardTitle>
                <CardTitle tag="h5" >
                    Valor total: 
                </CardTitle>
                </CardBody>
            </Card>

            ))
            
        )
            
        }
        </div>
    );
}

export default Cart;