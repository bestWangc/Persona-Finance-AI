// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

//used chainlink-VRF v2.5
import {IVRFCoordinatorV2Plus} from "@chainlink/contracts/src/v0.8/vrf/dev/interfaces/IVRFCoordinatorV2Plus.sol";
import {VRFConsumerBaseV2Plus} from "@chainlink/contracts/src/v0.8/vrf/dev/VRFConsumerBaseV2Plus.sol";
import {VRFV2PlusClient} from "@chainlink/contracts/src/v0.8/vrf/dev/libraries/VRFV2PlusClient.sol";

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract Personality is
    VRFConsumerBaseV2Plus,
    ERC721,
    ERC721URIStorage
{
    using Strings for uint256;

    uint256 private _nextTokenId;

    struct PersonalInfo {
        string riskPreference;
        string tradingStyle;
        string tradingFrequency;
        uint256 initialCapital;
        uint256 score;
        address owner;
        bool isForRent;
        uint256 rentPricePerHour;
        string levelColor;
    }
    mapping(uint256 => PersonalInfo) public personalities;

    uint256 s_subscriptionId;
    bytes32 keyHash =
        0x787d74caea10b2b357790d5b5247c2f63d1d91572a9846f780606e4d953677ae;

    uint16 public requestConfirmations = 3;

    // VRFCoordinatorV2_5.MAX_NUM_WORDS.
    uint32 public numWords = 1;

    mapping(uint256 => uint256) public requestIdToTokenId;

    string[6] private levelColors = [
        "B4B4B4",
        "E0E4E8",
        "A39FC1",
        "7EC1F5",
        "F58A7E",
        "D4AF37"
    ];
    event PersonalityCreated(
        uint256 indexed tokenId,
        address owner,
        uint256 initialCapital,
        string riskPreference,
        string tradingStyle,
        string tradingFrequency
    );
    event PersonalityForRent(uint256 indexed tokenId, uint256 rentPricePerHour);

    constructor(
        uint256 subscriptionId_,
        address vrfCoordinator_
    )
        ERC721("Personality Finance AI", "PFAI")
        VRFConsumerBaseV2Plus(vrfCoordinator_)
    {
        s_subscriptionId = subscriptionId_;
    }

    function safeMint(
        address to,
        string memory uri
    ) public onlyOwner returns (uint256) {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        return tokenId;
    }

    //Returns the id of the next token without having to mint one.
    function nextId() external view returns (uint256) {
        return _nextTokenId;
    }

    function getColor(uint256 tokenId) public view returns (string memory) {
        string memory levelColor = personalities[tokenId].levelColor;
        if (bytes(levelColor).length == 0) {
            levelColor = "fff";
        }
        return levelColor;
    }

    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        require(tokenId < _nextTokenId, "Token ID does not exist");

        string[13] memory parts;
        parts[
            0
        ] = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500"><defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0c0c2a" /><stop offset="100%" stop-color="#1a1a3a" /></linearGradient></defs><style>.base { fill: #';

        parts[1] = getColor(tokenId);

        parts[
            2
        ] = ';font-size: 25px; }</style><rect width="100%" height="100%" fill="url(#bg)" /><path d="M 0 100 L 450 100 M 100 0 L 100 350" stroke="#00f0ff20" stroke-width="2" /><path d="M 0 300 L 350 300 M 300 0 L 300 450" stroke="#ff2a6d20" stroke-width="2" /><text x="10%" y="10%" class="base">';

        parts[3] = personalities[tokenId].riskPreference;

        parts[4] = '</text><text x="10%" y="20%" class="base">';

        parts[5] = personalities[tokenId].tradingStyle;

        parts[6] = '</text><text x="10%" y="30%" class="base">';

        parts[7] = personalities[tokenId].tradingFrequency;

        parts[8] = '</text><text x="10%" y="40%" class="base">';

        parts[9] = personalities[tokenId].initialCapital.toString();

        parts[10] = '</text><text x="10%" y="50%" class="base">';

        parts[11] = personalities[tokenId].score.toString();

        parts[
            12
        ] = '</text><circle cx="75%" cy="60%" r="2" fill="#ff2a6d"><animate attributeName="cy" values="10%;85%;10%" dur="6s" repeatCount="indefinite" /></circle><circle cx="55%" cy="80%" r="2" fill="#00f0ff"><animate attributeName="cx" values="10%;85%;10%" dur="5s" repeatCount="indefinite" /></circle></svg>';

        string memory output = string(
            abi.encodePacked(
                parts[0],
                parts[1],
                parts[2],
                parts[3],
                parts[4],
                parts[5],
                parts[6],
                parts[7],
                parts[8]
            )
        );
        output = string(
            abi.encodePacked(output, parts[9], parts[10], parts[11], parts[12])
        );
        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"name": "No #',
                        tokenId.toString(),
                        '", "description": "PFAI is an autonomously evolving AI persona based on on-chain behavior,Use it for anything, such as trading, arbitrage, market making, staking, cross chain, etc.", "image": "data:image/svg+xml;base64,',
                        Base64.encode(bytes(output)),
                        '"}'
                    )
                )
            )
        );
        output = string(
            abi.encodePacked("data:application/json;base64,", json)
        );

        return output;
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function createPersonality(
        address owner,
        string calldata _riskPreference,
        string calldata _tradingStyle,
        string calldata _tradingFrequency,
        uint256 _initialCapital
    ) external returns (uint256) {
        uint256 newTokenId = _nextTokenId++;
        _safeMint(owner, newTokenId);
        personalities[newTokenId] = PersonalInfo({
            riskPreference: _riskPreference,
            tradingStyle: _tradingStyle,
            initialCapital: _initialCapital,
            tradingFrequency: _tradingFrequency,
            score: 100,
            owner: owner,
            isForRent: false,
            rentPricePerHour: 0,
            levelColor: ""
        });

        uint256 requestId = requestRandomWords();
        requestIdToTokenId[requestId] = newTokenId;

        emit PersonalityCreated(
            newTokenId,
            owner,
            _initialCapital,
            _riskPreference,
            _tradingStyle,
            _tradingFrequency
        );
        return newTokenId;
    }

    ///set rent data
    function setRent(
        uint256 tokenId,
        bool _isForRent,
        uint256 _rentPricePerHour
    ) external {
        require(ownerOf(tokenId) == msg.sender, "Only owner can set rent");
        personalities[tokenId].isForRent = _isForRent;
        personalities[tokenId].rentPricePerHour = _rentPricePerHour;
        emit PersonalityForRent(tokenId, _rentPricePerHour);
    }

    function requestRandomWords() internal returns (uint256 requestId) {
        requestId = s_vrfCoordinator.requestRandomWords(
            VRFV2PlusClient.RandomWordsRequest({
                keyHash: keyHash,
                subId: s_subscriptionId,
                requestConfirmations: requestConfirmations,
                callbackGasLimit: 120000,
                numWords: numWords,
                extraArgs: VRFV2PlusClient._argsToBytes(
                    VRFV2PlusClient.ExtraArgsV1({nativePayment: false})
                )
            })
        );
    }


    ///chainlink callback
    function fulfillRandomWords(
        uint256 _requestId,
        uint256[] calldata _randomWords
    ) internal override {
        string memory color = levelColors[_randomWords[0] % 6];
        uint256 tokenId = requestIdToTokenId[_requestId];
        personalities[tokenId].levelColor = color;
        delete requestIdToTokenId[_requestId];
    }
}
