import { useEffect, useState } from "react";
import "./Home.css";
import { Spinner } from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading]=useState(false);
  const [posts, setPosts]=useState([]);

  async function fetchProductData() {
    setLoading(true);

    try{
      const result= await fetch(API_URL);
      const data= await result.json();

      setPosts(data);

    }
    catch(error){
      console.log("Something wrong in fetching data");
      setPosts([]);

    }
    finally{
      setLoading(false);
    }    
  }

  useEffect( () => {
    fetchProductData();
  },[]);
  

  return (
    <div className="home">

      {
        loading ? <Spinner/> :
        posts.length > 0 
           ? 
          <div className="cardDiv">
           {
            posts.map( (post)=>(
              <Product key={post.id} post={post}/>
            ))
           }
          </div>
          :
         <div className="noDataDiv">
          <p>No Data Found</p>
         </div>
        
      }

    </div>
  )
};

export default Home;
