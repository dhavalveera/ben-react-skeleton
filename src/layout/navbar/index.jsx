import { Container, Nav, Navbar } from "react-bootstrap";

const MainNavbar = () => {
    return (
        <Navbar expand='lg' className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Benhur</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/form">Form</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MainNavbar