import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          title="Admin Veterinary Patients"
          />
      </div>
    );
  }
}

export default App;
