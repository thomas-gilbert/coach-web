/*
 * ProgramsReducer
 */

import { fromJS } from 'immutable';
import { SAVE } from './constants';

// The initial state of the programsReducer
const initialState = fromJS({
  programs: [],
});

function programsReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE:
      return state.set('programs', [...state.get('programs'), action.program]);
    default:
      return state;
  }
}

export default programsReducer;
