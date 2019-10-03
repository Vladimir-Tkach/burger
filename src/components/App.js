import React, {Component} from 'react';
import '../css/App.css';
import Menu from './Menu';
import Basket from './Basket';
import Content from './Content';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      json : {},
      showCategory: 'pizza',
      basket : {}
    }

    this.selectCategory = this.selectCategory.bind(this);
    this.addToBasket = this.addToBasket.bind(this);
  }


  selectCategory(nameCategory){
    this.setState({showCategory : nameCategory});
  }

  addToBasket(nameProduct, amount){

    if(!this.state.basket.hasOwnProperty(nameProduct)){
      let newObj = {[nameProduct] : amount};
      let basket = {...this.state.basket, ...newObj};
      this.setState({basket});
    } else{
      let newObj = {[nameProduct] : amount + this.state.basket[nameProduct]};
      let basket = {...this.state.basket, ...newObj};
      this.setState({basket});
    }

  }

  
  render(){
    return (
      <div>
        <header className="header_title">
            <h1>Сделайте заказ на прямую из ресторана</h1>
        </header>
        <div className="App">
          <nav>
            <Menu func = {this.selectCategory} />
            <Basket basket={this.state.basket}/>
          </nav>
          <Content 
            category={this.state.showCategory}
            basket={this.state.basket}
            add={this.addToBasket}
          />
          
        </div>
      </div>
    )
  }
  


}

export default App;
