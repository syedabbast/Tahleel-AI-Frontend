<div className="apple-card apple-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="p-3 bg-orange-100 rounded-2xl w-fit mb-6">
                  <TrendingUp className="text-orange-600 w-8 h-8" />
                </div>
                <h3 className="apple-title-md mb-4">News Intelligence</h3>
                <p className="apple-body">
                  Real-time updates on injuries, transfers, and team changes
                </p>
              </div>

              <div className="apple-card apple-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="p-3 bg-green-100 rounded-2xl w-fit mb-6">
                  <Shield className="text-green-600 w-8 h-8" />
                </div>
                <h3 className="apple-title-md mb-4">Winning Strategies</h3>
                <p className="apple-body">
                  AI-generated tactical recommendations for competitive advantage
                </p>
              </div>
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
        <header className="apple-header">
          <div className="apple-container">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl mr-3">
                  <Trophy className="text-white w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">TAHLEEL.ai</h1>
                  <span className="text-orange-500 text-xs apple-arabic">تحليل</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setCurrentPage('main')}
                  className="apple-nav-item"
                >
                  New Analysis
                </button>
                <button
                  onClick={handleLogout}
                  className="apple-nav-item"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="apple-section">
          <div className="apple-container">
            {analysisData && (
              <>
                <div className="text-center mb-12 apple-fade-in">
                  <h2 className="apple-title-lg mb-4">
                    Strategic Analysis Report
                  </h2>
                  <p className="apple-subtitle">
                    vs {analysisData.opponent} • {analysisData.date}
                  </p>
                  <div className="flex items-center justify-center mt-6">
                    <div className="apple-badge apple-badge-gold text-lg px-6 py-3">
                      Confidence Score: {analysisData.confidenceScore}%
                    </div>
                  </div>
                </div>

                <div className="apple-grid apple-grid-cols-3 mb-12">
                  <div className="apple-card apple-slide-up">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-blue-100 rounded-2xl mr-4">
                        <Eye className="text-blue-600 w-6 h-6" />
                      </div>
                      <h3 className="apple-title-md">Identified Weaknesses</h3>
                    </div>
                    <ul className="apple-feature-list">
                      {analysisData.weaknesses?.map((weakness, idx) => (
                        <li key={idx} className="apple-feature-item">
                          <div className="apple-feature-icon">•</div>
                          <span className="apple-body">{weakness}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="apple-card apple-slide-up" style={{ animationDelay: '0.1s' }}>
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-orange-100 rounded-2xl mr-4">
                        <Target className="text-orange-600 w-6 h-6" />
                      </div>
                      <h3 className="apple-title-md">Recommended Strategies</h3>
                    </div>
                    <ul className="apple-feature-list">
                      {analysisData.strategies?.map((strategy, idx) => (
                        <li key={idx} className="apple-feature-item">
                          <div className="apple-feature-icon">✓</div>
                          <span className="apple-body">{strategy}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="apple-card apple-slide-up" style={{ animationDelay: '0.2s' }}>
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-green-100 rounded-2xl mr-4">
                        <Users className="text-green-600 w-6 h-6" />
                      </div>
                      <h3 className="apple-title-md">Formation</h3>
                    </div>
                    <div className="text-center">
                      <div className="apple-button-secondary text-2xl py-6 px-8 cursor-default">
                        {analysisData.formation}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="apple-grid apple-grid-cols-3 mb-12">
                  <div className="apple-card apple-slide-up" style={{ animationDelay: '0.3s' }}>
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-purple-100 rounded-2xl mr-4">
                        <BarChart3 className="text-purple-600 w-6 h-6" />
                      </div>
                      <h3 className="apple-title-md">Player Focus</h3>
                    </div>
                    <ul className="apple-feature-list">
                      {analysisData.keyPlayers?.map((player, idx) => (
                        <li key={idx} className="apple-feature-item">
                          <div className="apple-feature-icon">★</div>
                          <span className="apple-body">{player}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="apple-card apple-slide-up" style={{ animationDelay: '0.4s', gridColumn: 'span 2' }}>
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-indigo-100 rounded-2xl mr-4">
                        <Calendar className="text-indigo-600 w-6 h-6" />
                      </div>
                      <h3 className="apple-title-md">Recent Intelligence</h3>
                    </div>
                    <ul className="apple-feature-list">
                      {analysisData.recentNews?.map((news, idx) => (
                        <li key={idx} className="apple-feature-item">
                          <div className="apple-feature-icon">📰</div>
                          <span className="apple-body">{news}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="text-center apple-slide-up" style={{ animationDelay: '0.5s' }}>
                  <div className="space-x-4">
                    <button
                      onClick={() => setCurrentPage('main')}
                      className="apple-button-primary"
                    >
                      Analyze Another Team
                    </button>
                    <button
                      onClick={navigateToSubscriptions}
                      className="apple-button-outline"
                    >
                      View Subscription Plans
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
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
        color: 'from-orange-500 to-orange-600',
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
      <div className="min-h-screen bg-gray-50">
        <header className="apple-header">
          <div className="apple-container">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl mr-3">
                  <Trophy className="text-white w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">TAHLEEL.ai</h1>
                  <span className="text-orange-500 text-xs apple-arabic">تحليل</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setCurrentPage('main')}
                  className="apple-nav-item"
                >
                  ← Back to Demo
                </button>
                <button
                  onClick={handleLogout}
                  className="apple-nav-item"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="apple-section-lg">
          <div className="apple-container">
            <div className="text-center mb-16 apple-fade-in">
              <h2 className="apple-title-xl">
                Elite AI Intelligence
              </h2>
              <p className="apple-subtitle max-w-3xl mx-auto">
                Join championship teams worldwide using AI-powered tactical intelligence 
                to dominate their competition
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {subscriptionTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`apple-pricing-card apple-slide-up ${tier.popular ? 'popular' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tier.popular && (
                    <div className="apple-badge apple-badge-gold mb-6 mx-auto">
                      <Crown className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="apple-title-md mb-2">{tier.name}</h3>
                    <p className="apple-body text-gray-600 mb-6">{tier.description}</p>
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-gray-900">
                        {tier.price}
                      </span>
                      <span className="text-gray-500 text-lg">/{tier.period}</span>
                    </div>
                  </div>

                  <ul className="apple-feature-list mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="apple-feature-item">
                        <div className="apple-feature-icon">✓</div>
                        <span className="apple-body">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => {
                      selectTier(tier.name);
                      navigateToRegistration();
                    }}
                    className={`w-full ${tier.popular ? 'apple-button-secondary' : 'apple-button-primary'} flex items-center justify-center`}
                  >
                    {tier.cta}
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              ))}
            </div>

            <div className="apple-card text-center apple-slide-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="apple-title-md mb-4">Custom Enterprise Solutions</h3>
              <p className="apple-body text-gray-600 mb-6 max-w-2xl mx-auto">
                Need specialized features for your organization? We create tailored AI intelligence 
                solutions for major clubs and federations.
              </p>
              <button
                onClick={() => {
                  selectTier('Custom Enterprise');
                  navigateToRegistration();
                }}
                className="apple-button-outline"
              >
                Contact for Custom Pricing
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  };

  // Registration Page Component
  const RegistrationPage = () => {
    const [formData, setFormData] = useState({
      clubName: '',
      league: '',
      country: '',
      contactPerson: '',
      title: '',
      email: '',
      phone: '',
      subscriptionTier: selectedTier || '',
      numberOfTeams: '',
      primaryCompetition: '',
      specificFeatures: [],
      timeline: '',
      currentTools: '',
      teamSize: '',
      itReadiness: '',
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
        console.log('Form submitted:', formData);
        alert('Thank you! Our team will contact you within 24 hours to discuss your TAHLEEL.ai implementation.');
      } catch (error) {
        console.error('Registration error:', error);
        alert('There was an error submitting your registration. Please try again.');
      }
    };

    return (
      <div className="min-h-screen bg-gray-50">
        <header className="apple-header">
          <div className="apple-container">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl mr-3">
                  <Trophy className="text-white w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">TAHLEEL.ai</h1>
                  <span className="text-orange-500 text-xs apple-arabic">تحليل</span>
                </div>
              </div>
              <button
                onClick={goBackToSubscriptions}
                className="apple-nav-item"
              >
                ← Back to Pricing
              </button>
            </div>
          </div>
        </header>

        <main className="apple-section">
          <div className="apple-container-sm">
            <div className="text-center mb-12 apple-fade-in">
              <h2 className="apple-title-lg mb-4">
                Join Elite Teams
              </h2>
              <p className="apple-subtitle">
                Selected: <span className="text-orange-500 font-semibold">{selectedTier}</span>
              </p>
              <p className="apple-body text-gray-600">
                Complete this form and our team will contact you within 24 hours
              </p>
            </div>

            <div className="space-y-8">
              {/* Organization Details */}
              <div className="apple-card apple-slide-up">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-blue-100 rounded-2xl mr-4">
                    <Building className="text-blue-600 w-6 h-6" />
                  </div>
                  <h3 className="apple-title-md">Organization Details</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-3">
                      Club/Team Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.clubName}
                      onChange={(e) => updateFormData('clubName', e.target.value)}
                      className="apple-input"
                      placeholder="e.g., Al Hilal FC"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-3">
                      League/Competition *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.league}
                      onChange={(e) => updateFormData('league', e.target.value)}
                      className="apple-input"
                      placeholder="e.g., Saudi Pro League"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-3">
                      Country/Region *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => updateFormData('country', e.target.value)}
                      className="apple-input"
                      placeholder="e.g., Saudi Arabia"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-3">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contactPerson}
                      onChange={(e) => updateFormData('contactPerson', e.target.value)}
                      className="apple-input"
                      placeholder="Full name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-3">
                      Title/Position *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => updateFormData('title', e.target.value)}
                      className="apple-input"
                      placeholder="e.g., Head Coach, Technical Director"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-3">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className="apple-input"
                      placeholder="official@club.com"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-gray-700 text-sm font-semibold mb-3">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    className="apple-input"
                    placeholder="+966 50 123 4567"
                  />
                </div>
              </div>

              {/* Business Requirements */}
              <div className="apple-card apple-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-orange-100 rounded-2xl mr-4">
                    <Target className="text-orange-600 w-6 h-6" />
                  </div>
                  <h3 className="apple-title-md">Business Requirements</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-3">
                      Number of Teams to Analyze
                    </label>
                    <select
                      value={formData.numberOfTeams}
                      onChange={(e) => updateFormData('numberOfTeams', e.target.value)}
                      className="apple-select"
                    >
                      <option value="">Select range</option>
                      <option value="1-5">1-5 teams per month</option>
                      <option value="6-15">6-15 teams per month</option>
                      <option value="16-30">16-30 teams per month</option>
                      <option value="30+">30+ teams per month</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-3">
                      Primary Competition Focus
                    </label>
                    <input
                      type="text"
                      value={formData.primaryCompetition}
                      onChange={(e) => updateFormData('primaryCompetition', e.target.value)}
                      className="apple-input"
                      placeholder="e.g., AFC Champions League"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-gray-700 text-sm font-semibold mb-4">
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
                      <label key={feature} className="flex items-center cursor-pointer p-3 rounded-lg hover:bg-gray-50">
                        <div 
                          className={`apple-checkbox mr-3 ${formData.specificFeatures.includes(feature) ? 'checked' : ''}`}
                          onClick={() => handleFeatureToggle(feature)}
                        />
                        <span className="apple-body">{feature}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-gray-700 text-sm font-semibold mb-3">
                    Implementation Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => updateFormData('timeline', e.target.value)}
                    className="apple-select"
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
              <div className="apple-card apple-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-green-100 rounded-2xl mr-4">
                    <BarChart3 className="text-green-600 w-6 h-6" />
                  </div>
                  <h3 className="apple-title-md">Technical Information</h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-3">
                      Current Analysis Tools Used
                    </label>
                    <textarea
                      value={formData.currentTools}
                      onChange={(e) => updateFormData('currentTools', e.target.value)}
                      className="apple-textarea"
                      placeholder="e.g., Wyscout, InStat, internal analysis team..."
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-3">
                        Analysis Team Size
                      </label>
                      <select
                        value={formData.teamSize}
                        onChange={(e) => updateFormData('teamSize', e.target.value)}
                        className="apple-select"
                      >
                        <option value="">Select size</option>
                        <option value="1-2">1-2 people</option>
                        <option value="3-5">3-5 people</option>
                        <option value="6-10">6-10 people</option>
                        <option value="10+">10+ people</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-3">
                        IT Infrastructure Readiness
                      </label>
                      <select
                        value={formData.itReadiness}
                        onChange={(e) => updateFormData('itReadiness', e.target.value)}
                        className="apple-select"
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
              <div className="apple-card apple-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-purple-100 rounded-2xl mr-4">
                    <Star className="text-purple-600 w-6 h-6" />
                  </div>
                  <h3 className="apple-title-md">Additional Services</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {[
                    { key: 'trainingNeeded', label: 'Staff Training Required', desc: 'On-site or virtual training for your team' },
                    { key: 'customDashboard', label: 'Custom Dashboard Design', desc: 'Branded interface matching your club identity' },
                    { key: 'apiIntegrations', label: 'API Integrations', desc: 'Connect with existing club management systems' },
                    { key: 'arabicSupport', label: 'Arabic Language Support', desc: 'Full platform translation to Arabic' }
                  ].map((service) => (
                    <label key={service.key} className="flex items-start cursor-pointer p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all">
                      <div 
                        className={`apple-checkbox mr-3 mt-0.5 ${formData[service.key] ? 'checked' : ''}`}
                        onClick={() => updateFormData(service.key, !formData[service.key])}
                      />
                      <div>
                        <div className="apple-body font-semibold">{service.label}</div>
                        <div className="text-gray-500 text-sm">{service.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-3">
                    Additional Notes or Special Requirements
                  </label>
                  <textarea
                    value={formData.additionalNotes}
                    onChange={(e) => updateFormData('additionalNotes', e.target.value)}
                    className="apple-textarea"
                    placeholder="Any specific requirements, integration needs, or questions..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center apple-slide-up" style={{ animationDelay: '0.4s' }}>
                <button
                  onClick={handleSubmit}
                  className="apple-button-secondary text-lg px-12 py-4"
                >
                  Request Strategic Consultation
                </button>
                <p className="apple-body text-gray-600 mt-4">
                  Our team will contact you within 24 hours to discuss implementation
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>import React, { useState, useEffect } from 'react';
import { Search, Shield, TrendingUp, Target, Users, Calendar, AlertCircle, Trophy, BarChart3, Eye, Building, Check, Crown, ChevronRight, CheckCircle, Star, Zap } from 'lucide-react';
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
      <div className="min-h-screen apple-hero flex items-center justify-center">
        <div className="apple-container-sm">
          <div className="apple-card apple-fade-in" style={{ maxWidth: '480px', margin: '0 auto' }}>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-orange-500 rounded-3xl mr-4">
                  <Trophy className="text-white w-12 h-12" />
                </div>
                <div>
                  <h1 className="apple-title-md mb-2">TAHLEEL.ai</h1>
                  <p className="text-lg font-medium text-orange-500 apple-arabic">تحليل</p>
                </div>
              </div>
              <p className="apple-subtitle">Football Tactical Analysis Platform</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-3">
                  Access Code
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="apple-input"
                  placeholder="Enter access code"
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                />
              </div>

              {loginError && (
                <div className="flex items-center text-red-500 text-sm bg-red-50 p-3 rounded-lg">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  {loginError}
                </div>
              )}

              <button
                onClick={handleSubmit}
                className="apple-button-primary w-full"
              >
                Access Platform
              </button>
            </div>

            <div className="mt-8 text-center text-gray-400 text-sm">
              <p>© 2025 Auwire Technologies</p>
            </div>
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
        <header className="apple-header">
          <div className="apple-container">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl mr-3">
                  <Trophy className="text-white w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">TAHLEEL.ai</h1>
                  <span className="text-orange-500 text-xs apple-arabic">تحليل</span>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="apple-nav-item"
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        <main className="apple-section-lg">
          <div className="apple-container">
            <div className="text-center mb-16 apple-fade-in">
              <h2 className="apple-title-xl">
                AI-Powered Football Analysis
              </h2>
              <p className="apple-subtitle max-w-3xl mx-auto">
                Get winning strategies against any opponent with advanced AI analysis
              </p>
            </div>

            <div className="max-w-2xl mx-auto mb-16 apple-slide-up">
              <div className="apple-card">
                <h3 className="apple-title-md text-center mb-8">
                  Start Analysis
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-3">
                      Opponent Team Name
                    </label>
                    <input
                      type="text"
                      value={opponent}
                      onChange={(e) => setOpponent(e.target.value)}
                      className="apple-input"
                      placeholder="e.g., Real Madrid, Manchester City, Al Hilal"
                      onKeyPress={(e) => e.key === 'Enter' && handleAnalysis()}
                    />
                  </div>

                  {error && (
                    <div className="flex items-center text-red-500 text-sm bg-red-50 p-4 rounded-lg">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      {error}
                    </div>
                  )}

                  <button
                    onClick={handleAnalysis}
                    disabled={loading}
                    className="apple-button-primary w-full flex items-center justify-center"
                  >
                    {loading ? (
                      <>
                        <div className="apple-loading mr-3"></div>
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

            <div className="apple-grid apple-grid-cols-3">
              <div className="apple-card apple-slide-up">
                <div className="p-3 bg-blue-100 rounded-2xl w-fit mb-6">
                  <Target className="text-blue-600 w-8 h-8" />
                </div>
                <h3 className="apple-title-md mb-4">Tactical Analysis</h3>
                <p className="apple-body">
                  Deep dive into opponent formations, patterns, and weaknesses
                </p>
              </div>

              <div className="apple-card apple-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="p-3 bg-orange-100 rounded-2xl w-fit mb-6">
                  <Trending
