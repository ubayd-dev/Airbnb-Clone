import React, { useState } from "react";
import "react-date-range/dist/styles.css"; //main style file
import "react-date-range/dist/theme/default.css"; //theme css file
import { DateRangePicker } from "react-date-range";
import PeopleIcon from "@mui/icons-material/People";
import { Button } from "@mui/material";
import "./Search.css";

const Search = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (range) => {
    setStartDate(range.selection.startDate);
    setEndDate(range.selection.endDate);
  };

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange ]} onChange={handleSelect} />
      <h2>
        Number of Guests <PeopleIcon />
      </h2>
          <input min={0} defaultValue={2} type="number" />
          <Button>Search AirBnB</Button>
     
    </div>
  );
};

export default Search;
