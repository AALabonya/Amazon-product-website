import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({product}) => {

    const{id, title, images, price, stock, }= product || {}
    console.log(id);

    const navigate =useNavigate()

    const handleShowDetailsNavigate =()=>{
    
        const user = true;
        if(user){
            navigate(`/products/${id}`)
        }else{
            navigate(`/`) 
        }
    }



    return (
        
<div>
      <div>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a>
            <img
              className=" w-full h-52 rounded-t-lg object-fill p-5 rounded-lg z-5"
              src={images[0]}
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <div className="flex justify-between">
              <a>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {title}
                </h5>
              </a>
              <h1>Stock ( {stock} )</h1>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  Tk. {price.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center justify-between">

                {/* <Link to={`/products/${id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Show Details
                </Link> */}

                <button onClick={handleShowDetailsNavigate} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Show Details
                </button>
           
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    );
};

export default ProductCard;