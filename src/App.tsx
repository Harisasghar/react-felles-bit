import React, { Component } from 'react';
import './App.css';
import Button from './components/Button/Button';
import { ButtonMenu } from './components/ButtonMenu';

class App extends Component {
  
  render() {
    return (
      <div className="App">
       <Button value="test button" primary></Button>
       <ButtonMenu values={["btn1", "btn2", "btn3"]}></ButtonMenu>
      </div>
    );
  }
}

export default App;
