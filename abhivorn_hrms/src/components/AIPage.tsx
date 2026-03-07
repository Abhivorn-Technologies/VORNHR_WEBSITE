import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Sparkles, Cpu, ChevronRight, CheckCircle,
  Zap, MessageSquare, Users, BarChart3, Shield,
  ArrowRight, Star, Globe, Search, Calendar, Lightbulb,
  Bot, Workflow, Target, TrendingUp
} from 'lucide-react';

const AIPage: React.FC = () => {
  const aiFeatures = [
    {
      icon: Users,
      title: "Smart Recruitment",
      description: "AI-powered candidate screening and matching to find the perfect fit for your team.",
      benefits: ["Automated resume screening", "Candidate matching", "Interview scheduling", "Bias-free selection"]
    },
    {
      icon: MessageSquare,
      title: "HR Assistant",
      description: "24/7 AI-powered support for employee queries and HR processes.",
      benefits: ["Instant responses", "Policy answers", "Leave management", "Policy explanations"]
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Forecast workforce trends and make data-driven decisions with AI insights.",
      benefits: ["Turnover prediction", "Performance forecasting", "Capacity planning", "Trend analysis"]
    },
    {
      icon: Workflow,
      title: "Process Automation",
      description: "Automate repetitive HR tasks and focus on strategic initiatives.",
      benefits: ["Auto-onboarding", "Approval workflows", "Report generation", "Data entry automation"]
    },
    {
      icon: Target,
      title: "Performance Insights",
      description: "AI analysis of employee performance to identify growth opportunities.",
      benefits: ["360-degree feedback", "Goal tracking", "Skill gaps", "Growth recommendations"]
    },
    {
      icon: Zap,
      title: "Smart Notifications",
      description: "Intelligent notification system that prioritizes important updates.",
      benefits: ["Priority filtering", "Personalized alerts", "Scheduled digests", "Multi-channel delivery"]
    }
  ];

  const capabilities = [
    { icon: Brain, title: "Natural Language Processing", desc: "Understand and respond to employee queries naturally" },
    { icon: Search, title: "Intelligent Search", desc: "Find information across all HR documents instantly" },
    { icon: Calendar, title: "Smart Scheduling", desc: "AI-powered meeting and interview scheduling" },
    { icon: Lightbulb, title: "Insights & Recommendations", desc: "Actionable suggestions based on workforce data" },
    { icon: Bot, title: "Chatbot Integration", desc: "Seamless conversational AI for employee engagement" },
    { icon: TrendingUp, title: "Trend Prediction", desc: "Forecast workforce changes before they happen" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-violet-900 via-purple-900 to-violet-900 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-violet-400 mb-4">
            <Brain className="w-5 h-5" />
            <span className="text-sm font-medium">Artificial Intelligence</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI-Powered HR Solutions
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Transform your HR operations with cutting-edge artificial intelligence. From recruitment to performance management, VornHR's AI capabilities revolutionize how you manage your workforce.
          </p>
          <p className="text-sm text-violet-400 mt-4 font-medium">
            Powered by Advanced Machine Learning & NLP
          </p>
        </div>
      </div>

      {/* AI Features Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Intelligent HR Features
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our AI-powered features are designed to streamline operations, reduce manual work, and provide actionable insights for better decision-making.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-violet-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-violet-500" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Capabilities Section */}
      <div className="bg-slate-100 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              AI Capabilities
            </h2>
            <p className="text-slate-600">
              Advanced technologies working together to power your HR operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {capabilities.map((cap, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-slate-200 flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <cap.icon className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{cap.title}</h3>
                  <p className="text-sm text-slate-500">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            How AI Works in VornHR
          </h2>
          <p className="text-slate-600">
            Seamless integration of AI into your daily HR operations
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-violet-200 hidden md:block"></div>
          
          {[
            { step: 1, title: "Data Collection", desc: "AI analyzes data from all HR modules securely" },
            { step: 2, title: "Pattern Recognition", desc: "Machine learning identifies patterns and trends" },
            { step: 3, title: "Insights Generation", desc: "Actionable recommendations are generated" },
            { step: 4, title: "Continuous Learning", desc: "AI improves with more data and feedback" }
          ].map((item, index) => (
            <div key={index} className="relative flex items-start gap-6 mb-8 last:mb-0">
              <div className="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center flex-shrink-0 z-10">
                <span className="text-white font-bold text-xl">{item.step}</span>
              </div>
              <div className="bg-white rounded-xl p-5 border border-slate-200 flex-1">
                <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security & Privacy */}
      <div className="bg-gradient-to-br from-violet-50 to-purple-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-violet-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">AI & Data Privacy</h3>
                <p className="text-sm text-slate-500">Your data security is our priority</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-slate-700">GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-slate-700">Data Encrypted at Rest</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-slate-700">No Third-Party AI Sharing</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-slate-700">Full Audit Trail</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-white" />
            <span className="text-violet-200 font-medium">Get Started with AI</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your HR?
          </h2>
          <p className="text-violet-100 mb-8 max-w-xl mx-auto">
            Experience the power of AI in HR management. Book a demo today and see VornHR in action.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-violet-600 rounded-lg font-medium hover:bg-violet-50 transition-colors"
            >
              Book a Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-violet-700 text-white rounded-lg font-medium hover:bg-violet-800 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>

      {/* Related Links */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Explore More</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Link 
            to="/updates" 
            className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-violet-600" />
              <span className="font-medium text-slate-900 group-hover:text-violet-600">Product Updates</span>
            </div>
          </Link>
          <Link 
            to="/features" 
            className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Brain className="w-5 h-5 text-violet-600" />
              <span className="font-medium text-slate-900 group-hover:text-violet-600">All Features</span>
            </div>
          </Link>
          <Link 
            to="/solutions" 
            className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-violet-600" />
              <span className="font-medium text-slate-900 group-hover:text-violet-600">Solutions</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AIPage;
