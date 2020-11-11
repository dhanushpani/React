import React, { PureComponent } from 'react'

 class purecomp extends PureComponent {
    render() {
        console.log("purecomponent render")
        return (
            <div>
                im pure PureComponent {this.props.name}
            </div>
        )
    }
}

export default purecomp
