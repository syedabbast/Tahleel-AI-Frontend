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

  // Main render function
  const renderActiveView = () => {
    switch (activeModule) {
      case 'dashboard': return <DashboardView />;
      default: return <DashboardView />;
    }
  };

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
          {renderActiveView()}
        </main>
      </div>
    </div>
  );
};

export default CoachDashboard;

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
