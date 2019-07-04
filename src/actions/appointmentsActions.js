import { SHOW_APPOINTMENTS, ADD_APPOINTMENT, DELETE_APPOINTMENT } from './types';

export const getAppointments = () => {
  return {
    type: SHOW_APPOINTMENTS
  }
}

export const addAppointment = (appointment) => {
  return {
    type: ADD_APPOINTMENT,
    payload: appointment
  }
}
