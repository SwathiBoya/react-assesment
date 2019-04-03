import React, { Component } from 'react';
import './card.css';


export default class CardDetails extends Component{
    constructor(){
        super();
    }
    render(){
        
        return (
            <div>
                <div className="card mt-4">
                <img className="card-img-top productImg" src={this.props.details.thumbnailImage} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.details.name}</h5>
                    <p className="card-text">{this.props.details.longDescription}</p>
                    <button className="ml-2 btn btn-primary search" onClick={()=>{this.props.addtocart()}}>Add to Cart</button>
                    <button className="ml-2 btn btn-danger" onClick={()=>{this.props.removecart()}}>Remove</button>
                </div>
                </div>
            </div>
        );
    }
}