import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { CartWidget } from './CartWidget'
import { Link } from 'react-router-dom'
import homeIcon from '../assets/homeIcon.svg'

export const Header = () => {

  const categories = [
    { id: 1, url: '/1/products', name: 'Shonen' }, 
    { id: 2, url: '/2/products', name: 'Seinen' }, 
    { id: 3, url: '/3/products', name: 'Isekai' },
  ]

  return (
    <Navbar bg="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
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
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/news">News</Nav.Link>
            <Nav.Link as={Link} to="/0/products">Products</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {
                categories.map(({id, url, name}) => (
                  <NavDropdown.Item as={Link} to={url} key={id}>{name}</NavDropdown.Item>
                ))
              }
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
              <CartWidget />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
