import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const Item = ({item}) => {
  return (
    <Col md={3} className="mb-3">
        <Card>
        <Card.Img variant="top" src={item.img} className="p-3" />
        <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
            <Button variant="primary">Add to cart</Button>
        </Card.Footer>
        </Card>
    </Col>
  )
}
