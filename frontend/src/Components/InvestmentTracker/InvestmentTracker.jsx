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
    <div className="flex min-h-screen p-8 text-white gap-8">
      {/* Left Side: Add Investment Form */}
      <div className="w-1/2 p-8 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-blue-400">📩 Add Investment</h2>
        <input
          type="text"
          placeholder="Investment Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-800 rounded text-white"
        />
        <input
          type="number"
          placeholder="Invested Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-800 rounded text-white"
        />
        <input
          type="number"
          placeholder="Returns (%)"
          value={returns}
          onChange={(e) => setReturns(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-800 rounded text-white"
        />
        <button
          onClick={addInvestment}
          className="w-full px-4 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition font-semibold"
        >
          Add Investment ➕
        </button>
      </div>

      {/* Right Side: Portfolio Table & Summary (Same Width as Left) */}
      <div className="w-1/2 p-8 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-blue-400">📊 Your Portfolio</h2>

        {/* Portfolio Table */}
        {investments.length > 0 ? (
          <div className="overflow-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-2 px-4">Investment</th>
                  <th className="py-2 px-4">Amount (₹)</th>
                  <th className="py-2 px-4">Returns (%)</th>
                  <th className="py-2 px-4">Total Value (₹)</th>
                </tr>
              </thead>
              <tbody>
                {investments.map((inv) => (
                  <tr key={inv.id} className="border-b border-gray-700">
                    <td className="py-2 px-4">{inv.name}</td>
                    <td className="py-2 px-4">{inv.amount.toFixed(2)}</td>
                    <td className="py-2 px-4">{inv.returns.toFixed(2)}%</td>
                    <td className="py-2 px-4">
                      {(inv.amount + (inv.amount * inv.returns) / 100).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-300">No investments added yet.</p>
        )}

        {/* Portfolio Summary */}
        {investments.length > 0 && (
          <div className="mt-6 p-6 bg-gray-800 rounded-lg">
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
