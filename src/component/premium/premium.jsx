import React from 'react';

const products = [
  { id: 1, name: "AI Writing Pro", desc: "Generate blogs and marketing copy.", price: 29, period: "/mo", tag: "Best Seller", icon: "✍️", features: ["Unlimited AI", "50+ templates"] },
  { id: 2, name: "Design Assets", desc: "2000+ premium UI templates.", price: 49, period: "/once", tag: "Popular", icon: "🎨", features: ["Commercial License", "Updates"] },
  { id: 3, name: "Stock Media", desc: "Millions of royalty-free assets.", price: 19, period: "/mo", tag: "New", icon: "📸", features: ["10M+ assets", "High Res"] },
  { id: 4, name: "SEO Optimizer", desc: "Rank your website on top results.", price: 35, period: "/mo", tag: "Hot", icon: "🚀", features: ["Keyword research", "Backlinks"] },
  { id: 5, name: "Video Editor", desc: "Cloud based pro video editing.", price: 25, period: "/mo", tag: "New", icon: "🎬", features: ["4K Export", "AI Effects"] },
  { id: 6, name: "Team Sync", desc: "Manage projects with your team.", price: 12, period: "/mo", tag: "Pro", icon: "🤝", features: ["Live Chat", "Task Board"] }
];

const Premium = ({ handleAddToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
      {products.map((item) => (
        <div key={item.id} className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-2xl transition relative group">
          <div className="absolute top-5 right-5 bg-purple-100 text-[#8035FF] text-[10px] font-bold px-3 py-1 rounded-full uppercase">
            {item.tag}
          </div>
          <div className="text-4xl mb-4">{item.icon}</div>
          <h3 className="text-xl font-bold mb-2">{item.name}</h3>
          <p className="text-gray-500 text-sm mb-4">{item.desc}</p>
          <div className="mb-6">
            <span className="text-3xl font-bold">${item.price}</span>
            <span className="text-gray-400 text-sm">{item.period}</span>
          </div>
          <ul className="mb-8 space-y-2">
            {item.features.map((f, i) => (
              <li key={i} className="text-sm text-gray-600 flex items-center gap-2">✨ {f}</li>
            ))}
          </ul>
          <button 
            onClick={() => handleAddToCart(item)}
            className="w-full bg-[#8035FF] text-white py-3 rounded-xl font-bold hover:bg-[#6c29e0] transition"
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Premium;