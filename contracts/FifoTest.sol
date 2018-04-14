pragma solidity ^0.4.17;

contract fifoTest {

    uint[] public fifoQueue;
    uint public cursorPosition;
    
    function queueDepth()public constant returns(uint queueDepth)
    {
        return fifoQueue.length - cursorPosition;
    }
    
    function push(uint requestData) public returns(uint jobNumber)
    {
        if(fifoQueue.length + 1 < fifoQueue.length) revert();
        return fifoQueue.push(requestData) - 1;
    }

    function pop() public returns(uint, uint)
    {
        if(fifoQueue.length==0) revert();
        if(fifoQueue.length - 1 < cursorPosition) revert();
        cursorPosition += 1;
        return (cursorPosition -1, fifoQueue[cursorPosition -1]);
    }
}