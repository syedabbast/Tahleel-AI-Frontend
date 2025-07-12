import React, { useState } from 'react';
import { 
  Trophy, Users, Target, BarChart3, Calendar, Bell, Settings, 
  Search, Filter, Plus, TrendingUp, AlertCircle,
  Activity, Zap, Shield, PlayCircle, 
  FileText, ChevronRight, Star,
  Heart, Brain, Timer, Flag, Home, 
  Video
} from 'lucide-react';

const CoachDashboard = () => {
  const [activeModule, setActiveModule] = useState('dashboard');
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [notifications] = useState(3);

  // Mock Data - Later replaceable with real API calls
  const mockData = {
    upcomingMatch: {
      opponent: "Al Nassr",
      date: "2025-07-20",
      time: "20:00",
      venue: "King Fahd Stadium",
      competition: "Saudi Pro League",
      isHome: true
    },
    
    teamStats: {
      wins: 8,
      draws: 3,
      losses: 1,
      goalsFor: 24,
      goalsAgainst: 8,
      cleanSheets: 6,
      currentForm: ['W', 'W', 'D', 'W', 'W']
    },

    squad: [
      { id: 1, name: "Ahmed Al-Rashid", position: "GK", fitness: 98, form: 8.2, availability: "available", photo: "👤" },
      { id: 2, name: "Omar Hassan", position: "CB", fitness: 92, form: 7.8, availability: "available", photo: "👤" },
      { id: 3, name: "Khalid Mansour", position: "CB", fitness: 88, form: 8.5, availability: "minor_injury", photo: "👤" },
      { id: 4, name: "Youssef Ahmed", position: "LB", fitness: 95, form: 7.9, availability: "available", photo: "👤" },
      { id: 5, name: "Mohammed Ali", position: "RB", fitness: 90, form: 8.1, availability: "available", photo: "👤" },
      { id: 6, name: "Salem Al-Dawsari", position: "CM", fitness: 93, form: 8.7, availability: "available", photo: "👤" },
      { id: 7, name: "Faisal Mubarak", position: "CM", fitness: 89, form: 7.6, availability: "suspended", photo: "👤" },
      { id: 8, name: "Nasser Abdullah", position: "AM", fitness: 94, form: 9.1, availability: "available", photo: "👤" },
      { id: 9, name: "Fahad Al-Muwallad", position: "LW", fitness: 91, form: 8.3, availability: "available", photo: "👤" },
      { id: 10, name: "Salman Al-Faraj", position: "RW", fitness: 87, form: 7.7, availability: "minor_injury", photo: "👤" },
      { id: 11, name: "Abdulrazak Hamdallah", position: "ST", fitness: 96, form: 9.3, availability: "available", photo: "👤" }
    ],

    recentAnalysis: [
      { opponent: "Al Hilal", date: "2025-07-15", confidence: 89, result: "analyzed" },
      { opponent: "Al Ittihad", date: "2025-07-10", confidence: 92, result: "analyzed" },
      { opponent: "Al Ahli", date: "2025-07-05", confidence: 85, result: "analyzed" }
    ],

    tacticalInsights: [
      "Al Nassr vulnerable to high pressing in midfield third",
      "Ronaldo drops deep when facing compact defenses",
      "Weak left-back position exposed by pace on counter-attacks",
      "Set piece defending shows gaps at near post"
    ],

    trainingSchedule: [
      { date: "2025-07-16", type: "Tactical Training", focus: "Set Pieces", duration: "90 min" },
      { date: "2025-07-17", type: "Recovery Session", focus: "Light Training", duration: "60 min" },
      { date: "2025-07-18", type: "Match Preparation", focus: "Opposition Analysis", duration: "75 min" },
      { date: "2025-07-19", type: "Final Training", focus: "Team Shape", duration: "45 min" }
    ],

    newsUpdates: [
      { title: "Key midfielder injury update", time: "2 hours ago", type: "injury" },
      { title: "Opponent tactical change spotted", time: "5 hours ago", type: "tactical" },
      { title: "Transfer rumors affecting squad", time: "1 day ago", type: "transfer" }
    ]
  };

  const getAvailabilityColor = (availability) => {
    switch (availability) {
      case 'available': return 'text-green-400';
      case 'minor_injury': return 'text-yellow-400';
      case 'suspended': return 'text-red-400';
      case 'major_injury': return 'text-red-600';
      default: return 'text-gray-400';
    }
  };

  const getAvailabilityBg = (availability) => {
    switch (availability) {
      case 'available': return 'bg-green-500/20';
      case 'minor_injury': return 'bg-yellow-500/20';
      case 'suspended': return 'bg-red-500/20';
      case 'major_injury': return 'bg-red-600/20';
      default: return 'bg-gray-500/20';
    }
  };

  // Navigation items
  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'analysis', label: 'Analysis', icon: Brain },
    { id: 'team', label: 'Squad', icon: Users },
    { id: 'training', label: 'Training', icon: Calendar },
    { id: 'match', label: 'Live Match', icon: PlayCircle },
    { id: 'tactics', label: 'Tactics', icon: Target },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'reports', label: 'Reports', icon: FileText }
  ];

  // Main Dashboard View
  const DashboardView = () => (
    <div className="space-y-6">
      {/* Key Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-300 text-sm">Next Match</p>
              <h3 className="text-xl font-bold text-white">{mockData.upcomingMatch.opponent}</h3>
              <p className="text-yellow-400 text-sm">{mockData.upcomingMatch.date}</p>
            </div>
            <Trophy className="text-yellow-400 w-8 h-8" />
          </div>
        </div>

        <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-300 text-sm">Squad Fitness</p>
              <h3 className="text-xl font-bold text-white">92%</h3>
              <p className="text-green-400 text-sm">+3% from last week</p>
            </div>
            <Activity className="text-green-400 w-8 h-8" />
          </div>
        </div>

        <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-300 text-sm">Available Players</p>
              <h3 className="text-xl font-bold text-white">
                {mockData.squad.filter(p => p.availability === 'available').length}/11
              </h3>
              <p className="text-yellow-400 text-sm">2 minor injuries</p>
            </div>
            <Users className="text-blue-400 w-8 h-8" />
          </div>
        </div>

        <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-300 text-sm">Recent Analysis</p>
              <h3 className="text-xl font-bold text-white">89%</h3>
              <p className="text-green-400 text-sm">Confidence Score</p>
            </div>
            <Brain className="text-purple-400 w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Upcoming Match Details */}
        <div className="lg:col-span-2 bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Next Match Analysis</h3>
            <button 
              onClick={() => setActiveModule('analysis')}
              className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
            >
              View Full Analysis
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-black font-bold">
                  AN
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{mockData.upcomingMatch.opponent}</h4>
                  <p className="text-blue-300">{mockData.upcomingMatch.competition}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-semibold">{mockData.upcomingMatch.date}</p>
                <p className="text-blue-300">{mockData.upcomingMatch.time}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="text-white font-semibold mb-2">Key Weaknesses</h5>
                <div className="space-y-2">
                  {mockData.tacticalInsights.slice(0, 2).map((insight, idx) => (
                    <div key={idx} className="flex items-start">
                      <Target className="text-yellow-400 w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-blue-300 text-sm">{insight}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="text-white font-semibold mb-2">Recommended Strategy</h5>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Flag className="text-green-400 w-4 h-4 mr-2" />
                    <p className="text-blue-300 text-sm">4-3-3 High Press</p>
                  </div>
                  <div className="flex items-center">
                    <Zap className="text-yellow-400 w-4 h-4 mr-2" />
                    <p className="text-blue-300 text-sm">Quick transitions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions & News */}
        <div className="space-y-6">
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
            <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button 
                onClick={() => setActiveModule('analysis')}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all flex items-center"
              >
                <Search className="w-4 h-4 mr-2" />
                New Analysis
              </button>
              <button 
                onClick={() => setActiveModule('team')}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white p-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all flex items-center"
              >
                <Users className="w-4 h-4 mr-2" />
                Team Selection
              </button>
              <button 
                onClick={() => setActiveModule('training')}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white p-3 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all flex items-center"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Plan Training
              </button>
            </div>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
            <h3 className="text-lg font-bold text-white mb-4">Latest Updates</h3>
            <div className="space-y-3">
              {mockData.newsUpdates.map((update, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-3 bg-gray-800/50 rounded-lg">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    update.type === 'injury' ? 'bg-red-400' : 
                    update.type === 'tactical' ? 'bg-yellow-400' : 'bg-blue-400'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium">{update.title}</p>
                    <p className="text-gray-400 text-xs">{update.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Training Schedule */}
      <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
        <h3 className="text-lg font-bold text-white mb-4">This Week's Training</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {mockData.trainingSchedule.map((session, idx) => (
            <div key={idx} className="p-4 bg-gray-800/50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <Calendar className="text-purple-400 w-5 h-5" />
                <span className="text-yellow-400 text-sm">{session.duration}</span>
              </div>
              <h4 className="text-white font-semibold text-sm mb-1">{session.type}</h4>
              <p className="text-blue-300 text-xs mb-2">{session.focus}</p>
              <p className="text-gray-400 text-xs">{session.date.split('-')[2]}/07</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Team Management View
  const TeamView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Squad Management</h2>
        <div className="flex items-center space-x-4">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Add Player
          </button>
        </div>
      </div>

      {/* Squad Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/30">
          <div className="text-center">
            <Users className="text-blue-400 w-8 h-8 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-white">{mockData.squad.length}</h3>
            <p className="text-blue-300 text-sm">Total Players</p>
          </div>
        </div>
        <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/30">
          <div className="text-center">
            <Heart className="text-green-400 w-8 h-8 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-white">
              {mockData.squad.filter(p => p.availability === 'available').length}
            </h3>
            <p className="text-green-400 text-sm">Available</p>
          </div>
        </div>
        <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/30">
          <div className="text-center">
            <AlertCircle className="text-yellow-400 w-8 h-8 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-white">
              {mockData.squad.filter(p => p.availability === 'minor_injury').length}
            </h3>
            <p className="text-yellow-400 text-sm">Minor Injuries</p>
          </div>
        </div>
        <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/30">
          <div className="text-center">
            <Shield className="text-red-400 w-8 h-8 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-white">
              {mockData.squad.filter(p => p.availability === 'suspended').length}
            </h3>
            <p className="text-red-400 text-sm">Suspended</p>
          </div>
        </div>
      </div>

      {/* Squad Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {mockData.squad.map((player) => (
          <div 
            key={player.id} 
            className={`bg-gray-900/60 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/30 hover:border-yellow-400/50 transition-all cursor-pointer ${getAvailabilityBg(player.availability)}`}
            onClick={() => setSelectedPlayer(player)}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="text-2xl">{player.photo}</div>
              <div className={`px-2 py-1 rounded text-xs font-semibold ${getAvailabilityColor(player.availability)}`}>
                {player.position}
              </div>
            </div>
            
            <h3 className="text-white font-semibold text-sm mb-2">{player.name}</h3>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-blue-300 text-xs">Fitness</span>
                <span className="text-white text-xs font-semibold">{player.fitness}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-1.5">
                <div 
                  className="bg-green-400 h-1.5 rounded-full transition-all duration-300"
                  style={{ width: `${player.fitness}%` }}
                ></div>
              </div>
              
              <div className="flex items-center justify-between mt-2">
                <span className="text-blue-300 text-xs">Form</span>
                <div className="flex items-center">
                  <Star className="text-yellow-400 w-3 h-3 mr-1" />
                  <span className="text-white text-xs font-semibold">{player.form}</span>
                </div>
              </div>
              
              <div className={`text-center text-xs font-semibold ${getAvailabilityColor(player.availability)} mt-2`}>
                {player.availability.replace('_', ' ').toUpperCase()}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Player Detail Modal */}
      {selectedPlayer && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-xl p-6 border border-yellow-500/30 max-w-md w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">{selectedPlayer.name}</h3>
              <button 
                onClick={() => setSelectedPlayer(null)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-4xl mb-2">{selectedPlayer.photo}</div>
                <div className={`inline-block px-3 py-1 rounded-lg text-sm font-semibold ${getAvailabilityBg(selectedPlayer.availability)} ${getAvailabilityColor(selectedPlayer.availability)}`}>
                  {selectedPlayer.position}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                  <p className="text-blue-300 text-sm">Fitness</p>
                  <p className="text-white text-xl font-bold">{selectedPlayer.fitness}%</p>
                </div>
                <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                  <p className="text-blue-300 text-sm">Form Rating</p>
                  <p className="text-white text-xl font-bold">{selectedPlayer.form}</p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-blue-300 text-sm mb-1">Status</p>
                <p className={`font-semibold ${getAvailabilityColor(selectedPlayer.availability)}`}>
                  {selectedPlayer.availability.replace('_', ' ').toUpperCase()}
                </p>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  View Stats
                </button>
                <button className="flex-1 bg-yellow-400 text-black py-2 px-4 rounded-lg hover:bg-yellow-500 transition-colors">
                  Edit Player
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // Analysis View
  const AnalysisView = () => {
    const [opponentInput, setOpponentInput] = useState('');

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Opponent Analysis</h2>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            New Analysis
          </button>
        </div>

        {/* Search and Create New Analysis */}
        <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
          <h3 className="text-lg font-bold text-white mb-4">Start New Analysis</h3>
          <div className="flex space-x-4">
            <input
              type="text"
              value={opponentInput}
              onChange={(e) => setOpponentInput(e.target.value)}
              placeholder="Enter opponent team name..."
              className="flex-1 px-4 py-3 bg-gray-800 border border-yellow-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-3 px-8 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all flex items-center">
              <Search className="w-4 h-4 mr-2" />
              Analyze
            </button>
          </div>
        </div>

        {/* Analysis Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Tactical Analysis", icon: Brain, color: "purple", desc: "Formation and style analysis" },
            { title: "Player Analysis", icon: Users, color: "blue", desc: "Key players and weaknesses" },
            { title: "Set Pieces", icon: Flag, color: "green", desc: "Dead ball situations" },
            { title: "Recent Form", icon: TrendingUp, color: "yellow", desc: "Latest performance trends" },
            { title: "Injury Reports", icon: Heart, color: "red", desc: "Player availability" },
            { title: "News Intelligence", icon: Bell, color: "orange", desc: "Latest team updates" }
          ].map((category, idx) => (
            <div key={idx} className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30 hover:border-yellow-400/50 transition-all cursor-pointer">
              <category.icon className={`text-${category.color}-400 w-8 h-8 mb-3`} />
              <h3 className="text-white font-semibold mb-2">{category.title}</h3>
              <p className="text-blue-300 text-sm">{category.desc}</p>
            </div>
          ))}
        </div>

        {/* Recent Analyses */}
        <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
          <h3 className="text-lg font-bold text-white mb-4">Recent Analyses</h3>
          <div className="space-y-3">
            {mockData.recentAnalysis.map((analysis, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {analysis.opponent.substring(0, 2)}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{analysis.opponent}</h4>
                    <p className="text-blue-300 text-sm">{analysis.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <p className="text-green-400 font-semibold">{analysis.confidence}%</p>
                    <p className="text-gray-400 text-xs">Confidence</p>
                  </div>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Training View
  const TrainingView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Training Management</h2>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Plan Session
        </button>
      </div>

      {/* Training Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
          <div className="flex items-center justify-between mb-4">
            <Calendar className="text-purple-400 w-8 h-8" />
            <span className="text-purple-400 text-sm">This Week</span>
          </div>
          <h3 className="text-2xl font-bold text-white">4</h3>
          <p className="text-blue-300 text-sm">Training Sessions</p>
        </div>
        
        <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
          <div className="flex items-center justify-between mb-4">
            <Timer className="text-green-400 w-8 h-8" />
            <span className="text-green-400 text-sm">Total</span>
          </div>
          <h3 className="text-2xl font-bold text-white">5.5h</h3>
          <p className="text-blue-300 text-sm">Training Time</p>
        </div>
        
        <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
          <div className="flex items-center justify-between mb-4">
            <Target className="text-yellow-400 w-8 h-8" />
            <span className="text-yellow-400 text-sm">Focus</span>
          </div>
          <h3 className="text-lg font-bold text-white">Tactical</h3>
          <p className="text-blue-300 text-sm">Primary Focus</p>
        </div>
      </div>

      {/* This Week's Schedule */}
      <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
        <h3 className="text-lg font-bold text-white mb-4">This Week's Schedule</h3>
        <div className="grid gap-4">
          {mockData.trainingSchedule.map((session, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center">
                  <Calendar className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{session.type}</h4>
                  <p className="text-blue-300 text-sm">{session.focus}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-semibold">{session.date}</p>
                <p className="text-yellow-400 text-sm">{session.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Training Categories */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
          <h3 className="text-lg font-bold text-white mb-4">Training Categories</h3>
          <div className="space-y-3">
            {[
              { name: "Tactical Training", icon: Brain, color: "purple", sessions: 8 },
              { name: "Physical Conditioning", icon: Activity, color: "green", sessions: 6 },
              { name: "Technical Skills", icon: Target, color: "blue", sessions: 4 },
              { name: "Set Pieces", icon: Flag, color: "yellow", sessions: 3 }
            ].map((category, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors cursor-pointer">
                <div className="flex items-center">
                  <category.icon className={`text-${category.color}-400 w-5 h-5 mr-3`} />
                  <span className="text-white">{category.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400 text-sm">{category.sessions} sessions</span>
                  <ChevronRight className="text-gray-400 w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
          <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white p-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all flex items-center">
              <PlayCircle className="w-4 h-4 mr-2" />
              Start Training Session
            </button>
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all flex items-center">
              <FileText className="w-4 h-4 mr-2" />
              Create Drill Plan
            </button>
            <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white p-3 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all flex items-center">
              <Video className="w-4 h-4 mr-2" />
              Review Session Video
            </button>
            <button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white p-3 rounded-lg hover:from-orange-700 hover:to-orange-800 transition-all flex items-center">
              <BarChart3 className="w-4 h-4 mr-2" />
              Performance Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Render current view based on activeModule
  const renderCurrentView = () => {
    switch (activeModule) {
      case 'dashboard': return <DashboardView />;
      case 'team': return <TeamView />;
      case 'analysis': return <AnalysisView />;
      case 'training': return <TrainingView />;
      default: return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-black">
      {/* Header */}
      <header className="bg-gray-900/80 backdrop-blur-sm border-b border-yellow-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Trophy className="text-yellow-400 w-8 h-8 mr-3" />
              <div>
                <h1 className="text-xl font-bold text-yellow-400">TAHLEEL.ai</h1>
                <span className="text-yellow-300 text-xs">Coach Dashboard</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Bell className="text-blue-300 w-6 h-6 cursor-pointer hover:text-white transition-colors" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </div>
              <Settings className="text-blue-300 w-6 h-6 cursor-pointer hover:text-white transition-colors" />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-black font-bold">
                  C
                </div>
                <span className="text-white font-semibold">Coach Ahmed</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-900/60 backdrop-blur-sm border-r border-yellow-500/30 min-h-screen p-4">
          <nav className="space-y-2">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveModule(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                    activeModule === item.id
                      ? 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/30'
                      : 'text-blue-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Quick Stats in Sidebar */}
          <div className="mt-8 p-4 bg-gray-800/50 rounded-lg">
            <h4 className="text-white font-semibold mb-3 text-sm">Quick Stats</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-blue-300">Next Match</span>
                <span className="text-white">4 days</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-blue-300">Squad Fitness</span>
                <span className="text-green-400">92%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-blue-300">Available</span>
                <span className="text-white">9/11</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {renderCurrentView()}
        </div>
      </div>
    </div>
  );
};

export default CoachDashboard;
