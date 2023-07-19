import { Container, Row, Col, Card, Button } from "react-bootstrap"

export const ItemDetail = ({product}) => {
  return (
    <Container fluid="sm">
      <Row>
        <Col sm={10} lg={12}>
          <Card border="dark" bg="secondary">
          <Card.Img variant="top" src={product.img} className="p-3" style={{width: '100%', height: '40rem'}} />
          <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
              <Button variant="primary">Add to cart</Button>
          </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}