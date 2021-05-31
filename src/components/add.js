import React, { Component } from 'react';
import '../App.css';
class Add extends Component {
    render() {
        return (
            <>
                <div className={'add'}>
                    <button onClick={()=> {this.props.addTodo()}}>Add</button>
                    <ul>
                        <li>
                            {this.props.text}
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}

export default Add
