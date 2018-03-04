pragma solidity ^0.4.16;

contract Bank {
    address public owner;
    mapping (address => uint) public balances;
    
    event DepositMade(
        address sentBy,
        uint amount);
        
    function deposit() public payable {
        balances[msg.sender]+= msg.value;
        DepositMade(msg.sender, msg.value);
    }
    
    function destroy() {
        require (msg.sender == owner);
        selfdestruct(owner)
    }
        
        
}
