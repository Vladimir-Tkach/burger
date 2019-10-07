/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import axios from 'axios'

import '../css/Content.css'
import ItemMenu from './ItemMenu'

class Content extends Component {
  constructor (props) {
    super(props)

    this.state = {
      menu: [],
      markets: {},
    }
  }

  componentDidMount () {
    axios.get('./json/data.json')
      .then(response => {
        const menu = response.data.menu;
        const markets = response.data.markets;
        this.setState({ menu, markets })
      })
  }

  render () {
    // console.log(this.props);
    const category = this.state.menu.filter(item => item.category === this.props.category)

    const items = category.map((item, index) => {
    const logoUrl = item.market == 'subway' ? this.state.markets.subway.image : item.market == 'sfc' ? this.state.markets.sfc.image : item.market == 'doner' ? this.state.markets.doner.image : '';
      return (
        <ItemMenu
          key={index}
          itemdata={item}
          logoUrl={logoUrl}
          basket={this.props.basket}
          addToBasket={this.props.addToBasket}
        />
      )
    })

    return (
      <div className='content_wrapper'>
        {items}
      </div>
    )
  }
}

export default Content
