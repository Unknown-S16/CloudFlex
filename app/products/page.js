import products from "@/data/products";
import ProductGrid from "@/components/ProductGrid";
import VideoBackground from "@/components/VideoBackground";

export  function ShinyText({ text, className = "" }) {
  return (
    <span
      className={`inline-block text-transparent bg-clip-text bg-gradient-to-r from-white/10 via-blue-300 to-white/10 animate-shine ${className}`}
      style={{
        backgroundSize: "200% auto",
      }}
    >
      {text}
    </span>
  );
}

export default function ProductsPage() {
  return (
    <div className="relative z-10">
      <VideoBackground />

   <nav className="relative z-50 overflow-x-hidden">
  <div className="w-full flex justify-center">
    <div className="relative w-full flex justify-center items-start">
      <div className="relative bg-gray-900  px-8 py-3 w-80 text-center z-10 clip-diagonal">
        <h1 className="text-white text-3xl font-bold tracking-widest ">
         <ShinyText text="SuperGames" />
        </h1>
      </div>

     
      <div className="absolute left-0 top-0 h-6 w-1/2  bg-gray-800  backdrop-blur-md z-0" />

      <div className="absolute right-0 top-0 h-6 w-1/2  bg-gray-800  backdrop-blur-md z-0" />
    </div>
  </div>
</nav>


      {/* Foreground content over video */}
      <div className="relative z-4 lg:max-w-3xl sm:max-w-lg mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white mb-6"></h1>
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
