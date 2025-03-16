import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);

  const calculateEMI = () => {
    if (!loanAmount || !interestRate || !tenure) return;

    let P = parseFloat(loanAmount);
    let r = parseFloat(interestRate) / 100 / 12;
    let n = parseInt(tenure) * 12;

    let emiValue = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    let totalPaymentValue = emiValue * n;
    let totalInterestValue = totalPaymentValue - P;

    setEmi(emiValue.toFixed(2));
    setTotalInterest(totalInterestValue.toFixed(2));
    setTotalPayment(totalPaymentValue.toFixed(2));
  };

  const data = [
    { name: "Principal", value: parseFloat(loanAmount) || 0 },
    { name: "Interest", value: parseFloat(totalInterest) || 0 }
  ];

  const COLORS = ["#34D399", "#EF4444"];

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row gap-8 p-10 text-white bg-gray-900 rounded-lg shadow-lg">
      
      {/* Left Section - Form + Results in One Container */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full lg:w-1/2">
        <h2 className="text-2xl font-bold mb-6">📊 EMI Calculator</h2>

        <div className="space-y-4">
          <input
            type="number"
            placeholder="Loan Amount (₹)"
            className="w-full p-3 border rounded bg-gray-700 border-gray-600 focus:outline-none"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />

          <input
            type="number"
            placeholder="Annual Interest Rate (%)"
            className="w-full p-3 border rounded bg-gray-700 border-gray-600 focus:outline-none"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />

          <input
            type="number"
            placeholder="Loan Tenure (Years)"
            className="w-full p-3 border rounded bg-gray-700 border-gray-600 focus:outline-none"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
          />

          <button
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all"
            onClick={calculateEMI}
          >
            Calculate EMI
          </button>
        </div>

        {/* Results Section - Inside Same Container */}
        {emi && (
          <div className="mt-6 border-t border-gray-600 pt-4">
            <h3 className="text-lg font-semibold">Monthly EMI:</h3>
            <p className="text-xl font-bold text-green-400">₹{emi}</p>

            <h3 className="text-lg font-semibold mt-3">Total Interest:</h3>
            <p className="text-xl font-bold text-red-400">₹{totalInterest}</p>

            <h3 className="text-lg font-semibold mt-3">Total Payment:</h3>
            <p className="text-xl font-bold text-blue-400">₹{totalPayment}</p>
          </div>
        )}
      </div>

      {/* Right Section - Pie Chart is Always Visible */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full lg:w-1/2">
        <h3 className="text-lg font-semibold text-center mb-4">Loan Breakdown</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default EmiCalculator;
