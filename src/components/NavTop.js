import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useHistory } from "react-router-dom";

export default function NavTop(props) {
    const currentPage = props.current;

    const history = useHistory();
    console.log(history);

    const homepage = () => history.push('/portfolio');
    const resume = () => history.push('/resume');
    const projects = () => history.push('/projects');
    const contact = () => history.push('/contact');

    return (
        <>
            <Navbar className="nav" expand="lg">
                <Navbar.Brand><h6 className="navBrand">{currentPage}</h6></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link onClick={currentPage === "Homepage" ? resume : homepage}><h6 className="navLink">{currentPage === "Homepage" ? "Resume" : "Homepage"}</h6></Nav.Link>
                        <Nav.Link onClick={currentPage === "Projects" ? resume : projects}><h6 className="navLink">{currentPage === "Projects" ? "Resume" : "Projects"}</h6></Nav.Link>
                        <Nav.Link onClick={currentPage === "Contact" ? resume : contact}><h6 className="navLink">{currentPage === "Contact" ? "Resume" : "Contact"}</h6></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}