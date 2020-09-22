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
      {/* <InfoWrapper id="info">
          <Info />
        </InfoWrapper> */}
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

const InfoWrapper = styled.div`
width: 95%;
margin: 0 auto;
`