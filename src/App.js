import React, { useState, useEffect } from 'react';
import { Search, Shield, TrendingUp, Target, Users, Calendar, AlertCircle, Trophy, BarChart3, Eye } from 'lucide-react';
import axios from 'axios';
import './App.css';

// FIXED API URL - pointing to your Render backend
const API_BASE_URL = 'https://tahleel-ai-backend.onrender.com/api';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [analysisData, setAnalysisData] = useState(null);
  const [error, setError] = useState('');

  // Check authentication on mount
  useEffect(() => {
    const auth = localStorage.getItem('tahleel_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      setCurrentPage('main');
    }
  }, []);

  const handleLogin = (password) => {
    if (password === 'tahleel2025') {
      setIsAuthenticated(true);
      localStorage.setItem('tahleel_auth', 'true');
      setCurrentPage('main');
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('tahleel_auth');
    setCurrentPage('login');
    setAnalysisData(null);
  };

  const startAnalysis = async (opponent) => {
    setLoading(true);
    setError('');
    
    try {
      console.log('Sending request to:', `${API_BASE_URL}/analysis`);
      const response = await axios.post(`${API_BASE_URL}/analysis`, {
        opponent: opponent
      }, {
        timeout: 30000 // 30 second timeout
      });
      
      setAnalysisData(response.data);
      setCurrentPage('strategy');
    } catch (err) {
      console.error('Analysis error:', err);
      setError(`Failed to analyze team: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Login Page Component
  const LoginPage = () => {
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleSubmit = () => {
      if (handleLogin(password)) {
        setLoginError('');
      } else {
        setLoginError('Invalid password. Use: tahleel2025');
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

          <div className="space-y-6">
            <div>
              <label className="block text-blue-300 text-sm font-medium mb-2">
                Access Code
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                placeholder="Enter access code"
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
              Access Platform
            </button>
          </div>

          <div className="mt-8 text-center text-gray-400 text-xs">
            <p>© 2025 Auwire Technologies</p>
          </div>
        </div>
      </div>
    );
  };

  // Main Dashboard Component
  const MainPage = () => {
    const [opponent, setOpponent] = useState('');

    const handleAnalysis = () => {
      if (opponent.trim()) {
        startAnalysis(opponent);
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-black">
        <header className="bg-gray-900/80 backdrop-blur-sm border-b border-yellow-500/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Trophy className="text-yellow-400 w-8 h-8 mr-2" />
                <div>
                  <h1 className="text-xl font-bold text-yellow-400">TAHLEEL.ai</h1>
                  <span className="text-yellow-300 text-xs">تحليل</span>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="text-blue-300 hover:text-white transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              AI-Powered Football Analysis
            </h2>
            <p className="text-blue-300 text-xl max-w-2xl mx-auto">
              Get winning strategies against any opponent with advanced AI analysis
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-8 border border-yellow-500/30">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
                Start Analysis
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-blue-300 text-sm font-medium mb-2">
                    Opponent Team Name
                  </label>
                  <input
                    type="text"
                    value={opponent}
                    onChange={(e) => setOpponent(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="e.g., Real Madrid, Manchester City, Al Hilal"
                    onKeyPress={(e) => e.key === 'Enter' && handleAnalysis()}
                  />
                </div>

                {error && (
                  <div className="flex items-center text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    {error}
                  </div>
                )}

                <button
                  onClick={handleAnalysis}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-4 px-6 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Search className="w-5 h-5 mr-2" />
                      Generate Strategy
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
              <Target className="text-yellow-400 w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Tactical Analysis</h3>
              <p className="text-blue-300">
                Deep dive into opponent formations, patterns, and weaknesses
              </p>
            </div>

            <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
              <TrendingUp className="text-yellow-400 w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">News Intelligence</h3>
              <p className="text-blue-300">
                Real-time updates on injuries, transfers, and team changes
              </p>
            </div>

            <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
              <Shield className="text-yellow-400 w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Winning Strategies</h3>
              <p className="text-blue-300">
                AI-generated tactical recommendations for competitive advantage
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  };

  // Strategy Output Component
  const StrategyPage = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-black">
        <header className="bg-gray-900/80 backdrop-blur-sm border-b border-yellow-500/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Trophy className="text-yellow-400 w-8 h-8 mr-2" />
                <div>
                  <h1 className="text-xl font-bold text-yellow-400">TAHLEEL.ai</h1>
                  <span className="text-yellow-300 text-xs">تحليل</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setCurrentPage('main')}
                  className="text-blue-300 hover:text-white transition-colors"
                >
                  New Analysis
                </button>
                <button
                  onClick={handleLogout}
                  className="text-blue-300 hover:text-white transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {analysisData && (
            <>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Strategic Analysis Report
                </h2>
                <p className="text-blue-300 text-lg">
                  vs {analysisData.opponent} • {analysisData.date}
                </p>
                <div className="flex items-center justify-center mt-4">
                  <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold">
                    Confidence Score: {analysisData.confidenceScore}%
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
                  <div className="flex items-center mb-4">
                    <Eye className="text-yellow-400 w-6 h-6 mr-2" />
                    <h3 className="text-xl font-bold text-white">Identified Weaknesses</h3>
                  </div>
                  <div className="space-y-3">
                    {analysisData.weaknesses?.map((weakness, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-blue-300">{weakness}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
                  <div className="flex items-center mb-4">
                    <Target className="text-yellow-400 w-6 h-6 mr-2" />
                    <h3 className="text-xl font-bold text-white">Recommended Strategies</h3>
                  </div>
                  <div className="space-y-3">
                    {analysisData.strategies?.map((strategy, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-blue-300">{strategy}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
                  <div className="flex items-center mb-4">
                    <Users className="text-yellow-400 w-6 h-6 mr-2" />
                    <h3 className="text-xl font-bold text-white">Recommended Formation</h3>
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-2xl py-4 px-6 rounded-lg">
                      {analysisData.formation}
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
                  <div className="flex items-center mb-4">
                    <BarChart3 className="text-yellow-400 w-6 h-6 mr-2" />
                    <h3 className="text-xl font-bold text-white">Player Focus</h3>
                  </div>
                  <div className="space-y-3">
                    {analysisData.keyPlayers?.map((player, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-blue-300">{player}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
                <div className="flex items-center mb-4">
                  <Calendar className="text-yellow-400 w-6 h-6 mr-2" />
                  <h3 className="text-xl font-bold text-white">Recent Intelligence</h3>
                </div>
                <div className="space-y-3">
                  {analysisData.recentNews?.map((news, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-blue-300">{news}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center mt-8">
                <button
                  onClick={() => setCurrentPage('main')}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-3 px-8 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 transform hover:scale-105"
                >
                  Analyze Another Team
                </button>
              </div>
            </>
          )}
        </main>
      </div>
    );
  };

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  switch (currentPage) {
    case 'main':
      return <MainPage />;
    case 'strategy':
      return <StrategyPage />;
    default:
      return <MainPage />;
  }
};

export default App;
