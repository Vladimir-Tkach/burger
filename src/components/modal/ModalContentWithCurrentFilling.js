/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';

import { MyContext } from '../../context/context';
import { ModalLastTab } from './modalLastTab';
import { ModalCardFilling } from './modalCardFilling';

import '../../css/ModalContentWithCurrentFilling.css';

export function ModalContentWithCurrentFilling() {
  let body;
  const {
    currentFillingType,
    allFillings,
    selectedProductForMadal,
    changeSelectedProductForMadal,
  } = useContext(MyContext);

  function onclick(key, value) {
    selectedProductForMadal.components[key] = value;
    changeSelectedProductForMadal({
      ...selectedProductForMadal,
    });
  }

  if (currentFillingType !== 'finish') {
    body = allFillings[currentFillingType].map((currentItem, index) => {
      let fillingKey = currentFillingType.substr(0, currentFillingType.length - 1);
      return (
        <ModalCardFilling
          key={index}
          index={index}
          fillingKey={fillingKey}
          currentItem={currentItem}
          onclick={onclick}
        />
      );
    });
  } else {
    body = <ModalLastTab selectedProductForMadal={selectedProductForMadal} />;
  }

  return <div className="Modal-Cart">{body}</div>;
}
