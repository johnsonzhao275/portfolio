import { Navbar, Nav, Container } from 'react-bootstrap';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';

const NavigationBar = () => {
    return (
        <Navbar fixed="top" expand="lg" className="bg-body-tertiary shadow-sm">
        <Container>
        <Navbar.Brand href="#">Johnson Zhao</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            {/* Left-aligned links */}
            <Nav className="me-auto">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            </Nav>

            {/* Right-aligned social icons */}
            <Nav className="ms-auto">
            <Nav.Link href="mailto:johnsonzhao275@gmail.com">
                <Email fontSize="small" />
            </Nav.Link>
            <Nav.Link href="https://github.com/johnsonzhao275" target="_blank" rel="noopener noreferrer">
                <GitHub fontSize="small" />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/johnson-j-zhao/" target="_blank" rel="noopener noreferrer">
                <LinkedIn fontSize="small" />
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default NavigationBar;