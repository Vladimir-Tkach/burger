/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import '../css/Content.css'
import ItemMenu from './ItemMenu'
import axios from 'axios'

class Content extends Component {
  constructor (props) {
    super(props)

    this.state = {
      menu: []
    }
  }

  componentDidMount () {
    axios.get('./json/data.json')
      .then(response => {
        const menu = response.data.menu
        this.setState({ menu })
      })
  }

  render () {
    // console.log(this.props);
    const sandwiches = this.state.menu.filter(item => item.category === this.props.category)
    const items = sandwiches.map((item, index) => {
      return (
        <ItemMenu
          key={index}
          itemdata={item}
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
