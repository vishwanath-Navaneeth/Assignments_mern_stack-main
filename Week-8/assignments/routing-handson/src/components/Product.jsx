import React from "react";
import { useLocation, useNavigate } from "react-router";

const Product = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state?.product;

  if (!product) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center bg-red-50 border border-red-200 p-8 rounded-xl shadow-sm">
          <p className="text-red-600 text-xl font-bold mb-4">No product data available.</p>
          <button 
            onClick={() => navigate('/products')}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Return to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-8 p-8 lg:p-12 bg-white shadow-xl rounded-3xl flex flex-col md:flex-row gap-12 border border-slate-100">
      {/* Image Section */}
      <div className="flex-1 flex justify-center items-center bg-slate-50 rounded-2xl p-8">
        <img
          src={product.image}
          alt={product.title}
          className="max-w-full h-80 object-contain drop-shadow-md hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Details Section */}
      <div className="flex-1 flex flex-col justify-center space-y-6">
        <div>
          <span className="inline-block bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
            {product.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            {product.title}
          </h1>
        </div>
        
        <p className="text-slate-600 leading-relaxed text-lg border-l-4 border-indigo-200 pl-4">
          {product.description}
        </p>
        
        <div className="pt-4 flex items-center gap-4 border-t border-slate-100">
          <h2 className="text-4xl font-black text-emerald-600">
            ${product.price}
          </h2>
          <span className="text-sm text-slate-400 font-medium bg-slate-100 px-3 py-1 rounded-lg">
            Free Shipping
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-4">
          <button className="flex-1 bg-indigo-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-indigo-700 hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-0.5">
            Add to Cart
          </button>
          <button 
            onClick={() => navigate('/products')}
            className="flex-1 bg-slate-100 text-slate-700 font-bold px-8 py-4 rounded-xl hover:bg-slate-200 hover:text-slate-900 transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;