import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

// Redux
import { connect } from 'react-redux';
import { addAppointment } from '../actions/appointmentsActions';

const initialState = {
  appointment: {
    pet: '',
    owner: '',
    date: '',
    time: '',
    symptoms: ''
  },
  error: false
}
class NewAppointment extends Component {
  state = {...initialState}

  handleChange = e => {
    this.setState({
      appointment: {
        ...this.state.appointment,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const {pet, owner, date, time, symptoms} = this.state.appointment;
    if (pet === '' || owner === '' || date === '' || time === '' || symptoms === '') {
      this.setState({
        error: true
      })
      return;
    }
    const newAppointment = {...this.state.appointment}
    newAppointment.id = uuid();
    this.props.addAppointment(newAppointment)

    this.setState({
      ...initialState
    })
  }

  render() {
    const { error } = this.state
    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Fill out this form for a new appointment.
          </h2>
          { error ? <div className="alert alert-danger mt-2 mb-5 text-center">All fields are required</div> : null }
          <form
            onSubmit={this.handleSubmit}
          >
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Pet Name</label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Pet Name"
                  name="pet"
                  onChange={this.handleChange}
                  value={this.state.appointment.pet}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Pet Owner</label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Pet Owner"
                  name="owner"
                  onChange={this.handleChange}
                  value={this.state.appointment.owner}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Date</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  onChange={this.handleChange}
                  value={this.state.appointment.date}
                />
              </div>
              <label className="col-sm-4 col-lg-2 col-form-label">Time</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="time"
                  onChange={this.handleChange}
                  value={this.state.appointment.time}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Symptoms</label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  name="symptoms"
                  placeholder="Describe symptoms..."
                  onChange={this.handleChange}
                  value={this.state.appointment.symptoms}
                >
                </textarea>
              </div>
            </div>

            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Add New Appointment"
            />

          </form>
        </div>
      </div>
    );
  }
}

NewAppointment.propTypes = {
  createNewAppointment: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  appointments: state.appointments.appointments
})

export default connect(mapStateToProps, {addAppointment}) (NewAppointment);
