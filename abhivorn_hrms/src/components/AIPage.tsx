import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Sparkles, Cpu, ChevronRight, CheckCircle,
  Zap, MessageSquare, Users, BarChart3, Shield,
  ArrowRight, Star, Globe, Search, Calendar, Lightbulb,
  Bot, Workflow, Target, TrendingUp
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#003973] via-[#004e92] to-[#003973] pt-32 pb-20 md:pt-40 md:pb-28 min-h-[350px] md:min-h-[400px] flex flex-col items-center justify-center px-4 text-center overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-grid-white/[0.03] [background-size:40px_40px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto z-10">
          <ScrollReveal direction="down">
            <div className="flex items-center justify-center gap-2 text-sky-400 mb-6 font-semibold uppercase tracking-[0.2em] text-xs md:text-sm">
              <Brain className="w-5 h-5" />
              <span>Artificial Intelligence</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              AI-Powered Excellence
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed opacity-90">
              Transform your HR operations with cutting-edge artificial intelligence. From recruitment to performance management, VornHR's AI capabilities revolutionize how you manage your workforce.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4} direction="up" distance={10}>
            <div className="mt-8">
              <p className="text-sm text-sky-400 font-bold uppercase tracking-widest">
                Powered by Advanced Machine Learning & Precision NLP
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* AI Features Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 md:pt-16 md:pb-24">
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
            <ScrollReveal key={index} delay={index * 0.1} direction="up">
              <div 
                className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 h-full"
              >
                <div className="w-12 h-12 bg-blue-50 group-hover:bg-[#39a4de] rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-[#39a4de] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-[#003973] mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-[#2ab6ea]" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
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
              <ScrollReveal key={index} delay={index * 0.05} direction={index % 2 === 0 ? 'right' : 'left'} distance={20}>
                <div className="bg-white rounded-xl p-5 border border-slate-200 flex items-start gap-4 h-full hover:border-[#39a4de] transition-colors group">
                  <div className="w-10 h-10 bg-blue-50 group-hover:bg-[#39a4de] rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                    <cap.icon className="w-5 h-5 text-[#39a4de] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#003973]">{cap.title}</h3>
                    <p className="text-sm text-slate-500">{cap.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
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
            <ScrollReveal key={index} delay={index * 0.1} direction="right">
              <div className="relative flex items-start gap-6 mb-8 last:mb-0">
                <div className="w-16 h-16 bg-gradient-to-br from-[#003973] to-[#2ab6ea] rounded-full flex items-center justify-center flex-shrink-0 z-10 shadow-lg shadow-blue-200">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <div className="bg-white rounded-xl p-5 border border-slate-200 flex-1 hover:border-[#39a4de] transition-colors shadow-sm">
                  <h3 className="font-bold text-[#003973] mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Security & Privacy */}
      <div className="bg-gradient-to-br from-violet-50 to-purple-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-xl shadow-blue-500/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#003973]">AI & Data Privacy</h3>
                <p className="text-sm text-slate-500">Your data security is our priority</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="text-slate-700 font-medium">GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="text-slate-700 font-medium">Data Encrypted at Rest</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="text-slate-700 font-medium">No Third-Party AI Sharing</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="text-slate-700 font-medium">Full Audit Trail</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-gradient-to-r from-[#003973] to-[#39a4de] rounded-2xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 [background-size:20px_20px] pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-sky-300" />
              <span className="text-sky-100 font-semibold uppercase tracking-wider text-sm">Experience the Future</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your HR?
            </h2>
            <p className="text-blue-100 mb-10 max-w-xl mx-auto text-lg">
              Experience the power of AI in HR management. Book a demo today and see VornHR in action.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link 
                to="/pricing?trial=true"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#003973] rounded-xl font-bold hover:bg-sky-50 transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                Get Started Free <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#2ab6ea] text-white rounded-xl font-bold hover:bg-[#39a4de] transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                View Pricing
              </Link>
            </div>
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
              <span className="font-semibold text-slate-800 group-hover:text-[#39a4de]">Solutions</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AIPage;
