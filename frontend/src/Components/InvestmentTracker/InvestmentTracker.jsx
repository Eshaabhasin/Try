import React, { useState } from "react";

const InvestmentTracker = () => {
  const [investments, setInvestments] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [returns, setReturns] = useState("");

  const addInvestment = () => {
    if (!name || !amount || !returns) return;

    const newInvestment = {
      id: Date.now(),
      name,
      amount: parseFloat(amount),
      returns: parseFloat(returns),
    };

    setInvestments([...investments, newInvestment]);
    setName("");
    setAmount("");
    setReturns("");
  };

  const totalInvested = investments.reduce((acc, item) => acc + item.amount, 0);
  const totalReturns = investments.reduce(
    (acc, item) => acc + (item.amount * item.returns) / 100,
    0
  );

  return (
    <div className="flex items-start justify-center min-h-screen bg-black text-white p-6 gap-10">
      {/* Left Side: Add Investment Form */}
      <div className="bg-gray-900 p-16 rounded-lg shadow-lg w-[700px] h-[400px] text-center">
        <h2 className="text-xl font-semibold mb-4 text-blue-500">📩 Add Investment</h2>
        <input
          type="text"
          placeholder="Investment Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-3 bg-gray-800 rounded text-white"
        />
        <input
          type="number"
          placeholder="Invested Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 mb-3 bg-gray-800 rounded text-white"
        />
        <input
          type="number"
          placeholder="Returns (%)"
          value={returns}
          onChange={(e) => setReturns(e.target.value)}
          className="w-full p-2 mb-3 bg-gray-800 rounded text-white"
        />
        <button
          onClick={addInvestment}
          className="w-full px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition font-semibold"
        >
          Add Investment ➕
        </button>
      </div>

      {/* Right Side: Portfolio Table & Summary */}
      <div className="w-[600px]">
        {/* Portfolio Table */}
        {investments.length > 0 && (
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-blue-500">📊 Your Portfolio</h2>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-2">Investment</th>
                  <th className="py-2">Amount (₹)</th>
                  <th className="py-2">Returns (%)</th>
                  <th className="py-2">Total Value (₹)</th>
                </tr>
              </thead>
              <tbody>
                {investments.map((inv) => (
                  <tr key={inv.id} className="border-b border-gray-700">
                    <td className="py-2">{inv.name}</td>
                    <td className="py-2">{inv.amount.toFixed(2)}</td>
                    <td className="py-2">{inv.returns.toFixed(2)}%</td>
                    <td className="py-2">
                      {(inv.amount + (inv.amount * inv.returns) / 100).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Portfolio Summary */}
        {investments.length > 0 && (
          <div className="mt-4 bg-gray-900 p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-green-400">💰 Portfolio Summary</h3>
            <p>Total Invested: <span className="font-semibold">₹{totalInvested.toFixed(2)}</span></p>
            <p>Total Returns: <span className="font-semibold">₹{totalReturns.toFixed(2)}</span></p>
            <p>
              Portfolio Value: <span className="text-green-400 font-semibold">₹{(totalInvested + totalReturns).toFixed(2)}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvestmentTracker;
