import React from 'react';
import logo from '../assets/logo.jpeg'; // Ensure this path matches your directory structure

const ContactPage: React.FC = () => {
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
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            We are here to help! If you have any questions, feedback, or need assistance, please reach out to us.
          </p>
          <div className="mt-8">
            <p className="text-lg text-gray-800 mb-2">Email: <a href="mailto:info@mymedcompass.com" className="text-blue-500">info@mymedcompass.com</a></p>
            <p className="text-lg text-gray-800 mb-2">Phone: +234-123-456-7890</p>
            <p className="text-lg text-gray-800">Address: 123 Healthcare Avenue, Lagos, Nigeria</p>
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

export default ContactPage;
