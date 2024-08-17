import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpeg'; // Ensure this path matches your directory structure

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="flex items-center">
          <img src={logo} alt="MyMedCompass Logo" className="h-12 w-12 rounded-full" />
          <nav className="ml-6">
            <a href="/" className="mx-4 text-gray-700 hover:text-blue-500">Home</a>
            <a href="/about" className="mx-4 text-gray-700 hover:text-blue-500">About</a>
            <a href="/contact" className="mx-4 text-gray-700 hover:text-blue-500">Contact</a>
            <a href="/admin/login" className="mx-4 text-gray-700 hover:text-blue-500">Admin Login</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow p-6">
        <div className="flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Welcome to MyMedCompass
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your guide to finding hospitals near you. Easily search for hospitals, export the list, or share it with others.
          </p>
          <div className="w-full max-w-md">
            <input
              type="text"
              placeholder="Enter your location or select a nearby city"
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-blue-500"
            />
            <button
              className="mt-4 bg-blue-500 text-white rounded-lg px-6 py-3 hover:bg-blue-600 w-full"
              onClick={() => navigate('/search-results')}
            >
              Search
            </button>
          </div>
        </div>
      </main>

      <footer className="p-4 bg-gray-100 text-center">
        <div className="text-gray-600">
          <p>Contact us: <a href="mailto:info@mymedcompass.com" className="text-blue-500">info@mymedcompass.com</a></p>
          <div className="flex justify-center mt-2">
            <a href="https://facebook.com" className="mx-2"><i className="fab fa-facebook text-blue-600"></i></a>
            <a href="https://twitter.com" className="mx-2"><i className="fab fa-twitter text-blue-400"></i></a>
            <a href="https://instagram.com" className="mx-2"><i className="fab fa-instagram text-pink-500"></i></a>
          </div>
          <p className="mt-2">&copy; 2024 MyMedCompass. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
