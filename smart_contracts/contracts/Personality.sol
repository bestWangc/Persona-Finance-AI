// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

contract Personality is ERC721, ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;
    string private _baseTokenURI;

    struct PersonalInfo {
        string riskPreference;
        string tradingStyle;
        string tradingFrequency;
        uint256 initialCapital;
        uint256 score;
        address owner;
        bool isForRent;
        uint256 rentPricePerHour;
    }
    mapping(uint256 => PersonalInfo) public personalities;

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
        string memory baseURI
    ) ERC721("Personality Finance AI", "PFAI") Ownable(msg.sender) {
        _baseTokenURI = baseURI;
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

    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }

    function setBaseURI(string memory baseURI) public onlyOwner {
        _baseTokenURI = baseURI;
    }

    // The following functions are overrides required by Solidity.
    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function tokenURI(uint256 tokenId) public pure returns (string memory) {
        string[11] memory parts;
        parts[0] = '<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0c0c2a" /><stop offset="100%" stop-color="#1a1a3a" /></linearGradient></defs><rect width="100%" height="100%" fill="url(#bg)" /><path d="M 0 100 L 700 100 M 100 0 L 100 500" stroke="#00f0ff20" stroke-width="2" /><path d="M 0 300 L 500 300 M 300 0 L 300 700" stroke="#ff2a6d20" stroke-width="2" /><text x="10%" y="10%" font-size="42" fill="#fff">';

        parts[1] = personalities[tokenId].riskPreference;

        parts[2] = '</text><text x="10%" y="20%" font-size="42" fill="#fff">';

        parts[3] = personalities[tokenId].tradingStyle;

        parts[4] = '</text><text x="10%" y="30%" font-size="42" fill="#fff">';

        parts[5] = personalities[tokenId].tradingFrequency;

        parts[6] = '</text><text x="10%" y="40%" font-size="42" fill="#fff">';

        parts[7] = personalities[tokenId].initialCapital;

        parts[8] = '</text><text x="10%" y="50%" font-size="42" fill="#fff">';

        parts[9] = personalities[tokenId].score;

        parts[10] = '</text><circle cx="75%" cy="60%" r="2" fill="#ff2a6d"><animate attributeName="cy" values="10%;85%;10%" dur="6s" repeatCount="indefinite" /></circle><circle cx="55%" cy="80%" r="2" fill="#00f0ff"><animate attributeName="cx" values="10%;85%;10%" dur="5s" repeatCount="indefinite" /></circle></svg>';

        string memory output = string(abi.encodePacked(parts[0], parts[1], parts[2], parts[3], parts[4], parts[5], parts[6], parts[7], parts[8],parts[9], parts[10]));
        // output = string(abi.encodePacked(output, parts[9], parts[10]));
        
        string memory json = Base64.encode(bytes(string(abi.encodePacked('{"name": "Bag #', tokenId.toString(), '", "description": "Loot is randomized adventurer gear generated and stored on chain. Stats, images, and other functionality are intentionally omitted for others to interpret. Feel free to use Loot in any way you want.", "image": "data:image/svg+xml;base64,', Base64.encode(bytes(output)), '"}'))));
        output = string(abi.encodePacked('data:application/json;base64,', json));

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
            rentPricePerHour: 0
        });

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
}
