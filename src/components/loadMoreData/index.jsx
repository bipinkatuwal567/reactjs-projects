import './style.css'
import { useEffect } from "react";
import { useState } from "react";

export default function LoadMoreData() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(1);

  async function fetchProducts(){
    try{
        setIsLoading(true);
        const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${count === 0 ? 0 : count * 20}`) 
        const data = await res.json();

        if(data && data.products && data.products.length){
            setIsLoading(false);
            setProducts(data.products);
        }
    }
    catch(err){
        setIsLoading(false);
        console.log(err.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  console.log(products);

  if(isLoading) return <div>Loading data...</div>

  return <div className="container">
    <div className="product-container">
        {
          products.map(item => {
            return(
              <div className='product-item'>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            )
          })
        }
    </div>
    <button className="button">
        Load more data..
    </button>
  </div>;
}
