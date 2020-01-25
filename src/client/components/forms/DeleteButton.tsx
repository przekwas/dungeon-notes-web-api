import React from 'react';
import { Button } from 'react-bootstrap';

const DeleteButton: React.FC<DeleteButtonProps> = props => {
	return (
		<Button variant="danger" size="lg" onClick={props.handleDelete} className="mt-4 w-50 mx-auto shadow-sm" block type="submit">
			Delete 'dat Shit
		</Button>
	);
};

interface DeleteButtonProps {
	handleDelete: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default DeleteButton;
