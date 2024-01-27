import React from 'react'
import './sideBar.css'
import Search from './Search/Search';
import Trending from './Trending/Trending';
import Follow from './Follow/Follow';

const SideBar = () => {
  return (
    <div className='side-bar'>
      <Search/>
      <Trending />
      <Follow />
    </div>  
  )
}

export default SideBar;