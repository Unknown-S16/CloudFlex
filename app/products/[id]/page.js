'use client';
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import products from "@/data/products";

export default function ProductDetail() {
  const params = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (params?.id) {
      const found = products.find((p) => p.id === params.id);
      setProduct(found);
    }
  }, [params]);

  if (!product)
    return (
      <p className="text-red-500 text-center text-lg mt-20">
        Product not found.
      </p>
    );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-6">
      <div className="max-w-4xl w-full rounded-xl p-6 shadow-2xl border border-white/20 backdrop-blur bg-white/10 text-white space-y-5">
        
      <div className="flex gap-5">
        <img
          src={product.image}
          alt={product.name}
          className="w-30 h-40 object-cover rounded-lg shadow-md"
        />
        <div className="w-full border h-80 bg-gray-800 rounded-lg flex items-center justify-center">
          <span className="text-white text-sm opacity-50">Trailer Placeholder</span>
        </div>
         </div>
        

        
        

        
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-xl font-semibold text-blue-400">{product.price}</p>
        <p className="text-sm text-gray-200">{product.description}</p>

        <button className="w-full py-2 rounded-md bg-gradient-to-r from-gray-500 to-gray-600 text-white font-semibold shadow-lg hover:scale-105 transition duration-300">
          Buy Now
        </button>
      </div>
    </div>
  );
}
