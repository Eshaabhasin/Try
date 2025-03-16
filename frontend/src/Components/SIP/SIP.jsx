import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

function SipCalculator() {
  const [investment, setInvestment] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [chartData, setChartData] = useState([]);
  const [maturityAmount, setMaturityAmount] = useState(null);

  const calculateSIP = () => {
    if (!investment || !rate || !years) return;

    let P = parseFloat(investment);
    let r = parseFloat(rate) / 100 / 12;
    let n = 12;
    let t = parseInt(years);
    let totalMonths = t * n;

    let M = P * ((Math.pow(1 + r, totalMonths) - 1) / r) * (1 + r);
    setMaturityAmount(M.toFixed(2));

    let data = [];
    for (let i = 1; i <= t; i++) {
      let yearMaturity = P * ((Math.pow(1 + r, i * n) - 1) / r) * (1 + r);
      data.push({ year: i, amount: Math.round(yearMaturity) });
    }
    setChartData(data);
  };

  return (
    <div className="flex flex-col gap-6 p-10 bg-gray-900 text-white rounded-lg shadow-md w-full h-screen">
      
      {/* Title and Info */}
      <div className="text-center">
        <h2 className="text-4xl font-extrabold">📊 SIP Calculator</h2>
        <p className="text-gray-300 text-lg mt-2">
          A Systematic Investment Plan (SIP) calculator helps estimate returns by investing a fixed amount every month.
        </p>
      </div>

      {/* SIP Calculator and Chart in One Row */}
      <div className="flex flex-row gap-10 w-full h-full">
        
        {/* Left Side - SIP Form */}
        <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-1/2 flex flex-col justify-between">
          <div className="space-y-8">
            <div>
              <label className="block text-gray-400 text-xl mb-3">💰 Monthly Investment (₹)</label>
              <input
                type="number"
                className="w-full p-4 border rounded-lg bg-gray-700 border-gray-600 focus:outline-none text-xl"
                value={investment}
                onChange={(e) => setInvestment(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-gray-400 text-xl mb-3">📈 Expected Annual Return (%)</label>
              <input
                type="number"
                className="w-full p-4 border rounded-lg bg-gray-700 border-gray-600 focus:outline-none text-xl"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-gray-400 text-xl mb-3">⏳ Investment Duration (Years)</label>
              <input
                type="number"
                className="w-full p-4 border rounded-lg bg-gray-700 border-gray-600 focus:outline-none text-xl"
                value={years}
                onChange={(e) => setYears(e.target.value)}
              />
            </div>

            <button
              className="w-full bg-blue-500 text-white py-4 text-2xl font-bold rounded-lg hover:bg-blue-600 transition"
              onClick={calculateSIP}
            >
              🚀 Calculate
            </button>
          </div>
        </div>

        {/* Right Side - SIP Growth Chart */}
        <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-1/2 flex flex-col">
          <h3 className="text-3xl font-extrabold mb-6 text-center">📊 SIP Growth Chart</h3>
          
          {chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" tick={{ fontSize: 18, fill: "#ffffff" }} />
                <YAxis tick={{ fontSize: 18, fill: "#ffffff" }} />
                <Tooltip />
                <Bar dataKey="amount" fill="#34D399" barSize={60} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex justify-center items-center h-full text-gray-400 text-2xl">
              <p>📌 Enter values to see the growth chart.</p>
            </div>
          )}

          {/* Maturity Amount - Positioned Below the Graph */}
          {maturityAmount && (
            <div className="mt-6 flex justify-center">
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-semibold text-gray-300">💰 Maturity Amount:</h3>
                <p className="text-3xl font-extrabold text-green-400">₹{maturityAmount}</p>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default SipCalculator;
