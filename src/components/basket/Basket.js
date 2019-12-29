/* eslint-disable react/prop-types */
import React from 'react'
import { Typography } from 'antd'

import { BasketItem } from './BasketItem'
import '../../css/Basket.css'

export default function Basket (props) {

  const { basket, deleteFromBasket } = props;
  
  function BasketList () {
    let list = [];

    for (let key in basket){
      if(key !== 'total') {

        list.push(
          <BasketItem 
            key={list.length} 
            name={key} 
            amount={basket[key][1]} 
            deleteFromBasket={deleteFromBasket}
          />
        );

      } else if (key === 'total' && basket[key] === 0) {

        list.push(
          <Typography.Title 
            level={4}
            key={list.length} 
          >
            Товара нет.
          </Typography.Title>
        );

      }
    }

    return list;
  }

    return (
      <div className='basket_wrapper'>
        <h3>Корзина</h3>
        <div className='basket_list'>
          <div className='basket_list_header'>
            <span>Название</span>
            <span>Кол-во</span>
          </div>
          <div className='basket_list_body'>
            { BasketList() }
          </div>
          <h3>Всего: { basket.total }</h3>
        </div>
      </div>
    )
}

