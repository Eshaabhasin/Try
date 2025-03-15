import React from "react";
import { NavLink } from "react-router-dom";

function Features() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center p-10">
            {/* Container for cards */}
            <div className="flex flex-wrap justify-center gap-6 w-full max-w-7xl">
                {/* Card 1 - Financial Learning */}
                <NavLink to='/financelearning'>
                    <div className="bg-[#2A2A2A] border border-[#5A5A5A] rounded-lg shadow-lg p-6 text-white w-72 transition-transform transform hover:scale-105">
                        <h3 className="text-xl font-semibold mb-2">📚 Financial Learning</h3>
                        <p className="text-gray-400">Master finance with bite-sized lessons and expert insights.</p>
                    </div>
                </NavLink>

                {/* Card 2 - Expense Tracker */}
                <NavLink to='/expense'>
                    <div className="bg-[#2A2A2A] border border-[#5A5A5A] rounded-lg shadow-lg p-6 text-white w-72 transition-transform transform hover:scale-105">
                        <h3 className="text-xl font-semibold mb-2">💰 Expense Tracker</h3>
                        <p className="text-gray-400">Track your daily expenses and manage your budget efficiently.</p>
                    </div>
                </NavLink>

                {/* Card 3 - Investment Tracker */}
                <NavLink to='/investment'>
                    <div className="bg-[#2A2A2A] border border-[#5A5A5A] rounded-lg shadow-lg p-6 text-white w-72 transition-transform transform hover:scale-105">
                        <h3 className="text-xl font-semibold mb-2">📊 Investment Tracker</h3>
                        <p className="text-gray-400">Monitor your investments and track portfolio growth.</p>
                    </div>
                </NavLink>

                {/* Card 4 - SIP Calculator */}
                <NavLink to='/sipcalculator'>
                    <div className="bg-[#2A2A2A] border border-[#5A5A5A] rounded-lg shadow-lg p-6 text-white w-72 transition-transform transform hover:scale-105">
                        <h3 className="text-xl font-semibold mb-2">📈 SIP Calculator</h3>
                        <p className="text-gray-400">Calculate potential returns on your SIP investments.</p>
                    </div>
                </NavLink>

                {/* Card 5 - EMI Calculator */}
                <NavLink to='/emicalculator'>
                    <div className="bg-[#2A2A2A] border border-[#5A5A5A] rounded-lg shadow-lg p-6 text-white w-72 transition-transform transform hover:scale-105">
                        <h3 className="text-xl font-semibold mb-2">🏡 EMI Calculator</h3>
                        <p className="text-gray-400">Plan your loan payments with accurate EMI calculations.</p>
                    </div>
                </NavLink>

                {/* Card 6 - Community Support */}
                <NavLink to='/community'>
                    <div className="bg-[#2A2A2A] border border-[#5A5A5A] rounded-lg shadow-lg p-6 text-white w-72 transition-transform transform hover:scale-105">
                        <h3 className="text-xl font-semibold mb-2">🤝 Community Support</h3>
                        <p className="text-gray-400">Connect with others, share insights, and get expert advice.</p>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default Features;
