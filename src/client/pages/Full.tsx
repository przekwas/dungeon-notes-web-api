import * as React from 'react';
import { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { setNav } from '../utils/setNav';
import { Container, Row } from 'react-bootstrap';
import FullList from '../components/lists/FullList';

const Full: React.FC<FullProps> = props => {
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
				<FullList type={props.match.params.type} />
			</Row>
		</Container>
	);
};

interface FullProps extends RouteComponentProps<{ type: string; }> {}

export default Full;
