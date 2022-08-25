// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
import './Disaster.sol';
import './SupplyChain.sol';
import './Incidents.sol';

contract User{
    struct UserInfo {
        address publicAddress;
        string name;
        uint rank;
        string position;
        string phone;
    }
    UserInfo[] users;
    mapping (address=>UserInfo) userWithAddressOf;
    mapping (address=>uint) rankWithAddressOf;

    Disaster[] disasters;
    mapping(uint => Disaster) disasterWithID;

    event CreatedDisaster (address Disaster, address Incidents, address SupplyChain);

    modifier onlyAuthorized(address _user,uint _rank) {
        require(getRank(_user)!=0,"Only ranked officials can access this method");
        require(getRank(_user) >= _rank, "Not Authorized");
        _;
    }
    
    function getUser(address _user) public view returns (UserInfo memory){
        return userWithAddressOf[_user];
    }

    function getRank(address _user) public view returns (uint) {
        return rankWithAddressOf[_user];
    }

    function createUser(UserInfo memory _user) public  {
        users.push(_user);
        userWithAddressOf[_user.publicAddress] = _user;
        rankWithAddressOf[_user.publicAddress] = _user.rank;
    }

    function createDisaster(Disaster.DisasterInfo memory _disasterInfo) public {
        SupplyChain supplyChain = new SupplyChain();
        Incidents incidents = new Incidents(supplyChain);
        Disaster disaster = new Disaster(_disasterInfo,incidents);
        disasters.push(disaster);
        disasterWithID[_disasterInfo.id] = disaster;
        emit CreatedDisaster(address(disaster),address(incidents),address(supplyChain));
    }

    function getDisasterByID(uint _id) public view returns(Disaster) {
        return disasterWithID[_id];
    }

}