import React, { Component } from 'react';
import '../App.css';

class Box extends Component {
    render() {
        return (
            <>
                <div onClick={() => { this.props.s() }} className={'box'}>
                    <span>{this.props.box}</span>
                </div>
            </>
        )
    }
}
export default Box