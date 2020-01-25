import React from 'react';
import { RouteComponentProps } from 'react-router';
import Places from '../pages/forms/Places';
import Characters from '../pages/forms/Characters';
import Events from '../pages/forms/Events';
import Personal from '../pages/forms/Personal';

const Edit: React.FC<EditProps> = props => {
	switch (props.match.params.type) {
		case 'characters':
			return <Characters id={props.match.params.id} {...props} />;
		case 'places':
			return <Places id={props.match.params.id} {...props} />;
		case 'events':
			return <Events id={props.match.params.id} {...props} />;
		case 'personal':
			return <Personal id={props.match.params.id} {...props} />;
		default:
			return <h1 className="text-center">You fucked up.</h1>;
	}
};

interface EditProps extends RouteComponentProps<{ type: string; id: string }> {}

export default Edit;
