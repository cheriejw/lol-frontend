import React, {Component} from 'react';
import SearchBar from '../components/searchBar';

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      response: ''
    };
  }

  render() {
    return (
      <div>
        <h1>Hello world two!</h1>
        <SearchBar/>
      </div>
    );
  }
}
