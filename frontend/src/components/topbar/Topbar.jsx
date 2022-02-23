import React from "react";
import "./topbar.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from '@mui/icons-material/Home';


export default function Topbar() {
  return (
    <div className="topbarContainer">
            <img src="/assets/Tech_Mariposa.png" alt="butterfly" className="topbarImg"/>
      <div className="topbarLeft">
        <span className="logo">
          Letristas</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchRoundedIcon className="searchIcon" />
          <input
            placeholder="Search"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          
          <span className="topbarLink">Feed</span>
          <span className="topbarLink">Photos</span>
        </div>
        <div className="topbarIcons">
        <div className="homeIcon"><HomeIcon /></div>
          <div className="personIcon">
            <PersonIcon />
          </div>

        </div>
      </div>
    </div>
  );
}