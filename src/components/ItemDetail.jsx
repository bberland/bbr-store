import { Container, Row, Col, Card } from "react-bootstrap"
import { ItemCount } from "./ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../contexts/CartContext"

export const ItemDetail = ({item}) => {
  const {addToCart, isInCart} = useContext(CartContext)
  
  const [quantity, setQuantity] = useState(1)

  const addItem = () => {
    const newItem =  {...item, quantity: quantity}
    addToCart(newItem);
  }

  return (
    <Container fluid="sm">
      <Row>
        <Col sm={10} lg={12}>
          <Card border="dark" bg="secondary">
          <Card.Img variant="top" src={item.img} className="p-3" style={{width: '100%', height: '40rem'}} />
          <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
              {
                isInCart(item.id) 
                  ? <span>Added to cart!</span>
                  : <ItemCount max={item.stock} quantity={quantity} setQuantity={setQuantity} add={addItem} />
              }
          </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}