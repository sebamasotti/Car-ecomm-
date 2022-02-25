import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink } from 'reactstrap';
import { Link} from 'react-router-dom';

export default function Item({name, modelos, img, valor, id}) {
    return(

        <div>
        <Card style={{padding: '0,5rem'}}>
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
            height= "200"
            width="100%"
            
            />
            <CardBody style={{padding: '1rem'}}>
            <CardText  >
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
            <CardTitle tag="h5">
                US${valor}
            </CardTitle>
            <CardLink style={{textDecoration: 'none'}} >
            <Link to={`/item/${id}`} style={{textDecoration: 'none'}}>Detalles del Producto</Link> 
                
            </CardLink>
            </CardBody>
        </Card>
        </div>

    )
}