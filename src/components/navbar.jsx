import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

function Navegacion() {
  return (
    <Navbar className='nav-content' collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container bg='dark' variant="dark">
        <Navbar.Brand href="/">Gestor de inventario</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
        <Navbar.Collapse id="responsive-navbar-nav"  className=' justify-content-end'>
          <Nav className='nav-item '>
            <Link className='mx-2 nav-link active' to='/'>Home</Link>
            <Link className='mx-2 nav-link active' to='/send-mail'>Contactame</Link>         
            <Link className='mx-2 nav-link active' to='/listProducts'>Productos</Link>         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacion;