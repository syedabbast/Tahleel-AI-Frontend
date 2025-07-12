import React from 'react';
import { Trophy, CheckCircle, Crown, ChevronRight } from 'lucide-react';

const SubscriptionPage = ({ onSelectTier, onNavigateToRegistration }) => {
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
            <div className="text-blue-300 text-sm">
              Choose Your Intelligence Level
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
                  onSelectTier(tier.name);
                  onNavigateToRegistration();
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
              onSelectTier('Custom Enterprise');
              onNavigateToRegistration();
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

export default SubscriptionPage;
