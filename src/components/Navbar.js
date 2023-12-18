import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";


const Navbar =()=>{
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
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/"><b className="navbar-text">E-Cart</b></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Product Categories
              </button>
              <ul class="dropdown-menu">
               {category.map((element)=>(
                <li><Link to={`/${element}`}>{element}</Link></li>
               )
               )}
              </ul>
            </div>
            </div>
          </div>
        </nav>
      </div>
    )
}
export default Navbar;
