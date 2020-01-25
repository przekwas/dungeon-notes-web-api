import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Col, ListGroup, Button, Spinner } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const HomeList: React.FC<HomeListProps> = ({ type }) => {
	const [data, setData] = useState([]);
	const [offset, setOffset] = useState(0);
	const [noMore, setNoMore] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		(async () => {
			const uri = offset ? `/api/${type}?offset=${offset}` : `/api/${type}`;
			let res = await fetch(uri);
			let data = await res.json();
			if (data.length === 0) {
				setData([]);
				setNoMore(true);
				setLoading(false);
			} else {
				setData(data);
				setNoMore(false);
				setLoading(false);
			}
		})();
	}, [offset]);

	const handleOffset = (action: string) => {
		switch (action) {
			case 'increase':
				setOffset(offset + 5);
				break;
			case 'decrease':
				let newVal = offset - 5;
				if (newVal <= 0) {
					setOffset(0);
				} else {
					setOffset(offset - 5);
				}
				break;
			default:
				break;
		}
	};

	return (
		<Col className="my-2" md={6}>
			<div className="d-flex align-items-center justify-content-around">
				<FaArrowLeft size="1.5rem" onClick={() => handleOffset('decrease')} />
				<Link to={`/${type}/full`}>
					<h3 className="text-center fancy-font">{type[0].toUpperCase() + type.slice(1)}</h3>
				</Link>
				<FaArrowRight size="1.5rem" onClick={() => handleOffset('increase')} />
			</div>
			{noMore ? <h3 className="text-center">End of Table</h3> : null}
			<ListGroup className="shadow-sm">
				{loading ? <Spinner className="d-block mx-auto mt-5" animation="border" variant="dark" /> : null}
				{data.map((item: any) => (
					<ListGroup.Item className="d-flex justify-content-between align-items-center" action key={`${type}-${item.id}`}>
						<div>
							<b>{item.id}:</b>
							{' '}
							{type === 'personal' ? item.title?.substring(0, 10) : item.name?.substring(0, 10)}
						</div>
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

interface HomeListProps {
	type: string;
}

export default HomeList;
