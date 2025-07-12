import React, { useState, useEffect } from 'react';
import { Search, Shield, TrendingUp, Target, Users, Calendar, AlertCircle, Trophy, BarChart3, Eye } from 'lucide-react';
import axios from 'axios';
import './App.css';
import CoachDashboard from './components/CoachDashboard'; // ADD THIS IMPORT

// FIXED API URL - pointing to your Render backend
const API_BASE_URL = 'https://tahleel-ai-backend.onrender.com/api';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('user'); // ADD THIS LINE
  const [loading, setLoading] = useState(false);
  const [analysisData, setAnalysisData] = useState(null);
  const [error, setError] = useState('');

  // Check authentication on mount - UPDATE THIS
  useEffect(() => {
    const auth = localStorage.getItem('tahleel_auth');
    const role = localStorage.getItem('tahleel_role') || 'user'; // ADD THIS LINE
    if (auth === 'true') {
      setIsAuthenticated(true);
      setUserRole(role); // ADD THIS LINE
      setCurrentPage(role === 'coach' ? 'coach-dashboard' : 'main'); // UPDATE THIS LINE
    }
  }, []);

  // UPDATE THE handleLogin FUNCTION
  const handleLogin = (password) => {
    if (password === 'tahleel2025') {
      setIsAuthenticated(true);
      setUserRole('user');
      localStorage.setItem('tahleel_auth', 'true');
      localStorage.setItem('tahleel_role', 'user');
      setCurrentPage('main');
      return true;
    } else if (password === 'coach2025') { // ADD THIS CONDITION
      setIsAuthenticated(true);
      setUserRole('coach');
      localStorage.setItem('tahleel_auth', 'true');
      localStorage.setItem('tahleel_role', 'coach');
      setCurrentPage('coach-dashboard');
      return true;
    }
    return false;
  };

  // UPDATE THE handleLogout FUNCTION
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole('user'); // ADD THIS LINE
    localStorage.removeItem('tahleel_auth');
    localStorage.removeItem('tahleel_role'); // ADD THIS LINE
    setCurrentPage('login');
    setAnalysisData(null);
  };

  // ... keep your existing startAnalysis function unchanged ...

  // UPDATE THE LoginPage COMPONENT
  const LoginPage = () => {
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [loginType, setLoginType] = useState('user'); // ADD THIS LINE

    const handleSubmit = () => {
      if (handleLogin(password)) {
        setLoginError('');
      } else {
        setLoginError(loginType === 'user' ? 
          'Invalid password. Use: tahleel2025' : 
          'Invalid coach password. Use: coach2025'
        );
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-black flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-gray-900 rounded-xl shadow-2xl border border-yellow-500/30 p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Trophy className="text-yellow-400 w-12 h-12 mr-2" />
              <div>
                <h1 className="text-3xl font-bold text-yellow-400">TAHLEEL.ai</h1>
                <p className="text-yellow-300 text-sm">تحليل</p>
              </div>
            </div>
            <p className="text-blue-300 text-sm">Football Tactical Analysis Platform</p>
          </div>

          {/* ADD THIS LOGIN TYPE SELECTOR */}
          <div className="flex mb-6 bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setLoginType('user')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                loginType === 'user'
                  ? 'bg-yellow-400 text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Team Analysis
            </button>
            <button
              onClick={() => setLoginType('coach')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                loginType === 'coach'
                  ? 'bg-yellow-400 text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Coach Dashboard
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-blue-300 text-sm font-medium mb-2">
                {loginType === 'user' ? 'Analysis Access Code' : 'Coach Access Code'}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                placeholder={loginType === 'user' ? 'Enter access code' : 'Enter coach code'}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
              />
            </div>

            {loginError && (
              <div className="flex items-center text-red-400 text-sm">
                <AlertCircle className="w-4 h-4 mr-2" />
                {loginError}
              </div>
            )}

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-3 px-6 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 transform hover:scale-105"
            >
              {loginType === 'user' ? 'Access Platform' : 'Access Coach Dashboard'}
            </button>
          </div>

          {/* ADD THIS DEMO PASSWORDS SECTION */}
          <div className="mt-6 text-center text-gray-400 text-xs">
            <p>Demo Passwords:</p>
            <p>Team Analysis: tahleel2025</p>
            <p>Coach Dashboard: coach2025</p>
          </div>

          <div className="mt-4 text-center text-gray-400 text-xs">
            <p>© 2025 Auwire Technologies</p>
          </div>
        </div>
      </div>
    );
  };

  // ... keep your existing MainPage and StrategyPage components unchanged ...

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  // UPDATE THE SWITCH STATEMENT
  switch (currentPage) {
    case 'main':
      return <MainPage />;
    case 'strategy':
      return <StrategyPage />;
    case 'coach-dashboard': // ADD THIS CASE
      return <CoachDashboard />;
    default:
      return <MainPage />;
  }
};

export default App;
