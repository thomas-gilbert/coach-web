/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import ExerciseGroup from '../../components/Form/ExerciseGroup';

/* eslint-disable react/prefer-stateless-function */
export default class CreatePage extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <form>
          <div className="form-group">
            <ExerciseGroup />
          </div>
        </form>
      </div>
    );
  }
}
