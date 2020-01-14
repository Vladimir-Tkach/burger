/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Card, Typography, Button } from "antd";

import { MyContext } from "../../context/context";

import "../../css/ModalContentWithCurrentFilling.css";

export function ModalContentWithCurrentFilling() {
  const {
    currentFillingType,
    allFillings,
    selectedProductForMadal,
    changeSelectedProductForMadal
  } = useContext(MyContext);

  // function onclick(key, value) {
  //   changeSelectedProductForMadal({ ...selectedProductForMadal, value });
  // }

  let body;
  if (currentFillingType !== "finish") {
    body = allFillings[currentFillingType].map((item, index) => {
      let key = currentFillingType.substr(0, currentFillingType.length - 1);
      return (
        <div className="ModalContent-Cart" key={index}>
          <Card
            hoverable
            style={{ width: 140 }}
            cover={<img alt={item.name} src={item.image} />}
          >
            <Typography.Title level={4}>{item.name}</Typography.Title>
            <Typography.Title level={4}>Price: {item.price} </Typography.Title>
            <Button onClick={onclick(key, item.name)}>Добавить</Button>
          </Card>
        </div>
      );
    });
  } else {
    body = (
      <div>
        <img
          src={selectedProductForMadal.image}
          className="item_menu_img"
          alt="Item Img"
        />
        <Typography.Text>{selectedProductForMadal.name}</Typography.Text>
        <Typography.Text>{selectedProductForMadal.price}</Typography.Text>
        <Typography.Title>Finish</Typography.Title>
      </div>
    );
  }

  return <div className="Modal-Cart">{body}</div>;
}
