/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Button, Icon } from 'antd';

import { MyContext } from '../../context/context';

import '../../css/ModalPrevNextBtns.css';

export function ModalPrevNextBtns() {
  const context = useContext(MyContext);
  const {
    currentTabNumber,
    changeCurrentTabNumber,
    tabs,
    changeCurrentFillingTypeOnClick,
  } = context;

  function handleSwitchTabs(type) {
    if (type === 'prev' && currentTabNumber > 0) {
      changeCurrentFillingTypeOnClick(tabs[currentTabNumber - 1].name);
      changeCurrentTabNumber(currentTabNumber - 1);
    } else if (type === 'next' && currentTabNumber < 5) {
      changeCurrentFillingTypeOnClick(tabs[currentTabNumber + 1].name);
      changeCurrentTabNumber(currentTabNumber + 1);
    }
  }

  return (
    <div className="ModalPrevNextBtns">
      <Button
        onClick={() => {
          handleSwitchTabs('prev');
        }}
      >
        <Icon type="left" />
        Prev
      </Button>
      <Button
        onClick={() => {
          handleSwitchTabs('next');
        }}
      >
        Next
        <Icon type="right" />
      </Button>
    </div>
  );
}
