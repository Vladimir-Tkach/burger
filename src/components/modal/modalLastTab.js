/* eslint-disable react/prop-types */
import React from 'react';
import { Typography } from 'antd';

export const ModalLastTab = props => {
  const { selectedProductForMadal } = props;

  return (
    <div>
      <img src={selectedProductForMadal.image} className="item_menu_img" alt="Item Img" />
      <Typography.Text>{selectedProductForMadal.name}</Typography.Text>
      <Typography.Text>{selectedProductForMadal.price}</Typography.Text>
      <Typography.Title>Finish</Typography.Title>
    </div>
  );
};
