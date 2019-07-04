import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header'
import NewAppointment from './components/NewAppointment'
import AppointmentList from './components/AppointmentList'

// Redux
import { Provider } from 'react-redux';
import store from './store'

class App extends Component {

  componentDidMount(){
    const localStorageAppointments = localStorage.getItem('appointments');
    if (localStorageAppointments) {
      this.setState({
        appointments: JSON.parse(localStorageAppointments)
      })
    }
  }

  componentDidUpdate(){
    localStorage.setItem('appointments', JSON.stringify(this.state.appointments))
  }

  deleteAppointment = appointmentId => {
    const currentAppointments = this.state.appointments
    const appointments = currentAppointments.filter( appointment => appointment.id !== appointmentId)
    this.setState({
      appointments
    })
  }

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
              <AppointmentList
                deleteAppointment={this.deleteAppointment}
                />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
