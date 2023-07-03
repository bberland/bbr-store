import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

export const ItemListContainer = () => {
  return (
    <Container fluid='md'>
      <h2>Best Sellers</h2>
      <Row className='mb-2'>
        <Col>
          <Card>
            <Card.Body>Item Test #1.</Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='mb-2'>
        <Col>
          <Card>
            <Card.Body>Item Test #2.</Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='mb-2'>
        <Col>
          <Card>
            <Card.Body>Item Test #3.</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
