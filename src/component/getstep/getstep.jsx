import React from 'react';

const GetStep = () => {
  const steps = [
    { n: '01', t: 'Create Account', d: 'Sign up for free in seconds.' },
    { n: '02', t: 'Choose Products', d: 'Browse and select your tools.' },
    { n: '03', t: 'Start Creating', d: 'Download and use immediately.' }
  ];

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-4">Get Started In 3 Steps</h2>
      <p className="text-gray-500 mb-12">Start using premium digital tools in minutes.</p>
      <div className="flex flex-wrap justify-center gap-8 px-10">
        {steps.map((s) => (
          <div key={s.n} className="w-80 p-8 rounded-3xl border border-gray-100 shadow-sm relative text-left hover:border-purple-200 transition">
            <div className="absolute top-5 right-5 bg-[#8035FF] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">{s.n}</div>
            <div className="w-12 h-12 bg-purple-50 rounded-xl mb-4 flex items-center justify-center text-2xl text-[#8035FF]">⚡</div>
            <h3 className="text-xl font-bold mb-2">{s.t}</h3>
            <p className="text-gray-500 text-sm">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetStep;