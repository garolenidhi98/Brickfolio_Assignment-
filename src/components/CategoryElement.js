import React from 'react';
import { useState,useEffect } from 'react';

const CategoryElement = ({category}) => {
    const [product , setProduct]=useState([]);

    useEffect(()=>{
    const fetchCategories= async()=>{
     let categorize= await fetch(`https://dummyjson.com/products/category/${category}`)
     let parseData=await categorize.json();
     setProduct(parseData.products);
     console.log(parseData)
    }
   fetchCategories()
  },[category])

  return (
    <div>
      {product.map((product)=>(<div className='my-4'>
        <div className="card">
       <div style={{
          display:'flex',
          justifyContent:'flex-end',
          position:'absolute',
          right:'0'
        }}>
       {/* <span className="badge rounded-pill bg-danger">{source}</span> */}
       
        </div>
            <img src={product.thumbnail ? product.thumbnail :"https://img.freepik.com/free-vector/breaking-news-concept_23-2148514216.jpg?w=900&t=st=1692265050~exp=1692265650~hmac=a9016f47cfc704518b5d09629026c81c773e3270f007aa48f17ac9afd522cace"}  className="card-img-top" alt="..."/>
            <div className="card-body">
              <h4 className="card-title"><b>Title :</b> {product.title}...</h4>
              <p className="card-text"><b>Brand :</b> {product.brand}</p>
              <p className="card-text"><b>About :</b> {product.description}...</p>
              <p className="card-text"><b>Category :</b> {product.category}</p>
              <p className="card-text"><b>Price :</b> {product.price}/-</p>
            </div>
          </div>
      </div>)
      )}
    </div>
  )
}

export default CategoryElement;
