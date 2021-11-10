import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap"
import "./Header.css"

export default function Header () {
    return (
        <>
        <Navbar variant="dark" className="color-nav">
            <Container>
                <Navbar.Brand href="#home">
                 <img 
                    src="/logo3.png"
                    alt="logo"
                    width="200"
                    />
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}