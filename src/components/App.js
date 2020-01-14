/* eslint-disable no-prototype-builtins */
import React, { useState } from "react";

import MenuBlock from "./menu/Menu";
import Basket from "./basket/Basket";
import { Content } from "./content/Content";
import { MyProvider } from "../context/context";

import "../css/App.css";

export function App() {
  const [showCategory, changeShowCategory] = useState("sandwiches");
  const [basket, changeBasket] = useState(new Map());
  const [totalBasket, changeTotalBasket] = useState(0);
  const state = {
    showCategory,
    basket
  };

  function handleSwitcherCategory(nameCategory) {
    changeShowCategory(nameCategory);
  }

  function addToBasket(nameProduct, amount, price) {
    if (!state.basket.has(nameProduct)) {
      state.basket.set(nameProduct, { amount, price });
    } else {
      let { amount: newAmount } = state.basket.get(nameProduct);
      newAmount = newAmount + amount;
      state.basket.set(nameProduct, { amount: newAmount, price });
    }

    changeTotalBasket(totalBasket + price * amount);
    changeBasket(state.basket);
  }

  function deleteFromBasket(nameProduct) {
    if (state.basket.has(nameProduct)) {
      let { amount, price } = state.basket.get(nameProduct);
      state.basket.delete(nameProduct);

      changeTotalBasket(totalBasket - amount * price);
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
            <MenuBlock handleSwitcherCategory={handleSwitcherCategory} />
            <Basket
              basket={state.basket}
              deleteFromBasket={deleteFromBasket}
              totalBasket={totalBasket}
            />
          </nav>
          <Content
            category={state.showCategory}
            basket={state.basket}
            addToBasket={addToBasket}
          />
        </div>
      </div>
    </MyProvider>
  );
}
