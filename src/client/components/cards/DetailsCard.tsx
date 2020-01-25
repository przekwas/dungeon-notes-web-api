import * as React from 'react';
import * as useFetch from 'fetch-suspense';
import ReactMarkdown from 'react-markdown';
import { Col, Card } from 'react-bootstrap';

const DetailsCard: React.FC<DetailsCardProps> = ({ type, id }) => {
	const data: any = useFetch(`/api/${type}/${id}`);

	return (
		<Col md={12}>
			<Card className="shadow-lg">
				<Card.Body>
					<Card.Title>{type === 'personal' ? data.title : data.name}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">{type === 'characters' ? data.title : data.location}</Card.Subtitle>
					<Card.Text as="span">
						<ReactMarkdown source={data.notes} />
					</Card.Text>
				</Card.Body>
			</Card>
		</Col>
	);
};

interface DetailsCardProps {
	type: string;
	id: string;
}

export default DetailsCard;
