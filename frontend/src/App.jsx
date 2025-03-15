import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Features from './Components/Features/Features';
import SipCalculator from './Components/SIP/SIP';
import EmiCalculator from './Components/EMI/EMI';
import FinanceLearningTracker from './Components/Learning/Learning';
import Community from './Components/Community/Community';
import Profile from './Components/Profile/Profile';
import { VideoRoom2 } from './Components/VideoNewPage/VideoRoom2';
import Chatbot from './Components/Chatbot/Chatbot';
import Expense from './Components/Expense/Expense';
import FinancialQuiz from './Components/FinancialQuiz/FinancialQuiz';
import InvestmentTracker from './Components/InvestmentTracker/InvestmentTracker';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/sipcalculator" element={<SipCalculator />} />
        <Route path="/emicalculator" element={<EmiCalculator />} />
        <Route path="/financelearning" element={<FinanceLearningTracker />} />
        <Route path="/community" element={<Community/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/VideoRoom2" element={<VideoRoom2 />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/expense" element={<Expense/>} />
        <Route path="/finance-quiz" element={<FinancialQuiz/>} />
        <Route path="/investment" element={<InvestmentTracker/>} />
      </Routes>
    </Router>
  );
}

export default App;
