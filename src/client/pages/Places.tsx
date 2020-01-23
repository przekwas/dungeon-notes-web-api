import React from 'react';
import { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { setNav } from '../utils/setNav';

const DownPage: React.FC<DownPageProps> = props => {
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
		<main className="container">
			<section className="row justify-content-center my-2">
				<h1 className="text-center col-12">Places</h1>
			</section>
		</main>
	);
};

interface DownPageProps extends RouteComponentProps {}

export default DownPage;
