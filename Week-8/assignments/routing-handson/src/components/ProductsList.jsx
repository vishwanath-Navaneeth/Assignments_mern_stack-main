import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

const ProductsList = () => {
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const goToProduct = (productObj) => {
    navigate("/product", { state: { product: productObj } });
  };

  const searchItem = (data) => {
    let searchWith = data?.searchWith;
    let type = data?.type;
    if (!searchWith || searchWith.length === 0) return;

    let newObj;
    if (type === "title") {
      newObj = products.filter((obj) =>
        obj.title.toLowerCase().includes(searchWith.toLowerCase())
      );
    } else if (type === "category") {
      newObj = products.filter((obj) =>
        obj.category.toLowerCase().includes(searchWith.toLowerCase())
      );
    }
    setProducts(newObj);
  };

  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      try {
        let res = await fetch("https://fakestoreapi.com/products");
        if (res.status === 200) {
          let productsData = await res.json();
          setProducts(productsData);
        } else {
          throw new Error("Failed to fetch products");
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-2xl text-indigo-500 font-bold animate-pulse">
          Loading products...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-center text-red-500 font-semibold bg-red-50 p-4 rounded-lg border border-red-200">
          {error.message}
        </p>
      </div>
    );
  }

  return (
    <div className="p-2 sm:p-6">
      {/* Modern Search Bar */}
      <form
        onSubmit={handleSubmit(searchItem)}
        className="flex flex-col sm:flex-row justify-center items-center gap-0 mb-12 max-w-2xl mx-auto shadow-md rounded-full overflow-hidden border border-slate-200 bg-white"
      >
        <input
          {...register("searchWith")}
          className="w-full sm:w-96 px-6 py-4 focus:outline-none text-slate-700 bg-transparent placeholder-slate-400"
          type="text"
          placeholder="🔍 Search products..."
        />
        <select
          {...register("type")}
          className="w-full sm:w-auto px-4 py-4 focus:outline-none bg-slate-50 border-l border-slate-200 text-slate-600 font-medium cursor-pointer"
        >
          <option value="category">Category</option>
          <option value="title">Title</option>
        </select>
        <button
          type="submit"
          className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 font-semibold hover:bg-indigo-700 transition-colors"
        >
          Search
        </button>
      </form>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((productObj) => (
          <div
            onClick={() => goToProduct(productObj)}
            key={productObj.id}
            className="group bg-white border border-slate-100 shadow-sm rounded-2xl p-6 cursor-pointer hover:shadow-xl hover:border-indigo-100 transition-all duration-300 flex flex-col justify-between h-full"
          >
            <div className="w-full h-48 bg-white mb-6 p-4 rounded-xl flex items-center justify-center">
              <img
                src={productObj.image}
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                alt={productObj.title}
              />
            </div>
            
            <div className="flex flex-col flex-grow">
              <h1 className="text-slate-800 font-semibold line-clamp-2 mb-2 group-hover:text-indigo-600 transition-colors">
                {productObj.title}
              </h1>
              <div className="mt-auto">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">
                  {productObj.category}
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
                  ${productObj.price}
                </h2>
                <button className="w-full bg-slate-50 text-indigo-600 font-semibold py-2.5 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;