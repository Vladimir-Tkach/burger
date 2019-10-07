/* eslint-disable react/prop-types */
import React, { Component } from 'react'

import BasketItem from './BasketItem'
import '../css/Basket.css'

class Basket extends Component {

  render () {
	let basketList = [];

	for (let key in this.props.basket){
		if(key !== 'total'){
			let item = <BasketItem key={basketList.length} name={key} amount={this.props.basket[key][1]} deleteFromBasket={this.props.deleteFromBasket}/>
			basketList.push(item);
		}
	}

	console.log(this.props.basket)

    return (
		
      <div className='basket_wrapper'>
        <h3>Корзина</h3>
        <div className='basket_list'>
          <div className='basket_list_header'>
            <span>Название</span>
            <span>Количество</span>
          </div>
          <div className='basket_list_body'>
			{basketList}
          </div>
          <h3>Total: {this.props.basket.total}</h3>
        </div>
      </div>
    )
  }
}

export default Basket
