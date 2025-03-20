// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MyContract {
    uint256 private value;

    // Constructor to initialize the value
    constructor(uint256 _initialValue) {
        value = _initialValue;
    }

    // Public view function to return the value
    function myFunction() public view returns (uint256) {
        return value;
    }
}