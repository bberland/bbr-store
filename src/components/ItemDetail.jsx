import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { Container } from "react-bootstrap"

export const ItemDetail = ({product}) => {
  return (
    <Container fluid="sm">
      <Col md={3} className="mb-3">
          <Card className="border-light">
          <Card.Img variant="top" src={product.img} className="p-3" />
          <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
              <Button variant="primary">Add to cart</Button>
          </Card.Footer>
          </Card>
      </Col>
    </Container>
  )
}