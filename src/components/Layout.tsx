import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Leaf, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import CartButton from './CartButton';
import Cart from './Cart';

export default function Layout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { name: 'Products', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Blog', path: '/blog' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <Leaf className="w-8 h-8 text-green-500 transform transition-transform group-hover:rotate-12" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
                EcoProduct
              </h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-600 hover:text-green-500 transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <CartButton onClick={() => setIsCartOpen(true)} />
              {user ? (
                <>
                  <Link 
                    to="/profile" 
                    className="flex items-center gap-2 text-gray-600 hover:text-green-500 transition-all hover:scale-105"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-medium">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <span>{user.name}</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-gray-600 hover:text-green-500 font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-gray-600 hover:text-green-500 font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="btn btn-primary"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Outlet />

      <footer className="bg-white/80 backdrop-blur-md border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent mb-4">
                About EcoProduct
              </h3>
              <p className="text-gray-600">
                Helping you make sustainable choices for a better planet.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.path}
                      className="text-gray-600 hover:text-green-500 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent mb-4">
                Categories
              </h3>
              <ul className="space-y-2">
                {['Fashion', 'Home', 'Food', 'Beauty', 'Electronics'].map((item) => (
                  <li key={item}>
                    <Link to="/" className="text-gray-600 hover:text-green-500 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent mb-4">
                Newsletter
              </h3>
              <p className="text-gray-600 mb-4">
                Stay updated with our latest eco-friendly products.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-l-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button className="btn btn-primary rounded-l-none">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}