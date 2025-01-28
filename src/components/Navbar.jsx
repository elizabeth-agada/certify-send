import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/img/logo.png" alt="CertifySend Logo" className="" />
        </div>

        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-[#5570F1] font-medium">Home</a>
          <a href="#features" className="text-gray-700 hover:text-[#5570F1] font-medium">Features</a>
          <a href="#pricing" className="text-gray-700 hover:text-[#5570F1] font-medium">Pricing</a>
          <a href="#about" className="text-gray-700 hover:text-[#5570F1] font-medium">About Us</a>
          <a href="#contact" className="text-gray-700 hover:text-[#5570F1] font-medium">Contact</a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-[#5570F1] font-medium">Login</button>
          <a
            href="#get-started"
            className="px-4 py-2 bg-[#5570F1] text-white font-medium rounded-lg shadow hover:bg-blue-700 flex items-center space-x-1"
          >
            <span>Get Started</span>
            <img src="/img/button-icon1.png" alt="" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
