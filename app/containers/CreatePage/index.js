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
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import { push } from 'connected-react-router/immutable';
import messages from './messages';
import { save } from './actions';
import reducer from './reducer';
import ExerciseGroup from '../../components/Form/ExerciseGroup';

/* eslint-disable react/prefer-stateless-function */

const exerciseSchema = {
  name: '',
  sets: 0,
  reps: 0,
  weight: null,
};

class CreatePage extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      program: [[exerciseSchema]],
    };

    this.addExercise = this.addExercise.bind(this);
    this.updateDay = this.updateDay.bind(this);
  }

  addExercise(dayIndex) {
    this.setState(state => {
      const newProgram = state.program.map((value, index) => {
        if (dayIndex === index) {
          return [...value, exerciseSchema];
        }
        return value;
      });

      return {
        ...state,
        program: newProgram,
      };
    });
  }

  updateDay(day, exercise, data) {
    this.setState(state => {
      const newProgram = state.program.map((value, index) => {
        if (day === index) {
          return value.map((v, i) => {
            if (exercise === i) {
              return [data];
            }
            return v;
          });
        }
        return value;
      });

      return {
        ...state,
        program: newProgram,
      };
    });
  }

  save() {
    const data = {
      name: 'Test',
      uniqueCode: Math.floor(Math.random() * 100 + 1),
      data: this.state.program,
    };

    this.props.save(data);
    this.props.goHome();
  }

  render() {
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        {this.state.program.map((value, dayIndex) => (
          <form>
            {value.map((exercise, exerciseIndex) => (
              <div className="form-group">
                <ExerciseGroup
                  updateDay={this.updateDay}
                  dayIndex={dayIndex}
                  exerciseIndex={exerciseIndex + 1}
                />
              </div>
            ))}
            <button
              type="button"
              onClick={this.addExercise.bind(this, dayIndex)}
            >
              Add Exercise
            </button>
            <button type="button" onClick={this.save.bind(this)}>
              Save
            </button>
          </form>
        ))}
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    save: data => dispatch(save(data)),
    goHome: () => dispatch(push('/')),
  };
}

export function mapStateToProps() {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'create', reducer });

export default compose(
  withReducer,
  withConnect,
)(CreatePage);
