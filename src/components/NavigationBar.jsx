import { Navbar, Nav, Container } from 'react-bootstrap';
import { Email, LinkedIn, GitHub, Article } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Navbar fixed="top" expand="lg" className="bg-body-tertiary shadow-sm">
        <Container>
        <Navbar.Brand as={Link} to="/">Johnson Zhao</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            {/* Left-aligned links */}
            <Nav className="me-auto">
            <Nav.Link as={Link} aria-label="Home Page" to="/">Home</Nav.Link>
            {/* <Nav.Link as={Link} aria-label="About Page" to="/about">About Me</Nav.Link> */}
            <Nav.Link as={Link} aria-label="Skills Page" to="/skills">Skills</Nav.Link>
            <Nav.Link as={Link} aria-label="Experience Page" to="/experience">Experience</Nav.Link>
            <Nav.Link as={Link} aria-label="Projects Page" to="/projects">Projects</Nav.Link>
            </Nav>

            {/* Right-aligned social icons */}
            <Nav className="ms-auto">
            <Nav.Link href="https://drive.google.com/file/d/1Q-iE_RsNZyhoh8tCHa2Pasvvf65wbzdg/view?usp=sharing" target="_blank" rel="noopener noreferrer" title="Resume">
                <Article fontSize="small" />
            </Nav.Link>
            <Nav.Link href="mailto:johnsonzhao275@gmail.com" title="Email">
                <Email fontSize="small" />
            </Nav.Link>
            <Nav.Link href="https://github.com/johnsonzhao275" target="_blank" rel="noopener noreferrer" title="Github">
                <GitHub fontSize="small" />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/johnson-j-zhao/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <LinkedIn fontSize="small" />
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default NavigationBar;