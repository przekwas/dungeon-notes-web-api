import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const FormLayout: React.FC<FormLayoutProps> = props => {
	return (
        <Container fluid>
			<Row className="my-2">
				<Col md={12}>
					<Form className="p-3 border border-primary rounded bg-white shadow-lg">
						{props.children}
					</Form>
				</Col>
			</Row>
		</Container>
    );
};

interface FormLayoutProps {}

export default FormLayout;