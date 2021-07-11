import './App.css';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers'
import Notebook from './artifacts/contracts/Notebook.sol/Notebook.json'
import Header from './Header';

const notebookAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

function App() {
  // store noteInputValue in local state
  const [noteInputValue, setNoteInputValue] = useState()
  const [note, setNoteValue] = useState();

  // request access to the user's MetaMask account
  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  // call the smart contract, read the current noteInputValue value
  async function fetchNote() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(notebookAddress, Notebook.abi, signer)
      try {
        const noteText = await contract.displayNote()


        console.log('noteText: ', noteText)
        setNoteValue(noteText)
      } catch (err) {
        console.log("Error: ", err)
      }
    }    
  }

  // call the smart contract, send an update
  async function setNoteText() {
    if (!noteInputValue) return
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      const contract = new ethers.Contract(notebookAddress, Notebook.abi, signer)
      const transaction = await contract.setNoteText(noteInputValue)
      await transaction.wait()
      fetchNote()
    }
  }

  useEffect(()=>{
    fetchNote()
  }, [note])

  return (
    <div className="App">
      <p>{note}</p>
      <Header setNoteText={setNoteText} setNoteInputValue={setNoteInputValue} fetchNote={fetchNote}/>
    </div>
  );
}

export default App;
