import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Search from './components/search';
import CardProduct from './components/cardProduct';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      counter:0,
      searchQuery:''
    };
    this.handlerAddToCartClick = this.handlerAddToCartClick.bind(this);
    this.handlerRemoveCartClick = this.handlerRemoveCartClick.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerChange = this.handlerChange.bind(this);


  } 
  handlerAddToCartClick(data){
    console.log(data);
    let currentState = this.state;
    currentState.counter++;
    this.setState(currentState);
  }
  handlerRemoveCartClick(data){
    console.log(data);
    let currentState = this.state;
    if(currentState.counter==0){
      this.setState(currentState);
    }
    else{
      currentState.counter--;
      this.setState(currentState);
    }
    
  }
  handlerSearchClick(data){
    console.log(data);
    let currentState = this.state;
    currentState.counter++;
    this.setState(currentState);
  }
  handlerChange(data){
    console.log(data);
    let currentState = this.state;
    currentState.searchQuery = data;
    this.setState(currentState);
  }
  render() {
    return (
      <div className="App">
        <Header count={this.state.counter}/>

        <Search 
         searchText={this.handlerChange}
         search={this.handlerSearchClick}
         />
        <CardProduct 
          addtocart={this.handlerAddToCartClick}
          removecart={this.handlerRemoveCartClick}
          search={this.state.searchQuery}/>
      </div>
    );
  }
}

export default App;
