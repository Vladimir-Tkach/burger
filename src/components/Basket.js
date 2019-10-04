import React, {Component} from 'react';
import '../css/Basket.css';

class Basket extends  Component{

    render(){
        console.log(this.props.basket);
        return(
            <div className='basket_wrapper'>
                <h3>Корзина</h3>
                <div className='basket_list'>
                    <div className='basket_list_header'>
                        <span>Название</span>
                        <span>Количество</span>
                    </div>
                    <div className='basket_list_body'>

                    </div>
                </div>
            </div>
        )
    }
}

export default Basket;