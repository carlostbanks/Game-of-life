import React from 'react';
import GridContainer from '../src/components/GridContainer/GridContainer'
import Grid from '../src/components/Grid/Grid'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="game-container">
          <GridContainer />
          <Grid />
        </div>
      </header>
    </div>
  );
}

export default App;
