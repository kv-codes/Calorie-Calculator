import React, { Component } from 'react'

class Result extends Component {
    render() {
        return (
            <div>
                <h2>Your {this.props.label}: {this.props.result}</h2>
            </div>


        )
    }

}
export default Result;