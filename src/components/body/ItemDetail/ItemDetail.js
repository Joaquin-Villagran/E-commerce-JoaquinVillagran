import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({ data }) => {
	return (
		<div className='ItemDetail'>
			<ItemCount/>
			<Card style={{ width: 300 }}>
				<Image src={data.img} wrapped ui={false} />
				<Card.Content>
					<Card.Header>{data.name}</Card.Header>
					<Card.Meta>
						<span className='date'>{data.birthday}</span>
					</Card.Meta>
					<Card.Description>Status: {data.status}</Card.Description>
					
				</Card.Content>
				
			</Card>
			
		</div>
	);
};

export default ItemDetail;
