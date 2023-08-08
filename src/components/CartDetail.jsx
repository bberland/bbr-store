import { useContext } from "react"
import { Badge, Button, Container, ListGroup } from "react-bootstrap"
import { CartContext } from "../contexts/CartContext"

export const CartDetail = () => {
  const {cart, removeFromCart, getTotal} = useContext(CartContext)

  return (
    <Container fluid="sm">
      <div>
        <h2>Cart</h2>
        <hr />
        <ListGroup as="ol" numbered>
        {
          cart.map((item) => (
              <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" key={item.id}>
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{item.name}</div>
                  Quantity: {item.quantity}
                </div>
                <Button className="ml-3" variant="danger" onClick={() => removeFromCart(item.id)}>-</Button>
              </ListGroup.Item>
          ))
        }
        </ListGroup>
        <br />
        <Button className="mt-6" variant="danger">Clean Cart</Button>
      </div>
      <hr />
      <span>Total: USD {getTotal()}</span>
      <br />
      <Button className="mt-3" variant="primary">Go to Payment</Button>
    </Container>
  )
}
