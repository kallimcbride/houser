import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import House from '../House/House'

export default class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            homes: []
        }
    }

    componentWillMount(){
        axios.get('/api/houses').then(res => {
            this.setState({
                homes: res.data
            })
            console.log(res.data)
        }).catch(err => {
            console.log('Error fetching data from endpoint in Dash:', err)
        })
    }

    deleteHouse = id => {
        axios.delete(`/api/houses/${id}`).then(res => {
            this.setState({
                homes: res.data
            })
        }).catch(err => {
            console.log('Did not delete error:', err)
        })
    }

    renderHouses = () => {
        return this.state.homes.map(home => {
            return (
                <House 
                id={home.id} 
                name={home.name}
                address={home.address} 
                city={home.city} 
                state={home.state} 
                zip={home.zip} 
                deleteHouse={this.deleteHouse}
                />
            )
        })
    }

    render(){
        return(
            <div>Dashboard
                <div>{this.renderHouses}</div>
                <br/>
                <Link to ='/wizard'><button className="AddProperty">
                    Add New Property
                </button></Link>
                
            </div>
            
        )
    }
}