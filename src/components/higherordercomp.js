import React, {Component } from "react";

const updateComponent = OriginalComponent => {
    class NewComp extends Component{
        render(){
            return <OriginalComponent name={'The user'} />
        }
    }
    return NewComp;
}

export default updateComponent;