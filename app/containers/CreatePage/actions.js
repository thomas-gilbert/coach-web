import { SAVE } from './constants';

/**
 * SavingProgram
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function save(newProgram) {
  return {
    type: SAVE,
    program: newProgram,
  };
}
