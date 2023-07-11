import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Item } from "./Item";


export const ItemList = ({products}) => {
  return (
    <Container fluid="md">
      <h2>Products</h2>
      <hr />
      <Row>
        { 
          products &&
          products.map((product) => ( <Item key={product.id} item={product} /> ))
        }
      </Row>
    </Container>
  );
}
