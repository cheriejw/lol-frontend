import {keys} from '/config/keys';

// not render jsx dont need React
// https://randomuser.me/api/?results=10
// 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/rubberice?api_key=' + keys.lol
export const byName = () => {
  const url = 'https://cors.now.sh/https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/rubberice?api_key=' + keys.lol;
  return (
    fetch(url)
      .then(res => res.text())
      .then(res => {
        console.log('res', res);
        return res;
      })
      .catch(error => console.log('Error in API summoner by name: ', error))
  );
};
