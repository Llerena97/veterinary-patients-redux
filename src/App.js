import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header'
import NewAppointment from './components/NewAppointment'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          title="Admin Veterinary Patients"
          />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewAppointment/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
