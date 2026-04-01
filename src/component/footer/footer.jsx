import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white pt-20 pb-10 px-10 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-bold text-[#8035FF] mb-4">DigiTools</h2>
          <p className="text-gray-400 text-sm">Premium digital tools for creators and professionals.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Product</h4>
          <ul className="text-gray-400 text-sm space-y-2"><li>Features</li><li>Pricing</li><li>Templates</li></ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="text-gray-400 text-sm space-y-2"><li>About</li><li>Blog</li><li>Contact</li></ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#8035FF] transition cursor-pointer">f</div>
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#8035FF] transition cursor-pointer">X</div>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-500 text-xs mt-10">© 2026 DigiTools. All rights reserved.</p>
    </footer>
  );
};

export default Footer;