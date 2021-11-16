import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap"
import "./Header.css"
import Logo from "./Logo";

export default function Header () {

    return (
        <>
        <Navbar variant="dark" className="color-nav">
            <Container>
                <Navbar.Brand href="#home">
                    <Logo/>
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">About Me</Nav.Link>
                    <Nav.Link href="#pricing">My projects</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}