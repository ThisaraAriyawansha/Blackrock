import React from 'react';

const BlackRockPage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navbar */}
      <nav className="bg-gray-100 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">BlackRock</div>
          <ul className="flex space-x-8">
            <li><a href="#" className="hover:text-blue-600">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600">Newsroom</a></li>
            <li><a href="#" className="hover:text-blue-600">Insights</a></li>
            <li><a href="#" className="hover:text-blue-600">Investor Relations</a></li>
            <li><a href="#" className="hover:text-blue-600">Corporate Sustainability</a></li>
            <li><a href="#" className="hover:text-blue-600">Careers</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto my-12">
        <h1 className="text-5xl font-bold mb-6">Global Infrastructure Partners, a part of BlackRock</h1>
        <p className="text-lg text-gray-700 mb-6">
          BlackRock and Global Infrastructure Partners announce the successful completion of BlackRock’s acquisition of GIP. 
          The combination creates an industry leader in infrastructure across equity, debt, and solutions – providing a diverse range of infrastructure sector expertise and exposure across developed and emerging markets.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-200">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default BlackRockPage;
