import React from 'react'
import { Container, Navbar,  Nav, Form, FormControl, Button } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <div>
            <Navbar expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">React Learning</Navbar.Brand>
                    
                    <Nav className="mr-auto">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/categories">Categories</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                        <Nav.Link href="#pricing">Logout</Nav.Link>
                        <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
                    </Nav>

                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Container>
            </Navbar>
        </div>
    )
}
