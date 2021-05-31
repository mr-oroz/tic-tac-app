import React from 'react';
import './App.css';
import Box from './components/box';
import Add from './components/add'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      boxes: [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
      ],
      winner: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
      ],
      found: false,
      text: ['dddd'],
    }
  }

  boxClick = (j) => {
    this.setState((prev) => {
      let found = prev.found
      let a = prev.boxes.map((v, i) => {
        if (i === j && v === '') found = !found
        return i === j && v === '' ? (found === false ? 'X' : 'O') : v
      })
      return {
        boxes: a,
        found: found,
      }
    })
  }
  clear = () => {
    this.setState((prev) => {
      let remove = prev.boxes.map((v) => {
        return ''
      })
      return {
        boxes: remove
      }
    })
  }
  render() {
    return (
      <>
        <div className={'app'}>
          <h1></h1>
          {this.state.boxes.map((boxes, index) => {
            return <Box s={() => this.boxClick(index)} box={boxes} />
          })}
          <div>
            <button onClick={() => this.clear()}>clear</button>
          </div>
          <Add addTodo={() => { this.addTodo() }} text={this.state.text} />
        </div>
      </>
    );
  }
}

export default App;
