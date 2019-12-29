/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { Button, Icon } from 'antd'

import '../../css/ItemMenu.css'

export function ItemMenu (props) {
  const { logoUrl,  itemdata, addToBasket, ShowModal} = props;
  const isOpenModal = itemdata.category === 'sandwiches';

  let [isHover, changeIsHover] = useState(false);
  let [amount, changeAmount] = useState(1);
  let [logo, setlogo] = useState(logoUrl);
  let [imageItemMenu, setImageItemMenu] = useState(itemdata.image);
  let [nameItemMenu, setNameItemMenu] = useState(itemdata.name);
  let [priceItemMenu, setPriceItemMenu] = useState(itemdata.price);
  let [descriptionItemMenu, setDescriptionItemMenu] = useState(itemdata.description);

  useEffect(() => {
    setlogo(logoUrl);
    setImageItemMenu(itemdata.image);
    setNameItemMenu(itemdata.name);
    setPriceItemMenu(itemdata.price);
    setDescriptionItemMenu(itemdata.description);
  }, [logoUrl, itemdata.image, itemdata.name, itemdata.price, itemdata.description])

  function changeHover() {
    changeIsHover(!isHover);
  }

  function handleChangeAmount (type, value = 1) {
    if(type === 'add') {
      changeAmount(amount + +value);
    } else if ( type === 'input' ) {
      changeAmount(value);
    } else if (type === 'sub' && amount > 0) {
      changeAmount(amount - value);
    }
  }

  return (
    <div 
      className={classNames('item_menu_wrapper', {item_hover: isHover} )} 
      onMouseEnter={changeHover} 
      onMouseLeave={changeHover} 
    >
      <img
        src={logo} 
        className={logo === '' ? 'hidden' : 'item_menu_logo'} 
        title='Item Logo' alt='Item Logo'
      />
      <img 
        src={imageItemMenu} 
        className='item_menu_img' 
        alt='Item Img' 
      />

      <div 
        className={classNames('item_menu_name', {'underLine' : isOpenModal})}
        onClick={ShowModal}
      >
        {nameItemMenu}
      </div>

      <div className='item_menu_description'  >{descriptionItemMenu}</div>

      <div>Цена: {priceItemMenu} руб.</div>
      <span>Количество</span>

      <div className='item_menu_selectAmount'>
        <Button 
          shape="circle"
          onClick={() => handleChangeAmount('add', 1)} 
        >
          <Icon type='plus' />
        </Button>

        <input type="text" name="amount" id="input" value={amount}  onChange={ e => { handleChangeAmount('input', e.target.value) } }/>

        <Button 
          onClick={() => handleChangeAmount('sub', 1)} 
        >
          <Icon type='minus'/>
        </Button>
      </div>

      <Button 
        onClick={() => { addToBasket(nameItemMenu, +amount, +priceItemMenu); changeAmount(1) }}
      >
      В корзину
      </Button>
    </div>

  )
}
