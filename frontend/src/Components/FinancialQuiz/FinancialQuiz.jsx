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
    options: ["Hedging", "Diversification", "Speculation", "Arbitrage"],
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
  {
    question: "What does 'liquidity' refer to in finance?",
    options: [
      "The ability to quickly convert assets to cash",
      "The level of debt a company has",
      "A company's annual revenue",
      "The profitability of an investment",
    ],
    answer: "The ability to quickly convert assets to cash",
  },
  {
    question: "What is the primary purpose of a budget?",
    options: [
      "To increase expenses",
      "To plan and control income and spending",
      "To invest in high-risk stocks",
      "To apply for loans",
    ],
    answer: "To plan and control income and spending",
  },
];

const FinancialQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowFeedback(true);
    
    setTimeout(() => {
      if (option === questions[currentQuestion].answer) {
        setScore(score + 1);
      }

      setShowFeedback(false);
      setSelectedOption(null);
      
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setGameOver(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setGameOver(false);
    setSelectedOption(null);
    setShowFeedback(false);
  };

  const getButtonClass = (option) => {
    if (!showFeedback || selectedOption !== option) {
      return "w-[500px] h-[120px] px-6 py-5 bg-gray-800 text-white text-xl font-medium rounded-lg hover:bg-gray-700 transition duration-300 border-2 border-gray-700";
    }
    
    return option === questions[currentQuestion].answer
      ? "w-full px-6 py-5 bg-green-600 text-white text-xl font-medium rounded-lg border-2 border-green-500 transition duration-300"
      : "w-full px-6 py-5 bg-red-600 text-white text-xl font-medium rounded-lg border-2 border-red-500 transition duration-300";
  };

  const progressPercentage = ((currentQuestion) / questions.length) * 100;

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-0 m-0">
      <div className="w-full p-0 m-0">
        <div className="p-8 bg-gray-900 rounded-none border-none w-full m-0">
          <h1 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">💰 Financial IQ Quiz</h1>
          
          {!gameOver && (
            <div className="w-full h-2 bg-gray-800 rounded-full mb-8">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          )}

          {gameOver ? (
            <div className="animate-fade-in">
              <h2 className="text-4xl font-semibold mb-6 text-white">
                {score > 7 ? "🏆" : score > 5 ? "👍" : "🤔"} Your Score: {score} / {questions.length}
              </h2>
              
              <div className="mb-8">
                <div className="w-[700px] h-8 bg-gray-800 rounded-full">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-end px-4 transition-all duration-1000"
                    style={{ width: `${(score/questions.length) * 100}%` }}
                  >
                    <span className="text-white font-bold">{Math.round((score/questions.length) * 100)}%</span>
                  </div>
                </div>
              </div>
              
              <p className="text-xl mb-8 text-gray-300">
                {score > 7 
                  ? "Impressive! You have excellent financial knowledge." 
                  : score > 5 
                  ? "Good job! You have a solid understanding of finance basics." 
                  : "Keep learning! Review the basics of financial literacy."}
              </p>
              
              <button
                onClick={resetQuiz}
                className="px-8 py-4 text-xl font-semibold bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-purple-600 hover:to-blue-600 transition duration-300 shadow-lg transform hover:-translate-y-1"
              >
                Play Again 🔄
              </button>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center mb-4 text-gray-400">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>Score: {score}</span>
              </div>
              
              <h2 className="text-3xl font-semibold mb-8 text-gray-100">{questions[currentQuestion].question}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {questions[currentQuestion].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => !showFeedback && handleOptionSelect(option)}
                    disabled={showFeedback}
                    className={getButtonClass(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FinancialQuiz;