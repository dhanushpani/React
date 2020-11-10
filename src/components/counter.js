import React, { Component } from 'react'
import updateComponent from './higherordercomp'


 class Classcomp extends Component {

    constructor(props) {
        super(props)
        this.state = {
             count : 0
        }
    }
    Increment = () =>{
        this.setState({count: this.state.count +1})
    }   
    render() {
    const {count}=this.state
        return (
            <div>
                <button onClick={this.Increment}>clicked</button>
        <h1>{this.props.name} Increment {count}</h1>
            </div>
        )
    }
}

export default updateComponent(Classcomp)
