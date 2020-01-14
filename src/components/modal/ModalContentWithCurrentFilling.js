/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Card, Typography, Button } from "antd";

import { MyContext } from "../../context/context";

import "../../css/ModalContentWithCurrentFilling.css";

export function ModalContentWithCurrentFilling() {
  const context = useContext(MyContext);
  const { currentFillingType, allFillings } = context;

  let body = allFillings[currentFillingType].map((item, index) => {
    return (
      <div className="ModalContent-Cart" key={index}>
        <Card
          hoverable
          style={{ width: 140 }}
          cover={<img alt={item.name} src={item.image} />}
        >
          <Typography.Title level={4}>{item.name}</Typography.Title>
          <Typography.Title level={4}>Price: {item.price} </Typography.Title>
          <Button>Добавить</Button>
        </Card>
      </div>
    );
  });

  return <div className="Modal-Cart">{body}</div>;
}
