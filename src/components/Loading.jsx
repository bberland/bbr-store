import { Container, Spinner } from 'react-bootstrap'

export const Loading = () => {
  return (
    <div>
      <Container md="true">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    </div>
  )
}
