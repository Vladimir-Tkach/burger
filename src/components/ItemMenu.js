import React, {Component} from 'react';
import '../css/ItemMenu.css';

class ItemMenu extends Component{
    constructor(props){
        super(props)

        this.state={
            defaultAmount : '1',
            amount : 1
        }
        this.change = this.change.bind(this);
    }

    addAmount(){
        this.setState({amount: +this.state.amount + 1});
    }

    subAmount(){
        if(this.state.amount === 0){
            return;
        }
        this.setState({amount: this.state.amount - 1});
    }

    change(event){
        this.setState({amount: event.target.value});
    }


    render(){
        // console.log(this.props);
        return(
            <div className='item_menu_wrapper'>
                <img src='/i/markets/12.png' className='item_menu_logo' title='Item Logo'/>
                <img src='/i/pizza/1.jpg' className='item_menu_img' alt='Item Img' />
                <div className='item_menu_name'>{this.props.itemdata.name}</div>
                <div className='item_menu_description'>{this.props.itemdata.description}</div>

                <div>Цена: {this.props.itemdata.price} руб.</div>
                <span>Количество</span>

                <div className='item_menu_selectAmount'>

                    <button onClick={() => this.addAmount()}>+</button>

                    <input type="text" name="amount" id="input" value={this.state.amount} onChange={this.change}/>

                    <button onClick={() => this.subAmount()}>-</button>
                </div>

                <button onClick={() => {this.props.add(this.props.itemdata.name, +this.state.amount)}}>В корзину</button>
            </div>
                
        )
    }
}

export default ItemMenu;