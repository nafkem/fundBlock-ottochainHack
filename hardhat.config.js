require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    //for ottochain
'ottochain-testnet': {
  url: 'https://gateway.testnet.octopus.network/ottochain/m4k5urt9h33dpbhgsp4lqxemo6naeihz',
  accounts: [process.env.PRIVATE_KEY]
},
  },
};