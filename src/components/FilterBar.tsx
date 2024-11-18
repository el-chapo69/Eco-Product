import React from 'react';
import { Search, SlidersHorizontal, RefreshCw } from 'lucide-react';
import { useProductFilters } from '../hooks/useProductFilters';

const categories = ['All', 'Fashion', 'Home', 'Beauty', 'Electronics'];
const certifications = ['All', 'Fair Trade', 'Organic', 'B Corp', 'Energy Star', 'Leaping Bunny', 'Plastic Free', 'FSC Certified', 'GOTS Certified', 'Cradle to Cradle'];
const priceRanges = [
  { label: 'All', value: 'all' },
  { label: 'Under $25', value: '0-25' },
  { label: '$25 - $50', value: '25-50' },
  { label: '$50 - $100', value: '50-100' },
  { label: 'Over $100', value: '100+' }
];
const sustainabilityScores = [
  { label: 'All Scores', value: 'all' },
  { label: '5 Stars', value: '5' },
  { label: '4+ Stars', value: '4' },
  { label: '3+ Stars', value: '3' }
];

export default function FilterBar() {
  const {
    filters,
    pendingFilters,
    setSearchQuery,
    setCategory,
    setCertification,
    setPriceRange,
    setSustainabilityScore,
    applyFilters,
    resetFilters,
    showAdvanced,
    setShowAdvanced
  } = useProductFilters();

  const hasFilterChanges = JSON.stringify(filters) !== JSON.stringify(pendingFilters);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCategory(value === 'All' ? '' : value);
  };

  const handleCertificationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCertification(value === 'All' ? '' : value);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    applyFilters();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      applyFilters();
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-6 mb-8">
      <div className="space-y-4">
        {/* Search and Basic Filters */}
        <div className="flex flex-col lg:flex-row gap-4">
          <form onSubmit={handleSearch} className="relative flex-1 flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search eco-friendly products..."
                value={pendingFilters.searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/50"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary flex items-center gap-2 whitespace-nowrap"
            >
              <Search className="w-4 h-4" />
              Search
            </button>
          </form>
          
          <div className="flex gap-4 flex-wrap">
            <select
              value={pendingFilters.category || 'All'}
              onChange={handleCategoryChange}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/50"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <select
              value={pendingFilters.certification || 'All'}
              onChange={handleCertificationChange}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/50"
            >
              {certifications.map(cert => (
                <option key={cert} value={cert}>
                  {cert}
                </option>
              ))}
            </select>

            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center gap-2 px-4 py-2 text-green-600 hover:text-green-700 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              {showAdvanced ? 'Less Filters' : 'More Filters'}
            </button>
          </div>
        </div>

        {/* Advanced Filters */}
        {showAdvanced && (
          <div className="pt-4 border-t">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price Range
                </label>
                <select
                  value={pendingFilters.priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/50"
                >
                  {priceRanges.map(range => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sustainability Score
                </label>
                <select
                  value={pendingFilters.sustainabilityScore}
                  onChange={(e) => setSustainabilityScore(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/50"
                >
                  {sustainabilityScores.map(score => (
                    <option key={score.value} value={score.value}>
                      {score.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2 flex items-end gap-4">
                <button
                  onClick={resetFilters}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  Reset
                </button>
                <button
                  onClick={applyFilters}
                  disabled={!hasFilterChanges}
                  className={`flex-1 btn ${
                    hasFilterChanges
                      ? 'btn-primary'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Apply Filters Button (when not showing advanced) */}
        {!showAdvanced && hasFilterChanges && (
          <div className="flex justify-end">
            <button
              onClick={applyFilters}
              className="btn btn-primary"
            >
              Apply Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}