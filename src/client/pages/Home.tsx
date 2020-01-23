import React from 'react';
import { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { setNav } from '../utils/setNav';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import HomeList from '../components/lists/HomeList';

const TEST_DATA = [
	{
		id: 1,
		title: 'Herp'
	},
	{
		id: 2,
		title: 'Herp'
	},
	{
		id: 3,
		title: 'Herp'
	},
	{
		id: 4,
		title: 'Herp'
	},
	{
		id: 5,
		title: 'Herp'
	},
	{
		id: 6,
		title: 'Herp'
	}
];

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
			<Row className="my-2">
				<HomeList title="Characters" data={TEST_DATA} />
				<HomeList title="Places" data={TEST_DATA} />
				<HomeList title="Events" data={TEST_DATA} />
				<HomeList title="Personal" data={TEST_DATA} />
			</Row>
		</Container>
	);
};

interface HomeProps extends RouteComponentProps {}

export default Home;
