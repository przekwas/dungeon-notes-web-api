import React from 'react';
import { RouteComponentProps } from 'react-router';
import { useEffect } from 'react';
import { useFormState } from 'react-use-form-state';
import { setNav } from '../utils/setNav';
import { Col, Form } from 'react-bootstrap';
import SubmitButton from '../components/forms/SubmitButton';
import FormLayout from '../components/forms/FormLayout';

const Characters: React.FC<CharactersProps> = props => {
	const [formState, { text }] = useFormState();

	const handleKeyDown = (e: any) => {
		let path = setNav(e);
		props.history.push(path);
	};

	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		console.log(formState.values);
	}

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		<FormLayout>
			<Form.Row>
				<Col md={6}>
					<Form.Group controlId="character-name">
						<Form.Label>Character Name</Form.Label>
						<Form.Control className="shadow-sm" {...text('name')} />
					</Form.Group>
				</Col>
				<Col md={6}>
					<Form.Group controlId="character-title">
						<Form.Label>Character Title</Form.Label>
						<Form.Control className="shadow-sm" {...text('title')} />
					</Form.Group>
				</Col>
				<Col md={12}>
					<Form.Group controlId="character-notes">
						<Form.Label>Notes</Form.Label>
						<Form.Control className="shadow-sm" rows={15} as="textarea" {...text('notes')} />
					</Form.Group>
				</Col>
			</Form.Row>
			<SubmitButton handleSubmit={handleSubmit} />
		</FormLayout>
	);
};

interface CharactersProps extends RouteComponentProps {}

export default Characters;
