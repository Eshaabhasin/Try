import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);
  const [showChart, setShowChart] = useState(false);

  const calculateEMI = () => {
    if (!loanAmount || !interestRate || !tenure) return;

    let P = parseFloat(loanAmount);
    let r = parseFloat(interestRate) / 100 / 12; // Monthly interest rate
    let n = parseInt(tenure) * 12; // Convert years to months

    let emiValue = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    let totalPaymentValue = emiValue * n;
    let totalInterestValue = totalPaymentValue - P;

    setEmi(emiValue.toFixed(2));
    setTotalInterest(totalInterestValue.toFixed(2));
    setTotalPayment(totalPaymentValue.toFixed(2));
    setShowChart(true);
  };

  const data = [
    { name: "Principal", value: parseFloat(loanAmount) },
    { name: "Interest", value: parseFloat(totalInterest) }
  ];

  const COLORS = ["#34D399", "#EF4444"];

  return (
    <div className="flex items-start justify-start gap-8 p-6 bg-gray-900 text-white rounded-lg shadow-md w-full">
      
      {/* Left Container - EMI Form */}
      <div className={`bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2 transition-all duration-500 ${showChart ? "md:w-1/2" : "md:w-2/3"}`}>
        <h2 className="text-2xl font-bold mb-4 text-center">EMI Calculator</h2>

        <div className="space-y-4">
          <input
            type="number"
            placeholder="Loan Amount (₹)"
            className="w-full p-2 border rounded bg-gray-700 border-gray-600 focus:outline-none"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />

          <input
            type="number"
            placeholder="Annual Interest Rate (%)"
            className="w-full p-2 border rounded bg-gray-700 border-gray-600 focus:outline-none"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />

          <input
            type="number"
            placeholder="Loan Tenure (Years)"
            className="w-full p-2 border rounded bg-gray-700 border-gray-600 focus:outline-none"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
          />

          <button
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            onClick={calculateEMI}
          >
            Calculate
          </button>
        </div>

        {emi && (
          <div className="mt-6 text-center">
            <h3 className="text-lg font-semibold">Monthly EMI:</h3>
            <p className="text-xl font-bold text-green-400">₹{emi}</p>

            <h3 className="text-lg font-semibold mt-2">Total Interest:</h3>
            <p className="text-xl font-bold text-red-400">₹{totalInterest}</p>

            <h3 className="text-lg font-semibold mt-2">Total Payment:</h3>
            <p className="text-xl font-bold text-blue-400">₹{totalPayment}</p>
          </div>
        )}
      </div>

      {/* Right Container - Pie Chart (Appears after calculation) */}
      {showChart && (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2 transition-opacity duration-500">
          <h3 className="text-center text-lg font-semibold mb-4">Loan Breakdown</h3>
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
      )}
      
    </div>
  );
}

export default EmiCalculator;
