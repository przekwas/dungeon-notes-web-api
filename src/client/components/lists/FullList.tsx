import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Col, ListGroup, Button, Spinner } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const FullList: React.FC<FullListProps> = ({ type }) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		(async () => {
			let res = await fetch(`/api/${type}/all`);
			let data = await res.json();
			setData(data);
			setLoading(false);
		})();
	}, []);

	return (
		<Col className="my-2" md={12}>
			<div className="d-flex align-items-center justify-content-around">
				<h1 className="text-center fancy-font">{type[0].toUpperCase() + type.slice(1)}</h1>
			</div>
			<ListGroup className="shadow-sm">
				{loading ? <Spinner className="d-block mx-auto mt-5" animation="border" variant="dark" /> : null}
				{data.map((item: any) => (
					<ListGroup.Item className="d-flex justify-content-between align-items-center" action key={`${type}-${item.id}`}>
						{type === 'personal' ? item.title : item.name}
						<div>
							<Button as="span" variant="link">
								<Link to={{ pathname: `/${type}/edit/${item.id}`, state: { item } }}>Edit</Link>
							</Button>
							<Button as="span" variant="link">
								<Link to={{ pathname: `/${type}/details/${item.id}`, state: { item } }}>View</Link>
							</Button>
						</div>
					</ListGroup.Item>
				))}
			</ListGroup>
		</Col>
	);
};

interface FullListProps {
	type: string;
}

export default FullList;
