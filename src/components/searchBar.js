import React, {Component} from 'react';
import {keys} from '../api/keys';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summonerName: '',
      isLoading: true,
      response: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // componentDidMount() {
  //   const url = 'https://cors.now.sh/https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/rubberice?api_key=' + keys.lol;
  //   fetch(url)
  //     .then(res => res.text())
  //     .then(res => {
  //       console.log('res', res);
  //       this.setState({
  //         response: res,
  //         isLoading: false
  //       });
  //     })
  //     .catch(error => console.log('Error in API summoner by name: ', error));
  // }

  handleChange(event) {
    this.setState({
      summonerName: event.target.value
    });
  }

  handleSubmit(event) {
    console.log('A username was submitted: ' + this.state.summonerName);
    this.fetchSummoner();
    event.preventDefault();
  }

  fetchSummoner() {
    const url = 'https://cors.now.sh/https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/' + this.state.summonerName + '?api_key=' + keys.lol;
    fetch(url)
      .then(res => res.text())
      .then(res => {
        console.log('res', res);
        this.setState({
          response: res,
          isLoading: false
        });
      })
      .catch(error => console.log('Error in API summoner by name: ', error));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.summonerName} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
        {!this.state.isLoading &&
          <p>{this.state.response}</p>
        }
      </div>
    );
  }
}
