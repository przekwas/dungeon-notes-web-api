import React from 'react';
import { Button } from 'react-bootstrap';

const SubmitButton: React.FC<SubmitButtonProps> = props => {
	return (
		<Button onClick={props.handleSubmit} className="mt-3 w-50 mx-auto shadow-sm" block type="submit">
			{props.text} 'dat Shit
		</Button>
	);
};

interface SubmitButtonProps {
	handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
	text: string;
}

export default SubmitButton;
