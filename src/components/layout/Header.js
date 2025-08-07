import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar } from '@mui/material';
import '../layout/Header.css'

const Header = () => {
  return (
    <div className="header">
      <img
        src=" https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png   "
        className="header_logo"
        alt="logo"
      /> 
          <div className="header_center">
              <input type="text" />
              <SearchIcon/>
              
          </div>
                    <div className="header_right">
              <p>Become a host</p>
              <LanguageIcon />
        <ExpandMoreIcon />
        <AccountCircleIcon/>
              <Avatar/>
              
   </div>
    </div>
  );
};

export default Header;
