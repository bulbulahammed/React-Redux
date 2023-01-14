import React, { useEffect, useState } from "react";

const Home = () => {

  const [product, setProduct] = useState([]);
  useEffect(()=>{
    fetch("products.json")
    .then((res)=> res.json())
    .then(data=> setProduct(data))
  },[]);
  console.log(product);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      <h1>This is home page</h1>
    </div>
  );
};

export default Home;
