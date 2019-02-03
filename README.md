# nightwatchChallenge
-------------------------------
Assumptions:
 - You have installed Java (check you have at least the 8th version ```$ java --version```)
 - You have installed Node (check you have at least the 10th version ```$ node -v```)
 - You have installed Chrome (check you have at least the 71st version -> Open Chrome -> Click on "More options" icon -> Help -> About Google Chrome)
 -----------------------------
### Installation

```sh
git clone https://github.com/Nahuel990/nightwatchChallenge.git
cd nightwatchChallenge
npm i
```
 -------------------------
### Run
- After all packages were installed (inside nightwatchChallenge):

```sh
npm test
```
-------------------
##### Project structure

- test/e2e: tests, separated in each .js file
- test/po: this project uses page object pattern, inside are al .js files separated for each screen
- test/data.json: .json to manage test data
- .travis.yml: file to create TravisCI job (using XVFB and Chrome)
- nightwatch.conf.js: configuration file for the whole project
- package.json: dependency manager
- others are not relevant
