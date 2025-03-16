import React from "react";
import { NavLink } from "react-router-dom";

function Features() {
  return (
    <div className="min-h-screen w-full px-8 md:px-16 py-16 text-white flex flex-col items-center">
      {/* Section Title */}
      <h2 className="text-5xl font-extrabold mb-16 text-center text-gray-200">
        🚀 Explore Our Features
      </h2>

      {/* Feature Cards in a Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl w-full">

        {/* Feature Card Component */}
        {[
          { to: '/financelearning', emoji: '📚', title: 'Financial Learning', desc: 'Master finance with structured lessons and expert insights.' },
          { to: '/expense', emoji: '💰', title: 'Expense Tracker', desc: 'Monitor expenses and improve your budgeting skills.' },
          { to: '/investment', emoji: '📊', title: 'Investment Tracker', desc: 'Monitor and analyze your portfolio with real-time insights.' },
          { to: '/sipcalculator', emoji: '📈', title: 'SIP Calculator', desc: 'Estimate your SIP returns and make smarter investments.' },
          { to: '/emicalculator', emoji: '🏡', title: 'EMI Calculator', desc: 'Plan your loan repayments with ease.' },
          { to: '/community', emoji: '🤝', title: 'Community Support', desc: 'Engage, share knowledge, and get expert financial advice.' }
        ].map((feature, index) => (
          <NavLink to={feature.to} key={index} className="group">
            <div className="bg-[#1E1E1E] border border-gray-600 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:scale-[1.05] w-[90%] sm:w-[320px] h-[220px] mx-auto">
              <span className="text-5xl mb-4">{feature.emoji}</span>
              <h3 className="text-2xl font-bold">{feature.title}</h3>
              <p className="text-gray-400 text-lg mt-2">{feature.desc}</p>
            </div>
          </NavLink>
        ))}

      </div>
    </div>
  );
}

export default Features;
