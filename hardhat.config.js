
require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');

module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    artifacts: "./artifacts",
  },
  networks: {
    zKatana: {
      url: `https://rpc.zkatana.gelato.digital`,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    },
    astarZkEvm: {
      url: `https://rpc.startale.com/astar-zkevm`,
      accounts: [process.env.MAINNET_PRIVATE_KEY],
    },
    zkyotoGelato: {
      url: `https://rpc.zkyoto.gelato.digital`,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY]
    },
    zKyoto: {
      url: `https://rpc.startale.com/zkyoto`,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY]
    },
    mumbai: {
      url: `https://polygon-testnet.public.blastapi.io`,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY]
    },
    shibuya: {
      url: `https://evm.shibuya.astar.network`,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY]
    },
  },
};

