import React from 'react';
import FilterBar from '../components/FilterBar';
import ProductCard from '../components/ProductCard';
import { mockProducts } from '../data/mockProducts';
import { useProductFilters } from '../hooks/useProductFilters';

export default function Home() {
  const { filters } = useProductFilters();

  const filteredProducts = mockProducts.filter(product => {
    // Search query filter - search across multiple fields
    if (filters.searchQuery) {
      const searchTerms = filters.searchQuery.toLowerCase().split(' ');
      const searchableText = [
        product.name,
        product.category,
        product.certification,
        ...product.materials,
      ].join(' ').toLowerCase();

      // Check if all search terms are found in the searchable text
      const matchesSearch = searchTerms.every(term => searchableText.includes(term));
      if (!matchesSearch) return false;
    }

    // Category filter
    if (filters.category) {
      if (product.category !== filters.category) {
        return false;
      }
    }

    // Certification filter
    if (filters.certification) {
      if (product.certification !== filters.certification) {
        return false;
      }
    }

    // Price range filter
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (filters.priceRange.endsWith('+')) {
        if (product.price < min) return false;
      } else {
        if (product.price < min || product.price > max) return false;
      }
    }

    // Sustainability score filter
    if (filters.sustainabilityScore !== 'all') {
      const minScore = Number(filters.sustainabilityScore);
      if (product.sustainabilityScore < minScore) return false;
    }

    return true;
  });

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Discover Eco-Friendly Products
        </h2>
        <p className="text-gray-600">
          Browse our curated selection of sustainable products that are better for you and the planet.
        </p>
      </div>

      <FilterBar />

      <div className="mb-4 text-sm text-gray-600">
        Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12 bg-white/80 backdrop-blur-md rounded-xl shadow-lg">
          <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-600">
            Try adjusting your filters or search criteria
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}