import React, { Component } from 'react'
import BellA from "./bellA.png";
import BellB from './bellB.png'
import "../App.css"


export class NewCompnents extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             msg : "subscribe to Pani's Creation",
             subscribe : 'subscribe',
             imgurl : BellA
        }
    }

    styles ={
        fontStyle : "italic",
        color : "teal"
    }

    ButtonChange =() =>{
        this.setState({
            msg : "hit the bell icon to never miss the update",
            sub : "subscribed"
    })
    }

    changeImage =() =>{
        this.setState({imgurl : BellB,
        msg: "Thank You so Much!!"})
    }

    render() {
        return (
            <div>
                <h3 style={this.styles}>{this.state.msg}</h3>
                <button onClick ={this.ButtonChange}>{this.state.subscribe}</button>
                <p></p>
            <img style ={{width : "40px",height : '30px'}}src ={this.state.imgurl} alt="heloo"
                onClick={this.changeImage}
            >  
            </img>  
            </div>
        )
    }
}

export default NewCompnents
