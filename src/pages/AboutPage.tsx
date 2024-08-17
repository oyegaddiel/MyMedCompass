import React from 'react';
import logo from '../assets/logo.jpeg'; // Ensure this path matches your directory structure

const AboutPage: React.FC = () => {
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
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            MyMedCompass is your reliable guide to finding hospitals in your area. Our mission is to provide easy access to essential healthcare information, helping individuals connect with hospitals near them. Whether you need to find a hospital quickly or share hospital information with others, MyMedCompass is here to make the process seamless and efficient.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mt-4">
            Our platform is built with the user in mind, offering tools to search for hospitals, export the information as a CSV file, and share it via email or link. We are committed to continually improving and expanding our services to meet the needs of our users.
          </p>
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

export default AboutPage;
