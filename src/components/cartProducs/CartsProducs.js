import React from 'react';

import { ItemMenu } from '../menu/ItemMenu';

export function CartsProducts(props) {
  const { category, addToBasket, menu, markets } = props;

  let carts = [];
  let logoUrl = '';
  menu
    .filter(item => item.category === category)
    .map((item, index) => {
      if (markets !== undefined) {
        logoUrl =
          item.market === 'subway'
            ? markets.subway.image
            : item.market === 'sfc'
            ? markets.sfc.image
            : item.market === 'doner'
            ? markets.doner.image
            : '';
      }

      carts.push(
        <ItemMenu
          key={index}
          index={index}
          itemdata={item}
          logoUrl={logoUrl}
          addToBasket={addToBasket}
        />,
      );
      return true;
    });

  return carts;
}
