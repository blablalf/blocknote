//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";


contract Notebook {
  string noteText;

  constructor(string memory _noteText) {
    console.log("Deploying a Notebook with the following text:", _noteText);
    noteText = _noteText;
  }

  function displayNote() public view returns (string memory) {
    return noteText;
  }

  function setNoteText(string memory _noteText) public {
    console.log("Editing note from '%s' to '%s'", noteText, _noteText);
    noteText = _noteText;
  }
}
