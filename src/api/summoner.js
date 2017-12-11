import React from 'react';
import {keys} from './keys';

// https://randomuser.me/api/?results=10
// 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/rubberice?api_key=' + keys.lol
export const byName = (summonerName) => {
  return (
  	fetch('https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/rubberice?api_key=' + keys.lol, {
      method: 'GET',
      mode: 'cors',
      cache: 'default'
    })
      .then(res => console.log(res))
      .catch(error => console.log('Error in API summoner by name: ', error));
  )
}