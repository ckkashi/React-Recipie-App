import React from 'react';

const Navbar = (props) => {
    const {searchText,setSearchText,searchBtnClick} = props;
  return (
    <nav>
        <h1>React Recipie App</h1>
        <div className='searchBox'>
            <input type='text' name='searchField' id='searchField' value={searchText} onChange={setSearchText}/>
            <button id='searchBtn' onClick={searchBtnClick}>Search</button>
        </div>
    </nav>
  )
}

export default Navbar