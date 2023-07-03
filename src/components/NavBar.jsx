import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { CartWidget } from './CartWidget'
import homeIcon from '../assets/homeIcon.svg'
import shoppingCart from '../assets/shoppingCart.svg'

export const NavBar = () => {

  const categories = [
    { id: 1, url: '#category/1', name: 'Category 1' }, 
    { id: 2, url: '#category/2', name: 'Category 2' }, 
    { id: 3, url: '#category/3', name: 'Category 3' },
  ]

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={homeIcon}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Offers</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {
                categories.map(({id, url, name}) => (
                  <NavDropdown.Item href={url} key={id}>{name}</NavDropdown.Item>
                ))
              }
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
              <Nav.Link>
                <CartWidget />
              </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
