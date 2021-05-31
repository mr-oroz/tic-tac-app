import React from 'react';
import './App.css';
import Box from './components/box';

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
      title: ['X turn'],
      found: false,
      text: ['dddd'],
    }
  }

  winnerGames = () => {
    const win = null;
    const boxes = this.state.boxes;
    const winner = this.state.winner;
    winner.map((v, i) => {
      if (boxes[v[0]] === boxes[v[1]] && boxes[v[1]] === boxes[v[2]] && boxes[v[0]].length > 0) {
        win = boxes[v[2]]
      }
    })
    this.setState(() => {
      return win;
    })
  }

  boxClick = (j) => {
    this.setState((prev) => {
      this.winnerGames()
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
        <h1>{this.state.title}</h1>
        <div className={'app'}>
          {this.state.boxes.map((boxes, index) => {
            return <Box s={() => this.boxClick(index)} box={boxes} />
          })}
          <div>
            <button onClick={() => this.clear()}>clear</button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
