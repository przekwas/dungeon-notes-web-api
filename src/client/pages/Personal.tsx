import React from 'react';
import { RouteComponentProps } from 'react-router';
import { useEffect } from 'react';
import { useFormState } from 'react-use-form-state';
import { setNav } from '../utils/setNav';
import { Col, Form } from 'react-bootstrap';
import SubmitButton from '../components/forms/SubmitButton';
import FormLayout from '../components/forms/FormLayout';

const Personal: React.FC<PersonalProps> = props => {
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
				<Col md={12}>
					<Form.Group controlId="personal-title">
						<Form.Label>Personal Note Title</Form.Label>
						<Form.Control className="shadow-sm" {...text('title')} />
					</Form.Group>
				</Col>
				<Col md={12}>
					<Form.Group controlId="personal-notes">
						<Form.Label>Notes</Form.Label>
						<Form.Control className="shadow-sm" rows={15} as="textarea" {...text('notes')} />
					</Form.Group>
				</Col>
			</Form.Row>
			<SubmitButton handleSubmit={handleSubmit} />
		</FormLayout>
	);
};

interface PersonalProps extends RouteComponentProps {}

export default Personal;
