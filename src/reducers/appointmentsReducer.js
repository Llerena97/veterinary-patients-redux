import { SHOW_APPOINTMENTS, ADD_APPOINTMENT, DELETE_APPOINTMENT } from '../actions/types';

const initialState = {
  appointments: [
    {
      id: 1,
      date: '04-07-19',
      time: '10:00',
      owner: 'Me',
      symptoms: 'Bad'
    },
    {
      id: 2,
      date: '04-07-19',
      time: '10:00',
      owner: 'Me',
      symptoms: 'Bad'
    }
  ]
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_APPOINTMENTS:
      return {
        ...state
      }
    default:
    return state;
  }
}
