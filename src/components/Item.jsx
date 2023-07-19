import { Col, Card, Button, Badge } from 'react-bootstrap'
import { Link } from "react-router-dom"

export const Item = ({item}) => {
  return (
    <Col md={3} className="mb-3">
        <Card bg="secondary" border="dark">
        <Card.Img variant="top" src={item.img} className="p-3" style={{width: 300, height: 400}}/>
        <Card.Body>
            <Card.Title as={Link} to={`/products/${item.id}`}>{item.name}</Card.Title>
            {/* <Card.Text>{item.description}</Card.Text> */}
            <Card.Text><Badge bg="dark" className="px-1">USD {item.price}</Badge></Card.Text>
        </Card.Body>
        <Card.Footer>
            <Button variant="primary">Add to cart</Button>
        </Card.Footer>
        </Card>
    </Col>
  )
}
