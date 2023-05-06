import './App.css';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';



function App() {
  //states
  const [searchText, setSearchText] = useState('');
  const [recipies,setRecipies] = useState([]);

  const setSearchValue = (e)=>{
    setSearchText(e.target.value);
  }

  //when user click on search button after writing something in search box
  const searchBtnClick = ()=>{
    if (searchText.length) {
      document.querySelector('#result').innerHTML = searchText;
      const filterRecipiesResult = recipies.filter((recipie)=>{
        return recipie.title.includes(searchText) || recipie.ingredients.join().includes(searchText);
      });
      console.log(filterRecipiesResult);
    }
  }

  
  const fetchData = async()=>{
    await fetch('recipies.json')
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      setRecipies(data);
    });
    
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <>
      <Navbar searchText={searchText} setSearchText={setSearchValue} searchBtnClick={searchBtnClick}/>
      <h1 id='result'></h1>
    </>
  );
}

export default App;
