import React, { Component } from 'react';
import './header.css';


export default class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        
        return (
            <div>
                <div className="container-fluid">
                    <div className="row header">
                        <div className= "col-md-8">
                            <h1>Shopping Cart</h1>
                        </div>
                        <div className="col-md-4">
                            <button type="button" className="btn btn-secondary cart">Cart  <span className="badge badge-light">{this.props.count}</span></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}