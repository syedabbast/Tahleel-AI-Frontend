import React, { useState, useEffect } from 'react';
import { Search, Shield, TrendingUp, Target, Users, Calendar, AlertCircle, Trophy, BarChart3, Eye, Building, Check, Crown, ChevronRight, CheckCircle, Star } from 'lucide-react';
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
  const [selectedTier, setSelectedTier] = useState('');

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

  const navigateToSubscriptions = () => {
    setCurrentPage('subscriptions');
  };

  const navigateToRegistration = () => {
    setCurrentPage('registration');
  };

  const selectTier = (tierName) => {
    setSelectedTier(tierName);
  };

  const goBackToSubscriptions = () => {
    setCurrentPage('subscriptions');
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

              <div className="text-center mt-8 space-y-4">
                <button
                  onClick={() => setCurrentPage('main')}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-3 px-8 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 transform hover:scale-105 mr-4"
                >
                  Analyze Another Team
                </button>
                <button
                  onClick={navigateToSubscriptions}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  View Subscription Plans
                </button>
              </div>
            </>
          )}
        </main>
      </div>
    );
  };

  // Subscription Page Component
  const SubscriptionPage = () => {
    const subscriptionTiers = [
      {
        name: 'Regional Intelligence',
        price: '$15,000',
        period: 'per month',
        description: 'Perfect for domestic league competition',
        color: 'from-blue-500 to-blue-600',
        borderColor: 'border-blue-500/30',
        features: [
          'AI tactical analysis for domestic opponents',
          'Real-time news intelligence',
          'Basic strategy reports',
          'Single team access',
          'Email support',
          'Monthly performance reviews'
        ],
        cta: 'Start Regional Analysis',
        popular: false
      },
      {
        name: 'Global Intelligence',
        price: '$25,000',
        period: 'per month',
        description: 'Comprehensive international competition coverage',
        color: 'from-yellow-400 to-yellow-500',
        borderColor: 'border-yellow-500/30',
        features: [
          'All Regional Intelligence features',
          'International opponent analysis',
          'Multi-league coverage (UEFA, AFC, etc.)',
          'Advanced analytics dashboard',
          'Priority support',
          'Custom report branding',
          'Weekly strategic consultations'
        ],
        cta: 'Expand Globally',
        popular: true
      },
      {
        name: 'Elite Championship',
        price: '$45,000',
        period: 'per month',
        description: 'Complete organizational intelligence platform',
        color: 'from-purple-500 to-purple-600',
        borderColor: 'border-purple-500/30',
        features: [
          'All Global Intelligence features',
          'Organizational Leadership Portal',
          'Team Owner executive dashboard',
          'Training progress management',
          'Team health status monitoring',
          'Coach strategic portal',
          'Individual player login portals',
          'Multi-role access control',
          'Enterprise security',
          'Dedicated account manager',
          'Custom integrations',
          'On-site training'
        ],
        cta: 'Elite Access',
        popular: false
      }
    ];

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
                  ← Back to Demo
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

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Elite AI Intelligence
              <span className="block text-yellow-400 mt-2">Pricing Tiers</span>
            </h2>
            <p className="text-blue-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Join championship teams worldwide using AI-powered tactical intelligence 
              to dominate their competition
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {subscriptionTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border ${tier.borderColor} ${
                  tier.popular ? 'ring-2 ring-yellow-400 transform scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-2 rounded-full text-sm font-bold flex items-center">
                      <Crown className="w-4 h-4 mr-1" />
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-blue-300 text-sm mb-4">{tier.description}</p>
                  <div className="mb-6">
                    <span className={`text-4xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                      {tier.price}
                    </span>
                    <span className="text-gray-400 text-lg">/{tier.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="text-yellow-400 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    selectTier(tier.name);
                    navigateToRegistration();
                  }}
                  className={`w-full bg-gradient-to-r ${tier.color} text-white font-semibold py-4 px-6 rounded-lg hover:opacity-90 transition-all duration-200 transform hover:scale-105 flex items-center justify-center`}
                >
                  {tier.cta}
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            ))}
          </div>

          <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Custom Enterprise Solutions</h3>
            <p className="text-blue-300 mb-6">
              Need specialized features for your organization? We create tailored AI intelligence 
              solutions for major clubs and federations.
            </p>
            <button
              onClick={() => {
                selectTier('Custom Enterprise');
                navigateToRegistration();
              }}
              className="bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold py-3 px-8 rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-200"
            >
              Contact for Custom Pricing
            </button>
          </div>
        </main>
      </div>
    );
  };

  // Registration Page Component
  const RegistrationPage = () => {
    const [formData, setFormData] = useState({
      // Organization Details
      clubName: '',
      league: '',
      country: '',
      contactPerson: '',
      title: '',
      email: '',
      phone: '',
      
      // Subscription Selection
      subscriptionTier: selectedTier || '',
      customRequirements: '',
      
      // Business Requirements
      numberOfTeams: '',
      primaryCompetition: '',
      specificFeatures: [],
      timeline: '',
      
      // Technical Information
      currentTools: '',
      teamSize: '',
      itReadiness: '',
      
      // Additional Services
      trainingNeeded: false,
      customDashboard: false,
      apiIntegrations: false,
      arabicSupport: false,
      additionalNotes: ''
    });

    const updateFormData = (field, value) => {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    };

    const handleFeatureToggle = (feature) => {
      const currentFeatures = formData.specificFeatures || [];
      const updatedFeatures = currentFeatures.includes(feature)
        ? currentFeatures.filter(f => f !== feature)
        : [...currentFeatures, feature];
      
      updateFormData('specificFeatures', updatedFeatures);
    };

    const handleSubmit = async () => {
      try {
        // You can send this data to your backend here
        console.log('Form submitted:', formData);
        
        // Optional: Send to your backend
        // await axios.post(`${API_BASE_URL}/registration`, formData);
        
        alert('Thank you! Our team will contact you within 24 hours to discuss your TAHLEEL.ai implementation.');
      } catch (error) {
        console.error('Registration error:', error);
        alert('There was an error submitting your registration. Please try again.');
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
                onClick={goBackToSubscriptions}
                className="text-blue-300 hover:text-white transition-colors"
              >
                ← Back to Pricing
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Join Elite Teams
            </h2>
            <p className="text-blue-300 text-lg">
              Selected: <span className="text-yellow-400 font-semibold">{selectedTier}</span>
            </p>
            <p className="text-blue-300 mt-2">
              Complete this form and our team will contact you within 24 hours
            </p>
          </div>

          <div className="space-y-8">
            {/* Organization Details */}
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-8 border border-yellow-500/30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Building className="text-yellow-400 w-6 h-6 mr-2" />
                Organization Details
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-blue-300 text-sm font-medium mb-2">
                    Club/Team Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.clubName}
                    onChange={(e) => updateFormData('clubName', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="e.g., Al Hilal FC"
                  />
                </div>
                
                <div>
                  <label className="block text-blue-300 text-sm font-medium mb-2">
                    League/Competition *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.league}
                    onChange={(e) => updateFormData('league', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="e.g., Saudi Pro League"
                  />
                </div>

                <div>
                  <label className="block text-blue-300 text-sm font-medium mb-2">
                    Country/Region *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => updateFormData('country', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="e.g., Saudi Arabia"
                  />
                </div>

                <div>
                  <label className="block text-blue-300 text-sm font-medium mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactPerson}
                    onChange={(e) => updateFormData('contactPerson', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Full name"
                  />
                </div>

                <div>
                  <label className="block text-blue-300 text-sm font-medium mb-2">
                    Title/Position *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => updateFormData('title', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="e.g., Head Coach, Technical Director"
                  />
                </div>

                <div>
                  <label className="block text-blue-300 text-sm font-medium mb-2">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="official@club.com"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-blue-300 text-sm font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="+966 50 123 4567"
                />
              </div>
            </div>

            {/* Business Requirements */}
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-8 border border-yellow-500/30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Target className="text-yellow-400 w-6 h-6 mr-2" />
                Business Requirements
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-blue-300 text-sm font-medium mb-2">
                    Number of Teams to Analyze
                  </label>
                  <select
                    value={formData.numberOfTeams}
                    onChange={(e) => updateFormData('numberOfTeams', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="">Select range</option>
                    <option value="1-5">1-5 teams per month</option>
                    <option value="6-15">6-15 teams per month</option>
                    <option value="16-30">16-30 teams per month</option>
                    <option value="30+">30+ teams per month</option>
                  </select>
                </div>

                <div>
                  <label className="block text-blue-300 text-sm font-medium mb-2">
                    Primary Competition Focus
                  </label>
                  <input
                    type="text"
                    value={formData.primaryCompetition}
                    onChange={(e) => updateFormData('primaryCompetition', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="e.g., AFC Champions League"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-blue-300 text-sm font-medium mb-4">
                  Specific Features of Interest
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Real-time opponent analysis',
                    'Training progress tracking',
                    'Health status monitoring',
                    'Individual player portals',
                    'Executive dashboards',
                    'Custom report branding',
                    'API integrations',
                    'Mobile applications'
                  ].map((feature) => (
                    <label key={feature} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.specificFeatures.includes(feature)}
                        onChange={() => handleFeatureToggle(feature)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded border-2 border-yellow-500/30 mr-3 flex items-center justify-center ${
                        formData.specificFeatures.includes(feature) ? 'bg-yellow-400' : 'bg-gray-800'
                      }`}>
                        {formData.specificFeatures.includes(feature) && (
                          <Check className="w-3 h-3 text-black" />
                        )}
                      </div>
                      <span className="text-blue-300 text-sm">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-blue-300 text-sm font-medium mb-2">
                  Implementation Timeline
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => updateFormData('timeline', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate (within 2 weeks)</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="2-3-months">2-3 months</option>
                  <option value="next-season">Next season</option>
                </select>
              </div>
            </div>

            {/* Technical Information */}
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-8 border border-yellow-500/30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <BarChart3 className="text-yellow-400 w-6 h-6 mr-2" />
                Technical Information
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-blue-300 text-sm font-medium mb-2">
                    Current Analysis Tools Used
                  </label>
                  <textarea
                    value={formData.currentTools}
                    onChange={(e) => updateFormData('currentTools', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    rows="3"
                    placeholder="e.g., Wyscout, InStat, internal analysis team..."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-blue-300 text-sm font-medium mb-2">
                      Analysis Team Size
                    </label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => updateFormData('teamSize', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                      <option value="">Select size</option>
                      <option value="1-2">1-2 people</option>
                      <option value="3-5">3-5 people</option>
                      <option value="6-10">6-10 people</option>
                      <option value="10+">10+ people</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-blue-300 text-sm font-medium mb-2">
                      IT Infrastructure Readiness
                    </label>
                    <select
                      value={formData.itReadiness}
                      onChange={(e) => updateFormData('itReadiness', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                      <option value="">Select level</option>
                      <option value="basic">Basic (need full setup)</option>
                      <option value="intermediate">Intermediate (some systems)</option>
                      <option value="advanced">Advanced (ready to integrate)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-8 border border-yellow-500/30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Star className="text-yellow-400 w-6 h-6 mr-2" />
                Additional Services
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {[
                  { key: 'trainingNeeded', label: 'Staff Training Required', desc: 'On-site or virtual training for your team' },
                  { key: 'customDashboard', label: 'Custom Dashboard Design', desc: 'Branded interface matching your club identity' },
                  { key: 'apiIntegrations', label: 'API Integrations', desc: 'Connect with existing club management systems' },
                  { key: 'arabicSupport', label: 'Arabic Language Support', desc: 'Full platform translation to Arabic' }
                ].map((service) => (
                  <label key={service.key} className="flex items-start cursor-pointer p-4 rounded-lg border border-gray-700 hover:border-yellow-500/30 transition-colors">
                    <input
                      type="checkbox"
                      checked={formData[service.key]}
                      onChange={(e) => updateFormData(service.key, e.target.checked)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded border-2 border-yellow-500/30 mr-3 mt-0.5 flex items-center justify-center flex-shrink-0 ${
                      formData[service.key] ? 'bg-yellow-400' : 'bg-gray-800'
                    }`}>
                      {formData[service.key] && (
                        <Check className="w-3 h-3 text-black" />
                      )}
                    </div>
                    <div>
                      <div className="text-blue-300 font-medium">{service.label}</div>
                      <div className="text-gray-400 text-sm">{service.desc}</div>
                    </div>
                  </label>
                ))}
              </div>

              <div>
                <label className="block text-blue-300 text-sm font-medium mb-2">
                  Additional Notes or Special Requirements
                </label>
                <textarea
                  value={formData.additionalNotes}
                  onChange={(e) => updateFormData('additionalNotes', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  rows="4"
                  placeholder="Any specific requirements, integration needs, or questions..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-4 px-12 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 transform hover:scale-105 text-lg"
              >
                Request Strategic Consultation
              </button>
              <p className="text-blue-300 text-sm mt-4">
                Our team will contact you within 24 hours to discuss implementation
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  };

  // Main component render
  if (!isAuthenticated) {
    return <LoginPage />;
  }

  switch (currentPage) {
    case 'main':
      return <MainPage />;
    case 'strategy':
      return <StrategyPage />;
    case 'subscriptions':
      return <SubscriptionPage />;
    case 'registration':
      return <RegistrationPage />;
    default:
      return <MainPage />;
  }
};

export default App;
