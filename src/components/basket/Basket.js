/* eslint-disable react/prop-types */
import React from 'react';
import { Typography } from 'antd';

import { BasketItem } from './BasketItem';
import '../../css/Basket.css';

export default function Basket(props) {
  const { basket, deleteFromBasket, totalBasket } = props;

  function BasketList() {
    let list = [];

    if (basket.size !== 0) {
      for (let key of basket) {
        list.push(
          <BasketItem
            key={list.length}
            name={key[0]}
            amount={key[1].amount}
            deleteFromBasket={deleteFromBasket}
          />,
        );
      }
    } else {
      list.push(
        <Typography.Title level={4} key={list.length}>
          Товара нет.
        </Typography.Title>,
      );
    }

    return list;
  }

  return (
    <div className="basket_wrapper">
      <h3>Корзина</h3>
      <div className="basket_list">
        <div className="basket_list_header">
          <span>Название</span>
          <span>Кол-во</span>
        </div>
        <div className="basket_list_body">{BasketList()}</div>
        <h3>Всего: {totalBasket}</h3>
      </div>
    </div>
  );
}
