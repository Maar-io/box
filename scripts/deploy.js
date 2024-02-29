// npx hardhat run --network zKatana scripts/deploy.js

async function main() {
  const Box = await ethers.getContractFactory("Box");

  // Set up the deployer account using the private key from the config file
  const ACCOUNT_PRIVATE_KEY = process.env.MAINNET_PRIVATE_KEY || "";
  // const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY || "";
  console.log("PrivateKey set:", !!ACCOUNT_PRIVATE_KEY)

  const wallet = new ethers.Wallet(ACCOUNT_PRIVATE_KEY, ethers.provider);
  console.log("Deploying contracts with the account:", wallet.address);  
  
  const box = await upgrades.deployProxy(Box, [42], { initializer: 'store' });
  await box.waitForDeployment();
  console.log("Box Proxy deployed to:", box.target);}

  // const deployedAtAddress = await box.getAddress();
  // console.log("Box Proxy deployed to:", deployedAtAddress);
  // console.log("Box implementation at", upgrades.erc1967.getImplementationAddress(deployedAtAddress));

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
