import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

class HoaNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#/">Hoa Systems</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="#/tenants">Tenants</Nav.Link>
                        <Nav.Link href="#/messages">Messages</Nav.Link>
                        <Nav.Link href="#/issues">Issues</Nav.Link>
                        <Nav.Link href="#/voting">Voting</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href="#/login">Login</Nav.Link>
                        <Nav.Link href="#/">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default HoaNavbar;