/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import '../css/Content.css'
import ItemMenu from './ItemMenu'

function Content (props) {

  const { category, basket, addToBasket } = props;

  let [menu, setMenu] = useState([]);
  let [markets, setMarkets] = useState({});

  useEffect(() =>{
    axios.get('./json/data.json')
      .then(response => {
        setMenu(response.data.menu);
        setMarkets(response.data.markets);
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
      />)

    })

    return result;
  }

  return (
    <div className='content_wrapper'>
      {cartsProducts()}
    </div>
  )
}

export default Content
