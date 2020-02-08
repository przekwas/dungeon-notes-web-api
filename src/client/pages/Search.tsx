import * as React from 'react';
import { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import SearchForm from '../components/forms/SearchForm';
import { Link } from 'react-router-dom';

const Search: React.FC<SearchProps> = props => {
	const [results, setResults] = useState<any[]>([]);
	const [type, setType] = useState<string>('');

	return (
		<Container fluid>
			<Row className="justify-content-center my-2">
				<Col md={3}>
					<SearchForm setType={setType} setResults={setResults} />
				</Col>
				<Col md={9}>
					<ListGroup className="shadow">
						{results.map(item => (
							<ListGroup.Item className="d-flex justify-content-between align-items-center" action key={`${type}-${item.id}`}>
								{type === 'personal' ? item.title : item.name}
								<div>
									<Button className="mr-5" as="span" variant="link">
										<Link to={{ pathname: `/${type}/edit/${item.id}`, state: { item } }}>Edit</Link>
									</Button>
									<Button className="ml-5" as="span" variant="link">
										<Link to={{ pathname: `/${type}/details/${item.id}`, state: { item } }}>View</Link>
									</Button>
								</div>
							</ListGroup.Item>
						))}
					</ListGroup>
				</Col>
			</Row>
		</Container>
	);
};

interface SearchProps extends RouteComponentProps {}

export default Search;
