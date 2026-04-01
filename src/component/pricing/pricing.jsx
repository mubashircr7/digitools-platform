import React from 'react';

const Pricing = () => {
  const plans = [
    { name: "Starter", price: "0", popular: false },
    { name: "Pro", price: "29", popular: true },
    { name: "Enterprise", price: "99", popular: false }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-center text-4xl font-bold mb-12">Simple Pricing</h2>
      <div className="flex flex-wrap justify-center gap-8 px-5">
        {plans.map((p, i) => (
          <div key={i} className={`w-80 p-10 rounded-3xl ${p.popular ? 'bg-[#8035FF] text-white shadow-2xl scale-105' : 'bg-white text-gray-800'} relative`}>
            {p.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-xs font-bold">MOST POPULAR</span>}
            <h3 className="text-2xl font-bold mb-4">{p.name}</h3>
            <div className="text-4xl font-black mb-6">${p.price}<span className="text-sm font-normal opacity-70">/mo</span></div>
            <ul className="mb-8 space-y-4 opacity-90">
              <li>✓ 10 Premium Tools</li>
              <li>✓ Cloud Storage</li>
              <li>✓ 24/7 Support</li>
            </ul>
            <button className={`w-full py-3 rounded-xl font-bold ${p.popular ? 'bg-white text-[#8035FF]' : 'bg-[#8035FF] text-white'}`}>Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;