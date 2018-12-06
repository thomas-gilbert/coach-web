import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/prefer-stateless-function */
class ExerciseGroup extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      exercise: '',
      sets: '',
      reps: '',
      weight: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        this.props.updateDay(
          this.props.dayIndex,
          this.props.exerciseIndex,
          this.state,
        );
      },
    );
  }

  render() {
    return (
      <div className="exercise-group">
        <h3>{`Exercise ${this.props.exerciseIndex}`}</h3>
        <div className="exercise-item">
          <label htmlFor="exercise"> Exercise</label>
          <input
            name="exercise"
            onChange={this.handleChange}
            value={this.state.exercise}
          />
        </div>
        <div className="exercise-item">
          <label htmlFor="sets"> Sets</label>
          <input
            name="sets"
            onChange={this.handleChange}
            value={this.state.sets}
          />
        </div>
        <div className="exercise-item">
          <label htmlFor="reps"> Reps</label>
          <input
            name="reps"
            onChange={this.handleChange}
            value={this.state.reps}
          />
        </div>
        <div className="exercise-item">
          <label htmlFor="weight"> Weight</label>
          <input
            name="weight"
            onChange={this.handleChange}
            value={this.state.weight}
          />
        </div>
      </div>
    );
  }
}

ExerciseGroup.propTypes = {
  exerciseIndex: PropTypes.number.isRequired,
  dayIndex: PropTypes.number.isRequired,
  updateDay: PropTypes.func.isRequired,
};

export default ExerciseGroup;
