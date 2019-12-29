/* eslint-disable no-prototype-builtins */
import React, { useState } from 'react'

import MenuBlock from './Menu'
import Basket from './Basket'
import { Content } from './Content'
import { MyProvider } from '../context/context'

import '../css/App.css'

export function App () {

  const [showCategory, changeShowCategory] = useState('sandwiches');
  const [basket, changeBasket] = useState({total: 0});

  const state = {
    showCategory,
    basket,
  }

  function handleSwitcherCategory (nameCategory) {
    changeShowCategory(nameCategory);
  }

  function addToBasket (nameProduct, amount, price) {
    let newbasketItem = {
      [nameProduct]: [nameProduct, amount, price],
      total: +state.basket.total + +amount * +price
    }

    if(!state.basket.hasOwnProperty(nameProduct)){
      changeBasket({...state.basket, ...newbasketItem});
    } else {
      newbasketItem[nameProduct][1] = state.basket[nameProduct][1] + amount;
      changeBasket({...state.basket, ...newbasketItem});
    }
  }


  function deleteFromBasket(nameProduct){
    if(basket.hasOwnProperty(nameProduct)){
      let amountOfDeletedItem = state.basket[nameProduct][1] * state.basket[nameProduct][2];
      delete state.basket[nameProduct];
      let basket = state.basket;
      basket.total = basket.total - amountOfDeletedItem;
      changeBasket({ ...basket });
    }
  }


  return (
    <MyProvider value={state}>
      <div>
        <header className="header_title">
          <h1>Сделайте заказ на прямую из ресторана</h1>
        </header>
          <div className="App">
            <nav>
              <MenuBlock handleSwitcherCategory = {handleSwitcherCategory} />
              <Basket basket={state.basket} deleteFromBasket={deleteFromBasket}/>
            </nav>
            <Content
              category={state.showCategory}
              basket={state.basket}
              addToBasket={addToBasket}
            />
          </div>
      </div>
    </MyProvider>
  )
}
