/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Typography } from "antd";

import { MyContext } from "../../context/context";

export function ModalTabs() {
  const { tabs, changeCurrentFillingTypeOnClick } = useContext(MyContext);

  const tabsList = tabs.map((item, index) => {
    return (
      <Typography.Title
        level={4}
        key={index}
        onClick={() => changeCurrentFillingTypeOnClick(item.name, index)}
      >
        {item.title}
      </Typography.Title>
    );
  });

  return <div className="Modal-Tabs">{tabsList}</div>;
}
