import './App.css';
import React,{useState,useEffect} from 'react'
import Navbar from './components/Navbar';
import CategoryElement from './components/CategoryElement';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import News from './components/News';


 const App=()=> {

  const [category , setCategory]=useState([]);

  useEffect(()=>{
    const fetchCategories= async()=>{
     let categorize= await fetch('https://dummyjson.com/products/categories')
     let parseData=await categorize.json();
     setCategory(parseData);
    }
   fetchCategories()
  },[])

    return (
      <div>
         <Router>
            <Navbar/>
            <LoadingBar
              color='#f11946'
            />
            <Routes>

            <Route exact path="/" element = {<News/>}/>

              {category.map((element)=>(
              <Route exact path={`/${element}`} element = {<CategoryElement category={element}/> } />
              ))};

            </Routes>
         </Router>
      </div>
    )  
}
export default App;


