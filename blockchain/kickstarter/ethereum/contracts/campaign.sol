// pragma solidity ^0.4.17;

// // @title A contract deploys a campaign
// // @author Josh

// contract CampaignFactory {
//     address[] public deployedCampaigns;
//     function createCampaign (uint _minimum) public {
//         address newCampaign = new Campaign(_minimum, msg.sender);
//         deployedCampaigns.push(newCampaign);
//     }
//     funtion getDeployedCampaigns() public vuew returns(address[]){
//         return deployedCampaigns;
//     }
// }

// // @title A kickstarted like contract
// // @author Josh

// contract Campaign {

//     struct Request {
//         string description;
//         uint value;
//         address recipient;
//         bool complete;
//         uint approvalCount;
//         mapping(address => bool) approvals;
//     }

//     Request[] public requests;
//     address public manager;
//     uint public minimumContribution;
//     mapping(address => bool) public approvers;
//     uint public approversCount;

//     modifier restricted() {
//         require(msg.sender == manager);
//         _;
//     }

//       /// @notice craetes a campaign
//       /// @param _minimum define the minimum pledge
//     function Campaign (uint _minimum, address _creator) public {
//         manager = _creator;

//         minimumContribution = _minimum;
//     }

//       /// @notice lets people join the campaign
//     function contribute() public payable {
//         require(msg.value > minimumContribution);
//         // approvers.push(msg.sender);
//         approvers[msg.sender] = true;
//         approversCount++;
//     }

//     /// @notice lets a manager ask for money
//     /// @param _description what the money is for
//     /// @param _value how much
//     /// @param _recipient who gets paid
//     function createRequest( string _description, uint _value, address _recipient)
//         public restricted() {
//             Request memory newRequest = Request({
//                 description: _description,
//                 value: _value,
//                 recipient: _recipient,
//                 completed: false,
//                 approvalCount:0
//             });
//             /// @dev you can also destruct the value, its easy to mix up vars when you refactor

//             requests.push(newRequest);
//         }

//      /// @notice lets backers approve a managers spend request
//      /// @param _index index of request
//     function approveRequest(uint _index) public {
//         Request storage request =  requests[_index];
//         require(approvers[msg.sender]);
//         require(!request.approvals[msg.sender]);
//         // @dev make sure teh person hasn't already approved, so that each peep gets only one vote
//         request.approvals[msg.sender] = true;
//         request.approvalCount++;

//     }

//     // @notice lets a managed finalise a request and get paid
//     /// @param _index index of request
//     function finalizeRequest(uint index) public restricted {
//         Request storage request =  requests[index];
//         require(!request.complete);
//         // @dev only lets a manager get paid from a request once
//         require(request.approvalCount > (approversCount/2));
//         // @dev you need more than 50 percent approval
//         request.complete = true;
//     }

// }


//     /// @dev String comparison may be inefficient
//     /// @param _food The name of a food to evaluate (English)
//     /// @return true if Bugs will eat it, false otherwise


pragma solidity ^0.4.17;

contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint minimum) public {
        address newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function Campaign(uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);

        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(string description, uint value, address recipient) public restricted {
        Request memory newRequest = Request({
           description: description,
           value: value,
           recipient: recipient,
           complete: false,
           approvalCount: 0
        });

        requests.push(newRequest);
    }

    function approveRequest(uint index) public {
        Request storage request = requests[index];

        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];

        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);

        request.recipient.transfer(request.value);
        request.complete = true;
    }

    function getSummary() public view returns (
      uint, uint, uint, uint, address
      ) {
        return (
          minimumContribution,
          this.balance,
          requests.length,
          approversCount,
          manager
        );
    }

    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }

    function getSummary() view returns(uint, uint, uint, uint, address) {
        return (
          minimumContribution, this.balance, requests.length, approversCount, manager
        );
    }

    function getRequestCount() public view returns (uint) {
        return requests.length;
    }
}
