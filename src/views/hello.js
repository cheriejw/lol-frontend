import React, {Component} from 'react';
import SearchBar from '../components/searchBar';

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
        <SearchBar/>
      </div>
    );
  }
}
