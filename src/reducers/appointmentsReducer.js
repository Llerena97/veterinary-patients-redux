import { SHOW_APPOINTMENTS, ADD_APPOINTMENT, DELETE_APPOINTMENT } from '../actions/types';

const initialState = {
  appointments: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_APPOINTMENTS:
      return {
        ...state
      }
    case ADD_APPOINTMENT:
      return {
        ...state,
        appointments: [...state.appointments, action.payload]
      }
      case DELETE_APPOINTMENT:
        return {
          ...state,
          appointments: state.appointments.filter( appointment => appointment.id !== action.payload)
        }
    default:
    return state;
  }
}
