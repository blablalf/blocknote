//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";


contract Notebook {
  mapping (address => string) noteText;
  string defaultValue;

  constructor(string memory _noteText) {
    console.log("Deploying a Notebook with the following text:", _noteText);
    defaultValue = _noteText;
  }

  function displayNote() public returns (string memory) {
    bytes memory tempEmptyStringTest = bytes(noteText[msg.sender]); // Uses memory
    if (tempEmptyStringTest.length == 0) {
      noteText[msg.sender] = defaultValue;
      return "Note is empty";
    }
    return noteText[msg.sender];
  }

  function setNoteText(string memory _noteText) public {
    console.log("Editing note from '%s' to '%s'", noteText[msg.sender], _noteText);
    noteText[msg.sender] = _noteText;
  }
}
