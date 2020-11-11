import React, { Component } from 'react'


export class classprops extends Component {
    render() {
        return (
            <div>
                <h1>hello,{this.props.name} welocome from {this.props.place}</h1>
                {this.props.children}
            </div>
        )
    }
}

export default classprops
