import React,{ useEffect ,useState} from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

const News =(props)=> {

  const[articles,setArticles]=useState([]);
  const[loading,setLoading]=useState(true);
  const[fetchById,setFetchById]=useState(false);
  const[productIsClick,setProductIsClick]=useState(false);
  const[product,setProduct]=useState({});

 
  useEffect(()=>{
   let fetchProd = async ()=>{
      const url = "https://dummyjson.com/products";
      setLoading(true)
      let data= await fetch(url);
      let parsedData= await data.json();
      console.log(parsedData);
  
      setArticles(parsedData.products)
      setLoading(false)
    }
    fetchProd()
  },[])
   

const handleProductClick=async(id)=>{
  setProductIsClick(true)
  console.log(productIsClick);
  let data= await fetch(`https://dummyjson.com/products/${id}`)
  let parsedData=await data.json();
  setProduct(parsedData);
  console.log(productIsClick);
}
    return (
      <>
        <h1 className='text-center' style={{margin:'35px 0px', marginTop:'90px'}}>E-Cart </h1>
        {loading && <Spinner/>}

            <div className="container">
            <div className="row"> 
            <button onClick={() => setFetchById(!fetchById)}>ShowById</button>
            {fetchById &&
              <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
              </button>
              <ul class="dropdown-menu">
               {articles.map((element)=>(
                <button onClick={()=>handleProductClick(element.id)}>{element.id}</button>
               )
               )}
              </ul>
            </div>
            }
                  { productIsClick ?<NewsItem title={product.title} brand={product.brand} id={product.id} description={product.description} thumbnail={product.thumbnail} category={product.category} price={product.price} /> : articles.map((element)=>{

                     return <div className="col-md-4" key={element.id}>
                            <NewsItem title={element.title} brand={element.brand} id={element.id} description={element.description} thumbnail={element.thumbnail} category={element.category} price={element.price} />
                            </div>
                          })}   
                 </div>
            </div>
      </>
     )}                     
export default News;
