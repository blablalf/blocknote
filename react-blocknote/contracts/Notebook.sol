//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";


contract Notebook {
  //mapping (address => string) noteText;
  //string defaultValue;
  string sharedNote;

  constructor(string memory _noteText) {
    //console.log("Deploying a Notebook with the following text:", _noteText);
    //defaultValue = _noteText;
    sharedNote = _noteText;
  }

  function displayNote() public view returns (string memory) {
    //bytes memory tempEmptyStringTest = bytes(noteText[msg.sender]);
    //if (tempEmptyStringTest.length == 0) noteText[msg.sender] = defaultValue;
    //return noteText[msg.sender];
    return sharedNote;
  }

  function setNoteText(string memory _noteText) public {
    //bytes memory tempEmptyStringTest = bytes(noteText[msg.sender]);
    //if (tempEmptyStringTest.length == 0) noteText[msg.sender] = defaultValue;

    //console.log("Editing note from '%s' to '%s'", noteText[msg.sender], _noteText);
    //noteText[msg.sender] = _noteText;

    console.log("Editing note from '%s' to '%s'", sharedNote, _noteText);
    sharedNote = _noteText;
  }
}
