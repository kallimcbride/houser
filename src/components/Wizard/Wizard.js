import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Wizard extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
    }
    render(){
        return(
            <div>Wizard
                <Link to ='/'><button className="AddProperty">
                    Cancel
                </button></Link>
                <p>Property Name</p>
                <input placeholder='Name'
                 type="text"
                 value={this.state.name}
                 onChange={e => this.setState({name: e.target.value})}></input>
                
                <p>Address</p>
                <input placeholder='Address'
                type="text"
                value={this.state.address}
                onChange={e => this.setState({address: e.target.value})}></input>
               
               <p>City</p>
               <input placeholder='City'
                type="text"
                value={this.state.city}
                onChange={e => this.setState({city: e.target.value})}></input>
                
                <p>State</p>
                <input placeholder='State'
                type="text"
                value={this.state.state}
                onChange={e => this.setState({state: e.target.value})}></input>
                
                <p>ZIP</p>
                <input placeholder='ZIP'
                type="number"
                value={this.state.zip}
                onChange={e => this.setState({zip: e.target.value})}></input>
            </div>
        )
    }
}