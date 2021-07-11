import './App.css';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers'
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json'
import Header from './Header';

const greeterAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3"

function App() {
  // store greetingInputValue in local state
  const [greetingInputValue, setGreetingInputValue] = useState()
  const [greeting, setGreetingValue] = useState();

  // request access to the user's MetaMask account
  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  // call the smart contract, read the current greetingInputValue value
  async function fetchGreeting() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider)
      try {
        const data = await contract.greet()
        /*await provider._getAddress().finally(onfinally?: () => {
          const providerAdress
        })*/
        console.log('data: ', data)
        //console.log('providerAdress : ', providerAdress)
        setGreetingValue(data)
      } catch (err) {
        console.log("Error: ", err)
      }
    }    
  }

  // call the smart contract, send an update
  async function setGreeting() {
    if (!greetingInputValue) return
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer)
      const transaction = await contract.setGreeting(greetingInputValue)
      await transaction.wait()
      fetchGreeting()
    }
  }

  useEffect(()=>{
    fetchGreeting()
  }, [greeting])

  return (
    <div className="App">
      <Header setGreeting={setGreeting} setGreetingInputValue={setGreetingInputValue} fetchGreeting={fetchGreeting}/>
      <p>{greeting}</p>
      <p>{greetingInputValue}</p>
    </div>
  );
}

export default App;
