import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header'
import NewAppointment from './components/NewAppointment'
import AppointmentList from './components/AppointmentList'

// Redux
import { Provider } from 'react-redux';
import store from './store'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header
            title="Admin Veterinary Patients"
            />
          <div className="row">
            <div className="col-md-10 mx-auto">
              <NewAppointment/>
            </div>
            <div className="mt-5 col-md-10 mx-auto">
              <AppointmentList/>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
