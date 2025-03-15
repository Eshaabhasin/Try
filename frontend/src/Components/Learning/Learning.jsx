import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import Chatbot from "../Chatbot/Chatbot"; // Import the chatbot component

export default function FinanceLearningTracker() {
  const [selectedLevel, setSelectedLevel] = useState("Beginner");
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [completedVideos, setCompletedVideos] = useState({});
  const navigate = useNavigate(); // Hook for navigation

  // Sample videos for each level
  const videos = {
    Beginner: [
      { title: "Banking Basics", url: "https://www.youtube.com/embed/Vl4PUQwHHNg?si=BRW5GabhooGSuRnE" },
      { title: "Savings & Emergency Fund", url: "https://www.youtube.com/embed/g-hir-4WzfU?si=L3gZ67VRAQNlE2ec" },
      { title: "Introduction to Personal Finance", url: "https://www.youtube.com/embed/UcAY6qRHlw0?si=hb9xUMaZ2zNF1mp5" },
      { title: "Using Credit Cards Wisely", url: "https://www.youtube.com/embed/6_qBkmnZlxw?si=ZAXU3Xh6JdEJQxeT" },
    ],
    Intermediate: [
      { title: "Stock Market Basics", url: "https://www.youtube.com/embed/Xn7KWR9EOGQ?si=M00F_bhJv3CgXFmF" },
      { title: "Real Estate Investing", url: "https://www.youtube.com/embed/BpEj48kx6q0?si=j1sk8B9cAT2PIhAc" },
      { title: "Mutual Funds Explained", url: "https://www.youtube.com/embed/PbldLCsspgE?si=C7u68wR5VYJJkcn-" },
      { title: "Financial Independence for Women", url: "https://www.youtube.com/embed/A7r2vCxa3pI?si=jhKa0pcPR95xs02V" },
    ],
    Advanced: [
      { title: "Entrepreneurship & Business Finance", url: "https://www.youtube.com/embed/9kKlZQGEOto?si=QtocntAGgE1-tsmP" },
      { title: "Global Investment & Financial Trends", url: "https://www.youtube.com/embed/RB7ZbujJlY8?si=IBvt9fOWG76DvElR" },
      { title: "Advanced Investment Strategies", url: "https://www.youtube.com/embed/bmfrXAPLRBg?si=-Vyg2qJ3qG8KFo4m" },
      { title: "Venture Capital", url: "https://www.youtube.com/embed/LyGm_ka745c?si=cwKd4onYCZNd4t6n" },
    ],
  };

  // Handle marking video as complete
  const handleComplete = (level, index) => {
    setCompletedVideos((prev) => ({
      ...prev,
      [level]: { ...prev[level], [index]: true },
    }));
  };

  // Calculate progress percentage
  const getProgress = (level) => {
    const totalVideos = videos[level].length;
    const completedCount = completedVideos[level] ? Object.keys(completedVideos[level]).length : 0;
    return (completedCount / totalVideos) * 100;
  };

  return (
    <div className="w-[900px] px-4 py-6 bg-black text-white relative">
      <h1 className="text-3xl font-bold text-center mb-6">📈 Finance Learning Tracker</h1>

      {/* Level Selector + FinTalk + Quiz Button */}
      <div className="flex justify-center space-x-6 mb-8">
        {["Beginner", "Intermediate", "Advanced"].map((level) => (
          <button
            key={level}
            className={`px-6 py-3 rounded-lg text-lg font-semibold transition ${
              selectedLevel === level ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
            onClick={() => setSelectedLevel(level)}
          >
            {level} {getProgress(level) === 100 ? "✔️" : ""}
          </button>
        ))}

        {/* FinTalk Button */}
        <button
          className="px-6 py-3 rounded-lg text-lg font-semibold bg-green-500 text-white hover:bg-green-600 transition"
          onClick={() => setChatbotOpen(true)}
        >
          FinTalk 💬
        </button>

        {/* Quiz Button - Redirects to Quiz Component */}
        <button
          className="px-6 py-3 rounded-lg text-lg font-semibold bg-yellow-500 text-white hover:bg-yellow-600 transition"
          onClick={() => navigate("/finance-quiz")} // Navigate to the quiz page
        >
          Quiz 🎯
        </button>
      </div>

      {/* Progress Tracker */}
      <div className="w-full bg-gray-700 rounded-full h-4 mb-6">
        <div
          className="bg-blue-500 h-4 rounded-full transition-all duration-300"
          style={{ width: `${getProgress(selectedLevel)}%` }}
        ></div>
      </div>
      <p className="text-center text-gray-300">
        {Math.round(getProgress(selectedLevel))}% Completed
      </p>

      {/* Learning Videos Section */}
      <div className="space-y-6">
        {videos[selectedLevel].map((video, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
            {/* Video Title */}
            <h3 className="text-lg font-semibold w-1/4">{video.title}</h3>

            {/* Embedded Video */}
            <iframe
              width="350"
              height="200"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>

            {/* Mark as Complete Button */}
            <button
              className={`px-6 py-3 rounded-lg text-lg font-semibold ${
                completedVideos[selectedLevel]?.[index] ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
              } text-white transition`}
              onClick={() => handleComplete(selectedLevel, index)}
              disabled={completedVideos[selectedLevel]?.[index]}
            >
              {completedVideos[selectedLevel]?.[index] ? "✔ Completed" : "Mark as Complete"}
            </button>
          </div>
        ))}
      </div>

      {/* Chatbot Sliding Panel */}
      <div
        className={`fixed top-0 right-0 h-full mt-48 bg-white shadow-lg transform transition-transform ${
          chatbotOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 bg-blue-500 text-white">
          <h2 className="text-lg font-semibold">FinTalk Chatbot</h2>
          <button onClick={() => setChatbotOpen(false)} className="text-xl">✖</button>
        </div>
        <Chatbot />
      </div>
    </div>
  );
}
