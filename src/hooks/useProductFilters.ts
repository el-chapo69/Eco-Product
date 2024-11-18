import { useState, useCallback } from 'react';

interface Filters {
  searchQuery: string;
  category: string;
  certification: string;
  priceRange: string;
  sustainabilityScore: string;
}

const initialFilters: Filters = {
  searchQuery: '',
  category: '',
  certification: '',
  priceRange: 'all',
  sustainabilityScore: 'all'
};

export function useProductFilters() {
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [pendingFilters, setPendingFilters] = useState<Filters>(initialFilters);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const setSearchQuery = useCallback((query: string) => {
    setPendingFilters(prev => ({ ...prev, searchQuery: query }));
  }, []);

  const setCategory = useCallback((category: string) => {
    setPendingFilters(prev => ({ ...prev, category }));
  }, []);

  const setCertification = useCallback((certification: string) => {
    setPendingFilters(prev => ({ ...prev, certification }));
  }, []);

  const setPriceRange = useCallback((range: string) => {
    setPendingFilters(prev => ({ ...prev, priceRange: range }));
  }, []);

  const setSustainabilityScore = useCallback((score: string) => {
    setPendingFilters(prev => ({ ...prev, sustainabilityScore: score }));
  }, []);

  const applyFilters = useCallback(() => {
    setFilters(pendingFilters);
  }, [pendingFilters]);

  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
    setPendingFilters(initialFilters);
  }, []);

  return {
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
  };
}