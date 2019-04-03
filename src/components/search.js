import React, { Component } from 'react';
import './search.css'

export default class Search extends Component{
    constructor(){
        super();
    }
    render(){
        
        return (
            <div>
                <div className="container">
                    <div className="row mt-4" >
                        <div className="col-md-6">

                        </div>
                        <div className="col-md-6">
                            <input type="text"
                                    placeholder="Search" 
                                    onChange={(e)=>{this.props.searchText(e.target.value)}}/>
                          <button className="ml-2 btn btn-primary search">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}