import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Leaf, Recycle, Factory, ThumbsUp, ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { mockProducts } from '../data/mockProducts';

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = mockProducts.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
          <Link to="/" className="text-green-600 hover:text-green-500 mt-4 inline-block">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to="/"
        className="inline-flex items-center text-green-600 hover:text-green-500 mb-8"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Products
      </Link>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-96 md:h-full">
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full">
              {product.category}
            </div>
          </div>

          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-green-600">
                ${product.price}
              </span>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < product.sustainabilityScore
                        ? 'text-green-500 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Leaf className="w-6 h-6 text-green-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Carbon Footprint</p>
                    <p className="text-sm text-gray-600">{product.carbonFootprint}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Recycle className="w-6 h-6 text-green-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Materials</p>
                    <p className="text-sm text-gray-600">{product.materials.join(', ')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Factory className="w-6 h-6 text-green-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Production</p>
                    <p className="text-sm text-gray-600">Ethical Manufacturing</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <ThumbsUp className="w-6 h-6 text-green-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Certification</p>
                    <p className="text-sm text-gray-600">{product.certification}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-600">
                  This {product.name.toLowerCase()} is made with sustainable materials and ethical 
                  manufacturing practices. With a carbon footprint of only {product.carbonFootprint}, 
                  it's an environmentally conscious choice that doesn't compromise on quality.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Environmental Impact</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Reduces plastic waste</li>
                  <li>Supports sustainable farming</li>
                  <li>Uses renewable materials</li>
                  <li>Minimizes water consumption</li>
                </ul>
              </div>
            </div>

            <button
              onClick={() => addToCart(product)}
              className="w-full flex items-center justify-center gap-2 btn btn-primary"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}