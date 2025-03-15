import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

// Main App Component
const Expense = () => {
  const [expenses, setExpenses] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [note, setNote] = useState('');
  const [filteredCategory, setFilteredCategory] = useState('all');
  const [totalAmount, setTotalAmount] = useState(0);

  const categories = [
    'Food', 'Transportation', 'Housing', 'Entertainment', 
    'Shopping', 'Utilities', 'Healthcare', 'Education', 'Other'
  ];

  // Add a new expense
  const addExpense = () => {
    if (amount && category) {
      const newExpense = {
        id: Date.now(),
        amount: parseFloat(amount),
        category,
        note,
        date: new Date().toISOString().split('T')[0]
      };

      setExpenses([...expenses, newExpense]);
      setAmount('');
      setCategory('');
      setNote('');
      setTranscript('');
    }
  };

  // Delete an expense
  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  // Calculate total amount
  useEffect(() => {
    const filtered = filteredCategory === 'all' 
      ? expenses 
      : expenses.filter(expense => expense.category === filteredCategory);

    const total = filtered.reduce((sum, expense) => sum + expense.amount, 0);
    setTotalAmount(total);
  }, [expenses, filteredCategory]);

  // Prepare data for the Pie Chart
  const expenseData = categories.map(cat => {
    return expenses.filter(expense => expense.category === cat)
                   .reduce((sum, expense) => sum + expense.amount, 0);
  });

  const chartData = {
    labels: categories,
    datasets: [{
      data: expenseData,
      backgroundColor: [
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', 
        '#9966FF', '#FF9F40', '#2C3E50', '#E74C3C', '#27AE60'
      ],
      hoverBackgroundColor: [
        '#FF4365', '#2E86C1', '#F1C40F', '#16A085', 
        '#8E44AD', '#E67E22', '#34495E', '#C0392B', '#229954'
      ]
    }]
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-6xl mx-auto flex flex-wrap gap-6">
        
        {/* Left Section - Expense Form and List */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-center text-green-500 mb-8">Expense Tracker</h1>

          {/* Input Form */}
          <div className="bg-gray-900 text-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Add New Expense</h2>

            <div className="flex flex-wrap gap-4 mb-4">
              <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount (Rs.)" className="px-3 py-2 border border-gray-600 bg-gray-800 rounded-md text-white" />
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="px-3 py-2 border border-gray-600 bg-gray-800 rounded-md text-white">
                <option value="">Select category</option>
                {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>

            <input type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Optional note" className="w-full px-3 py-2 border border-gray-600 bg-gray-800 rounded-md text-white" />

            <div className="flex justify-between items-center mt-4">
              <button onClick={addExpense} className="px-4 py-2 bg-green-600 text-white rounded-md">Add Expense</button>
            </div>
          </div>

          {/* Expense List */}
          <div className="bg-gray-900 text-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold">Expenses</h2>
            <select value={filteredCategory} onChange={(e) => setFilteredCategory(e.target.value)} className="px-3 py-1 bg-gray-800 border border-gray-600 rounded-md mt-2 text-white">
              <option value="all">All Categories</option>
              {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
            </select>

            <div className="mt-4 p-3 bg-gray-800 rounded-md">
              <p className="text-green-400 font-medium">Total: Rs. {totalAmount.toFixed(2)}</p>
            </div>

            {expenses.length === 0 ? <p className="text-center py-4">No expenses found.</p> :
              <table className="w-full border-collapse mt-4">
                <thead>
                  <tr className="border-b">
                    <th className="p-2">Date</th>
                    <th className="p-2">Category</th>
                    <th className="p-2">Note</th>
                    <th className="p-2">Amount</th>
                    <th className="p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {expenses.map((expense) => (
                    <tr key={expense.id} className="border-t">
                      <td className="p-2">{expense.date}</td>
                      <td className="p-2">{expense.category}</td>
                      <td className="p-2">{expense.note || '-'}</td>
                      <td className="p-2">Rs. {expense.amount.toFixed(2)}</td>
                      <td className="p-2">
                        <button onClick={() => deleteExpense(expense.id)} className="text-red-500">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            }
          </div>
        </div>

        {/* Right Section - Pie Chart */}
        <div className="w-full md:w-96 bg-gray-900 text-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-center mb-4">Expense Breakdown</h2>
          <Pie data={chartData} />
        </div>

      </div>
    </div>
  );
};

export default Expense;
