pragma solidity ^0.4.17;

contract OracleTest {
    struct Message {
        address owner;
        string code;
        bool isRead;
    }
    
    mapping(address=>Message) messageList;
    address[] public addresses;
    
    function AddMessage(string code) public {
        messageList[msg.sender] = Message(msg.sender, code, false);
        addresses.push(msg.sender);
    }
    
    function PopMessage(address fromWho) public constant returns (string code, bool isRead) {
        require(messageList[fromWho].owner != address(0));
        return (messageList[fromWho].code, messageList[fromWho].isRead);
    }
}
