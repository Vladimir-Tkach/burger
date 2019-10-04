/* eslint-disable no-prototype-builtins */
import React, { Component } from 'react'
import '../css/App.css'
import Menu from './Menu'
import Basket from './Basket'
import Content from './Content'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      json: {},
      showCategory: 'pizza',
      basket: {
		total: 0
		}
    }

    this.selectCategory = this.selectCategory.bind(this)
	this.addToBasket = this.addToBasket.bind(this)
	this.deleteFromBasket = this.deleteFromBasket.bind(this)
  }

  selectCategory (nameCategory) {
    this.setState({ showCategory: nameCategory })
  }

  addToBasket (nameProduct, amount, price) {
    if (!this.state.basket.hasOwnProperty(nameProduct)) {
		const newObj = { [nameProduct]: amount };
		let basket = { ...this.state.basket, ...newObj };
		basket.total = this.state.basket.total + amount * price;
		this.setState({ basket });
    } else {
		const newObj = { [nameProduct]: amount + this.state.basket[nameProduct] };
		let basket = { ...this.state.basket, ...newObj };
		basket.total = this.state.basket.total + amount * price;
		this.setState({ basket });
    }
  }


  deleteFromBasket(nameProduct){

	if(this.state.basket.hasOwnProperty(nameProduct)){
		delete this.state.basket[nameProduct];
		let basket = this.state.basket;
		this.setState({ basket });
	}
  }


  render () {
    return (
      <div>
        <header className="header_title">
          <h1>Сделайте заказ на прямую из ресторана</h1>
        </header>
        <div className="App">
          <nav>
            <Menu func = {this.selectCategory} />
            <Basket basket={this.state.basket} deleteFromBasket={this.deleteFromBasket}/>
          </nav>
          <Content
            category={this.state.showCategory}
            basket={this.state.basket}
            addToBasket={this.addToBasket}
          />

        </div>
      </div>
    )
  }
}

export default App
