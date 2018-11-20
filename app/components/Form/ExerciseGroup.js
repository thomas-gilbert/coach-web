import React from 'react';

/* eslint-disable react/prefer-stateless-function */
export default class CreatePage extends React.PureComponent {
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
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div className="form-group">
        <div>
          <label htmlFor="exercise"> Exercise</label>
          <input
            name="exercise"
            onChange={this.handleChange}
            value={this.state.exercise}
          />
        </div>
        <div>
          <label htmlFor="sets"> Sets</label>
          <input
            name="sets"
            onChange={this.handleChange}
            value={this.state.sets}
          />
        </div>
        <div>
          <label htmlFor="reps"> Reps</label>
          <input
            name="reps"
            onChange={this.handleChange}
            value={this.state.reps}
          />
        </div>
        <div>
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
