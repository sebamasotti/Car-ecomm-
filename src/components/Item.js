import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

export default function Item({name, modelos, img}) {
    return(

        <div>
        <Card>
            <CardBody>
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
            <img
            alt={name}
            src={img}
            height= "500px"
            width="100%"
            />
            <CardBody>
            <CardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
                Some quick example text to build on the card title and make up the bulk of the card's content.
                Some quick example text to build on the card title and make up the bulk of the card's content.
                ...BUY NOW!!
            </CardText>
            </CardBody>
        </Card>
        </div>

    )
}