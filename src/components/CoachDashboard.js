import React, { useState } from 'react';
import { 
  Trophy, Users, Target, BarChart3, Calendar, Bell, Settings, 
  Search, Activity, Zap, Shield, PlayCircle, 
  FileText, Brain, Flag, Home, Globe
} from 'lucide-react';

// Demo Team Data with Arabic translations
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
  stadiumArabic: "ملعب الأمير فيصل بن فهد",
  city: "Riyadh",
  cityArabic: "الرياض"
};

// Translations object
const translations = {
  en: {
    // Header
    coachDashboard: "Coach Dashboard",
    logout: "Logout",
    
    // Navigation
    dashboard: "Dashboard",
    analysis: "Analysis",
    squad: "Squad",
    training: "Training",
    liveMatch: "Live Match",
    tactics: "Tactics",
    analytics: "Analytics",
    reports: "Reports",
    
    // Dashboard
    leaguePosition: "League Position",
    nextMatch: "Next Match",
    squadFitness: "Squad Fitness",
    availablePlayers: "Available Players",
    seasonPoints: "Season Points",
    winRate: "win rate",
    fromLastWeek: "from last week",
    minorInjuries: "minor injuries",
    
    // Match
    derbyMatchPreparation: "Derby Match Preparation",
    viewFullAnalysis: "View Full Analysis",
    derbyMatch: "Derby Match",
    awayMatch: "Away Match",
    keyWeaknessesIdentified: "Key Weaknesses Identified",
    derbyStrategy: "Derby Strategy",
    counterFormation: "Counter Formation",
    fastBreakTransitions: "Fast break transitions",
    defensiveDiscipline: "Defensive discipline",
    
    // Quick Actions
    quickActions: "Quick Actions",
    derbyAnalysis: "Derby Analysis",
    squadSelection: "Squad Selection",
    derbyTraining: "Derby Training",
    
    // Updates
    latestUpdates: "Latest Updates",
    hoursAgo: "hours ago",
    dayAgo: "day ago",
    
    // Training
    derbyWeekTrainingSchedule: "Derby Week Training Schedule",
    tacticalTraining: "Tactical Training",
    recoverySession: "Recovery Session",
    matchPreparation: "Match Preparation",
    finalTraining: "Final Training",
    derbyPreparation: "Derby Preparation",
    lightTraining: "Light Training",
    alHilalAnalysis: "Al Hilal Analysis",
    teamShape: "Team Shape",
    trainingGround: "Training Ground",
    
    // Sidebar Stats
    points: "Points",
    days: "days",
    
    // Team Stats
    matchesPlayed: "Matches Played",
    wins: "Wins",
    draws: "Draws", 
    losses: "Losses",
    goalsFor: "Goals For",
    goalsAgainst: "Goals Against",
    
    // Squad Management
    squadManagement: "Squad Management",
    totalPlayers: "Total Players",
    available: "Available",
    suspended: "Suspended",
    
    // Player positions
    GK: "Goalkeeper",
    CB: "Center Back",
    LB: "Left Back", 
    RB: "Right Back",
    CM: "Central Midfielder",
    AM: "Attacking Midfielder",
    LW: "Left Winger",
    RW: "Right Winger",
    ST: "Striker"
  },
  
  ar: {
    // Header
    coachDashboard: "لوحة تحكم المدرب",
    logout: "تسجيل خروج",
    
    // Navigation
    dashboard: "الرئيسية",
    analysis: "التحليل",
    squad: "التشكيلة",
    training: "التدريب",
    liveMatch: "المباراة المباشرة",
    tactics: "التكتيكات",
    analytics: "الإحصائيات",
    reports: "التقارير",
    
    // Dashboard
    leaguePosition: "ترتيب الدوري",
    nextMatch: "المباراة القادمة",
    squadFitness: "لياقة الفريق",
    availablePlayers: "اللاعبون المتاحون",
    seasonPoints: "نقاط الموسم",
    winRate: "معدل الفوز",
    fromLastWeek: "من الأسبوع الماضي",
    minorInjuries: "إصابات طفيفة",
    
    // Match
    derbyMatchPreparation: "الاستعداد لمباراة الديربي",
    viewFullAnalysis: "عرض التحليل الكامل",
    derbyMatch: "مباراة ديربي",
    awayMatch: "مباراة خارج الديار",
    keyWeaknessesIdentified: "نقاط الضعف المحددة",
    derbyStrategy: "استراتيجية الديربي",
    counterFormation: "تشكيلة مضادة",
    fastBreakTransitions: "انتقالات سريعة",
    defensiveDiscipline: "انضباط دفاعي",
    
    // Quick Actions
    quickActions: "إجراءات سريعة",
    derbyAnalysis: "تحليل الديربي",
    squadSelection: "اختيار التشكيلة",
    derbyTraining: "تدريب الديربي",
    
    // Updates
    latestUpdates: "آخر التحديثات",
    hoursAgo: "ساعات مضت",
    dayAgo: "يوم مضى",
    
    // Training
    derbyWeekTrainingSchedule: "جدول تدريبات أسبوع الديربي",
    tacticalTraining: "تدريب تكتيكي",
    recoverySession: "جلسة استشفاء",
    matchPreparation: "إعداد المباراة",
    finalTraining: "التدريب الأخير",
    derbyPreparation: "إعداد الديربي",
    lightTraining: "تدريب خفيف",
    alHilalAnalysis: "تحليل الهلال",
    teamShape: "شكل الفريق",
    trainingGround: "أرض التدريب",
    
    // Sidebar Stats
    points: "النقاط",
    days: "أيام",
    
    // Team Stats
    matchesPlayed: "المباريات المُلعبة",
    wins: "انتصارات",
    draws: "تعادل",
    losses: "هزائم",
    goalsFor: "أهداف مسجلة",
    goalsAgainst: "أهداف مستقبلة",
    
    // Squad Management
    squadManagement: "إدارة التشكيلة",
    totalPlayers: "إجمالي اللاعبين",
    available: "متاح",
    suspended: "موقوف",
    
    // Player positions
    GK: "حارس مرمى",
    CB: "مدافع وسط",
    LB: "مدافع أيسر",
    RB: "مدافع أيمن", 
    CM: "لاعب وسط",
    AM: "لاعب وسط مهاجم",
    LW: "جناح أيسر",
    RW: "جناح أيمن",
    ST: "مهاجم"
  }
};

const CoachDashboard = ({ onLogout }) => {
  const [activeModule, setActiveModule] = useState('dashboard');
  const [notifications] = useState(3);
  const [language, setLanguage] = useState('en'); // Language state
  
  // Get translation function
  const t = (key) => translations[language][key] || key;
  const isRTL = language === 'ar';

  // Mock Data with realistic Saudi league context
  const mockData = {
    upcomingMatch: {
      opponent: "Al Hilal",
      opponentArabic: "الهلال",
      opponentLogo: "💙",
      date: "2025-07-25",
      time: "20:00",
      venue: "King Fahd Stadium",
      venueArabic: "ملعب الملك فهد",
      competition: "Saudi Pro League",
      competitionArabic: "دوري المحترفين السعودي",
      isHome: false,
      importance: "Derby Match",
      importanceArabic: "مباراة ديربي"
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
      { id: 1, name: "Abdullah Al-Rashid", nameArabic: "عبدالله الراشد", position: "GK", fitness: 98, form: 8.2, availability: "available", nationality: "🇸🇦" },
      { id: 2, name: "Omar Al-Hassan", nameArabic: "عمر الحسن", position: "CB", fitness: 92, form: 7.8, availability: "available", nationality: "🇸🇦" },
      { id: 3, name: "Khalid Mansour", nameArabic: "خالد منصور", position: "CB", fitness: 88, form: 8.5, availability: "minor_injury", nationality: "🇪🇬" },
      { id: 4, name: "Youssef Ahmed", nameArabic: "يوسف أحمد", position: "LB", fitness: 95, form: 7.9, availability: "available", nationality: "🇲🇦" },
      { id: 5, name: "Mohammed Al-Otaibi", nameArabic: "محمد العتيبي", position: "RB", fitness: 90, form: 8.1, availability: "available", nationality: "🇸🇦" },
      { id: 6, name: "Salem Al-Dawsari", nameArabic: "سالم الدوسري", position: "CM", fitness: 93, form: 8.7, availability: "available", nationality: "🇸🇦" },
      { id: 7, name: "Faisal Mubarak", nameArabic: "فيصل مبارك", position: "CM", fitness: 89, form: 7.6, availability: "suspended", nationality: "🇸🇦" },
      { id: 8, name: "Nasser Abdullah", nameArabic: "ناصر عبدالله", position: "AM", fitness: 94, form: 9.1, availability: "available", nationality: "🇸🇦" },
      { id: 9, name: "Fahad Al-Muwallad", nameArabic: "فهد المولد", position: "LW", fitness: 91, form: 8.3, availability: "available", nationality: "🇸🇦" },
      { id: 10, name: "Salman Al-Faraj", nameArabic: "سلمان الفرج", position: "RW", fitness: 87, form: 7.7, availability: "minor_injury", nationality: "🇸🇦" },
      { id: 11, name: "Abdulrazak Hamdallah", nameArabic: "عبدالرزاق حمد الله", position: "ST", fitness: 96, form: 9.3, availability: "available", nationality: "🇲🇦" }
    ],

    tacticalInsights: {
      en: [
        "Al Hilal vulnerable to high pressing in midfield third during evening matches",
        "Mitrovic tends to drop deep when facing compact Saudi defenses",
        "Left flank shows weakness against pace, especially after 70th minute",
        "Set piece defending has gaps at near post during corner situations"
      ],
      ar: [
        "الهلال عرضة للضغط العالي في الثلث الأوسط خلال المباريات المسائية",
        "ميتروفيتش يميل للتراجع عند مواجهة الدفاعات السعودية المتراصة",
        "الجناح الأيسر يُظهر ضعفاً ضد السرعة، خاصة بعد الدقيقة 70",
        "الدفاع في الكرات الثابتة يحتوي على فجوات في القائم القريب"
      ]
    },

    trainingSchedule: [
      { 
        date: "2025-07-21", 
        type: t('tacticalTraining'), 
        typeArabic: "تدريب تكتيكي",
        focus: t('derbyPreparation'), 
        focusArabic: "إعداد الديربي",
        duration: "90 min", 
        location: DEMO_TEAM.stadium,
        locationArabic: DEMO_TEAM.stadiumArabic 
      },
      { 
        date: "2025-07-22", 
        type: t('recoverySession'), 
        typeArabic: "جلسة استشفاء",
        focus: t('lightTraining'), 
        focusArabic: "تدريب خفيف",
        duration: "60 min", 
        location: t('trainingGround'),
        locationArabic: "أرض التدريب"
      },
      { 
        date: "2025-07-23", 
        type: t('matchPreparation'), 
        typeArabic: "إعداد المباراة",
        focus: t('alHilalAnalysis'), 
        focusArabic: "تحليل الهلال",
        duration: "75 min", 
        location: DEMO_TEAM.stadium,
        locationArabic: DEMO_TEAM.stadiumArabic
      },
      { 
        date: "2025-07-24", 
        type: t('finalTraining'), 
        typeArabic: "التدريب الأخير",
        focus: t('teamShape'), 
        focusArabic: "شكل الفريق",
        duration: "45 min", 
        location: t('trainingGround'),
        locationArabic: "أرض التدريب"
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

  // Navigation items with translations
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

  // Main Dashboard View
  const DashboardView = () => (
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <p className="text-gray-600 text-sm font-medium">{t('nextMatch')}</p>
              <h3 className={`text-xl font-semibold text-gray-900 flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className={isRTL ? 'ml-2' : 'mr-2'}>{mockData.upcomingMatch.opponentLogo}</span>
                {isRTL ? mockData.upcomingMatch.opponentArabic : mockData.upcomingMatch.opponent}
              </h3>
              <p className="text-blue-600 text-sm font-medium">{mockData.upcomingMatch.date}</p>
              <span className="inline-block bg-red-100 text-red-700 text-xs px-2 py-1 rounded-lg mt-1">
                {isRTL ? mockData.upcomingMatch.importanceArabic : mockData.upcomingMatch.importance}
              </span>
            </div>
            <Trophy className="text-blue-600 w-8 h-8" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <p className="text-gray-600 text-sm font-medium">{t('squadFitness')}</p>
              <h3 className="text-xl font-semibold text-gray-900">94%</h3>
              <p className="text-green-600 text-sm font-medium">+2% {t('fromLastWeek')}</p>
            </div>
            <Activity className="text-green-600 w-8 h-8" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <p className="text-gray-600 text-sm font-medium">{t('availablePlayers')}</p>
              <h3 className="text-xl font-semibold text-gray-900">
                {mockData.squad.filter(p => p.availability === 'available').length}/11
              </h3>
              <p className="text-amber-600 text-sm font-medium">2 {t('minorInjuries')}</p>
            </div>
            <Users className="text-blue-600 w-8 h-8" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <p className="text-gray-600 text-sm font-medium">{t('seasonPoints')}</p>
              <h3 className="text-xl font-semibold text-gray-900">{mockData.teamStats.points}</h3>
              <p className="text-green-600 text-sm font-medium">{mockData.teamStats.winPercentage}% {t('winRate')}</p>
            </div>
            <BarChart3 className="text-purple-600 w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Upcoming Match Details */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className={`flex items-center justify-between mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <h3 className="text-xl font-semibold text-gray-900">{t('derbyMatchPreparation')}</h3>
            <button 
              onClick={() => setActiveModule('analysis')}
              className="bg-blue-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              {t('viewFullAnalysis')}
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl border border-red-200">
              <div className={`flex items-center space-x-4 ${isRTL ? 'space-x-reverse flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-semibold">
                  {DEMO_TEAM.logo}
                </div>
                <span className="text-gray-400 text-lg">vs</span>
                <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center text-white text-xl">
                  {mockData.upcomingMatch.opponentLogo}
                </div>
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {isRTL ? 
                      `${mockData.upcomingMatch.opponentArabic} ضد ${DEMO_TEAM.nameArabic}` :
                      `${DEMO_TEAM.name} vs ${mockData.upcomingMatch.opponent}`
                    }
                  </h4>
                  <p className="text-gray-600">
                    {isRTL ? mockData.upcomingMatch.competitionArabic : mockData.upcomingMatch.competition} • {isRTL ? mockData.upcomingMatch.importanceArabic : mockData.upcomingMatch.importance}
                  </p>
                </div>
              </div>
              <div className={`text-${isRTL ? 'left' : 'right'}`}>
                <p className="text-gray-900 font-semibold">{mockData.upcomingMatch.date}</p>
                <p className="text-gray-600">{mockData.upcomingMatch.time}</p>
                <p className="text-red-600 text-sm font-medium">{t('awayMatch')}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="text-gray-900 font-semibold mb-2">{t('keyWeaknessesIdentified')}</h5>
                <div className="space-y-2">
                  {mockData.tacticalInsights[language].slice(0, 2).map((insight, idx) => (
                    <div key={idx} className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <Target className={`text-blue-600 w-4 h-4 mt-0.5 flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      <p className="text-gray-600 text-sm">{insight}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="text-gray-900 font-semibold mb-2">{t('derbyStrategy')}</h5>
                <div className="space-y-2">
                  <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Flag className={`text-green-600 w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    <p className="text-gray-600 text-sm">4-2-3-1 {t('counterFormation')}</p>
                  </div>
                  <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Zap className={`text-amber-600 w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    <p className="text-gray-600 text-sm">{t('fastBreakTransitions')}</p>
                  </div>
                  <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Shield className={`text-purple-600 w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    <p className="text-gray-600 text-sm">{t('defensiveDiscipline')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions & News */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('quickActions')}</h3>
            <div className="space-y-3">
              <button 
                onClick={() => setActiveModule('analysis')}
                className="w-full bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-all flex items-center font-medium"
              >
                <Search className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('derbyAnalysis')}
              </button>
              <button 
                onClick={() => setActiveModule('team')}
                className="w-full bg-green-600 text-white p-3 rounded-xl hover:bg-green-700 transition-all flex items-center font-medium"
              >
                <Users className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('squadSelection')}
              </button>
              <button 
                onClick={() => setActiveModule('training')}
                className="w-full bg-purple-600 text-white p-3 rounded-xl hover:bg-purple-700 transition-all flex items-center font-medium"
              >
                <Calendar className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('derbyTraining')}
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('latestUpdates')}</h3>
            <div className="space-y-3">
              {mockData.newsUpdates[language].map((update, idx) => (
                <div key={idx} className={`flex items-start space-x-3 p-3 bg-gray-50 rounded-xl ${isRTL ? 'space-x-reverse flex-row-reverse' : ''}`}>
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    update.type === 'injury' ? 'bg-red-500' : 
                    update.type === 'tactical' ? 'bg-blue-500' : 
                    update.type === 'league' ? 'bg-green-500' : 'bg-amber-500'
                  }`}></div>
                  <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
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
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('derbyWeekTrainingSchedule')}</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {mockData.trainingSchedule.map((session, idx) => (
            <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className={`flex items-center justify-between mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Calendar className="text-purple-600 w-5 h-5" />
                <span className="text-blue-600 text-sm font-medium">{session.duration}</span>
              </div>
              <h4 className="text-gray-900 font-semibold text-sm mb-1">
                {isRTL ? session.typeArabic : session.type}
              </h4>
              <p className="text-gray-600 text-xs mb-2">
                {isRTL ? session.focusArabic : session.focus}
              </p>
              <p className="text-gray-500 text-xs">{session.date.split('-')[2]}/07</p>
              <p className="text-gray-400 text-xs">
                {isRTL ? session.locationArabic : session.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Render current view based on activeModule
  const renderCurrentView = () => {
    switch (activeModule) {
      case 'dashboard': return <DashboardView />;
      // Other views would be here - keeping original structure
      default: return <DashboardView />;
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center h-16 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className={`flex items-center space-x-4 ${isRTL ? 'space-x-reverse flex-row-reverse' : ''}`}>
              <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Trophy className={`text-blue-600 w-8 h-8 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <h1 className="text-xl font-semibold text-gray-900">TAHLEEL.ai</h1>
                  <span className="text-gray-600 text-xs">{t('coachDashboard')}</span>
                </div>
              </div>
              
              {/* Team Identity */}
              <div className={`hidden md:flex items-center space-x-2 border-gray-200 ${isRTL ? 'ml-6 pr-6 border-r space-x-reverse flex-row-reverse' : 'ml-6 pl-6 border-l'}`}>
                <span className="text-xl">{DEMO_TEAM.logo}</span>
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <p className="text-gray-900 font-medium text-sm">
                    {isRTL ? DEMO_TEAM.nameArabic : DEMO_TEAM.name}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {isRTL ? DEMO_TEAM.organizationArabic : DEMO_TEAM.organization}
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`flex items-center space-x-4 ${isRTL ? 'space-x-reverse flex-row-reverse' : ''}`}>
              {/* Language Toggle */}
              <LanguageToggle />
              
              <div className="relative">
                <Bell className="text-gray-600 w-6 h-6 cursor-pointer hover:text-gray-900 transition-colors" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </div>
              <Settings className="text-gray-600 w-6 h-6 cursor-pointer hover:text-gray-900 transition-colors" />
              <div className={`flex items-center space-x-3 ${isRTL ? 'space-x-reverse flex-row-reverse' : ''}`}>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {DEMO_TEAM.coach.charAt(0)}
                </div>
                <span className="text-gray-900 font-medium">
                  {isRTL ? DEMO_TEAM.coachArabic : DEMO_TEAM.coach}
                </span>
                <button
                  onClick={onLogout}
                  className={`text-gray-600 hover:text-gray-900 transition-colors font-medium ${isRTL ? 'mr-4' : 'ml-4'}`}
                >
                  {t('logout')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={`flex ${isRTL ? 'flex-row-reverse' : ''}`}>
        {/* Sidebar */}
        <div className={`w-64 bg-white min-h-screen p-4 ${isRTL ? 'border-l' : 'border-r'} border-gray-200`}>
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
                  } ${isRTL ? 'space-x-reverse flex-row-reverse text-right' : 'text-left'}`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Team Quick Stats in Sidebar */}
          <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <div className={`flex items-center space-x-2 mb-3 ${isRTL ? 'space-x-reverse flex-row-reverse' : ''}`}>
              <span className="text-lg">{DEMO_TEAM.logo}</span>
              <h4 className="text-blue-900 font-semibold text-sm">
                {isRTL ? DEMO_TEAM.nameArabic : DEMO_TEAM.name}
              </h4>
            </div>
            <div className="space-y-2">
              <div className={`flex justify-between text-xs ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-blue-700">{t('leaguePosition')}</span>
                <span className="text-blue-900 font-medium">#{mockData.teamStats.leaguePosition}</span>
              </div>
              <div className={`flex justify-between text-xs ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-blue-700">{t('points')}</span>
                <span className="text-blue-900 font-medium">{mockData.teamStats.points}</span>
              </div>
              <div className={`flex justify-between text-xs ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-blue-700">{t('nextMatch')}</span>
                <span className="text-blue-900 font-medium">3 {t('days')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {renderCurrentView()}
        </div>
      </div>

      {/* RTL Styles */}
      <style jsx>{`
        .rtl {
          direction: rtl;
        }
        .ltr {
          direction: ltr;
        }
      `}</style>
    </div>
  );
};

export default CoachDashboard;
