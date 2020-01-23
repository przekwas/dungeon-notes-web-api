import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Navbah: React.FC<NavbahProps> = props => {
	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<NavLink exact to="/">
				<Navbar.Brand as="span">Dungeon Notes</Navbar.Brand>
			</NavLink>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<NavLink exact to="/characters">
						<Nav.Link as="span">Characters</Nav.Link>
					</NavLink>
                    <NavLink exact to="/places">
						<Nav.Link as="span">Places</Nav.Link>
					</NavLink>
                    <NavLink exact to="/events">
						<Nav.Link as="span">Events</Nav.Link>
					</NavLink>
                    <NavLink exact to="/personal">
						<Nav.Link as="span">Personal</Nav.Link>
					</NavLink>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

interface NavbahProps {}

export default Navbah;
