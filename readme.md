My first project Solidity. It's a dapp that aims to store notes in a decentralized way.

I plan to evolve things in this order:

1 - The notes are public, not editable and are stored in the blockchain  
2 - The notes become editable  
3 - Notes are stored with IPFS  
4 - Add private notes  

The application will be developed in Solidity and I take advantage of this project to test different frameworks (truffle/hardhat), and maybe test the ide remix.

For the ui I will also make my first react app.

Personnal reminder :

1. Create the react app -> `npx create-react-app react-blocknote`  
2. Add the requiered dependencies for solidity and hardhat -> `npm install ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers`  
3. Generate the hardhat project -> `npx hardhat`  
4. Compile the smart contracts -> `npx hardhat compile`  
5. Start a local testnet node -> `npx hardhat node`  
6. Deploy the smart contract by launching the appropriate script -> `npx hardhat run scripts/deploy.js --network localhost`  

Demonstration : https://www.youtube.com/watch?v=kidTe86QBNs&list=PLEAyeVO3NDdzlFoD3I0vZzCn8iBWA2kEJ&index=1

