import { Col, Card, Button, Badge } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

export const Item = ({item}) => {

  const {isInCart} = useContext(CartContext)

  return (
    <Col md={3} className="mb-3">
        <Card bg="secondary" border="dark">
        <Card.Img variant="top" src={item.img} className="p-3" style={{width: 300, height: 400}}/>
        <Card.Body>
            <Card.Title as={Link} to={`/products/${item.id}`}>{item.name}</Card.Title>
            {/* <Card.Text>{item.description}</Card.Text> */}
            <Card.Text><Badge pill bg="dark" className="px-1">USD {item.price}</Badge></Card.Text>
            {
              item.stock < 10 
              ? <Card.Text><Badge pill bg="danger" className="px-1">Only {item.stock} items left!</Badge></Card.Text>
              : <Card.Text> &nbsp; </Card.Text>
            }
        </Card.Body>
        <Card.Footer>
            { 
              !isInCart(item.id) 
                ? <Button className="rounded-pill" variant="primary" as={Link} to={`/products/${item.id}`}>View detail</Button>
                : <Button className="rounded-pill" variant="dark" disabled={true}>Item in Cart</Button>
            }
        </Card.Footer>
        </Card>
    </Col>
  )
}
