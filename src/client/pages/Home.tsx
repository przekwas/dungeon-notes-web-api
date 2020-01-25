import * as React from 'react';
import { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { setNav } from '../utils/setNav';
import { Container, Row } from 'react-bootstrap';
import HomeList from '../components/lists/HomeList';

const Home: React.FC<HomeProps> = props => {
	const handleKeyDown = (e: any) => {
		let path = setNav(e);
		props.history.push(path);
	};

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		<Container fluid>
			<Row className="justify-content-center my-2">
				<HomeList type="characters" />
				<HomeList type="places" />
				<HomeList type="events" />
				<HomeList type="personal" />
			</Row>
		</Container>
	);
};

interface HomeProps extends RouteComponentProps {}

export default Home;
