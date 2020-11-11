import React, { Component } from 'react';
import PureComponent from "./purecomp";
import RegComp from './regcomp'

export class parentcomp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : "parentcomp"
        }
    }
    componentDidMount() {
        setInterval(() =>{
            this.setState({
                name: "parentcomp"
            })
        },3000

        )
    }
    
    render() {
        console.log("this is parent comp")
        return (
            <div>
                im the parent Component
                <RegComp name={this.state.name} />
                <PureComponent name = {this.state.name} />
            </div>
        )
    }
}

export default parentcomp
