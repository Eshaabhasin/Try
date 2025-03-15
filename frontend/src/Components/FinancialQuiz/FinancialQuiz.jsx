import React, { useState } from "react";

const questions = [
  {
    question: "What does APR stand for in finance?",
    options: [
      "Annual Percentage Rate",
      "Average Payment Ratio",
      "Annual Payment Rate",
      "Accrued Principal Revenue",
    ],
    answer: "Annual Percentage Rate",
  },
  {
    question: "Which of the following is NOT a type of investment?",
    options: ["Stocks", "Bonds", "Mutual Funds", "Credit Score"],
    answer: "Credit Score",
  },
  {
    question: "What is the purpose of a credit score?",
    options: [
      "To measure your wealth",
      "To determine your creditworthiness",
      "To track your expenses",
      "To calculate your savings interest",
    ],
    answer: "To determine your creditworthiness",
  },
  {
    question: "What is the recommended emergency fund duration?",
    options: [
      "1 month of expenses",
      "3-6 months of expenses",
      "1 year of expenses",
      "No need for an emergency fund",
    ],
    answer: "3-6 months of expenses",
  },
  {
    question: "Which financial document shows a company's revenues and expenses?",
    options: [
      "Balance Sheet",
      "Income Statement",
      "Cash Flow Statement",
      "Annual Report",
    ],
    answer: "Income Statement",
  },
  {
    question: "What is compound interest?",
    options: [
      "Interest earned on the principal amount only",
      "Interest earned on both the principal and previously earned interest",
      "A fixed percentage added to your savings",
      "A method to calculate inflation",
    ],
    answer: "Interest earned on both the principal and previously earned interest",
  },
  {
    question: "What does a 401(k) plan help with?",
    options: [
      "Paying off debts",
      "Saving for retirement",
      "Managing daily expenses",
      "Starting a new business",
    ],
    answer: "Saving for retirement",
  },
  {
    question: "What is the term for spreading investments to reduce risk?",
    options: [
      "Hedging",
      "Diversification",
      "Speculation",
      "Arbitrage",
    ],
    answer: "Diversification",
  },
  {
    question: "Which financial ratio is used to measure a company's profitability?",
    options: [
      "Debt-to-equity ratio",
      "Return on investment (ROI)",
      "Current ratio",
      "Price-to-earnings ratio",
    ],
    answer: "Return on investment (ROI)",
  },
  {
    question: "What is an asset?",
    options: [
      "A financial liability",
      "Something of value owned by a person or company",
      "A loan taken from a bank",
      "A tax deduction",
    ],
    answer: "Something of value owned by a person or company",
  },
];

const FinancialQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setGameOver(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setGameOver(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="w-[500px] p-6 bg-gray-900 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-blue-500">💰 Financial Quiz</h1>

        {gameOver ? (
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              🎉 Your Score: {score} / {questions.length}
            </h2>
            <button
              onClick={resetQuiz}
              className="px-6 py-3 text-lg font-semibold bg-blue-500 rounded-lg hover:bg-blue-600 transition"
            >
              Play Again 🔄
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-4">{questions[currentQuestion].question}</h2>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinancialQuiz;
