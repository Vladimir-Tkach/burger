/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Typography, Button } from 'antd';

export const ModalCardFilling = props => {
  const { index, currentItem, fillingKey, onclick } = props;
  return (
    <div className="ModalContent-Cart" key={index}>
      <Card
        hoverable
        style={{ width: 140 }}
        cover={<img alt={currentItem.name} src={currentItem.image} />}
      >
        <Typography.Title level={4}>{currentItem.name}</Typography.Title>
        <Typography.Title level={4}>Price: {currentItem.price} </Typography.Title>
        <Button
          onClick={() => {
            onclick(fillingKey, currentItem.name);
          }}
        >
          Добавить
        </Button>
      </Card>
    </div>
  );
};
