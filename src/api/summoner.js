import {keys} from './keys';

// not render jsx dont need React
// https://randomuser.me/api/?results=10
// 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/rubberice?api_key=' + keys.lol
export const byName = () => {
  return (
    fetch('https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/rubberice?api_key=' + keys.lol, {
      method: 'GET',
      mode: 'no-cors',
      cache: 'default'
    })
      .then(res => {
        console.log('res', res);
        return res.json();
      })
      .catch(error => console.log('Error in API summoner by name: ', error))
  );
};
