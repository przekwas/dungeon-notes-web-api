import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const Home: React.FC<HomeProps> = props => {
	return (
		<Container fluid>
			<Row className="justify-content-center my-2">
				<Col md={4}>
					<h4 className="text-center fancy">Most Recent</h4>
					<ListGroup>
						<ListGroup.Item>Test 1</ListGroup.Item>
						<ListGroup.Item>Test 1</ListGroup.Item>
						<ListGroup.Item>Test 1</ListGroup.Item>
						<ListGroup.Item>Test 1</ListGroup.Item>
						<ListGroup.Item>Test 1</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
		</Container>
	);
};

interface HomeProps extends RouteComponentProps {}

export default Home;
