import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

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

    componentDidMount(){
        if(this.props.match.params.id){
            axios.get(`/api/houses/${this.props.match.params.id}`).then(res => {
                this.setState({
                    name: res.data.name,
                    address: res.data.address,
                    city: res.data.city,
                    state: res.data.state,
                    zip: res.data.zip
                })
                console.log(res)
            })
        }
    }


    addClick = () => {
        axios.post('/api/houses', {
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        }).then(res => {
            console.log('House Added')
        }).catch(err => {
            console.log('Problem adding home error:', err)
        }) 
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

                <button onClick={this.state.addClick}>Add Home</button>
            </div>
        )
    }
}