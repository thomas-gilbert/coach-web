/*
 * ProgramsReducer
 */

import { fromJS } from 'immutable';
import { SAVE } from './constants';

// The initial state of the programsReducer
const initialState = fromJS({
  data: [],
});

function programsReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE:
      return state.set('data', [...state.get('data'), action.program]);
    default:
      return state;
  }
}

export default programsReducer;
