/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Modal } from 'antd'
import React, { useState, useEffect } from 'react'
import { ModalContentWithCurrentFilling } from './ModalContentWithCurrentFilling'
import { ModalTabs } from './ModalTabs'
import { CartsProducts } from './CartsProducs'

import '../css/Content.css'
import '../css/Modal.css'

const tabs = [
  {
    name: 'sizes',
    title: 'Размер',
  },
  {
    name: 'breads',
    title: 'Хлеб',
  },
  {
    name: 'vegetables',
    title: 'Овощи',
  },
  {
    name: 'sauces',
    title: 'Соусы',
  },
  {
    name: 'fillings',
    title: 'Начинки',
  },
  {
    name: 'finish',
    title: 'Заказ',
  }
];


export function Content (props) {

  const [menu, setMenu] = useState([]);
  const [markets, setMarkets] = useState(undefined);
  const [isShowModal, changeIsShowModal] = useState(false);
  const [allFillings, setAllFillings] = useState({});
  const [currentFillingType, changeCurrentFillingType] = useState('sizes');

  useEffect(() => {
    setTimeout(() => {
      fetch('./json/data.json', {
         method: 'GET'
       })
       .then(data => {
         return data.json();
       })
       .then(data => {
         setMenu(data.menu);
         setMarkets(data.markets);
         setAllFillings({
           sizes: Object.values(data.sizes),
           breads: Object.values(data.breads),
           vegetables: Object.values(data.vegetables),
           sauces: Object.values(data.sauces),
           fillings: Object.values(data.fillings)
         })
       })
       .catch(e => {
         console.log(e);
       })
    }, 500);
  }, [])


  function ShowModal(){
    changeIsShowModal(true);
  }

  function changeCurrentFillingTypeOnClick (newType) {
    changeCurrentFillingType(newType);
  }

  return (
    <div className='content_wrapper'>
      <CartsProducts 
        menu={menu}
        markets={markets}
        ShowModal={ShowModal}
        {...props}
      />

      <Modal
          title="Select Fillings"
          centered
          visible={isShowModal}
          onCancel={() => changeIsShowModal(false)}
        >
          <ModalTabs
            changeCurrentFillingTypeOnClick={changeCurrentFillingTypeOnClick}
            allNamesFillngs={tabs} 
          />
          <ModalContentWithCurrentFilling
            currentFillingType={currentFillingType}
            allFillings={allFillings}
          >
          </ModalContentWithCurrentFilling>
        </Modal>
    </div>
  )
}
