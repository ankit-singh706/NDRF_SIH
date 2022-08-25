 // SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
import './Incidents.sol';
import './User.sol';
import './SupplyChain.sol';

contract Disaster {
    struct DisasterInfo {
        uint id;
        uint timestamp;
        string name;
        string description;
        string disasterType;
        uint severity;
        string location;
    }
    DisasterInfo disasterInfo;

    struct DisasterStats {
        uint deathCount;
        uint affectedCount;
        string[] affectedStates;
    }
    DisasterStats disasterStats;

    Incidents incidents;
    User user;


    event DisasterCreated(DisasterInfo disasterInfo, address incidents);
    event IncidentCreated(Incidents.IncidentInfo incidentInfo);
    
    constructor(DisasterInfo memory _disasterInfo, Incidents _incidents, User _user) {
        user = _user;
        incidents = _incidents;
        disasterInfo = _disasterInfo;
        // emit DisasterCreated(disasterInfo,address(incidents));
    }

    function getDisasterInfo() public view returns (DisasterInfo memory){
        return disasterInfo;
    }


    function createIncident(Incidents.IncidentInfo memory _incidentInfo) public {
        incidents.createIncident(_incidentInfo);
        emit IncidentCreated(_incidentInfo);
    }

    function getIncidents() public view returns (Incidents) {
        return incidents;
    }
}