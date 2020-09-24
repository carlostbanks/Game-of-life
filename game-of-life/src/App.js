import React from 'react';
import TopBar from '../src/components/TopBar/TopBar';
import Grid from '../src/components/Grid/Grid';
import ControlBar from '../src/components/ControlBar/ControlBar';
import styled from 'styled-components';
import './App.css';

class App extends React.Component {

  state = {
    currentGrid: [],
    gridDimensions: 15,
    generation: 0,
    gameOn: false,
    gameSpeed: 1000,
    displaySpeed: 1
  };

  createGrid = (newGridSize) => {
    let newGrid = []
    // create a (x-value) by (y-value) square grid using a nested loop and the new grid size,
    // store x-val, y-val, and isAlive(boolean) for each cell
    for (let x = 0; x < newGridSize; x++) {
      let rowOfCells = []
      // once a row of cells is created at the desired length, push it into the currentGrid array to be stored in state
      for (let y = 0; y < newGridSize; y++) {
        rowOfCells.push({
          // x and y swapped so rows are stored rather than columns
          xVal: y,
          yVal: x,
          isAlive: false,
        });
      }
      // push the full row of cells into the allCells array
      newGrid.push(rowOfCells);
    }
    // set the currentGrid state equal to the cell rows array, containing all rows, x/y vals, and isAlive
    this.setState({
      currentGrid: newGrid
    })
  }
   //createGrid^^^^^^^^------------------------------------------------------------------------------------------------

   setNewDimensions = (newGridDim) => {
    this.setState({
      gridDimensions: newGridDim
    });
    this.createGrid(newGridDim)
  }
  //setNewDimensions^^^^^^-------------------------------------------------------------------------------------------

  // on load, create a new grid with default 15x15
  componentDidMount() {
    this.setNewDimensions(15)
  };

  // componentDidMount/Update^^^^^^^------------------------------------------------------------------------------------------

  randomizeGrid = () => {
    let newGrid = []
    for (let x = 0; x < this.state.gridDimensions; x++) {
      let rowOfCells = []
      for (let y = 0; y < this.state.gridDimensions; y++) {
        const random = !!Math.round(Math.random());
        rowOfCells.push({
          xVal: y,
          yVal: x,
          isAlive: random,
        });
      }
      newGrid.push(rowOfCells);
    }
    this.setState({
      currentGrid: newGrid
    })
  }
  // randomize^^^^^^^------------------------------------------------------------------------------------------
  clearGrid = () => {
    let newGrid = []
    for (let x = 0; x < this.state.gridDimensions; x++) {
      let rowOfCells = []
      for (let y = 0; y < this.state.gridDimensions; y++) {
        rowOfCells.push({
          xVal: y,
          yVal: x,
          isAlive: false,
        });
      }
      newGrid.push(rowOfCells);
    }
    this.setState({
      currentGrid: newGrid,
      generation: 0,
      gameOn: false
    })
  }
  // clear grid^^^^^^^------------------------------------------------------------------------------------------

  toggleCell = cell => {
    let curGrid = this.state.currentGrid;

    curGrid[cell.yVal][cell.xVal].isAlive = !cell.isAlive
    this.setState({
      currentGrid: curGrid
    });
    console.log(this.state.currentGrid)
  };
  // toggle dead/alive^^^^^^^------------------------------------------------------------------------------------------







  //start game-- has button on controlbar
  startGame = () => {
    this.setState({
      gameOn: true
    });
    this.nextGeneration()
  }

  //game continues-- no button on control bar
  nextGeneration = () => {
    this.gameAlgo();
    setTimeout(() => {
      if (this.state.gameOn) {
        this.nextGeneration()
      }
    }, this.state.gameSpeed)
  };

  //stop game--- has button on CB
  stopGame = () => {
    this.setState({
      gameOn: false
    });
  };

  increaseSpeed = () => {
    if (this.state.gameSpeed === 100) {
      window.alert('You\'ve reached the speed limit!')
    } else {
      this.setState({
        gameSpeed: this.state.gameSpeed - 100,
        displaySpeed: this.state.displaySpeed + 1
      })
    }
  }

  decreaseSpeed = () => {
    if (this.state.gameSpeed === 1000) {
      window.alert('Cannot go any slower!')
    } else {
      this.setState({
        gameSpeed: this.state.gameSpeed + 100,
        displaySpeed: this.state.displaySpeed - 1
      })
    }
  }

  presetGridRobo = () => {
    let robotGrid = [
      [
        { xVal: 0, yVal: 0, isAlive: false },
        { xVal: 1, yVal: 0, isAlive: false },
        { xVal: 2, yVal: 0, isAlive: false },
        { xVal: 3, yVal: 0, isAlive: false },
        { xVal: 4, yVal: 0, isAlive: false },
        { xVal: 5, yVal: 0, isAlive: false },
        { xVal: 6, yVal: 0, isAlive: false },
        { xVal: 7, yVal: 0, isAlive: false },
        { xVal: 8, yVal: 0, isAlive: false },
        { xVal: 9, yVal: 0, isAlive: false },
        { xVal: 10, yVal: 0, isAlive: false },
        { xVal: 11, yVal: 0, isAlive: false },
        { xVal: 12, yVal: 0, isAlive: false },
        { xVal: 13, yVal: 0, isAlive: false },
        { xVal: 14, yVal: 0, isAlive: false }
      ],
      [
        { xVal: 0, yVal: 1, isAlive: false },
        { xVal: 1, yVal: 1, isAlive: false },
        { xVal: 2, yVal: 1, isAlive: false },
        { xVal: 3, yVal: 1, isAlive: false },
        { xVal: 4, yVal: 1, isAlive: false },
        { xVal: 5, yVal: 1, isAlive: false },
        { xVal: 6, yVal: 1, isAlive: false },
        { xVal: 7, yVal: 1, isAlive: true },
        { xVal: 8, yVal: 1, isAlive: false },
        { xVal: 9, yVal: 1, isAlive: false },
        { xVal: 10, yVal: 1, isAlive: false },
        { xVal: 11, yVal: 1, isAlive: false },
        { xVal: 12, yVal: 1, isAlive: false },
        { xVal: 13, yVal: 1, isAlive: false },
        { xVal: 14, yVal: 1, isAlive: false },
      ],
      [
        { xVal: 0, yVal: 2, isAlive: false },
        { xVal: 1, yVal: 2, isAlive: false },
        { xVal: 2, yVal: 2, isAlive: false },
        { xVal: 3, yVal: 2, isAlive: false },
        { xVal: 4, yVal: 2, isAlive: false },
        { xVal: 5, yVal: 2, isAlive: false },
        { xVal: 6, yVal: 2, isAlive: false },
        { xVal: 7, yVal: 2, isAlive: true },
        { xVal: 8, yVal: 2, isAlive: false },
        { xVal: 9, yVal: 2, isAlive: false },
        { xVal: 10, yVal: 2, isAlive: false },
        { xVal: 11, yVal: 2, isAlive: false },
        { xVal: 12, yVal: 2, isAlive: false },
        { xVal: 13, yVal: 2, isAlive: false },
        { xVal: 14, yVal: 2, isAlive: false },
      ],
      [
        { xVal: 0, yVal: 3, isAlive: false },
        { xVal: 1, yVal: 3, isAlive: false },
        { xVal: 2, yVal: 3, isAlive: false },
        { xVal: 3, yVal: 3, isAlive: false },
        { xVal: 4, yVal: 3, isAlive: false },
        { xVal: 5, yVal: 3, isAlive: false },
        { xVal: 6, yVal: 3, isAlive: true },
        { xVal: 7, yVal: 3, isAlive: false },
        { xVal: 8, yVal: 3, isAlive: true },
        { xVal: 9, yVal: 3, isAlive: false },
        { xVal: 10, yVal: 3, isAlive: false },
        { xVal: 11, yVal: 3, isAlive: false },
        { xVal: 12, yVal: 3, isAlive: false },
        { xVal: 13, yVal: 3, isAlive: false },
        { xVal: 14, yVal: 3, isAlive: false },
      ],
      [
        { xVal: 0, yVal: 4, isAlive: false },
        { xVal: 1, yVal: 4, isAlive: false },
        { xVal: 2, yVal: 4, isAlive: false },
        { xVal: 3, yVal: 4, isAlive: false },
        { xVal: 4, yVal: 4, isAlive: false },
        { xVal: 5, yVal: 4, isAlive: false },
        { xVal: 6, yVal: 4, isAlive: false },
        { xVal: 7, yVal: 4, isAlive: true },
        { xVal: 8, yVal: 4, isAlive: false },
        { xVal: 9, yVal: 4, isAlive: false },
        { xVal: 10, yVal: 4, isAlive: false },
        { xVal: 11, yVal: 4, isAlive: false },
        { xVal: 12, yVal: 4, isAlive: false },
        { xVal: 13, yVal: 4, isAlive: false },
        { xVal: 14, yVal: 4, isAlive: false },
      ],
      [
        { xVal: 0, yVal: 5, isAlive: false },
        { xVal: 1, yVal: 5, isAlive: false },
        { xVal: 2, yVal: 5, isAlive: false },
        { xVal: 3, yVal: 5, isAlive: false },
        { xVal: 4, yVal: 5, isAlive: false },
        { xVal: 5, yVal: 5, isAlive: false },
        { xVal: 6, yVal: 5, isAlive: false },
        { xVal: 7, yVal: 5, isAlive: true },
        { xVal: 8, yVal: 5, isAlive: false },
        { xVal: 9, yVal: 5, isAlive: false },
        { xVal: 10, yVal: 5, isAlive: false },
        { xVal: 11, yVal: 5, isAlive: false },
        { xVal: 12, yVal: 5, isAlive: false },
        { xVal: 13, yVal: 5, isAlive: false },
        { xVal: 14, yVal: 5, isAlive: false },
      ],
      [
        { xVal: 0, yVal: 6, isAlive: false },
        { xVal: 1, yVal: 6, isAlive: false },
        { xVal: 2, yVal: 6, isAlive: false },
        { xVal: 3, yVal: 6, isAlive: false },
        { xVal: 4, yVal: 6, isAlive: false },
        { xVal: 5, yVal: 6, isAlive: false },
        { xVal: 6, yVal: 6, isAlive: false },
        { xVal: 7, yVal: 6, isAlive: true },
        { xVal: 8, yVal: 6, isAlive: false },
        { xVal: 9, yVal: 6, isAlive: false },
        { xVal: 10, yVal: 6, isAlive: false },
        { xVal: 11, yVal: 6, isAlive: false },
        { xVal: 12, yVal: 6, isAlive: false },
        { xVal: 13, yVal: 6, isAlive: false },
        { xVal: 14, yVal: 6, isAlive: false },
      ],
      [
        { xVal: 0, yVal: 7, isAlive: false },
        { xVal: 1, yVal: 7, isAlive: false },
        { xVal: 2, yVal: 7, isAlive: false },
        { xVal: 3, yVal: 7, isAlive: false },
        { xVal: 4, yVal: 7, isAlive: false },
        { xVal: 5, yVal: 7, isAlive: false },
        { xVal: 6, yVal: 7, isAlive: false },
        { xVal: 7, yVal: 7, isAlive: true },
        { xVal: 8, yVal: 7, isAlive: false },
        { xVal: 9, yVal: 7, isAlive: false },
        { xVal: 10, yVal: 7, isAlive: false },
        { xVal: 11, yVal: 7, isAlive: false },
        { xVal: 12, yVal: 7, isAlive: false },
        { xVal: 13, yVal: 7, isAlive: false },
        { xVal: 14, yVal: 7, isAlive: false },
      ],
      [
        { xVal: 0, yVal: 8, isAlive: false },
        { xVal: 1, yVal: 8, isAlive: false },
        { xVal: 2, yVal: 8, isAlive: false },
        { xVal: 3, yVal: 8, isAlive: false },
        { xVal: 4, yVal: 8, isAlive: false },
        { xVal: 5, yVal: 8, isAlive: false },
        { xVal: 6, yVal: 8, isAlive: true },
        { xVal: 7, yVal: 8, isAlive: false },
        { xVal: 8, yVal: 8, isAlive: true },
        { xVal: 9, yVal: 8, isAlive: false },
        { xVal: 10, yVal: 8, isAlive: false },
        { xVal: 11, yVal: 8, isAlive: false },
        { xVal: 12, yVal: 8, isAlive: false },
        { xVal: 13, yVal: 8, isAlive: false },
        { xVal: 14, yVal: 8, isAlive: false },
      ],
      [
        { xVal: 0, yVal: 9, isAlive: false },
        { xVal: 1, yVal: 9, isAlive: false },
        { xVal: 2, yVal: 9, isAlive: false },
        { xVal: 3, yVal: 9, isAlive: false },
        { xVal: 4, yVal: 9, isAlive: false },
        { xVal: 5, yVal: 9, isAlive: false },
        { xVal: 6, yVal: 9, isAlive: false },
        { xVal: 7, yVal: 9, isAlive: true },
        { xVal: 8, yVal: 9, isAlive: false },
        { xVal: 9, yVal: 9, isAlive: false },
        { xVal: 10, yVal: 9, isAlive: false },
        { xVal: 11, yVal: 9, isAlive: false },
        { xVal: 12, yVal: 9, isAlive: false },
        { xVal: 13, yVal: 9, isAlive: false },
        { xVal: 14, yVal: 9, isAlive: false },
      ],
      [
        { xVal: 0, yVal: 10, isAlive: false },
        { xVal: 1, yVal: 10, isAlive: false },
        { xVal: 2, yVal: 10, isAlive: false },
        { xVal: 3, yVal: 10, isAlive: false },
        { xVal: 4, yVal: 10, isAlive: false },
        { xVal: 5, yVal: 10, isAlive: false },
        { xVal: 6, yVal: 10, isAlive: false },
        { xVal: 7, yVal: 10, isAlive: true },
        { xVal: 8, yVal: 10, isAlive: false },
        { xVal: 9, yVal: 10, isAlive: false },
        { xVal: 10, yVal: 10, isAlive: false },
        { xVal: 11, yVal: 10, isAlive: false },
        { xVal: 12, yVal: 10, isAlive: false },
        { xVal: 13, yVal: 10, isAlive: false },
        { xVal: 14, yVal: 10, isAlive: false },
      ],
      [
        { xVal: 0, yVal: 11, isAlive: false },
        { xVal: 1, yVal: 11, isAlive: false },
        { xVal: 2, yVal: 11, isAlive: false },
        { xVal: 3, yVal: 11, isAlive: false },
        { xVal: 4, yVal: 11, isAlive: false },
        { xVal: 5, yVal: 11, isAlive: false },
        { xVal: 6, yVal: 11, isAlive: false },
        { xVal: 7, yVal: 11, isAlive: false },
        { xVal: 8, yVal: 11, isAlive: false },
        { xVal: 9, yVal: 11, isAlive: false },
        { xVal: 10, yVal: 11, isAlive: false },
        { xVal: 11, yVal: 11, isAlive: false },
        { xVal: 12, yVal: 11, isAlive: false },
        { xVal: 13, yVal: 11, isAlive: false },
        { xVal: 14, yVal: 11, isAlive: false },
      ],
      [
        { xVal: 0, yVal: 12, isAlive: false },
        { xVal: 1, yVal: 12, isAlive: false },
        { xVal: 2, yVal: 12, isAlive: false },
        { xVal: 3, yVal: 12, isAlive: false },
        { xVal: 4, yVal: 12, isAlive: false },
        { xVal: 5, yVal: 12, isAlive: false },
        { xVal: 6, yVal: 12, isAlive: false },
        { xVal: 7, yVal: 12, isAlive: false },
        { xVal: 8, yVal: 12, isAlive: false },
        { xVal: 9, yVal: 12, isAlive: false },
        { xVal: 10, yVal: 12, isAlive: false },
        { xVal: 11, yVal: 12, isAlive: false },
        { xVal: 12, yVal: 12, isAlive: false },
        { xVal: 13, yVal: 12, isAlive: false },
        { xVal: 14, yVal: 12, isAlive: false },
      ],
      [
        { xVal: 0, yVal: 13, isAlive: false },
        { xVal: 1, yVal: 13, isAlive: false },
        { xVal: 2, yVal: 13, isAlive: false },
        { xVal: 3, yVal: 13, isAlive: false },
        { xVal: 4, yVal: 13, isAlive: false },
        { xVal: 5, yVal: 13, isAlive: false },
        { xVal: 6, yVal: 13, isAlive: false },
        { xVal: 7, yVal: 13, isAlive: false },
        { xVal: 8, yVal: 13, isAlive: false },
        { xVal: 9, yVal: 13, isAlive: false },
        { xVal: 10, yVal: 13, isAlive: false },
        { xVal: 11, yVal: 13, isAlive: false },
        { xVal: 12, yVal: 13, isAlive: false },
        { xVal: 13, yVal: 13, isAlive: false },
        { xVal: 14, yVal: 13, isAlive: false },
      ],
      [
        { xVal: 0, yVal: 14, isAlive: false },
        { xVal: 1, yVal: 14, isAlive: false },
        { xVal: 2, yVal: 14, isAlive: false },
        { xVal: 3, yVal: 14, isAlive: false },
        { xVal: 4, yVal: 14, isAlive: false },
        { xVal: 5, yVal: 14, isAlive: false },
        { xVal: 6, yVal: 14, isAlive: false },
        { xVal: 7, yVal: 14, isAlive: false },
        { xVal: 8, yVal: 14, isAlive: false },
        { xVal: 9, yVal: 14, isAlive: false },
        { xVal: 10, yVal: 14, isAlive: false },
        { xVal: 11, yVal: 14, isAlive: false },
        { xVal: 12, yVal: 14, isAlive: false },
        { xVal: 13, yVal: 14, isAlive: false },
        { xVal: 14, yVal: 14, isAlive: false },
      ]
    ]
    this.setState({
      currentGrid: robotGrid
    })
  }





render() {
  return (
    <div className="App">
      <p>Carlos Banks: Conway's Game of Life</p>
      <nav>
        <a href='https://github.com/jbasile6/Conways-Life/blob/master/objectives/rules-game-life'>Game Rules</a>
        <a href='#info'>Info Section</a>
      </nav>

      <AppWrapper>
        <GameWrapper>
          <p>Generation: {this.state.generation}</p>
          <p>Game Speed: {this.state.displaySpeed}</p>
          <Grid
            currentGrid={this.state.currentGrid}
            size={this.state.gridDimensions}
            toggleCell={this.toggleCell}
          />
        </GameWrapper>
        <ControlWrapper>
          <TopBar
            startGame={this.startGame}
            stopGame={this.stopGame}
            nextGen={this.gameAlgo}
            increaseSpeed={this.increaseSpeed}
            decreaseSpeed={this.decreaseSpeed}
          />
          <ControlBar
            gridReset={this.setNewDimensions}
            randomizeGrid={this.randomizeGrid}
            clearGrid={this.clearGrid}
            startGame={this.startGame}
            stopGame={this.stopGame}
            robotPreset={this.presetGridRobo}
          />
        </ControlWrapper>
      </AppWrapper>
    </div>
  )
}
}




export default App;

const AppWrapper = styled.div`
display: flex;
flex-wrap: nowrap;
border: 2px solid gray;
padding: 10px 10px;
`

const GameWrapper = styled.div`
display: flex;
justify-content: center;
width: 48%; 
flex-wrap: wrap;
`


const ControlWrapper = styled.div`
width: 48%;
flex-direction: column;
`