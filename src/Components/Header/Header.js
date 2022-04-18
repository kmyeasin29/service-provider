import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user]=useAuthState(auth);

    const handleSignOut=()=>{
        signOut(auth)
    }
    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className='sticky-top'>
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <h2>JOHN'S CARE</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/Register'>Register</Nav.Link>
                            <Nav.Link as={Link} to='/Blogs'>Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to='/About'>About</Nav.Link>
                            {
                            user?
                            <button onClick={handleSignOut}>Sign Out</button>
                            :<Nav.Link as={Link} to='/Login'>Login</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;