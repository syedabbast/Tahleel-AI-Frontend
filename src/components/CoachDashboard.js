);

  // Tactics View
  const TacticsView = () => (
    <div className={`space-y-6 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
        <h2 className="text-2xl font-semibold text-gray-900">{t('tacticalBoard')}</h2>
        <div className={`flex items-center space-x-4 ${isRTL ? 'space-x-reverse flex-row-reverse' : ''}`}>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-200 transition-colors flex items-center font-medium">
            <Download className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {t('loadFormation')}
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center">
            <Plus className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {t('saveFormation')}
          </button>
        </div>
      </div>

      {/* Formation Board */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="bg-green-600 rounded-xl p-6 mb-6" style={{ backgroundImage: 'linear-gradient(90deg, #16a34a 50%, #15803d 50%)' }}>
          <div className="relative h-96 border-2 border-white rounded-lg">
            {/* Goal Areas */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-8 border-2 border-white"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-8 border-2 border-white"></div>
            
            {/* Center Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-white rounded-full"></div>
            
            {/* Sample Formation Positions */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">GK</div>
            <div className="absolute bottom-16 left-1/4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">CB</div>
            <div className="absolute bottom-16 right-1/4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">CB</div>
            <div className="absolute bottom-16 left-8 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">LB</div>
            <div className="absolute bottom-16 right-8 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">RB</div>
            <div className="absolute bottom-32 left-1/3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">CM</div>
            <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">CM</div>
            <div className="absolute bottom-48 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">AM</div>
            <div className="absolute bottom-64 left-8 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">LW</div>
            <div className="absolute bottom-64 right-8 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">RW</div>
            <div className="absolute bottom-80 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">ST</div>
          </div>
        </div>
      </div>

      {/* Formation Presets and Instructions */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('formationPresets')}</h3>
          <div className="grid grid-cols-2 gap-3">
            {['4-3-3', '4-4-2', '3-5-2', '4-2-3-1', '5-3-2', '4-1-4-1'].map((formation, idx) => (
              <button key={idx} className="bg-gray-50 text-gray-900 p-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all font-medium border border-gray-200">
                {formation}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('instructions')}</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">{t('attackingStyle')}</label>
              <select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Possession</option>
                <option>Counter Attack</option>
                <option>Direct</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">{t('defensiveLine')}</label>
              <select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>High</option>
                <option>Medium</option>
                <option>Deep</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">{t('pressing')}</label>
              <select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Tactical Scenarios */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('tacticalScenarios')}</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
            <h4 className="text-green-800 font-semibold mb-2">{t('leading10')}</h4>
            <p className="text-green-700 text-sm mb-3">{t('defensiveStability')}</p>
            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium">
              {t('apply')}
            </button>
          </div>
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
            <h4 className="text-red-800 font-semibold mb-2">{t('trailing01')}</h4>
            <p className="text-red-700 text-sm mb-3">{t('attackingOverload')}</p>
            import React, { useState } from 'react';
import { 
  Trophy, Users, Target, BarChart3, Calendar, Bell, Settings, 
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
  organizationArabic: "دوري المحترفين السعودي",
  coach: "Ahmed Al-Mansouri",
  coachArabic: "أحمد المنصوري",
  founded: "1954",
  stadium: "Prince Faisal bin Fahd Stadium",
  stadiumArabic: "ملعب الأمير فيصل بن فهد",
  city: "Riyadh",
  cityArabic: "الرياض"
};

// Extended Translations
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
    
    // Analysis
    opponentAnalysis: "Opponent Analysis",
    newAnalysis: "New Analysis",
    startNewAnalysis: "Start New Analysis",
    enterOpponentName: "Enter opponent team name...",
    analyze: "Analyze",
    recentAnalyses: "Recent Analyses",
    confidence: "Confidence",
    view: "View",
    tacticalAnalysisCategory: "Tactical Analysis",
    playerAnalysisCategory: "Player Analysis",
    setPiecesCategory: "Set Pieces",
    recentFormCategory: "Recent Form",
    injuryReportsCategory: "Injury Reports",
    newsIntelligenceCategory: "News Intelligence",
    formationAnalysis: "Formation and style analysis",
    keyPlayersWeaknesses: "Key players and weaknesses",
    deadBallSituations: "Dead ball situations",
    latestPerformanceTrends: "Latest performance trends",
    playerAvailability: "Player availability",
    latestTeamUpdates: "Latest team updates",
    
    // Squad Management
    squadManagement: "Squad Management",
    totalPlayers: "Total Players",
    available: "Available",
    suspended: "Suspended",
    addPlayer: "Add Player",
    filter: "Filter",
    fitness: "Fitness",
    form: "Form",
    status: "Status",
    viewStats: "View Stats",
    editPlayer: "Edit Player",
    
    // Training
    trainingManagement: "Training Management",
    planSession: "Plan Session",
    thisWeek: "This Week",
    trainingSessions: "Training Sessions",
    trainingTime: "Training Time",
    focus: "Focus",
    tactical: "Tactical",
    thisWeeksSchedule: "This Week's Schedule",
    trainingCategories: "Training Categories",
    quickActionsTraining: "Quick Actions",
    startTrainingSession: "Start Training Session",
    createDrillPlan: "Create Drill Plan",
    reviewSessionVideo: "Review Session Video",
    performanceAnalytics: "Performance Analytics",
    sessions: "sessions",
    
    // Live Match
    liveMatchCenter: "Live Match Center",
    live: "LIVE",
    quickAdjustments: "Quick Adjustments",
    switchTo442: "Switch to 4-4-2",
    highPressMode: "High Press Mode",
    counterAttack: "Counter Attack",
    defensiveShape: "Defensive Shape",
    substitutions: "Substitutions",
    planSubstitution: "Plan Substitution",
    liveStatistics: "Live Statistics",
    possession: "Possession",
    shots: "Shots",
    shotsOnTarget: "Shots on Target",
    corners: "Corners",
    fouls: "Fouls",
    matchTimeline: "Match Timeline",
    
    // Tactics
    tacticalBoard: "Tactical Board",
    loadFormation: "Load Formation",
    saveFormation: "Save Formation",
    formationPresets: "Formation Presets",
    instructions: "Instructions",
    attackingStyle: "Attacking Style",
    defensiveLine: "Defensive Line",
    pressing: "Pressing",
    tacticalScenarios: "Tactical Scenarios",
    leading10: "Leading 1-0",
    trailing01: "Trailing 0-1",
    levelAt11: "Level at 1-1",
    defensiveStability: "Defensive stability",
    attackingOverload: "Attacking overload",
    balancedApproach: "Balanced approach",
    apply: "Apply",
    
    // Analytics
    performanceAnalyticsTitle: "Performance Analytics",
    exportReport: "Export Report",
    last5Matches: "Last 5 matches",
    last10Matches: "Last 10 matches",
    season: "Season",
    performanceOverview: "Performance Overview",
    wins: "Wins",
    goalsScored: "Goals Scored",
    goalsConceded: "Goals Conceded",
    cleanSheets: "Clean Sheets",
    recentForm: "Recent Form",
    squadPerformance: "Squad Performance",
    averageFitness: "Average Fitness",
    averageForm: "Average Form",
    availabilityRate: "Availability Rate",
    detailedStatistics: "Detailed Statistics",
    attackingStats: "Attacking Stats",
    defensiveStats: "Defensive Stats",
    goalsPerGame: "Goals per Game",
    shotsPerGame: "Shots per Game",
    passAccuracy: "Pass Accuracy",
    goalsConcededPerGame: "Goals Conceded/Game",
    tacklesPerGame: "Tackles per Game",
    interceptions: "Interceptions",
    cleanSheetPercentage: "Clean Sheet %",
    
    // Reports
    reportsDocumentation: "Reports & Documentation",
    newReport: "New Report",
    matchReports: "Match Reports",
    playerAnalysisReports: "Player Analysis",
    trainingReports: "Training Reports",
    oppositionScouting: "Opposition Scouting",
    reports: "reports",
    recentReports: "Recent Reports",
    matchAnalysis: "Match Analysis",
    performanceReview: "Performance Review",
    tacticalTrainingSession: "Tactical Training Session",
    oppositionScoutingReport: "Opposition Scouting Report",
    completed: "completed",
    draft: "draft",
    
    // Common
    derbyMatchPreparation: "Derby Match Preparation",
    viewFullAnalysis: "View Full Analysis",
    derbyMatch: "Derby Match",
    awayMatch: "Away Match",
    keyWeaknessesIdentified: "Key Weaknesses Identified",
    derbyStrategy: "Derby Strategy",
    counterFormation: "Counter Formation",
    fastBreakTransitions: "Fast break transitions",
    defensiveDiscipline: "Defensive discipline",
    quickActions: "Quick Actions",
    derbyAnalysis: "Derby Analysis",
    squadSelection: "Squad Selection",
    derbyTraining: "Derby Training",
    latestUpdates: "Latest Updates",
    hoursAgo: "hours ago",
    dayAgo: "day ago",
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
    points: "Points",
    days: "days"
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
    
    // Analysis
    opponentAnalysis: "تحليل المنافس",
    newAnalysis: "تحليل جديد",
    startNewAnalysis: "بدء تحليل جديد",
    enterOpponentName: "أدخل اسم الفريق المنافس...",
    analyze: "تحليل",
    recentAnalyses: "التحليلات الأخيرة",
    confidence: "الثقة",
    view: "عرض",
    tacticalAnalysisCategory: "التحليل التكتيكي",
    playerAnalysisCategory: "تحليل اللاعبين",
    setPiecesCategory: "الكرات الثابتة",
    recentFormCategory: "الأداء الأخير",
    injuryReportsCategory: "تقارير الإصابات",
    newsIntelligenceCategory: "الأخبار الذكية",
    formationAnalysis: "تحليل التشكيلة والأسلوب",
    keyPlayersWeaknesses: "اللاعبون الأساسيون ونقاط الضعف",
    deadBallSituations: "حالات الكرة الميتة",
    latestPerformanceTrends: "اتجاهات الأداء الأخيرة",
    playerAvailability: "توفر اللاعبين",
    latestTeamUpdates: "آخر تحديثات الفريق",
    
    // Squad Management
    squadManagement: "إدارة التشكيلة",
    totalPlayers: "إجمالي اللاعبين",
    available: "متاح",
    suspended: "موقوف",
    addPlayer: "إضافة لاعب",
    filter: "تصفية",
    fitness: "اللياقة",
    form: "الأداء",
    status: "الحالة",
    viewStats: "عرض الإحصائيات",
    editPlayer: "تعديل اللاعب",
    
    // Training
    trainingManagement: "إدارة التدريب",
    planSession: "تخطيط الجلسة",
    thisWeek: "هذا الأسبوع",
    trainingSessions: "جلسات التدريب",
    trainingTime: "وقت التدريب",
    focus: "التركيز",
    tactical: "تكتيكي",
    thisWeeksSchedule: "جدول هذا الأسبوع",
    trainingCategories: "فئات التدريب",
    quickActionsTraining: "إجراءات سريعة",
    startTrainingSession: "بدء جلسة التدريب",
    createDrillPlan: "إنشاء خطة التمارين",
    reviewSessionVideo: "مراجعة فيديو الجلسة",
    performanceAnalytics: "تحليلات الأداء",
    sessions: "جلسات",
    
    // Live Match
    liveMatchCenter: "مركز المباراة المباشرة",
    live: "مباشر",
    quickAdjustments: "تعديلات سريعة",
    switchTo442: "التحول إلى 4-4-2",
    highPressMode: "وضعية الضغط العالي",
    counterAttack: "الهجمة المرتدة",
    defensiveShape: "الشكل الدفاعي",
    substitutions: "التبديلات",
    planSubstitution: "تخطيط التبديل",
    liveStatistics: "إحصائيات مباشرة",
    possession: "الاستحواذ",
    shots: "التسديدات",
    shotsOnTarget: "التسديدات على المرمى",
    corners: "الركنيات",
    fouls: "الأخطاء",
    matchTimeline: "الجدول الزمني للمباراة",
    
    // Tactics
    tacticalBoard: "اللوحة التكتيكية",
    loadFormation: "تحميل التشكيلة",
    saveFormation: "حفظ التشكيلة",
    formationPresets: "التشكيلات المحفوظة",
    instructions: "التعليمات",
    attackingStyle: "الأسلوب الهجومي",
    defensiveLine: "الخط الدفاعي",
    pressing: "الضغط",
    tacticalScenarios: "السيناريوهات التكتيكية",
    leading10: "متقدم 1-0",
    trailing01: "متأخر 0-1",
    levelAt11: "متعادل 1-1",
    defensiveStability: "الاستقرار الدفاعي",
    attackingOverload: "الحمولة الهجومية",
    balancedApproach: "النهج المتوازن",
    apply: "تطبيق",
    
    // Analytics
    performanceAnalyticsTitle: "تحليلات الأداء",
    exportReport: "تصدير التقرير",
    last5Matches: "آخر 5 مباريات",
    last10Matches: "آخر 10 مباريات",
    season: "الموسم",
    performanceOverview: "نظرة عامة على الأداء",
    wins: "انتصارات",
    goalsScored: "أهداف مسجلة",
    goalsConceded: "أهداف مستقبلة",
    cleanSheets: "شباك نظيفة",
    recentForm: "الأداء الأخير",
    squadPerformance: "أداء التشكيلة",
    averageFitness: "متوسط اللياقة",
    averageForm: "متوسط الأداء",
    availabilityRate: "معدل التوفر",
    detailedStatistics: "إحصائيات مفصلة",
    attackingStats: "إحصائيات هجومية",
    defensiveStats: "إحصائيات دفاعية",
    goalsPerGame: "أهداف لكل مباراة",
    shotsPerGame: "تسديدات لكل مباراة",
    passAccuracy: "دقة التمرير",
    goalsConcededPerGame: "أهداف مستقبلة/مباراة",
    tacklesPerGame: "مداخلات لكل مباراة",
    interceptions: "اعتراضات",
    cleanSheetPercentage: "نسبة الشباك النظيفة",
    
    // Reports
    reportsDocumentation: "التقارير والوثائق",
    newReport: "تقرير جديد",
    matchReports: "تقارير المباريات",
    playerAnalysisReports: "تحليل اللاعبين",
    trainingReports: "تقارير التدريب",
    oppositionScouting: "استطلاع المنافس",
    reports: "تقارير",
    recentReports: "التقارير الأخيرة",
    matchAnalysis: "تحليل المباراة",
    performanceReview: "مراجعة الأداء",
    tacticalTrainingSession: "جلسة التدريب التكتيكي",
    oppositionScoutingReport: "تقرير استطلاع المنافس",
    completed: "مكتمل",
    draft: "مسودة",
    
    // Common
    derbyMatchPreparation: "الاستعداد لمباراة الديربي",
    viewFullAnalysis: "عرض التحليل الكامل",
    derbyMatch: "مباراة ديربي",
    awayMatch: "مباراة خارج الديار",
    keyWeaknessesIdentified: "نقاط الضعف المحددة",
    derbyStrategy: "استراتيجية الديربي",
    counterFormation: "تشكيلة مضادة",
    fastBreakTransitions: "انتقالات سريعة",
    defensiveDiscipline: "انضباط دفاعي",
    quickActions: "إجراءات سريعة",
    derbyAnalysis: "تحليل الديربي",
    squadSelection: "اختيار التشكيلة",
    derbyTraining: "تدريب الديربي",
    latestUpdates: "آخر التحديثات",
    hoursAgo: "ساعات مضت",
    dayAgo: "يوم مضى",
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
    points: "النقاط",
    days: "أيام"
  }
};

const CoachDashboard = ({ onLogout }) => {
  const [activeModule, setActiveModule] = useState('dashboard');
  const [notifications] = useState(3);
  const [language, setLanguage] = useState('en');
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [opponentInput, setOpponentInput] = useState('');
  
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
      points: 40,
      winPercentage: 67
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

    recentAnalysis: [
      { opponent: "Al Hilal", opponentArabic: "الهلال", date: "2025-07-20", confidence: 89, result: "analyzed", competition: "SPL" },
      { opponent: "Al Ittihad", opponentArabic: "الاتحاد", date: "2025-07-15", confidence: 92, result: "analyzed", competition: "SPL" },
      { opponent: "Al Ahli", opponentArabic: "الأهلي", date: "2025-07-10", confidence: 85, result: "analyzed", competition: "King Cup" }
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
        type: "Tactical Training", 
        typeArabic: "تدريب تكتيكي",
        focus: "Derby Preparation", 
        focusArabic: "إعداد الديربي",
        duration: "90 min", 
        location: DEMO_TEAM.stadium,
        locationArabic: DEMO_TEAM.stadiumArabic 
      },
      { 
        date: "2025-07-22", 
        type: "Recovery Session", 
        typeArabic: "جلسة استشفاء",
        focus: "Light Training", 
        focusArabic: "تدريب خفيف",
        duration: "60 min", 
        location: "Training Ground",
        locationArabic: "أرض التدريب"
      },
      { 
        date: "2025-07-23", 
        type: "Match Preparation", 
        typeArabic: "إعداد المباراة",
        focus: "Al Hilal Analysis", 
        focusArabic: "تحليل الهلال",
        duration: "75 min", 
        location: DEMO_TEAM.stadium,
        locationArabic: DEMO_TEAM.stadiumArabic
      },
      { 
        date: "2025-07-24", 
        type: "Final Training", 
        typeArabic: "التدريب الأخير",
        focus: "Team Shape", 
        focusArabic: "شكل الفريق",
        duration: "45 min", 
        location: "Training Ground",
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
    },

    liveMatchData: {
      score: { home: 2, away: 1 },
      minute: 67,
      isLive: true,
      events: [
        { minute: "67'", event: "Our Team pressing high, creating chances", type: "tactical" },
        { minute: "62'", event: "SUBSTITUTION: Fresh Player 2 IN", type: "sub" },
        { minute: "58'", event: "GOAL! Our Team 2-1", type: "goal" }
      ],
      substitutions: [
        { out: "Salem Al-Dawsari", in: "Fresh Player 1", minute: "45'" },
        { out: "Fahad Al-Muwallad", in: "Fresh Player 2", minute: "62'" }
      ],
      stats: {
        possession: { home: 58, away: 42 },
        shots: { home: 7, away: 4 },
        shotsOnTarget: { home: 4, away: 2 },
        corners: { home: 3, away: 1 },
        fouls: { home: 8, away: 12 }
      }
    },

    reports: [
      { 
        title: "Al Nassr vs Our Team - Match Analysis", 
        titleArabic: "النصر ضد فريقنا - تحليل المباراة",
        date: "2025-07-15", 
        type: "Match Report", 
        typeArabic: "تقرير مباراة",
        status: "completed" 
      },
      { 
        title: "Salem Al-Dawsari - Performance Review", 
        titleArabic: "سالم الدوسري - مراجعة الأداء",
        date: "2025-07-14", 
        type: "Player Analysis", 
        typeArabic: "تحليل لاعب",
        status: "completed" 
      },
      { 
        title: "Tactical Training Session #12", 
        titleArabic: "جلسة التدريب التكتيكي #12",
        date: "2025-07-13", 
        type: "Training Report", 
        typeArabic: "تقرير تدريب",
        status: "draft" 
      }
    ]
  };

  // Utility functions
  const getAvailabilityColor = (availability) => {
    switch (availability) {
      case 'available': return 'text-green-600';
      case 'minor_injury': return 'text-amber-600';
      case 'suspended': return 'text-red-600';
      case 'major_injury': return 'text-red-700';
      default: return 'text-gray-500';
    }
  };

  const getAvailabilityBg = (availability) => {
    switch (availability) {
      case 'available': return 'bg-green-50 border-green-200';
      case 'minor_injury': return 'bg-amber-50 border-amber-200';
      case 'suspended': return 'bg-red-50 border-red-200';
      case 'major_injury': return 'bg-red-100 border-red-300';
      default: return 'bg-gray-50 border-gray-200';
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

  // Analysis View
  const AnalysisView = () => (
    <div className={`space-y-6 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
        <h2 className="text-2xl font-semibold text-gray-900">{t('opponentAnalysis')}</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center">
          <Plus className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
          {t('newAnalysis')}
        </button>
      </div>

      {/* Search and Create New Analysis */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('startNewAnalysis')}</h3>
        <div className={`flex space-x-4 ${isRTL ? 'space-x-reverse flex-row-reverse' : ''}`}>
          <input
            type="text"
            value={opponentInput}
            onChange={(e) => setOpponentInput(e.target.value)}
            placeholder={t('enterOpponentName')}
            className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="bg-blue-600 text-white font-medium py-3 px-8 rounded-xl hover:bg-blue-700 transition-all flex items-center">
            <Search className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {t('analyze')}
          </button>
        </div>
      </div>

      {/* Analysis Categories */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: t('tacticalAnalysisCategory'), icon: Brain, color: "purple", desc: t('formationAnalysis') },
          { title: t('playerAnalysisCategory'), icon: Users, color: "blue", desc: t('keyPlayersWeaknesses') },
          { title: t('setPiecesCategory'), icon: Flag, color: "green", desc: t('deadBallSituations') },
          { title: t('recentFormCategory'), icon: TrendingUp, color: "amber", desc: t('latestPerformanceTrends') },
          { title: t('injuryReportsCategory'), icon: Heart, color: "red", desc: t('playerAvailability') },
          { title: t('newsIntelligenceCategory'), icon: Bell, color: "orange", desc: t('latestTeamUpdates') }
        ].map((category, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer">
            <category.icon className={`text-${category.color}-600 w-8 h-8 mb-3`} />
            <h3 className="text-gray-900 font-semibold mb-2">{category.title}</h3>
            <p className="text-gray-600 text-sm">{category.desc}</p>
          </div>
        ))}
      </div>

      {/* Recent Analyses */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('recentAnalyses')}</h3>
        <div className="space-y-3">
          {mockData.recentAnalysis.map((analysis, idx) => (
            <div key={idx} className={`flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className={`flex items-center space-x-4 ${isRTL ? 'space-x-reverse flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-semibold text-sm">
                  {(isRTL ? analysis.opponentArabic : analysis.opponent).substring(0, 2)}
                </div>
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <h4 className="text-gray-900 font-semibold">
                    {isRTL ? analysis.opponentArabic : analysis.opponent}
                  </h4>
                  <p className="text-gray-600 text-sm">{analysis.date}</p>
                </div>
              </div>
              <div className={`flex items-center space-x-4 ${isRTL ? 'space-x-reverse flex-row-reverse' : ''}`}>
                <div className="text-center">
                  <p className="text-green-600 font-semibold">{analysis.confidence}%</p>
                  <p className="text-gray-500 text-xs">{t('confidence')}</p>
                </div>
                <button className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  {t('view')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Squad Management View
  const SquadView = () => (
    <div className={`space-y-6 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
        <h2 className="text-2xl font-semibold text-gray-900">{t('squadManagement')}</h2>
        <div className={`flex items-center space-x-4 ${isRTL ? 'space-x-reverse flex-row-reverse' : ''}`}>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-200 transition-colors flex items-center font-medium">
            <Filter className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {t('filter')}
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center">
            <Plus className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {t('addPlayer')}
          </button>
        </div>
      </div>

      {/* Squad Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="text-center">
            <Users className="text-blue-600 w-8 h-8 mx-auto mb-2" />
            <h3 className="text-2xl font-semibold text-gray-900">{mockData.squad.length}</h3>
            <p className="text-blue-600 text-sm">{t('totalPlayers')}</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="text-center">
            <Heart className="text-green-600 w-8 h-8 mx-auto mb-2" />
            <h3 className="text-2xl font-semibold text-gray-900">
              {mockData.squad.filter(p => p.availability === 'available').length}
            </h3>
            <p className="text-green-600 text-sm">{t('available')}</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="text-center">
            <AlertCircle className="text-amber-600 w-8 h-8 mx-auto mb-2" />
            <h3 className="text-2xl font-semibold text-gray-900">
              {mockData.squad.filter(p => p.availability === 'minor_injury').length}
            </h3>
            <p className="text-amber-600 text-sm">{t('minorInjuries')}</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="text-center">
            <Shield className="text-red-600 w-8 h-8 mx-auto mb-2" />
            <h3 className="text-2xl font-semibold text-gray-900">
              {mockData.squad.filter(p => p.availability === 'suspended').length}
            </h3>
            <p className="text-red-600 text-sm">{t('suspended')}</p>
          </div>
        </div>
      </div>

      {/* Squad Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {mockData.squad.map((player) => (
          <div 
            key={player.id} 
            className={`bg-white rounded-2xl p-4 shadow-sm border hover:shadow-md transition-all cursor-pointer ${getAvailabilityBg(player.availability)}`}
            onClick={() => setSelectedPlayer(player)}
          >
            <div className={`flex items-center justify-between mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="text-2xl">{player.nationality}</div>
              <div className={`px-2 py-1 rounded-lg text-xs font-semibold ${getAvailabilityColor(player.availability)} bg-white`}>
                {player.position}
              </div>
            </div>
            
            <h3 className="text-gray-900 font-semibold text-sm mb-2">
              {isRTL ? player.nameArabic : player.name}
            </h3>
            
            <div className="space-y-2">
              <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-gray-600 text-xs">{t('fitness')}</span>
                <span className="text-gray-900 text-xs font-semibold">{player.fitness}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div 
                  className="bg-green-500 h-1.5 rounded-full transition-all duration-300"
                  style={{ width: `${player.fitness}%` }}
                ></div>
              </div>
              
              <div className={`flex items-center justify-between mt-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-gray-600 text-xs">{t('form')}</span>
                <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Star className={`text-amber-500 w-3 h-3 ${isRTL ? 'ml-1' : 'mr-1'}`} />
                  <span className="text-gray-900 text-xs font-semibold">{player.form}</span>
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
          <div className="bg-white rounded-2xl p-6 shadow-xl max-w-md w-full">
            <div className={`flex items-center justify-between mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <h3 className="text-xl font-semibold text-gray-900">
                {isRTL ? selectedPlayer.nameArabic : selectedPlayer.name}
              </h3>
              <button 
                onClick={() => setSelectedPlayer(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-4xl mb-2">{selectedPlayer.nationality}</div>
                <div className={`inline-block px-3 py-1 rounded-lg text-sm font-semibold ${getAvailabilityBg(selectedPlayer.availability)} ${getAvailabilityColor(selectedPlayer.availability)}`}>
                  {selectedPlayer.position}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <p className="text-gray-600 text-sm">{t('fitness')}</p>
                  <p className="text-gray-900 text-xl font-semibold">{selectedPlayer.fitness}%</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <p className="text-gray-600 text-sm">{t('form')}</p>
                  <p className="text-gray-900 text-xl font-semibold">{selectedPlayer.form}</p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-1">{t('status')}</p>
                <p className={`font-semibold ${getAvailabilityColor(selectedPlayer.availability)}`}>
                  {selectedPlayer.availability.replace('_', ' ').toUpperCase()}
                </p>
              </div>
              
              <div className={`flex space-x-2 ${isRTL ? 'space-x-reverse flex-row-reverse' : ''}`}>
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors font-medium">
                  {t('viewStats')}
                </button>
                <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-xl hover:bg-gray-200 transition-colors font-medium">
                  {t('editPlayer')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // Training View
  const TrainingView = () => (
    <div className={`space-y-6 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
        <h2 className="text-2xl font-semibold text-gray-900">{t('trainingManagement')}</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center">
          <Plus className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
          {t('planSession')}
        </button>
      </div>

      {/* Training Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className={`flex items-center justify-between mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Calendar className="text-purple-600 w-8 h-8" />
            <span className="text-purple-600 text-sm font-medium">{t('thisWeek')}</span>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900">4</h3>
          <p className="text-gray-600 text-sm">{t('trainingSessions')}</p>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className={`flex items-center justify-between mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Timer className="text-green-600 w-8 h-8" />
            <span className="text-green-600 text-sm font-medium">Total</span>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900">5.5h</h3>
          <p className="text-gray-600 text-sm">{t('trainingTime')}</p>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className={`flex items-center justify-between mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Target className="text-blue-600 w-8 h-8" />
            <span className="text-blue-600 text-sm font-medium">{t('focus')}</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{t('tactical')}</h3>
          <p className="text-gray-600 text-sm">Primary Focus</p>
        </div>
      </div>

      {/* This Week's Schedule */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('thisWeeksSchedule')}</h3>
        <div className="grid gap-4">
          {mockData.trainingSchedule.map((session, idx) => (
            <div key={idx} className={`flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className={`flex items-center space-x-4 ${isRTL ? 'space-x-reverse flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                  <Calendar className="text-white w-6 h-6" />
                </div>
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <h4 className="text-gray-900 font-semibold">
                    {isRTL ? session.typeArabic : session.type}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {isRTL ? session.focusArabic : session.focus}
                  </p>
                </div>
              </div>
              <div className={`text-${isRTL ? 'left' : 'right'}`}>
                <p className="text-gray-900 font-semibold">{session.date}</p>
                <p className="text-blue-600 text-sm font-medium">{session.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Training Categories and Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('trainingCategories')}</h3>
          <div className="space-y-3">
            {[
              { name: t('tacticalTraining'), icon: Brain, sessions: 8 },
              { name: "Physical Conditioning", icon: Activity, sessions: 6 },
              { name: "Technical Skills", icon: Target, sessions: 4 },
              { name: "Set Pieces", icon: Flag, sessions: 3 }
            ].map((category, idx) => (
              <div key={idx} className={`flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <category.icon className={`w-5 h-5 text-purple-600 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                  <span className="text-gray-900 font-medium">{category.name}</span>
                </div>
                <span className="text-gray-500 text-sm">{category.sessions} {t('sessions')}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('quickActionsTraining')}</h3>
          <div className="space-y-3">
            <button className="w-full bg-green-600 text-white p-3 rounded-xl hover:bg-green-700 transition-all flex items-center font-medium">
              <PlayCircle className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t('startTrainingSession')}
            </button>
            <button className="w-full bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-all flex items-center font-medium">
              <FileText className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t('createDrillPlan')}
            </button>
            <button className="w-full bg-purple-600 text-white p-3 rounded-xl hover:bg-purple-700 transition-all flex items-center font-medium">
              <Video className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t('reviewSessionVideo')}
            </button>
            <button className="w-full bg-orange-600 text-white p-3 rounded-xl hover:bg-orange-700 transition-all flex items-center font-medium">
              <BarChart3 className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t('performanceAnalytics')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Live Match View
  const LiveMatchView = () => (
    <div className={`space-y-6 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
        <h2 className="text-2xl font-semibold text-gray-900">{t('liveMatchCenter')}</h2>
        <div className={`flex items-center space-x-4 ${isRTL ? 'space-x-reverse flex-row-reverse' : ''}`}>
          <div className={`flex items-center space-x-2 ${isRTL ? 'space-x-reverse flex-row-reverse' : ''}`}>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-semibold">{t('live')}</span>
          </div>
        </div>
      </div>

      {/* Match Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className={`flex items-center justify-between mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className={`flex items-center space-x-4 ${isRTL ? 'space-x-reverse flex-row-reverse' : ''}`}>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                {DEMO_TEAM.logo}
              </div>
              <p className="text-gray-700 font-semibold">{isRTL ? DEMO_TEAM.nameArabic : DEMO_TEAM.name}</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-900 text-white px-6 py-3 rounded-xl">
                <p className="text-2xl font-bold">{mockData.liveMatchData.score.home} - {mockData.liveMatchData.score.away}</p>
                <p className="text-gray-300 text-sm">{mockData.liveMatchData.minute}'</p>
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                ⚡
              </div>
              <p className="text-gray-700 font-semibold">Opponent</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Tactical Adjustments */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('quickAdjustments')}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <button className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center font-medium">
            <Target className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {t('switchTo442')}
          </button>
          <button className="bg-red-600 text-white p-3 rounded-xl hover:bg-red-700 transition-all flex items-center justify-center font-medium">
            <Zap className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {t('highPressMode')}
          </button>
          <button className="bg-green-600 text-white p-3 rounded-xl hover:bg-green-700 transition-all flex items-center justify-center font-medium">
            <Activity className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {t('counterAttack')}
          </button>
          <button className="bg-purple-600 text-white p-3 rounded-xl hover:bg-purple-700 transition-all flex items-center justify-center font-medium">
            <Shield className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {t('defensiveShape')}
          </button>
        </div>
      </div>

      {/* Live Statistics and Substitutions */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('liveStatistics')}</h3>
          <div className="space-y-3">
            {[
              { stat: t('possession'), home: mockData.liveMatchData.stats.possession.home, away: mockData.liveMatchData.stats.possession.away },
              { stat: t('shots'), home: mockData.liveMatchData.stats.shots.home, away: mockData.liveMatchData.stats.shots.away },
              { stat: t('shotsOnTarget'), home: mockData.liveMatchData.stats.shotsOnTarget.home, away: mockData.liveMatchData.stats.shotsOnTarget.away },
              { stat: t('corners'), home: mockData.liveMatchData.stats.corners.home, away: mockData.liveMatchData.stats.corners.away },
              { stat: t('fouls'), home: mockData.liveMatchData.stats.fouls.home, away: mockData.liveMatchData.stats.fouls.away }
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className={`flex justify-between text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span>{stat.home}</span>
                  <span className="font-medium">{stat.stat}</span>
                  <span>{stat.away}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${(stat.home / (stat.home + stat.away)) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className={`flex items-center justify-between mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <h3 className="text-lg font-semibold text-gray-900">{t('substitutions')}</h3>
            <button className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              {t('planSubstitution')}
            </button>
          </div>
          <div className="space-y-3">
            {mockData.liveMatchData.substitutions.map((sub, idx) => (
              <div key={idx} className={`flex items-center justify-between p-3 bg-gray-50 rounded-xl ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={`flex items-center space-x-2 ${isRTL ? 'space-x-reverse flex-row-reverse' : ''}`}>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-900 font-medium text-sm">{sub.in}</span>
                  <span className="text-gray-500 text-sm">IN</span>
                </div>
                <span className="text-gray-500 text-xs">{sub.minute}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Match Timeline */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('matchTimeline')}</h3>
        <div className="space-y-3">
          {mockData.liveMatchData.events.map((event, idx) => (
            <div key={idx} className={`flex items-center space-x-4 p-3 bg-gray-50 rounded-xl ${isRTL ? 'space-x-reverse flex-row-reverse' : ''}`}>
              <div className={`w-2 h-2 rounded-full ${
                event.type === 'goal' ? 'bg-green-500' :
                event.type === 'sub' ? 'bg-blue-500' : 'bg-yellow-500'
              }`}></div>
              <span className="text-gray-500 text-sm font-medium min-w-12">{event.minute}</span>
              <p className="text-gray-900 font-medium text-sm">{event.event}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Dashboard View
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
            {mockData.tacticalInsights[language].slice(0, 2).map((insight, idx) => (
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
  );
