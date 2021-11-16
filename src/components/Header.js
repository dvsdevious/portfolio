import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap"
import "./Header.css"

export default function Header () {

    return (
        <>
        <Navbar variant="dark" className="color-nav">
            <Container>
                <Navbar.Brand href="#home">
                    <h1>dvs.dev</h1>
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About Me</Nav.Link>
                    <Nav.Link href="/projects">My projects</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}