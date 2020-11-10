import React, { Component } from 'react'
import updateComponent from './higherordercomp'

class hovercounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    
    IncrementCounter = () =>{
        this.setState({count : this.state.count+1})
    }

    render() {
       const  {count} = this.state;
        return (
            <div>
                <button onMouseEnter ={this.IncrementCounter}>Increment on hover</button>
                <h1>{this.props.name} incremented  {count}</h1>
            </div>
        )
    }
}

export default updateComponent(hovercounter)

