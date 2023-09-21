import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const Product = () => {
    const product =useLoaderData();
    console.log(product);

    const param =useParams();

    const{id, title, description, price, stock, thumbnail } = product || {}

   const navigate = useNavigate()
     
   const handleGoBack =()=>{
    navigate(-1)
   }


    return (
        <div className="flex justify-center mt-8">
            
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={thumbnail} alt=""/>
        <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        
        
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to Cart</button>
               
        <button onClick={handleGoBack} className="text-white bg-blue-700 hover:bg-blue-800  mt-5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go Back</button>
    
    </div>
</div >

        </div>
    );
};

export default Product;