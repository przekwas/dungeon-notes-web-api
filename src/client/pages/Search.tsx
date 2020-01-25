import * as React from 'react';
import { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { useFormState } from 'react-use-form-state';
import { setNav } from '../utils/setNav';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const Search: React.FC<SearchProps> = props => {
	const [formState, { text }] = useFormState();

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
				<Col md={8}>
					<Form className="p-3 border border-primary rounded shadow-lg">
						<Form.Control size="lg" type="text" placeholder="Search ..." {...text('query')} />
                        <Form.Check inline label="Characters" type="radio" />
                        <Button className="w-75 mx-auto shadow mt-3" block size="lg"><FaSearch /> Search</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

interface SearchProps extends RouteComponentProps {}

export default Search;
