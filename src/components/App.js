/* eslint-disable no-prototype-builtins */
import React, { Component } from 'react'

import '../css/App.css'
import MenuBlock from './Menu'
import Basket from './Basket'
import Content from './Content'

class App extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      json: {},
      showCategory: 'pizza',
      basket: {
        total: 0,
      }
    }

  this.handleSwitcherCategory = this.handleSwitcherCategory.bind(this)
	this.addToBasket = this.addToBasket.bind(this)
	this.deleteFromBasket = this.deleteFromBasket.bind(this)
  }

  handleSwitcherCategory (nameCategory) {
    this.setState({ showCategory: nameCategory })
  }

  addToBasket (nameProduct, amount, price) {
    let newbasketItem = {
      [nameProduct]: [nameProduct, amount, price],
      total: +this.state.basket.total + +amount * +price
    }

    if(!this.state.basket.hasOwnProperty(nameProduct)){
      let basket = {...this.state.basket, ...newbasketItem}
      this.setState({ basket })
    } else {
      newbasketItem[nameProduct][1] = this.state.basket[nameProduct][1] + amount
      let basket = {...this.state.basket, ...newbasketItem}
      this.setState({ basket })
    }
  }


  deleteFromBasket(nameProduct){
    if(this.state.basket.hasOwnProperty(nameProduct)){
      let amountOfDeletedItem = this.state.basket[nameProduct][1] * this.state.basket[nameProduct][2];
      delete this.state.basket[nameProduct];
      let basket = this.state.basket;
      basket.total = basket.total - amountOfDeletedItem;
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
            <MenuBlock handleSwitcherCategory = {this.handleSwitcherCategory} />
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
