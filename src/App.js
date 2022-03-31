import React, { Component } from 'react';
import Texto from './quests/texto';
import Button from './quests/button';
import './App.css';


class App extends Component {
  render(props) {
    return (
      <>
        <Texto texto ="texto desafio 1 - base react"/>
        <Button label ="Baixar CV"/>
      </>
    );
  }
}

export default App;
