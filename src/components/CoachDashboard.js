import React, { useState } from 'react';
import { 
  Trophy, Users, Target, BarChart3, Calendar, Bell, 
  Search, Activity, Zap, Shield, PlayCircle, 
  FileText, Brain, Flag, Home, Globe, Plus, Filter,
  TrendingUp, AlertCircle, Edit, Download, Star,
  Heart, Timer, Video, Clipboard, Eye
} from 'lucide-react';

// Demo Team Data with Arabic translations
const DEMO_TEAM = {
  name: "Al Riyadh FC",
  nameArabic: "نادي الرياض",
  logo: "🔷",
  organization: "Saudi Professional League",
  organizationArabic: "دوري المحترفين السعودي"
};

// Translations
const translations = {
  en: {
    coachDashboard: "Coach Dashboard",
    logout: "Logout",
    dashboard: "Dashboard",
    analysis: "Analysis",
    squad: "Squad",
    training: "Training",
    liveMatch: "Live Match",
    tactics: "Tactics",
    analytics: "Analytics",
    reports: "Reports",
    leaguePosition: "League Position",
    nextMatch: "Next Match",
    squadFitness: "Squad Fitness",
    availablePlayers: "Available Players",
    seasonPoints: "Season Points",
    winRate: "win rate",
    fromLastWeek: "from last week",
    minorInjuries: "minor injuries",
    derbyMatchPreparation: "Derby Match Preparation",
    derbyMatch: "Derby Match",
    awayMatch: "Away Match",
    keyWeaknessesIdentified: "Key Weaknesses Identified",
    viewFullAnalysis: "View Full Analysis",
    derbyStrategy: "Derby Strategy",
    counterFormation: "Counter Formation",
    fastBreakTransitions: "Fast break transitions",
    defensiveDiscipline: "Defensive discipline",
    quickActions: "Quick Actions",
    derbyAnalysis: "Derby Analysis",
    squadSelection: "Squad Selection",
    derbyTraining: "Derby Training",
    latestUpdates: "Latest Updates",
    derbyWeekTrainingSchedule: "Derby Week Training Schedule",
    days: "days"
  },
  ar: {
    coachDashboard: "لوحة تحكم المدرب",
    logout: "تسجيل خروج",
    dashboard: "الرئيسية",
    analysis: "التحليل",
    squad: "التشكيلة",
    training: "التدريب",
    liveMatch: "المباراة المباشرة",
    tactics: "التكتيكات",
    analytics: "الإحصائيات",
    reports: "التقارير",
    leaguePosition: "ترتيب الدوري",
    nextMatch: "المباراة القادمة",
    squadFitness: "لياقة الفريق",
    availablePlayers: "اللاعبون المتاحون",
    seasonPoints: "نقاط الموسم",
    winRate: "معدل الفوز",
    fromLastWeek: "من الأسبوع الماضي",
    minorInjuries: "إصابات طفيفة",
    derbyMatchPreparation: "الاستعداد لمباراة الديربي",
    derbyMatch: "مباراة ديربي",
    awayMatch: "مباراة خارج الديار",
    keyWeaknessesIdentified: "نقاط الضعف المحددة",
    viewFullAnalysis: "عرض التحليل الكامل",
    derbyStrategy: "استراتيجية الديربي",
    counterFormation: "تشكيلة مضادة",
    fastBreakTransitions: "انتقالات سريعة",
    defensiveDiscipline: "انضباط دفاعي",
    quickActions: "إجراءات سريعة",
    derbyAnalysis: "تحليل الديربي",
    squadSelection: "اختيار التشكيلة",
    derbyTraining: "تدريب الديربي",
    latestUpdates: "آخر التحديثات",
    derbyWeekTrainingSchedule: "جدول تدريبات أسبوع الديربي",
    days: "أيام"
  }
};

const CoachDashboard = ({ onLogout }) => {
  const [activeModule, setActiveModule] = useState('dashboard');
  const [notifications] = useState(3);
  const [language, setLanguage] = useState('en');
  
  // Get translation function
  const t = (key) => translations[language][key] || key;
  const isRTL = language === 'ar';

  // Mock Data
  const mockData = {
    upcomingMatch: {
      opponent: "Al Hilal",
      opponentArabic: "الهلال",
      opponentLogo: "💙",
      date: "2025-07-25",
      time: "20:00"
    },
    teamStats: {
      leaguePosition: 3,
      points: 40,
      winPercentage: 67
    },
    squad: [
      { id: 1, availability: "available" },
      { id: 2, availability: "available" },
      { id: 3, availability: "minor_injury" },
      { id: 4, availability: "available" },
      { id: 5, availability: "available" },
      { id: 6, availability: "available" },
      { id: 7, availability: "suspended" },
      { id: 8, availability: "available" },
      { id: 9, availability: "available" },
      { id: 10, availability: "minor_injury" },
      { id: 11, availability: "available" }
    ],
    tacticalInsights: {
      en: [
        "Al Hilal vulnerable to high pressing in midfield third during evening matches",
        "Left flank shows weakness against pace, especially after 70th minute"
      ],
      ar: [
        "الهلال عرضة للضغط العالي في الثلث الأوسط خلال المباريات المسائية",
        "الجناح الأيسر يُظهر ضعفاً ضد السرعة، خاصة بعد الدقيقة 70"
      ]
    },
    trainingSchedule: [
      { 
        date: "2025-07-21", 
        type: "Tactical Training", 
        typeArabic: "تدريب تكتيكي",
        focus: "Derby Preparation", 
        focusArabic: "إعداد الديربي",
        duration: "90 min"
      },
      { 
        date: "2025-07-22", 
        type: "Recovery Session", 
        typeArabic: "جلسة استشفاء",
        focus: "Light Training", 
        focusArabic: "تدريب خفيف",
        duration: "60 min"
      },
      { 
        date: "2025-07-23", 
        type: "Match Preparation", 
        typeArabic: "إعداد المباراة",
        focus: "Al Hilal Analysis", 
        focusArabic: "تحليل الهلال",
        duration: "75 min"
      },
      { 
        date: "2025-07-24", 
        type: "Final Training", 
        typeArabic: "التدريب الأخير",
        focus: "Team Shape", 
        focusArabic: "شكل الفريق",
        duration: "45 min"
      }
    ],
    newsUpdates: {
      en: [
        { title: "Al Hilal derby: Key tactical preparation underway", time: "2 hours ago", type: "tactical" },
        { title: "Salman Al-Faraj injury update - recovery on track", time: "5 hours ago", type: "injury" },
        { title: "Saudi League standings: Al Riyadh FC maintains 3rd position", time: "1 day ago", type: "league" }
      ],
      ar: [
        { title: "ديربي الهلال: الإعداد التكتيكي الأساسي جاري", time: "منذ ساعتين", type: "tactical" },
        { title: "تحديث إصابة سلمان الفرج - التعافي في المسار الصحيح", time: "منذ 5 ساعات", type: "injury" },
        { title: "ترتيب الدوري السعودي: نادي الرياض يحافظ على المركز الثالث", time: "منذ يوم", type: "league" }
      ]
    }
  };

  // Navigation items
  const navigationItems = [
    { id: 'dashboard', label: t('dashboard'), icon: Home },
    { id: 'analysis', label: t('analysis'), icon: Brain },
    { id: 'team', label: t('squad'), icon: Users },
    { id: 'training', label: t('training'), icon: Calendar },
    { id: 'match', label: t('liveMatch'), icon: PlayCircle },
    { id: 'tactics', label: t('tactics'), icon: Target },
    { id: 'analytics', label: t('analytics'), icon: BarChart3 },
    { id: 'reports', label: t('reports'), icon: FileText }
  ];

  // Language Toggle Component
  const LanguageToggle = () => (
    <div className="flex items-center space-x-2">
      <Globe className="text-gray-600 w-4 h-4" />
      <div className="flex bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
            language === 'en'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('ar')}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
            language === 'ar'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          عربي
        </button>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center h-16 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className={`flex items-center space-x-4 ${isRTL ? 'space-x-reverse flex-row-reverse' : ''}`}>
              <div className={`flex items-center space-x-2 ${isRTL ? 'space-x-reverse flex-row-reverse' : ''}`}>
                <div className="text-2xl">{DEMO_TEAM.logo}</div>
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <h1 className="text-lg font-semibold text-gray-900">
                    {t('coachDashboard')}
                  </h1>
                  <p className="text-gray-600 text-sm">
                    {isRTL ? DEMO_TEAM.nameArabic : DEMO_TEAM.name}
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`flex items-center space-x-4 ${isRTL ? 'space-x-reverse flex-row-reverse' : ''}`}>
              <LanguageToggle />
              
              <div className="relative">
                <Bell className="text-gray-600 w-6 h-6 cursor-pointer hover:text-gray-900" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </div>
              
              <button
                onClick={onLogout}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {t('logout')}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm border-r border-gray-200 min-h-screen">
          <nav className="p-4">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveModule(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-left transition-colors ${
                    activeModule === item.id
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  } ${isRTL ? 'space-x-reverse flex-row-reverse text-right' : ''}`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className={`space-y-6 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Team Performance Overview */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
              <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={`flex items-center space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
                  <div className="text-4xl">{DEMO_TEAM.logo}</div>
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {isRTL ? DEMO_TEAM.nameArabic : DEMO_TEAM.name}
                    </h2>
                    <p className="text-blue-700 font-medium">
                      {isRTL ? DEMO_TEAM.name : DEMO_TEAM.nameArabic}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {isRTL ? DEMO_TEAM.organizationArabic : DEMO_TEAM.organization}
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white px-4 py-2 rounded-xl border border-blue-200">
                    <p className="text-gray-600 text-sm">{t('leaguePosition')}</p>
                    <p className="text-2xl font-bold text-blue-600">#{mockData.teamStats.leaguePosition}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className={`flex items-center justify-between mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Trophy className="text-yellow-600 w-8 h-8" />
                  <span className="text-yellow-600 text-sm font-medium">{t('seasonPoints')}</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">{mockData.teamStats.points}</h3>
                <p className="text-gray-600 text-sm">{mockData.teamStats.winPercentage}% {t('winRate')}</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className={`flex items-center justify-between mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Activity className="text-green-600 w-8 h-8" />
                  <span className="text-green-600 text-sm font-medium">{t('squadFitness')}</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">92%</h3>
                <p className="text-green-600 text-sm">+3% {t('fromLastWeek')}</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className={`flex items-center justify-between mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Users className="text-blue-600 w-8 h-8" />
                  <span className="text-blue-600 text-sm font-medium">{t('availablePlayers')}</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {mockData.squad.filter(p => p.availability === 'available').length}
                </h3>
                <p className="text-gray-600 text-sm">
                  {mockData.squad.filter(p => p.availability === 'minor_injury').length} {t('minorInjuries')}
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className={`flex items-center justify-between mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Calendar className="text-purple-600 w-8 h-8" />
                  <span className="text-purple-600 text-sm font-medium">{t('nextMatch')}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">3 {t('days')}</h3>
                <p className="text-gray-600 text-sm">{mockData.upcomingMatch.opponent}</p>
              </div>
            </div>

            {/* Match Details and Quick Actions */}
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('derbyMatchPreparation')}</h3>
                <div className={`flex items-center justify-between mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex items-center space-x-4 ${isRTL ? 'space-x-reverse flex-row-reverse' : ''}`}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                        {DEMO_TEAM.logo}
                      </div>
                      <p className="text-gray-700 font-semibold text-sm">
                        {isRTL ? DEMO_TEAM.nameArabic : DEMO_TEAM.name}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-400 text-lg font-bold">VS</p>
                      <p className="text-gray-600 text-sm">{mockData.upcomingMatch.date}</p>
                      <p className="text-gray-500 text-xs">{mockData.upcomingMatch.time}</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl mb-2">
                        {mockData.upcomingMatch.opponentLogo}
                      </div>
                      <p className="text-gray-700 font-semibold text-sm">
                        {isRTL ? mockData.upcomingMatch.opponentArabic : mockData.upcomingMatch.opponent}
                      </p>
                    </div>
                  </div>
                  <div className={`text-${isRTL ? 'left' : 'right'}`}>
                    <p className="text-red-600 font-semibold text-sm">{t('derbyMatch')}</p>
                    <p className="text-gray-500 text-xs">{t('awayMatch')}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-gray-900 font-semibold">{t('keyWeaknessesIdentified')}</h4>
                  {mockData.tacticalInsights[language].map((insight, idx) => (
                    <div key={idx} className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-600 text-sm">{insight}</p>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors font-medium">
                  {t('viewFullAnalysis')}
                </button>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('derbyStrategy')}</h3>
                  <div className="space-y-3">
                    <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span className="text-gray-600 text-sm">{t('counterFormation')}</span>
                      <span className="text-blue-600 font-semibold text-sm">4-3-3</span>
                    </div>
                    <div className="space-y-2">
                      <div className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <Target className={`text-green-600 w-4 h-4 mt-0.5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                        <p className="text-gray-600 text-sm">{t('fastBreakTransitions')}</p>
                      </div>
                      <div className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <Shield className={`text-blue-600 w-4 h-4 mt-0.5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                        <p className="text-gray-600 text-sm">{t('defensiveDiscipline')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('quickActions')}</h3>
                  <div className="space-y-2">
                    <button className="w-full bg-green-600 text-white py-2 px-4 rounded-xl hover:bg-green-700 transition-all flex items-center font-medium">
                      <Brain className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      {t('derbyAnalysis')}
                    </button>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition-all flex items-center font-medium">
                      <Users className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      {t('squadSelection')}
                    </button>
                    <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-xl hover:bg-purple-700 transition-all flex items-center font-medium">
                      <Calendar className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      {t('derbyTraining')}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Updates */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('latestUpdates')}</h3>
              <div className="space-y-3">
                {mockData.newsUpdates[language].map((update, idx) => (
                  <div key={idx} className={`flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className={`flex items-center space-x-3 ${isRTL ? 'space-x-reverse flex-row-reverse' : ''}`}>
                      <div className={`w-2 h-2 rounded-full ${
                        update.type === 'tactical' ? 'bg-blue-500' :
                        update.type === 'injury' ? 'bg-red-500' : 'bg-green-500'
                      }`}></div>
                      <p className="text-gray-900 font-medium text-sm">{update.title}</p>
                    </div>
                    <span className="text-gray-500 text-xs">{update.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Training Schedule */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('derbyWeekTrainingSchedule')}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {mockData.trainingSchedule.map((session, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className={`flex items-center justify-between mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <Calendar className="text-purple-600 w-5 h-5" />
                      <span className="text-gray-500 text-xs">{session.date}</span>
                    </div>
                    <h4 className="text-gray-900 font-semibold text-sm mb-1">
                      {isRTL ? session.typeArabic : session.type}
                    </h4>
                    <p className="text-gray-600 text-xs mb-2">
                      {isRTL ? session.focusArabic : session.focus}
                    </p>
                    <p className="text-purple-600 text-xs font-medium">{session.duration}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CoachDashboard;
