// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";


const Products = () => {
//   const products= useLoaderData();

//destructure kore nibo

const {products} = useLoaderData();
console.log(products);
//another way
//  const [products, setProducts]= useState([]);

//  useEffect(()=>{
//     fetch('https://dummyjson.com/products')
//     .then(res=>res.json())
//     .then(data=>setProducts(data.products))
//  },[])

// console.log(products);

    return (
        <div className="grid grid-cols-3 gap-5">
            {
                products.map(product=><ProductCard key={product.id} product={product} ></ProductCard>)
            }

        </div>
    );
};

export default Products;