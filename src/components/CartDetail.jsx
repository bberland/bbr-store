import { useContext } from "react"
import { Button, Container, ListGroup } from "react-bootstrap"
import { CartContext } from "../contexts/CartContext"
import { FaTrashCan, FaBroom, FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export const CartDetail = () => {
  const {cart, removeFromCart, cleanCart, getTotalPrice} = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <Container fluid="sm">
        <div>
          <h2>Your Cart is empty 😢</h2>
          <hr />
        </div>
        <Button className="mt-3 rounded-pill" variant="primary" as={Link} to="/0/products"><FaArrowRight /> Go Shopping</Button>
      </Container>
    )
  }

  return (
    <Container fluid="sm">
      <div>
        <h2>Your Cart</h2>
        <hr />
        <ListGroup as="ol" numbered>
        {
          cart.map((item) => (
              <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" key={item.id}>
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{item.name}</div>
                  Quantity: {item.quantity}
                </div>
                <Button className="ml-3" variant="secondary" onClick={() => removeFromCart(item.id)}><FaTrashCan /></Button>
              </ListGroup.Item>
          ))
        }
        </ListGroup>
        <br />
        <Button className="mt-6 rounded-pill" variant="secondary" onClick={cleanCart}><FaBroom /> Clean Cart</Button>
      </div>
      <hr />
      <h5>Total: USD {getTotalPrice()}</h5>
      <Button className="mt-3 rounded-pill" variant="primary" as={Link} to='/checkout'><FaArrowRight /> Go to Payment</Button>
    </Container>
  )
}
