import React from 'react'
import "./topbar.css"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Topbar = () => {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className="logo">letristas</span>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <SearchRoundedIcon />
                    <input placeholder="search" type="text" className="searchInput" />
                </div>
            </div>
        </div>
    )
}

export default Topbar;
