import React from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import ValidationToastContainer from "../Components/ValidationToastContainer"

const HRLayout = ({auth, appName, user_type,children}) => {
    

    return (
        <>
            <Navbar bg="dhca" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href='/'>{appName}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-content"/>
                    <Navbar.Collapse id='navbar-content'>
                        <Nav className="mx-auto">
                            <Nav.Link href={route('hr.doctors.list')} className="mx-5">Doctors</Nav.Link>
                            {
                                auth.user.user_type == user_type.hr_head && (
                                    <NavDropdown title="Register" className="mx-5">
                                        <NavDropdown.Item href="" className="text-center">HR</NavDropdown.Item>
                                        <NavDropdown.Divider className="mx-3" />
                                        <NavDropdown.Item href={route('hr.doctors.add')} className="text-center">Doctor</NavDropdown.Item>
                                    </NavDropdown>
                                )
                            }

                            {
                                auth.user.user_type == user_type.hr && (
                                    <Nav.Link href="" className="mx-5">Register</Nav.Link>
                                )
                            }
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link href="#" className=""><i className="bi bi-bell-fill"></i></Nav.Link>
                            <NavDropdown title={auth.user.username} className="">
                                <NavDropdown.Item href="" className="text-center">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ValidationToastContainer />

            <Container className="my-5">
                {children}
            </Container>
        </>
    )
}

export default HRLayout