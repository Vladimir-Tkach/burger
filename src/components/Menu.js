import React, { Component } from 'react'
import propTypes from 'prop-types'

import '../css/Menu.css'

class Menu extends Component {
  // constructor(props){
  //     super(props)
  // }

  render () {
    return (
      <div className="menu_wrapper">
        <ul className="menu_ul">
          <li id='1' onClick={() => this.props.func('pizza')}>Блины</li>
          <li id='2' onClick={() => this.props.func('shaurma')}>Шаурма</li>
          <li id='3' onClick={() => this.props.func('sandwiches')}>Сендвичи</li>
          <li id='4' onClick={() => this.props.func('burgers')}>Бургеры</li>
          <li id='5' onClick={() => this.props.func('chicken')}>Курица & Картофель</li>
          <li id='6' onClick={() => this.props.func('salads')}>Тортилья & салаты</li>
          <li id='7' onClick={() => this.props.func('drinks')}>Напитки & Десерты</li>
        </ul>
      </div>
    )
  }
}


Menu.propTypes = {
	func: propTypes.func.isRequired
};

export default Menu
