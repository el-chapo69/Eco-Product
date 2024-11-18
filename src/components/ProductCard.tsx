import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Recycle, Factory, ThumbsUp, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    carbonFootprint: string;
    sustainabilityScore: number;
    materials: string[];
    certification: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden card-hover">
      <div className="relative h-48 overflow-hidden group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
          {product.category}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
            ${product.price}
          </span>
          <div className="ml-auto flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={`w-2 h-8 rounded-full transition-all ${
                  i < product.sustainabilityScore
                    ? 'bg-gradient-to-b from-green-400 to-green-600'
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2 text-sm bg-green-50 p-2 rounded-lg">
            <Leaf className="w-4 h-4 text-green-600" />
            <span className="text-green-800">{product.carbonFootprint}</span>
          </div>
          <div className="flex items-center gap-2 text-sm bg-blue-50 p-2 rounded-lg">
            <Recycle className="w-4 h-4 text-blue-600" />
            <span className="text-blue-800">{product.materials[0]}</span>
          </div>
          <div className="flex items-center gap-2 text-sm bg-purple-50 p-2 rounded-lg">
            <Factory className="w-4 h-4 text-purple-600" />
            <span className="text-purple-800">Ethical</span>
          </div>
          <div className="flex items-center gap-2 text-sm bg-amber-50 p-2 rounded-lg">
            <ThumbsUp className="w-4 h-4 text-amber-600" />
            <span className="text-amber-800">{product.certification}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Link 
            to={`/product/${product.id}`}
            className="flex-1 btn btn-primary text-center"
          >
            View Details
          </Link>
          <button 
            onClick={() => addToCart(product)}
            className="flex items-center justify-center w-12 h-10 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}