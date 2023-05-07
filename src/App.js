import './App.css';
import MainSection from './components/MainSection';
import Navbar from './components/Navbar';
import { useState, useEffect, useRef } from 'react';



function App() {
  //states
  const [searchText, setSearchText] = useState('');
  const [recipies,setRecipies] = useState([]);
  const [recipiesResults,setRecipiesResults] = useState([]);
  const [selectedRecipie,setSelectedRecipie] = useState({});

  const recipieResultRef = useRef(0);

  const handleSearch = (e)=>{
    setSearchText(e.target.value);
  }

  //when user click on search button after writing something in search box
  const searchBtnClick = ()=>{
    if (searchText.length) {
      const filterRecipiesResult = recipies.filter((recipie)=>{
        return recipie.title.includes(searchText) || recipie.ingredients.join().includes(searchText);
      });
      setRecipiesResults(filterRecipiesResult);
      // console.log(recipiesResults);
    }
  }

  const handleSelectedRecipie = (recipie) => {
    setSelectedRecipie(recipie);
    recipieResultRef.current.scrollIntoView(true);
  }

  useEffect(()=>{
    const fetchData = async()=>{
      await fetch('recipies.json')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
        setRecipies(data);
        setRecipiesResults(data);
      }); 
    }
    fetchData();
  },[]);

  return (
    <>
      <Navbar searchText={searchText} setSearchText={handleSearch} searchBtnClick={searchBtnClick}/>
      <main className='main-body-section'>
        <MainSection recipiesResults={recipiesResults} handleSelectedRecipie={handleSelectedRecipie} selectedRecipie={selectedRecipie} recipieResultRef={recipieResultRef}/>
      </main>
    </>
  );
}

export default App;
