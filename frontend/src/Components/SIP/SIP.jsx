import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

function SipCalculator() {
  const [investment, setInvestment] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [chartData, setChartData] = useState([]);
  const [maturityAmount, setMaturityAmount] = useState(null);
  const [showChart, setShowChart] = useState(false); // State to toggle the right container

  const calculateSIP = () => {
    if (!investment || !rate || !years) return;

    let P = parseFloat(investment);
    let r = parseFloat(rate) / 100 / 12; // Monthly rate
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
    setShowChart(true); // Show the right container when button is clicked
  };

  return (
    <div className="flex items-start justify-start gap-8 p-6 bg-gray-900 text-white rounded-lg shadow-md w-full">
      
      {/* Left Container - SIP Form (Initially aligned left) */}
      <div className={`bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2 transition-all duration-500 ${showChart ? "md:w-1/2" : "md:w-2/3"}`}>
        <h2 className="text-2xl font-bold mb-4 text-center">SIP Calculator</h2>

        <div className="space-y-4">
          <input
            type="number"
            placeholder="Monthly Investment (₹)"
            className="w-full p-2 border rounded bg-gray-700 border-gray-600 focus:outline-none"
            value={investment}
            onChange={(e) => setInvestment(e.target.value)}
          />

          <input
            type="number"
            placeholder="Expected Annual Return (%)"
            className="w-full p-2 border rounded bg-gray-700 border-gray-600 focus:outline-none"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />

          <input
            type="number"
            placeholder="Investment Duration (Years)"
            className="w-full p-2 border rounded bg-gray-700 border-gray-600 focus:outline-none"
            value={years}
            onChange={(e) => setYears(e.target.value)}
          />

          <button
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            onClick={calculateSIP}
          >
            Calculate
          </button>
        </div>

        {maturityAmount && (
          <div className="mt-6 text-center">
            <h3 className="text-lg font-semibold">Maturity Amount:</h3>
            <p className="text-xl font-bold text-green-400">₹{maturityAmount}</p>
          </div>
        )}
      </div>

      {/* Right Container - SIP Growth Chart (Appears only after clicking Submit) */}
      {showChart && (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2 transition-opacity duration-500">
          <h3 className="text-center text-lg font-semibold mb-4">SIP Growth Chart</h3>
          {chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" fill="#34D399" />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-center text-gray-400">Enter values to see the growth chart.</p>
          )}
        </div>
      )}
      
    </div>
  );
}

export default SipCalculator;
