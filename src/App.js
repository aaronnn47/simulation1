import React, { Component } from 'react';
import './App.css';
import Input from './Input'
// import Display from './Display'

class App extends Component {


  render() {
    return (
      <div>
        <div className="header">
          <h1>SHELFIE</h1>
        </div>


        <div className="Input">        
        <Input/>        
        </div>


      </div>
    );
  }
}

export default App;
