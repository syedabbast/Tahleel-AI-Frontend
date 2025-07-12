import React, { useState } from 'react';
import { Trophy, Building, Target, BarChart3, Star, Check } from 'lucide-react';

const RegistrationPage = ({ selectedTier, onBack }) => {
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

  const handleSubmit = () => {
    // Here you would integrate with your backend API
    console.log('Form submitted:', formData);
    
    // You can send this data to your backend
    // Example: await axios.post(`${API_BASE_URL}/register`, formData);
    
    alert('Thank you! Our team will contact you within 24 hours to discuss your TAHLEEL.ai implementation.');
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
              onClick={onBack}
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

export default RegistrationPage;
