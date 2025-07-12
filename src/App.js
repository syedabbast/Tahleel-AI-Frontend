import React, { useState, useEffect } from 'react';
import { Search, Shield, TrendingUp, Target, Users, Calendar, AlertCircle, Trophy, BarChart3, Eye } from 'lucide-react';
import axios from 'axios';
import './App.css';
import CoachDashboard from './components/CoachDashboard';

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
    const role = localStorage.getItem('tahleel_role') || 'user';
    if (auth === 'true') {
      setIsAuthenticated(true);
      setCurrentPage(role === 'coach' ? 'coach-dashboard' : 'main');
    }
  }, []);

  const handleLogin = (password) => {
    if (password === 'tahleel2025') {
      setIsAuthenticated(true);
      localStorage.setItem('tahleel_auth', 'true');
      localStorage.setItem('tahleel_role', 'user');
      setCurrentPage('main');
      return true;
    } else if (password === 'coach2025') {
      setIsAuthenticated(true);
      localStorage.setItem('tahleel_auth', 'true');
      localStorage.setItem('tahleel_role', 'coach');
      setCurrentPage('coach-dashboard');
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('tahleel_auth');
    localStorage.removeItem('tahleel_role');
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
    const [loginType, setLoginType] = useState('user');

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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Trophy className="text-blue-600 w-12 h-12 mr-2" />
              <div>
                <h1 className="text-3xl font-semibold text-gray-900">TAHLEEL.ai</h1>
                <p className="text-blue-600 text-sm font-medium">تحليل</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">Football Tactical Analysis Platform</p>
          </div>

          {/* Login Type Selector */}
          <div className="flex mb-6 bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => setLoginType('user')}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                loginType === 'user'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Team Analysis
            </button>
            <button
              onClick={() => setLoginType('coach')}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                loginType === 'coach'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Coach Dashboard
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                {loginType === 'user' ? 'Analysis Access Code' : 'Coach Access Code'}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={loginType === 'user' ? 'Enter access code' : 'Enter coach code'}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
              />
            </div>

            {loginError && (
              <div className="flex items-center text-red-600 text-sm bg-red-50 p-3 rounded-xl border border-red-200">
                <AlertCircle className="w-4 h-4 mr-2" />
                {loginError}
              </div>
            )}

            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-xl hover:bg-blue-700 transition-all duration-200 transform hover:scale-[1.02]"
            >
              {loginType === 'user' ? 'Access Platform' : 'Access Coach Dashboard'}
            </button>
          </div>

          <div className="mt-6 text-center text-gray-500 text-xs">
            <p className="mb-2">Demo Passwords:</p>
            <div className="space-y-1">
              <p><span className="font-medium">Team Analysis:</span> tahleel2025</p>
              <p><span className="font-medium">Coach Dashboard:</span> coach2025</p>
            </div>
          </div>

          <div className="mt-6 text-center text-gray-400 text-xs">
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
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Trophy className="text-blue-600 w-8 h-8 mr-2" />
                <div>
                  <h1 className="text-xl font-semibold text-gray-900">TAHLEEL.ai</h1>
                  <span className="text-gray-600 text-xs">تحليل</span>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">
              AI-Powered Football Analysis
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Get winning strategies against any opponent with advanced AI analysis
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Start Analysis
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Opponent Team Name
                  </label>
                  <input
                    type="text"
                    value={opponent}
                    onChange={(e) => setOpponent(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Real Madrid, Manchester City, Al Hilal"
                    onKeyPress={(e) => e.key === 'Enter' && handleAnalysis()}
                  />
                </div>

                {error && (
                  <div className="flex items-center text-red-600 text-sm bg-red-50 p-3 rounded-xl border border-red-200">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    {error}
                  </div>
                )}

                <button
                  onClick={handleAnalysis}
                  disabled={loading}
                  className="w-full bg-blue-600 text-white font-medium py-4 px-6 rounded-xl hover:bg-blue-700 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
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
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <Target className="text-blue-600 w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tactical Analysis</h3>
              <p className="text-gray-600">
                Deep dive into opponent formations, patterns, and weaknesses
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <TrendingUp className="text-green-600 w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">News Intelligence</h3>
              <p className="text-gray-600">
                Real-time updates on injuries, transfers, and team changes
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <Shield className="text-purple-600 w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Winning Strategies</h3>
              <p className="text-gray-600">
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
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Trophy className="text-blue-600 w-8 h-8 mr-2" />
                <div>
                  <h1 className="text-xl font-semibold text-gray-900">TAHLEEL.ai</h1>
                  <span className="text-gray-600 text-xs">تحليل</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setCurrentPage('main')}
                  className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
                >
                  New Analysis
                </button>
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
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
                <h2 className="text-3xl font-semibold text-gray-900 mb-2">
                  Strategic Analysis Report
                </h2>
                <p className="text-gray-600 text-lg">
                  vs {analysisData.opponent} • {analysisData.date}
                </p>
                <div className="flex items-center justify-center mt-4">
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-xl font-medium border border-green-200">
                    Confidence Score: {analysisData.confidenceScore}%
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center mb-4">
                    <Eye className="text-blue-600 w-6 h-6 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">Identified Weaknesses</h3>
                  </div>
                  <div className="space-y-3">
                    {analysisData.weaknesses?.map((weakness, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600">{weakness}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center mb-4">
                    <Target className="text-green-600 w-6 h-6 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">Recommended Strategies</h3>
                  </div>
                  <div className="space-y-3">
                    {analysisData.strategies?.map((strategy, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600">{strategy}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center mb-4">
                    <Users className="text-purple-600 w-6 h-6 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">Recommended Formation</h3>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 text-blue-800 border border-blue-200 font-semibold text-2xl py-4 px-6 rounded-xl">
                      {analysisData.formation}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center mb-4">
                    <BarChart3 className="text-amber-600 w-6 h-6 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">Player Focus</h3>
                  </div>
                  <div className="space-y-3">
                    {analysisData.keyPlayers?.map((player, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600">{player}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <Calendar className="text-blue-600 w-6 h-6 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">Recent Intelligence</h3>
                </div>
                <div className="space-y-3">
                  {analysisData.recentNews?.map((news, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-600">{news}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center mt-8">
                <button
                  onClick={() => setCurrentPage('main')}
                  className="bg-blue-600 text-white font-medium py-3 px-8 rounded-xl hover:bg-blue-700 transition-all duration-200 transform hover:scale-[1.02]"
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
    case 'coach-dashboard':
      return <CoachDashboard />;
    default:
      return <MainPage />;
  }
};

export default App;
