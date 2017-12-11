import React, {Component} from 'react';
import {keys} from '../keys';

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      response: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      response: this.apiResponse()
    });
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    console.log('A username was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>{'Hello world two!'}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
        <p>{this.state.response}</p>
      </div>
    );
  }
}
