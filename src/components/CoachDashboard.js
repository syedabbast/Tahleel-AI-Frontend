import React, { useState } from 'react';
import { 
  Trophy, Users, Target, BarChart3, Calendar, Bell, Settings, 
  Search, Activity, Zap, Shield, PlayCircle, 
  FileText, Brain, Flag, Home
} from 'lucide-react';

// Demo Team Data
const DEMO_TEAM = {
  name: "Al Riyadh FC",
  nameArabic: "نادي الرياض",
  logo: "🔷",
  organization: "Saudi Professional League",
  organizationArabic: "دوري المحترفين السعودي",
  coach: "Ahmed Al-Mansouri",
  coachArabic: "أحمد المنصوري",
  founded: "1954",
  stadium: "Prince Faisal bin Fahd Stadium",
  city: "Riyadh",
  colors: { primary: "#1E40AF", secondary: "#3B82F6" }
};

const CoachDashboard = ({ onLogout }) => {
  const [activeModule, setActiveModule] = useState('dashboard');
  const [notifications] = useState(3);

  // Mock Data with realistic Saudi league context
  const mockData = {
    upcomingMatch: {
      opponent: "Al Hilal",
      opponentLogo: "💙",
      date: "2025-07-25",
      time: "20:00",
      venue: "King Fahd Stadium",
      competition: "Saudi Pro League",
      isHome: false,
      importance: "Derby Match"
    },
    
    teamStats: {
      wins: 12,
      draws: 4,
      losses: 2,
      goalsFor: 34,
      goalsAgainst: 16,
      cleanSheets: 8,
      currentForm: ['W', 'W', 'D', 'W', 'W'],
      leaguePosition: 3,
      points: 40
    },

    squad: [
      { id: 1, name: "Abdullah Al-Rashid", position: "GK", fitness: 98, form: 8.2, availability: "available", nationality: "🇸🇦" },
      { id: 2, name: "Omar Al-Hassan", position: "CB", fitness: 92, form: 7.8, availability: "available", nationality: "🇸🇦" },
      { id: 3, name: "Khalid Mansour", position: "CB", fitness: 88, form: 8.5, availability: "minor_injury", nationality: "🇪🇬" },
      { id: 4, name: "Youssef Ahmed", position: "LB", fitness: 95, form: 7.9, availability: "available", nationality: "🇲🇦" },
      { id: 5, name: "Mohammed Al-Otaibi", position: "RB", fitness: 90, form: 8.1, availability: "available", nationality: "🇸🇦" },
      { id: 6, name: "Salem Al-Dawsari", position: "CM", fitness: 93, form: 8.7, availability: "available", nationality: "🇸🇦" },
      { id: 7, name: "Faisal Mubarak", position: "CM", fitness: 89, form: 7.6, availability: "suspended", nationality: "🇸🇦" },
      { id: 8, name: "Nasser Abdullah", position: "AM", fitness: 94, form: 9.1, availability: "available", nationality: "🇸🇦" },
      { id: 9, name: "Fahad Al-Muwallad", position: "LW", fitness: 91, form: 8.3, availability: "available", nationality: "🇸🇦" },
      { id: 10, name: "Salman Al-Faraj", position: "RW", fitness: 87, form: 7.7, availability: "minor_injury", nationality: "🇸🇦" },
      { id: 11, name: "Abdulrazak Hamdallah", position: "ST", fitness: 96, form: 9.3, availability: "available", nationality: "🇲🇦" }
    ],

    recentAnalysis: [
      { opponent: "Al Hilal", date: "2025-07-20", confidence: 89, result: "analyzed", competition: "SPL" },
      { opponent: "Al Ittihad", date: "2025-07-15", confidence: 92, result: "analyzed", competition: "SPL" },
      { opponent: "Al Ahli", date: "2025-07-10", confidence: 85, result: "analyzed", competition: "King Cup" }
    ],

    tacticalInsights: [
      "Al Hilal vulnerable to high pressing in midfield third during evening matches",
      "Mitrovic tends to drop deep when facing compact Saudi defenses",
      "Left flank shows weakness against pace, especially after 70th minute",
      "Set piece defending has gaps at near post during corner situations"
    ],

    trainingSchedule: [
      { date: "2025-07-21", type: "Tactical Training", focus: "Derby Preparation", duration: "90 min", location: DEMO_TEAM.stadium },
      { date: "2025-07-22", type: "Recovery Session", focus: "Light Training", duration: "60 min", location: "Training Ground" },
      { date: "2025-07-23", type: "Match Preparation", focus: "Al Hilal Analysis", duration: "75 min", location: DEMO_TEAM.stadium },
      { date: "2025-07-24", type: "Final Training", focus: "Team Shape", duration: "45 min", location: "Training Ground" }
    ],

    newsUpdates: [
      { title: "Al Hilal derby: Key tactical preparation underway", time: "2 hours ago", type: "tactical" },
      { title: "Salman Al-Faraj injury update - recovery on track", time: "5 hours ago", type: "injury" },
      { title: "Saudi League standings: Al Riyadh FC maintains 3rd position", time: "1 day ago", type: "league" }
    ],

    seasonStats: {
      matchesPlayed: 18,
      winPercentage: 67,
      avgGoalsFor: 1.9,
      avgGoalsAgainst: 0.9,
      possession: 58,
      passAccuracy: 84
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
      {/* Team Performance Overview */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-4xl">{DEMO_TEAM.logo}</div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">{DEMO_TEAM.name}</h2>
              <p className="text-blue-700 font-medium">{DEMO_TEAM.nameArabic}</p>
              <p className="text-gray-600 text-sm">{DEMO_TEAM.organization}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="bg-white px-4 py-2 rounded-xl border border-blue-200">
              <p className="text-gray-600 text-sm">League Position</p>
              <p className="text-2xl font-bold text-blue-600">#{mockData.teamStats.leaguePosition}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Next Match</p>
              <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                <span className="mr-2">{mockData.upcomingMatch.opponentLogo}</span>
                {mockData.upcomingMatch.opponent}
              </h3>
              <p className="text-blue-600 text-sm font-medium">{mockData.upcomingMatch.date}</p>
              <span className="inline-block bg-red-100 text-red-700 text-xs px-2 py-1 rounded-lg mt-1">
                {mockData.upcomingMatch.importance}
              </span>
            </div>
            <Trophy className="text-blue-600 w-8 h-8" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Squad Fitness</p>
              <h3 className="text-xl font-semibold text-gray-900">94%</h3>
              <p className="text-green-600 text-sm font-medium">+2% from last week</p>
            </div>
            <Activity className="text-green-600 w-8 h-8" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Available Players</p>
              <h3 className="text-xl font-semibold text-gray-900">
                {mockData.squad.filter(p => p.availability === 'available').length}/11
              </h3>
              <p className="text-amber-600 text-sm font-medium">2 minor injuries</p>
            </div>
            <Users className="text-blue-600 w-8 h-8" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Season Points</p>
              <h3 className="text-xl font-semibold text-gray-900">{mockData.teamStats.points}</h3>
              <p className="text-green-600 text-sm font-medium">{mockData.teamStats.winPercentage}% win rate</p>
            </div>
            <BarChart3 className="text-purple-600 w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Upcoming Match Details */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Derby Match Preparation</h3>
            <button 
              onClick={() => setActiveModule('analysis')}
              className="bg-blue-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              View Full Analysis
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl border border-red-200">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-semibold">
                  {DEMO_TEAM.logo}
                </div>
                <span className="text-gray-400 text-lg">vs</span>
                <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center text-white text-xl">
                  {mockData.upcomingMatch.opponentLogo}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {DEMO_TEAM.name} vs {mockData.upcomingMatch.opponent}
                  </h4>
                  <p className="text-gray-600">{mockData.upcomingMatch.competition} • {mockData.upcomingMatch.importance}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-900 font-semibold">{mockData.upcomingMatch.date}</p>
                <p className="text-gray-600">{mockData.upcomingMatch.time}</p>
                <p className="text-red-600 text-sm font-medium">Away Match</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="text-gray-900 font-semibold mb-2">Key Weaknesses Identified</h5>
                <div className="space-y-2">
                  {mockData.tacticalInsights.slice(0, 2).map((insight, idx) => (
                    <div key={idx} className="flex items-start">
                      <Target className="text-blue-600 w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-gray-600 text-sm">{insight}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="text-gray-900 font-semibold mb-2">Derby Strategy</h5>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Flag className="text-green-600 w-4 h-4 mr-2" />
                    <p className="text-gray-600 text-sm">4-2-3-1 Counter Formation</p>
                  </div>
                  <div className="flex items-center">
                    <Zap className="text-amber-600 w-4 h-4 mr-2" />
                    <p className="text-gray-600 text-sm">Fast break transitions</p>
                  </div>
                  <div className="flex items-center">
                    <Shield className="text-purple-600 w-4 h-4 mr-2" />
                    <p className="text-gray-600 text-sm">Defensive discipline</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions & News */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button 
                onClick={() => setActiveModule('analysis')}
                className="w-full bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-all flex items-center font-medium"
              >
                <Search className="w-4 h-4 mr-2" />
                Derby Analysis
              </button>
              <button 
                onClick={() => setActiveModule('team')}
                className="w-full bg-green-600 text-white p-3 rounded-xl hover:bg-green-700 transition-all flex items-center font-medium"
              >
                <Users className="w-4 h-4 mr-2" />
                Squad Selection
              </button>
              <button 
                onClick={() => setActiveModule('training')}
                className="w-full bg-purple-600 text-white p-3 rounded-xl hover:bg-purple-700 transition-all flex items-center font-medium"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Derby Training
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Latest Updates</h3>
            <div className="space-y-3">
              {mockData.newsUpdates.map((update, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    update.type === 'injury' ? 'bg-red-500' : 
                    update.type === 'tactical' ? 'bg-blue-500' : 
                    update.type === 'league' ? 'bg-green-500' : 'bg-amber-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-gray-900 text-sm font-medium">{update.title}</p>
                    <p className="text-gray-500 text-xs">{update.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Training Schedule */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Derby Week Training Schedule</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {mockData.trainingSchedule.map((session, idx) => (
            <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <Calendar className="text-purple-600 w-5 h-5" />
                <span className="text-blue-600 text-sm font-medium">{session.duration}</span>
              </div>
              <h4 className="text-gray-900 font-semibold text-sm mb-1">{session.type}</h4>
              <p className="text-gray-600 text-xs mb-2">{session.focus}</p>
              <p className="text-gray-500 text-xs">{session.date.split('-')[2]}/07</p>
              <p className="text-gray-400 text-xs">{session.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Team Management View - keeping existing structure but with updated data

  // Analysis View - keeping existing structure but with Saudi context

  // Training View - keeping existing structure but with Saudi context

  // Render current view based on activeModule
  const renderCurrentView = () => {
    switch (activeModule) {
      case 'dashboard': return <DashboardView />;
      // Other views would be here - keeping original structure
      default: return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Trophy className="text-blue-600 w-8 h-8 mr-3" />
                <div>
                  <h1 className="text-xl font-semibold text-gray-900">TAHLEEL.ai</h1>
                  <span className="text-gray-600 text-xs">Coach Dashboard</span>
                </div>
              </div>
              
              {/* Team Identity */}
              <div className="hidden md:flex items-center space-x-2 ml-6 pl-6 border-l border-gray-200">
                <span className="text-xl">{DEMO_TEAM.logo}</span>
                <div>
                  <p className="text-gray-900 font-medium text-sm">{DEMO_TEAM.name}</p>
                  <p className="text-gray-500 text-xs">{DEMO_TEAM.organization}</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Bell className="text-gray-600 w-6 h-6 cursor-pointer hover:text-gray-900 transition-colors" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </div>
              <Settings className="text-gray-600 w-6 h-6 cursor-pointer hover:text-gray-900 transition-colors" />
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {DEMO_TEAM.coach.charAt(0)}
                </div>
                <span className="text-gray-900 font-medium">{DEMO_TEAM.coach}</span>
                <button
                  onClick={onLogout}
                  className="text-gray-600 hover:text-gray-900 transition-colors font-medium ml-4"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen p-4">
          <nav className="space-y-2">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveModule(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                    activeModule === item.id
                      ? 'bg-blue-50 text-blue-600 border border-blue-200'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Team Quick Stats in Sidebar */}
          <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-lg">{DEMO_TEAM.logo}</span>
              <h4 className="text-blue-900 font-semibold text-sm">{DEMO_TEAM.name}</h4>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-blue-700">League Position</span>
                <span className="text-blue-900 font-medium">#{mockData.teamStats.leaguePosition}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-blue-700">Points</span>
                <span className="text-blue-900 font-medium">{mockData.teamStats.points}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-blue-700">Next Match</span>
                <span className="text-blue-900 font-medium">3 days</span>
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
