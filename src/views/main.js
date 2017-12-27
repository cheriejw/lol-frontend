import React, {Component} from 'react';
import SearchBar from '/components/searchBar';

export default class Main extends Component {
  render() {
    return (
      <div>
        <h1>PORORIFT</h1>
        <h3>ENTER SUMMONER NAME FOR CURRENT GAME OR USER STATS</h3>
        <SearchBar/>
      </div>
    );
  }
}
