# lol-frontend
league of legends api + react

look at package.json for scripts.

```bash
npm install
npm run serve
```

### Process
Will be slow since I am doing this outside of work, which should consume most of my day, each bulletpoint should be (what's left of) a day of implmentation.
- ~~Put in functionality of input box and submit summonername to api.~~
- Do wireframes for home page based on lol clients current design or riot store design for home page, in-game page, and profile page.
- Style home page.
- [Upgrade router and clean up code, a more modular way to call the api proxy, perhaps abstracting to another page since I will constantly be calling that.](https://github.com/ReactTraining/react-router/issues/4648)
- Look up Karma testing/coverage and put in proptypes/tests for home page. Whatever is in the `package.json`. Write atleast one test. **(Two day thing, research and implmentation.)**
- Write out condition logic for if user is not in game to display the users profile screen, or in-game screen.
- Write out logic for in-game screen. Respective api calls to gather the data of each player in-game along with original user
- Reorganize and review the file structure with Tyler or something.
- Style in-game screen.
- Write in-game tests, prop-types. (test-after method, will try test before method after I get a hang of testing framework.)
- Write out logic for profile screen page with api calls.
- Consider overall architecture at this point. Should I use sagas? Should I use redux? Do I need them? Research.

Further tasks will be made as I complete the above...

- After profile page built out and styled, sagas/redux evaluation complete, have performance test. benchmark, what takes the longest.

### Eventual tasks
- Server to call api and pass to my client. Write own reverse cors proxy. [Node](https://nodejs.org/api/http.html#http_http_request_options_callback)
- Try test-before method.

### Goal and ideas
On in-game render display: user rank, mastery on champ playing, win-rate on champ playing. Eventually after the profile is build, clicking on user will go to user profile.

### Resources
[cors now reverse proxy](https://cors.now.sh/)
[express, jade, node vs react](https://hashnode.com/post/what-is-the-difference-between-server-side-rendering-using-react-vs-using-express-in-nodejs-citkx6nja0asrey537udxdvn6)
[lol api fetch error](https://discussion.developer.riotgames.com/questions/106/why-am-i-getting-an-access-control-allow-origin-er.html)
[lol docs](https://developer.riotgames.com/api-methods/)
[node server tutorial](https://blog.risingstack.com/your-first-node-js-http-server/)
[lol api](https://discussion.developer.riotgames.com/articles/652/riot-games-api-v3.html)
[cors](https://www.youtube.com/watch?v=qTi4cMb3dIo)
[one way binding in react, two way binding in angular](https://stackoverflow.com/questions/34519889/can-anyone-explain-the-difference-between-reacts-one-way-data-binding-and-angula)
[react and ajax](https://daveceddia.com/ajax-requests-in-react/)