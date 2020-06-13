pragma solidity ^0.5.00;
contract Auction {
  address payable public manager;
  address payable public seller;
  uint public latestBid;
  address payable public latestBidder;
 
  constructor() public {
    manager = msg.sender;
  }
 
  function auction(uint  bid) public {
      latestBid = bid * 1 ether; //1000000000000000000;
    seller = msg.sender;
  }
 
  function bid() public payable {
    require(msg.value > latestBid);
 
    if (latestBidder != address(0x0)) {
     address(latestBidder).transfer(latestBid);
    }
    latestBidder = msg.sender;
    latestBid = msg.value;
  }
 
  function finishAuction() restricted public {
    seller.transfer(address(this).balance);
  }
 
  modifier restricted() {
    require(msg.sender == manager);
    _;
  }
}