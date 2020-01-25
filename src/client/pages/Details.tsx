import * as React from 'react';
import { Suspense, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { Container, Row, Spinner } from 'react-bootstrap';
import { setNav } from '../utils/setNav';
import DetailsCard from '../components/cards/DetailsCard';

const Details: React.FC<DetailsProps> = props => {
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
			<Row className=" justify-content-center my-2">
				<Suspense fallback={<Spinner className="d-block mx-auto mt-5" animation="border" variant="dark" />}>
					<DetailsCard type={props.match.params.type} id={props.match.params.id} />
				</Suspense>
			</Row>
		</Container>
	);
};

interface DetailsProps extends RouteComponentProps<{ type: string; id: string }> {}

export default Details;
