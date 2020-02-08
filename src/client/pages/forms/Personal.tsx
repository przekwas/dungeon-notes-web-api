import React from 'react';
import { RouteComponentProps, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import { useFormState } from 'react-use-form-state';
import { Spinner, Col, Form } from 'react-bootstrap';
import SubmitButton from '../../components/forms/SubmitButton';
import FormLayout from '../../components/forms/FormLayout';
import DeleteButton from '../../components/forms/DeleteButton';

const Personal: React.FC<PersonalProps> = props => {
	const [loading, setLoading] = useState(false);
	const [formState, { text }] = useFormState();
	const { state } = useLocation();

	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		let uri = props.match.params.id ? `/api/personal/${props.match.params.id}` : '/api/personal/';
		let method = props.match.params.id ? 'PUT' : 'POST';

		const res = await fetch(uri, {
			method,
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(formState.values)
		});
		const characterid = await res.json();
		props.history.push(`/personal/details/${characterid}`);
	};

	const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		let uri = `/api/personal/${props.match.params.id}`;
		let method = 'DELETE';
		const res = await fetch(uri, {
			method,
		});
		props.history.push('/');
	};

	useEffect(() => {
		(async () => {
			if (props.id) {
				if (state?.item) {
					formState.setField('title', state.item.title);
					formState.setField('notes', state.item.notes);
				} else {
					setLoading(true);
					let res = await fetch('/api/personal/' + props.id);
					let data = await res.json();
					formState.setField('title', data.title);
					formState.setField('notes', data.notes);
					setLoading(false);
				}
			}
		})();
	}, [props.id]);

	if (loading) {
		return <Spinner className="d-block mx-auto mt-5" animation="border" variant="dark" />;
	} else {
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
				<SubmitButton text={props.match.params.id ? 'Save' : 'Add'} handleSubmit={handleSubmit} />
				{props.match.params.id ? <DeleteButton handleDelete={handleDelete} /> : null}
			</FormLayout>
		);
	}
};

interface PersonalProps extends RouteComponentProps<{ type?: string; id?: string }> {
	id?: string;
}

export default Personal;
