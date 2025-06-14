// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Personality is ERC721, ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;
    string private _baseTokenURI;

    struct PersonalInfo {
        string riskPreference; 
        string tradingStyle; 
        uint256 initialCapital;
        uint256 score;
        address owner;
        bool isForRent;
        uint256 rentPricePerHour;
    }
    mapping(uint256 => PersonalInfo) public personalities;

    event NFTCreated(uint256 indexed tokenId, address owner, string riskPreference, string tradingStyle);
    event NFTForRent(uint256 indexed tokenId, uint256 rentPricePerHour);

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

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function createNFT(address owner, string memory _riskPreference, string memory _tradingStyle, uint256 _initialCapital) external returns (uint256) {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        _mint(owner, newTokenId);
        personalities[newTokenId] = Personality({
            riskPreference: _riskPreference,
            tradingStyle: _tradingStyle,
            initialCapital: _initialCapital,
            score: 100,
            owner: owner,
            isForRent: false,
            rentPricePerHour: 0
        });

        emit NFTCreated(newTokenId, owner, _riskPreference, _tradingStyle);
        return newTokenId;
    }

    function setRent(uint256 tokenId, bool _isForRent, uint256 _rentPricePerHour) external {
        require(ownerOf(tokenId) == msg.sender, "Only owner can set rent");
        personalities[tokenId].isForRent = _isForRent;
        personalities[tokenId].rentPricePerHour = _rentPricePerHour;
        emit NFTForRent(tokenId, _rentPricePerHour);
    }
}
