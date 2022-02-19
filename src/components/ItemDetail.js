import { Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import ItemCount from './ItemCount';

const ItemDetail = ({name, modelos, img, valor}) => {

    const onAdd = (counter) => {
        console.log(counter);
        alert("Su cantidad agregada al carrito es de: " + counter)
    }
    
    return (
        <div style={{display:'flex'}}>
        <Card style={{padding: '0,5rem', height:'700px', width:'700px'}}>
            <CardBody style={{padding: '0,5rem'}} >
            <CardTitle tag="h5">
                {name}
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                {modelos}
            </CardSubtitle>
            </CardBody>
            <img style={{padding: '1rem'}}
            alt={name}
            src={img}
            height= "400"
            width="100%"
            
            />
            <CardBody style={{padding: '1rem'}}>
            <CardText  >
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
            <CardTitle tag="h5">
                {valor}
            </CardTitle>
            </CardBody>
        </Card>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </div>

    );
    
}

export default ItemDetail;