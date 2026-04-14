import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, TrendingUp, TrendingDown, Users, DollarSign,
  Calendar, Download, Filter, ArrowUp, ArrowDown,
  PieChart, Activity, Target, Brain, ChevronRight,
  ArrowRight, Clock, CheckCircle, AlertTriangle, Star,
  Zap, Eye, FileText, RefreshCw
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const AdvancedAnalyticsPage: React.FC = () => {
  const metrics = [
    { 
      title: "Total Employees", 
      value: "1,247", 
      change: "+12%", 
      positive: true,
      icon: Users,
      color: "blue"
    },
    { 
      title: "Turnover Rate", 
      value: "8.5%", 
      change: "-2.3%", 
      positive: true,
      icon: TrendingDown,
      color: "green"
    },
    { 
      title: "Payroll", 
      value: "$2.4M", 
      change: "+5.2%", 
      positive: true,
      icon: DollarSign,
      color: "purple"
    },
    { 
      title: "Productivity", 
      value: "94%", 
      change: "+3.1%", 
      positive: true,
      icon: Activity,
      color: "orange"
    }
  ];

  const charts = [
    { title: "Headcount Growth", type: "line", data: "Monthly employee count trend" },
    { title: "Department Distribution", type: "pie", data: "Employees by department" },
    { title: "Leave Analytics", type: "bar", data: "Leave patterns by month" },
    { title: "Performance Scores", type: "radar", data: "Team performance overview" }
  ];

  const insights = [
    {
      type: "success",
      title: "Turnover Decreasing",
      description: "Employee turnover has decreased by 2.3% compared to last quarter.",
      icon: CheckCircle
    },
    {
      type: "warning",
      title: "Leave Balance Alert",
      description: "15 employees are approaching their leave balance limits.",
      icon: AlertTriangle
    },
    {
      type: "info",
      title: "Recruitment Update",
      description: "23 new hires are scheduled to join next month.",
      icon: Users
    },
    {
      type: "success",
      title: "Productivity Peak",
      description: "Team performance is at its highest in the past 6 months.",
      icon: TrendingUp
    }
  ];

  const features = [
    {
      icon: BarChart3,
      title: "Custom Dashboards",
      description: "Build personalized dashboards with drag-and-drop widgets."
    },
    {
      icon: Download,
      title: "Export Reports",
      description: "Download reports in PDF, Excel, or CSV format instantly."
    },
    {
      icon: Brain,
      title: "AI Predictions",
      description: "Get AI-powered forecasts for workforce planning."
    },
    {
      icon: Filter,
      title: "Advanced Filters",
      description: "Slice and dice data with powerful filtering options."
    },
    {
      icon: Eye,
      title: "Real-time Data",
      description: "See live metrics as data flows into the system."
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Track KPIs and measure progress against targets."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#003973] via-[#004e92] to-[#003973] pt-32 pb-20 md:pt-40 md:pb-28 min-h-[350px] md:min-h-[400px] flex flex-col items-center justify-center px-4 text-center overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-grid-white/[0.03] [background-size:40px_40px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto z-10">
          <ScrollReveal direction="down">
            <div className="flex items-center justify-center gap-2 text-sky-400 mb-6 font-semibold uppercase tracking-[0.2em] text-xs md:text-sm">
              <BarChart3 className="w-5 h-5" />
              <span>Advanced Analytics</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Workforce Intelligence
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed opacity-90">
              Transform your HR data into actionable insights. Customizable dashboards, real-time metrics, and AI-powered predictions to drive better workforce decisions.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4} direction="up" distance={10}>
             <div className="mt-8">
              <p className="text-sm text-sky-400 font-bold uppercase tracking-widest">
                Data-Driven HR Excellence
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid md:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up">
              <div 
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg h-full"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-${metric.color}-100 rounded-xl flex items-center justify-center`}>
                    <metric.icon className={`w-6 h-6 text-${metric.color}-600`} />
                  </div>
                  <span className={`flex items-center gap-1 text-sm font-medium ${
                    metric.positive ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.positive ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                    {metric.change}
                  </span>
                </div>
                <h3 className="text-sm text-slate-500 mb-1">{metric.title}</h3>
                <p className="text-2xl font-bold text-slate-900">{metric.value}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Dashboard Preview */}
      <ScrollReveal delay={0.2} direction="up" distance={40}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-slate-900">HR Overview Dashboard</h3>
                <p className="text-sm text-slate-500">Last updated: Just now</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-slate-100 rounded-lg flex items-center gap-2 text-sm text-slate-600">
                  <Filter className="w-4 h-4" /> Filter
                </button>
                <button className="p-2 hover:bg-slate-100 rounded-lg flex items-center gap-2 text-sm text-slate-600">
                  <Download className="w-4 h-4" /> Export
                </button>
                <button className="p-2 hover:bg-slate-100 rounded-lg">
                  <RefreshCw className="w-4 h-4 text-slate-600" />
                </button>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 p-6">
              {/* Chart Placeholder 1 */}
              <div className="bg-slate-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium text-slate-900">Headcount Growth</h4>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <div className="h-40 flex items-end gap-2">
                  {[40, 55, 45, 60, 75, 70, 85, 90].map((height, idx) => (
                    <div key={idx} className="flex-1 bg-emerald-200 rounded-t hover:bg-emerald-300 transition-colors" style={{ height: `${height}%` }}></div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-slate-500">
                  <span>Jan</span><span>Dec</span>
                </div>
              </div>
              {/* Chart Placeholder 2 */}
              <div className="bg-slate-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium text-slate-900">Department Distribution</h4>
                  <PieChart className="w-5 h-5 text-purple-500" />
                </div>
                <div className="h-40 flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="64" cy="64" r="50" stroke="#e2e8f0" strokeWidth="20" fill="none" />
                      <circle cx="64" cy="64" r="50" stroke="#10b981" strokeWidth="20" fill="none" strokeDasharray="100 314" />
                      <circle cx="64" cy="64" r="50" stroke="#3b82f6" strokeWidth="20" fill="none" strokeDasharray="80 314" strokeDashoffset="-100" />
                      <circle cx="64" cy="64" r="50" stroke="#8b5cf6" strokeWidth="20" fill="none" strokeDasharray="60 314" strokeDashoffset="-180" />
                      <circle cx="64" cy="64" r="50" stroke="#f59e0b" strokeWidth="20" fill="none" strokeDasharray="74 314" strokeDashoffset="-240" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 justify-center mt-2">
                  <span className="flex items-center gap-1 text-xs"><span className="w-2 h-2 bg-emerald-500 rounded-full"></span>Engineering</span>
                  <span className="flex items-center gap-1 text-xs"><span className="w-2 h-2 bg-blue-500 rounded-full"></span>Sales</span>
                  <span className="flex items-center gap-1 text-xs"><span className="w-2 h-2 bg-purple-500 rounded-full"></span>Marketing</span>
                  <span className="flex items-center gap-1 text-xs"><span className="w-2 h-2 bg-amber-500 rounded-full"></span>HR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* AI Insights */}
      <div className="bg-slate-100 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">AI-Powered Insights</h2>
              <p className="text-slate-600">Smart recommendations based on your data</p>
            </div>
            <Link 
              to="/ai"
              className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1"
            >
              Learn more <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {insights.map((insight, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction={index % 2 === 0 ? 'right' : 'left'}>
                <div 
                  className={`bg-white rounded-xl p-5 border h-full ${
                    insight.type === 'success' ? 'border-green-200' :
                    insight.type === 'warning' ? 'border-amber-200' : 'border-blue-200'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      insight.type === 'success' ? 'bg-green-100' :
                      insight.type === 'warning' ? 'bg-amber-100' : 'bg-blue-100'
                    }`}>
                      <insight.icon className={`w-5 h-5 ${
                        insight.type === 'success' ? 'text-green-600' :
                        insight.type === 'warning' ? 'text-amber-600' : 'text-blue-600'
                      }`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{insight.title}</h3>
                      <p className="text-sm text-slate-600 mt-1">{insight.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Powerful Analytics Features
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Everything you need to transform raw data into strategic insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up">
              <div 
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-50 transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Report Templates */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Ready-Made Report Templates
            </h2>
            <p className="text-slate-600">
              Generate professional reports instantly with pre-built templates
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: Users, title: "Headcount Report", desc: "Employee count and demographics" },
              { icon: DollarSign, title: "Payroll Summary", desc: "Compensation and benefits analysis" },
              { icon: Calendar, title: "Attendance Report", desc: "Time and attendance overview" },
              { icon: Target, title: "Performance Review", desc: "Employee performance metrics" },
              { icon: TrendingUp, title: "Turnover Analysis", desc: "Hiring and attrition trends" },
              { icon: FileText, title: "Custom Reports", desc: "Build your own report" }
            ].map((report, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-slate-200 hover:border-emerald-300 transition-colors cursor-pointer">
                <div className="flex items-center gap-3 mb-2">
                  <report.icon className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-semibold text-slate-900">{report.title}</h3>
                </div>
                <p className="text-sm text-slate-500">{report.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-gradient-to-r from-[#003973] to-[#39a4de] rounded-2xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 [background-size:20px_20px] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Using Analytics Today
            </h2>
            <p className="text-blue-100 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              Make data-driven decisions with powerful analytics. Available on all VornHR plans.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link
              to="/pricing?trial=true"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-[#003973] bg-white rounded-xl hover:bg-slate-50 transition-colors"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
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
            to="/ai" 
            className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Brain className="w-5 h-5 text-emerald-600" />
              <span className="font-medium text-slate-900 group-hover:text-emerald-600">AI Features</span>
            </div>
          </Link>
          <Link 
            to="/features" 
            className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Star className="w-5 h-5 text-emerald-600" />
              <span className="font-medium text-slate-900 group-hover:text-emerald-600">All Features</span>
            </div>
          </Link>
          <Link 
            to="/updates" 
            className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-emerald-600" />
              <span className="font-medium text-slate-900 group-hover:text-emerald-600">Product Updates</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAnalyticsPage;
