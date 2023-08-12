import { Container, Row } from 'react-bootstrap'
import { Item } from "./Item"


export const ItemList = ({products, categoryId}) => {
  return (
    <div>
      <Container fluid="sm">
        {
          categoryId == 0 
            ? <h2>Products 📚</h2>
            : <h2>Category {categoryId} 📚</h2>
        }
        <hr />
        <Row>
          { 
            products &&
            products.map((product) => ( <Item key={product.id} item={product} /> ))
          }
        </Row>
      </Container>
    </div>
  )
}
