/* eslint-disable react/prop-types */
import { Button, Typography } from 'antd'
import React from 'react'

import '../css/BasketItem.css'

export function BasketItem (props){

	const { Title } = Typography;

	let { name, amount, deleteFromBasket } = props;

	return(
		<div className='basket_list_item'>
			<Title level={4} style={{ width: '70%' }}>{name}</Title>
			<Title level={4} style={{ width: '20%' }}>{amount}</Title>
			<Button 
				type='primary' 
				size="small" 
				onClick={() => deleteFromBasket(name)}
				>delete
			</Button>
		</div>
	)

}