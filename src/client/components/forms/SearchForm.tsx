import * as React from 'react';
import { useEffect } from 'react';
import { get } from '../../utils/api';
import { useFormState } from 'react-use-form-state';
import { Form, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const Search: React.FC<SearchProps> = props => {
	const [formState, { text, select }] = useFormState({
		type: 'personal'
	});

	useEffect(() => {
		if(formState.values.query.length === 0) return;
		(async () => {
			let data = await get(`/api/${formState.values.type}/search/?q=${formState.values.query}`);
			props.setResults(data);
			props.setType(formState.values.type);
		})();
	}, [formState.values.query]);

	const handleSearchClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		let data = await get(`/api/${formState.values.type}/search/?q=${formState.values.query}`);
		props.setResults(data);
		props.setType(formState.values.type);
	};

	return (
		<Form className="p-3 border border-primary rounded bg-white shadow-lg">
			<Form.Control className="my-1 shadow-sm" size="lg" type="text" placeholder="Search ..." {...text('query')} />
			<Form.Control className="my-1 shadow-sm" size="lg" as="select" {...select('type')}>
				<option value="personal">Personal</option>
				<option value="characters">Characters</option>
				<option value="events">Events</option>
				<option value="places">Places</option>
			</Form.Control>
			<Button onClick={handleSearchClick} className="w-75 mx-auto shadow mt-3 d-flex align-items-center justify-content-center" block size="lg">
				<FaSearch className="mx-2" />
				<span className="mx-2">Search</span>
			</Button>
		</Form>
	);
};

interface SearchProps {
	setResults: any;
	setType: any;
}

export default Search;
