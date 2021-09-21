//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";


contract Notebook {

  mapping (address => string) notes;
  string emptyStr;

  function displayNote() public view returns (string memory) {
    console.log("address_", msg.sender, "|value_", notes[msg.sender]);
    if (bytes(notes[msg.sender]).length == 0){
      console.log("EMPTY_length=", bytes(notes[msg.sender]).length, "note=", notes[msg.sender]);
      return "Empty note";
    } else return notes[msg.sender];
  }

  function setNoteText(string memory _noteText) public {
    //bytes memory tempEmptyStringTest = bytes(noteText[msg.sender]);
    //if (tempEmptyStringTest.length == 0) noteText[msg.sender] = defaultValue;

    //console.log("Editing note from '%s' to '%s'", noteText[msg.sender], _noteText);
    //noteText[msg.sender] = _noteText;

    //require(msg.sender == minter);

    console.log("Editing note from '%s' to '%s'", notes[msg.sender], _noteText);
    notes[msg.sender] = _noteText;
    console.log("Note edited '%s'", notes[msg.sender]);
  }

}
