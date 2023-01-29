import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap"
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import "./CSS/Header.css"

export default function Header () {

    return (
        <>
        <Navbar className="color-nav" collapseOnSelect expand="sm" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <h1 className="neon">dvs.dev</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll"/>
                <NavbarCollapse id="navbarScroll">
                <Nav className="ms-auto">
                    <Nav.Link href="/"><h5 className="linkText">Home</h5></Nav.Link>
                    <Nav.Link href="/about"><h5 className="linkText">About Me</h5></Nav.Link>
                    <Nav.Link href="/projects"><h5 className="linkText">My projects</h5></Nav.Link>
                    <Nav.Link href="/contact"><h5 className="linkText">Contact</h5></Nav.Link>
                </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
        </>
    )
}