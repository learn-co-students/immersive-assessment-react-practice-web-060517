import React, { Component } from 'react';
import LanguagesContainer from './components/languagesContainer'
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="App">

        <h1>Programming Languages by Paradigm</h1>

        <LanguagesContainer/>

      </div>
    );
  }
}

export default App;
