import React, {Component} from 'react';

export class Hello extends Component {
  render() {
    return (
      <div>
        <h1>{'Hello world!'}</h1>
      </div>
    );
  }
}

export class Hello2 extends Component {
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
    this.apiResponse();
    console.log(this.state.response);
  }

  // https://randomuser.me/api/?results=10
  // https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/rubberice?api_key=RGAPI-403df67a-bfc0-4acc-a34f-e2eee9ff30a4
  apiResponse() {
    return fetch('https://randomuser.me/api/', {
      method: 'GET',
      mode: 'cors'
    })
      .then(res => res.text())
      .then(data => {
        this.setState({
          response: data
        });
      })
      .catch(error => console.log('Oops! There Is A Problem', error));
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
