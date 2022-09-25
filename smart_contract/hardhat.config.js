// https://eth-goerli.g.alchemy.com/v2/BacccjOzNv84kLCyc4WinSFh0bUwfE0K

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.17',
  networks:{
    goerli:{
        url:'https://eth-goerli.g.alchemy.com/v2/BacccjOzNv84kLCyc4WinSFh0bUwfE0K',
        accounts:['4f5375cade91b00800ead240a0ff9d55138b90f9058099f7dfa75dff1e74b052']
    }
  }
}