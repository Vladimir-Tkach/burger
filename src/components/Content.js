/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { ItemMenu } from './ItemMenu'
import { Modal } from 'antd'

import '../css/Content.css'
import '../css/Modal.css'

export function Content (props) {

  const { category, basket, addToBasket } = props;

  let [menu, setMenu] = useState([]);
  let [markets, setMarkets] = useState({});
  let [isShowModal, changeIsShowModal] = useState(false);

  useEffect(() => {
     fetch('./json/data.json', {
        method: 'GET'
      })
      .then(data => {
        return data.json();
      })
      .then(data => {
        setMenu(data.menu);
        setMarkets(data.markets);
      })
      .catch(e => {
        console.log(e);
      })
      
  }, [])


  function cartsProducts () {
    const newCategory = menu.filter(item => item.category === category)
    let result = [];

    newCategory.map((item, index) => {

      let logoUrl = item.market === 'subway' ? 
        markets.subway.image : item.market === 'sfc' ? 
        markets.sfc.image : item.market === 'doner' ? 
        markets.doner.image : '';

      result.push(<ItemMenu
        key={index}
        itemdata={item}
        logoUrl={logoUrl}
        basket={basket}
        addToBasket={addToBasket}
        ShowModal={ShowModal}
      />)

    })

    return result;
  }

  function ShowModal(){
    changeIsShowModal(true);
  }

  return (
    <div className='content_wrapper'>
      {cartsProducts()}
      <Modal
          title="20px to Top"
          centered
          visible={isShowModal}
          onCancel={() => changeIsShowModal(false)}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
    </div>
  )
}
