'use client';
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
<div className="text-gray-200 flex h-80 gap-4 flex-col border border-gray-700 p-2 hover:scale-105 hover:text-blue-300 transition-transform w-fit mx-auto items-center backdrop-blur-lg rounded-xl shadow-md bg-gray-800 relative overflow-hidden">
      <div className="clip-card  w-50 h-75 relative">  
        <Link href={`/products/${product.id}`} className="text-blue-400">
          <img
            src={product.image}
            alt={product.name}
            className="w-50 mx-auto h-full  object-cover rounded "
          />
        </Link>

      </div>
       
        <h2 className="text-sm font-semibold  absolute top-0 left-1 px-2 py-1 rounded">
          {product.name}
        </h2>

       
        <p className="text-blue-300 text-sm absolute bottom-1 right-5  px-2 py-1 rounded">
          {product.price}
        </p>
    </div>
  );
}
