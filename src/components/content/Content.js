/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

import { CartsProducts } from "../cartProducs/CartsProducs";
import { ModalWindow } from "../modal/ModalWindow";
import { MyProvider } from "../../context/context";

import "../../css/Content.css";
import "../../css/Modal.css";

const tabs = [
  {
    name: "sizes",
    title: "Размер"
  },
  {
    name: "breads",
    title: "Хлеб"
  },
  {
    name: "vegetables",
    title: "Овощи"
  },
  {
    name: "sauces",
    title: "Соусы"
  },
  {
    name: "fillings",
    title: "Начинки"
  },
  {
    name: "finish",
    title: "Заказ"
  }
];

export function Content(props) {
  const [menu, setMenu] = useState([]);
  const [markets, setMarkets] = useState(undefined);
  const [isShowModal, changeIsShowModal] = useState(false);
  const [allFillings, setAllFillings] = useState({});
  const [currentFillingType, changeCurrentFillingType] = useState("sizes");
  const [currentTabNumber, changeCurrentTabNumber] = useState(0);

  const ContentState = {
    tabs,
    isShowModal,
    allFillings,
    currentTabNumber,
    changeIsShowModal,
    currentFillingType,
    changeCurrentTabNumber,
    changeCurrentFillingTypeOnClick
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("./json/data.json", {
        method: "GET"
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
          });
        })
        .catch(e => {
          console.log(e);
        });
    }, 500);
  }, []);

  function ShowModal() {
    changeIsShowModal(true);
  }

  function changeCurrentFillingTypeOnClick(newType, index = undefined) {
    if (index) {
      changeCurrentTabNumber(index);
    }
    changeCurrentFillingType(newType);
  }

  return (
    <div className="content_wrapper">
      <MyProvider value={ContentState}>
        <CartsProducts
          {...props}
          menu={menu}
          markets={markets}
          ShowModal={ShowModal}
        />
        <ModalWindow
          isShowModal={isShowModal}
          changeIsShowModal={changeIsShowModal}
        />
      </MyProvider>
    </div>
  );
}
