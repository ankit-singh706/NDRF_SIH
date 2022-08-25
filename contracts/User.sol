// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

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


}