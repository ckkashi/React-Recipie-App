import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';



function App() {
  //search bar state
  const [searchText, setSearchText] = useState('');
  const setSearchValue = (e)=>{
    setSearchText(e.target.value);
  }

  //search btn click
  const searchBtnClick = ()=>{
    document.querySelector('#result').innerHTML = searchText;
  }

  return (
    <>
      <Navbar searchText={searchText} setSearchText={setSearchValue} searchBtnClick={searchBtnClick}/>
      <h1 id='result'></h1>
    </>
  );
}

export default App;
