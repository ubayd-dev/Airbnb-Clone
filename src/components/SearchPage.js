import React from "react";
import { Button } from "@mui/material";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>62 stays . 26 august to 30 august . 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
          img="https://a0.muscache.com/im/pictures/hosting/Hosting-584788471325096420/original/af837b5b-6aba-4cb6-a131-a8e8b7ac229d.jpeg?im_w=480"
        location="Entire home in Overstrand Local Municipality, South Africa"
        title="Hemels in Hermanus"
        description="1 guest . 1 bedroom . 1 bed . 1 bath"
        star={4.9}
        price=""
        total="R8,021 ZAR for 2nights" />
      
        <SearchResult
          img="https://a0.muscache.com/im/pictures/hosting/Hosting-584788471325096420/original/af837b5b-6aba-4cb6-a131-a8e8b7ac229d.jpeg?im_w=480"
        location="Entire home in Overstrand Local Municipality, South Africa"
        title="Hemels in Hermanus"
        description="1 guest . 1 bedroom . 1 bed . 1 bath"
        star={4.9}
        price=""
        total="R8,021 ZAR for 2nights" />
      
        <SearchResult
          img="https://a0.muscache.com/im/pictures/hosting/Hosting-584788471325096420/original/af837b5b-6aba-4cb6-a131-a8e8b7ac229d.jpeg?im_w=480"
        location="Entire home in Overstrand Local Municipality, South Africa"
        title="Hemels in Hermanus"
        description="1 guest . 1 bedroom . 1 bed . 1 bath"
        star={4.9}
        price=""
        total="R8,021 ZAR for 2nights" />
      
        <SearchResult
          img="https://a0.muscache.com/im/pictures/hosting/Hosting-584788471325096420/original/af837b5b-6aba-4cb6-a131-a8e8b7ac229d.jpeg?im_w=480"
        location="Entire home in Overstrand Local Municipality, South Africa"
        title="Hemels in Hermanus"
        description="1 guest . 1 bedroom . 1 bed . 1 bath"
        star={4.9}
        price=""
        total="R8,021 ZAR for 2nights"/>
    </div>
  );
};

export default SearchPage;
