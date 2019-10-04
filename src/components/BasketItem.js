/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import '../css/BasketItem.css'

class BasketItem extends Component{

	render(){
		return(
			<div className='basket_list_item'>
				<div className='basket_list_item_name'>{this.props.name}</div>
				<div className='basket_list_item_amount'>{this.props.amount}</div>
				<button onClick={() => this.props.deleteFromBasket(this.props.name)}>del</button>
			</div>
		)
	}
}

export default BasketItem