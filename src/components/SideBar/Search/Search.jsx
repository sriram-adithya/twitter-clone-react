import React from 'react'
import search from'./Vector.svg'
import './Search.css'

const Search = () => {
    return (
        <div className='sidebar-mainContainer'>
          <div className='sidebar-search'>
            <img src={search} alt=""/>
            <input type='text' placeholder='Search Twitter'></input>
          </div>
        </div>
      )
}

export default Search;