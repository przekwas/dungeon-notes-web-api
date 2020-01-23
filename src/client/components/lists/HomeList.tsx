import React from 'react';
import { Col, ListGroup } from 'react-bootstrap';

const HomeList: React.FC<HomeListProps> = props => {
	return (
		<Col className="my-2" md={6}>
			<h3 className="text-center">{props.title}</h3>
			<ListGroup className="shadow-sm">
				{props.data.map(item => (
					<ListGroup.Item key={item.id}>{item.title}</ListGroup.Item>
				))}
			</ListGroup>
		</Col>
	);
};

interface HomeListProps {
    title: string;
    data: any[];
}

export default HomeList;
