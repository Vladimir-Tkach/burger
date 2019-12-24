/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { Button, Icon } from 'antd'

import '../css/ItemMenu.css'

function ItemMenu (props) {
  const { logoUrl,  itemdata, addToBasket} = props;

  let [amount, setAmount] = useState(1);
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

  return (
    <div className='item_menu_wrapper'>
      <img src={logo} className={logo === '' ? 'hidden' : 'item_menu_logo'} title='Item Logo' alt='Item Logo'/>
      <img src={imageItemMenu} className='item_menu_img' alt='Item Img' />
      <div className='item_menu_name'>{nameItemMenu}</div>
      <div className='item_menu_description'>{descriptionItemMenu}</div>

      <div>Цена: {priceItemMenu} руб.</div>
      <span>Количество</span>

      <div className='item_menu_selectAmount'>
        <Button 
          shape="circle"
          onClick={() => setAmount(++amount)} 
        >
          <Icon type='plus' />
        </Button>

        <input type="text" name="amount" id="input" value={amount} onChange={ e => { setAmount(e.target.value) } }/>

        <Button 
          onClick={() => setAmount(--amount)} 
        >
          <Icon type='minus'/>
        </Button>
      </div>

      <Button 
        onClick={() => { addToBasket(nameItemMenu, +amount, +priceItemMenu) }}
      >
      В корзину
      </Button>
    </div>

  )
}

export default ItemMenu
