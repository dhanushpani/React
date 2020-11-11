import React, { Component } from 'react'

export class regcomp extends Component {
    render() {
        console.log("this is reg comp")
        return (
            <div>
                im regular componet
                {this.props.name}
            </div>
        )
    }
}

export default regcomp
