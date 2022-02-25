import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import { CartContext } from '../Context/CartContext';
import CheckOut from './CheckOut';
import ItemCount from './ItemCount';

const ItemDetail = (item) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    const onAdd = (counter) => {
        setItemCount(counter)
        alert("Su cantidad agregada al carrito es de: " + counter)
        test.addToCart(item, counter)
    }
    
    
    return (
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', padding: '1rem'}} className="container">
        <Card style={{padding: '0,5rem', height:'700px', width:'700px'}}>
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
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
            <CardTitle tag="h5">
                US${item.valor}
            </CardTitle>
            </CardBody>
        </Card>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin:'2rem'}}>
            {
                itemCount === 0
                ? <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                : <Link to='/cart' > <CheckOut /> </Link>
            }
        </div>
            
        </div>

    );
    
}

export default ItemDetail;