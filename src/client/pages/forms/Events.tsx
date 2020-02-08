import React from 'react';
import { RouteComponentProps, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import { useFormState } from 'react-use-form-state';
import { Spinner, Col, Form } from 'react-bootstrap';
import SubmitButton from '../../components/forms/SubmitButton';
import FormLayout from '../../components/forms/FormLayout';
import DeleteButton from '../../components/forms/DeleteButton';

const Events: React.FC<EventsProps> = props => {
	const [loading, setLoading] = useState(false);
	const [formState, { text }] = useFormState();
	const { state } = useLocation();

	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		let uri = props.match.params.id ? `/api/events/${props.match.params.id}` : '/api/events/';
		let method = props.match.params.id ? 'PUT' : 'POST';

		const res = await fetch(uri, {
			method,
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(formState.values)
		});
		const characterid = await res.json();
		props.history.push(`/events/details/${characterid}`);
	};

	const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		let uri = `/api/events/${props.match.params.id}`;
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
					formState.setField('name', state.item.name);
					formState.setField('location', state.item.location);
					formState.setField('notes', state.item.notes);
				} else {
					setLoading(true);
					let res = await fetch('/api/events/' + props.id);
					let data = await res.json();
					formState.setField('name', data.name);
					formState.setField('location', data.location);
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
					<Col md={6}>
						<Form.Group controlId="event-name">
							<Form.Label>Event Name</Form.Label>
							<Form.Control className="shadow-sm" {...text('name')} />
						</Form.Group>
					</Col>
					<Col md={6}>
						<Form.Group controlId="event-title">
							<Form.Label>Event Location</Form.Label>
							<Form.Control className="shadow-sm" {...text('location')} />
						</Form.Group>
					</Col>
					<Col md={12}>
						<Form.Group controlId="event-notes">
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

interface EventsProps extends RouteComponentProps<{ type?: string; id?: string }> {
	id?: string;
}

export default Events;
