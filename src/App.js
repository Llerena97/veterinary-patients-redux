import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header'
import NewAppointment from './components/NewAppointment'
import AppointmentList from './components/AppointmentList'

class App extends Component {
  state = {
    appointments: []
  }

  createNewAppointment = appointmentData => {
    const appointments = [...this.state.appointments, appointmentData]
    this.setState({
      appointments
    })
  }

  render() {
    return (
      <div className="App">
        <Header
          title="Admin Veterinary Patients"
          />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewAppointment
              createNewAppointment={this.createNewAppointment}
              />
          </div>
          <div className="mt-5 col-md-10 mx-auto">
            <AppointmentList
              appointments={this.state.appointments}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
