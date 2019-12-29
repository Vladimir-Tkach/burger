import React from 'react'
import propTypes from 'prop-types'
import { Menu } from 'antd'

import '../../css/Menu.css'

export default function MenuBlock (props) {

  const { handleSwitcherCategory: onClick } = props;

  return (
    <div className="menu_wrapper">
      <Menu
        mode='inline'
      >
        <Menu.Item
          key='1'
          onClick={() => onClick('pizza')}
        >
          Блины
        </Menu.Item>
        
        <Menu.Item
          key='2'
          onClick={() => onClick('shaurma')}
        >
          Шаурма
        </Menu.Item>

        <Menu.Item
          key='3'
          onClick={() => onClick('sandwiches')}
        >
          Сендвичи
        </Menu.Item>

        <Menu.Item
          key='4'
          onClick={() => onClick('burgers')}
        >
          Бургеры
        </Menu.Item>

        <Menu.Item
          key='5'
          onClick={() => onClick('chicken')}
        >
          Курица & Картофель
        </Menu.Item>

        <Menu.Item
          key='6'
          onClick={() => onClick('salads')}
        >
          Тортилья & салаты
        </Menu.Item>

        <Menu.Item
          key='7'
          onClick={() => onClick('drinks')}
        >
          Напитки & Десерты
        </Menu.Item>

      </Menu>
    </div>
  )

}


MenuBlock.propTypes = {
	handleSwitcherCategory: propTypes.func.isRequired
};
