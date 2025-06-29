import React from "react";
import { useGetAllProductsQuery } from "../features/productsAPI";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/cartSlice";

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };
  return (
    <div>
      <div className="home-container">
        {isLoading ? (
          <p>Loading....</p>
        ) : error ? (
          <p>An error occurred...{error}</p>
        ) : (
          <>
            <h2 className="text-h2 font-semibold text-center mt-4">
              New Arrivals
            </h2>
            <div className="product-section flex flex-wrap justify-between mt-8 ">
              {data?.map((product) => (
                <div
                  className="product-card w-64 h-[55vh] max-w-[100%] flex flex-col justify-between my-4 mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded p-4"
                  key={product.id}
                >
                  <h3 className="text-2xl">{product.name}</h3>
                  <img
                    className="w-[90%] mt-3 ml-auto mr-auto"
                    src={product.image}
                    alt={product.name}
                  />
                  <div className="details-section flex justify-between items-center">
                    <span>{product.desc}</span>
                    <span className="text-xl font-semibold">
                      ${product.price}
                    </span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-blue-500 py-1 px-3 text-white rounded w-[100%] h-9 flex justify-center items-center mt-8 font-semibold cursor-pointer tracking-wide"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
