import React from 'react'

export default function House(props) {

        return(
            <div className="House">
                {props.id} 
                {props.name}
                {props.address} 
                {props.city} 
                {props.state} 
                {props.zip} 
                
                <button onClick={() => props.deleteHouse(props.id)}>
                    Delete House
                </button>
            </div>
        )
    
}