import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  MessageSquare, Users, Send, Paperclip, Smile, 
  Phone, Video, Search, MoreVertical, Check, CheckCheck,
  ArrowRight, Star, Shield, Zap, FileText, Image,
  Mic, Circle, MessageCircle, Group, Archive, Star as StarIcon
} from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const ChatPage: React.FC = () => {
  const navigate = useNavigate();
  const [message, setMessage] = React.useState('');

  const handleSend = () => {
    navigate('/pricing?trial=true');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const features = [
    {
      icon: MessageCircle,
      title: "Direct Messaging",
      description: "One-on-one conversations with colleagues, managers, and HR teams.",
      color: "blue"
    },
    {
      icon: Group,
      title: "Team Channels",
      description: "Create department channels for focused team discussions.",
      color: "purple"
    },
    {
      icon: FileText,
      title: "File Sharing",
      description: "Share documents, images, and files securely within conversations.",
      color: "green"
    },
    {
      icon: Video,
      title: "Video Calls",
      description: "Start instant video calls directly from chat for face-to-face meetings.",
      color: "red"
    },
    {
      icon: Archive,
      title: "Message History",
      description: "Search and access complete conversation history anytime.",
      color: "orange"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Enterprise-grade encryption for all communications.",
      color: "indigo"
    }
  ];

  const chatTypes = [
    { icon: Users, title: "1-on-1 Chat", count: "Direct messages with individuals" },
    { icon: Group, title: "Group Chat", count: "Create groups with multiple team members" },
    { icon: MessageSquare, title: "Channel Chat", count: "Department and project-based channels" },
    { icon: Video, title: "Video Conference", count: "Up to 50 participants" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-cyan-900 to-blue-900 min-h-[50vh] md:min-h-[60vh] flex items-center pt-40 pb-12">
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" 
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <ScrollReveal direction="down">
            <div className="flex items-center gap-2 text-blue-400 mb-4">
              <MessageSquare className="w-5 h-5" />
              <span className="text-sm font-medium">Communication</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Team Chat
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-lg text-slate-300 max-w-2xl">
              Seamless communication with built-in chat, file sharing, and team collaboration tools. Everything your team needs to stay connected and productive.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4} direction="up" distance={10}>
            <p className="text-sm text-blue-400 mt-4 font-medium">
              Built for Modern Teams
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Chat Preview */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <ScrollReveal delay={0.2} direction="up" distance={40}>
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="grid md:grid-cols-3 divide-x divide-slate-200">
              {/* Sidebar */}
              <div className="p-4 bg-slate-50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-slate-900">Messages</h3>
                  <button className="p-2 hover:bg-slate-200 rounded-lg">
                    <MessageSquare className="w-4 h-4 text-slate-600" />
                  </button>
                </div>
                <div className="space-y-2">
                  {[
                    { name: "HR Team", msg: "Welcome to VornHR Chat!", time: "2m", unread: 3 },
                    { name: "Engineering", msg: "Let's discuss the new feature", time: "1h", unread: 0 },
                    { name: "Marketing", msg: "Great work on the campaign!", time: "3h", unread: 1 }
                  ].map((chat, idx) => (
                    <div key={idx} className="p-3 hover:bg-white rounded-lg cursor-pointer transition-colors border border-transparent hover:border-slate-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-medium">{chat.name[0]}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-slate-900 truncate">{chat.name}</span>
                            <span className="text-xs text-slate-500">{chat.time}</span>
                          </div>
                          <p className="text-sm text-slate-500 truncate">{chat.msg}</p>
                        </div>
                        {chat.unread > 0 && (
                          <span className="w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                            {chat.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Chat Area */}
              <div className="col-span-2 flex flex-col h-[400px]">
                {/* Chat Header */}
                <div className="p-4 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-medium">HR</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">HR Team</h3>
                      <p className="text-xs text-green-600 flex items-center gap-1">
                        <Circle className="w-2 h-2 fill-current" /> Online
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-slate-100 rounded-lg">
                      <Phone className="w-4 h-4 text-slate-600" />
                    </button>
                    <button className="p-2 hover:bg-slate-100 rounded-lg">
                      <Video className="w-4 h-4 text-slate-600" />
                    </button>
                    <button className="p-2 hover:bg-slate-100 rounded-lg">
                      <MoreVertical className="w-4 h-4 text-slate-600" />
                    </button>
                  </div>
                </div>
                
                {/* Messages */}
                <div className="flex-1 p-4 overflow-y-auto space-y-4">
                  <div className="flex items-end gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-xs font-medium">HR</span>
                    </div>
                    <div className="bg-slate-100 rounded-2xl rounded-bl-md px-4 py-2 max-w-xs">
                      <p className="text-sm text-slate-700">Welcome to VornHR Chat! 👋</p>
                      <p className="text-xs text-slate-500 mt-1">9:00 AM</p>
                    </div>
                  </div>
                  <div className="flex items-end gap-2 justify-end">
                    <div className="bg-blue-600 text-white rounded-2xl rounded-br-md px-4 py-2 max-w-xs">
                      <p className="text-sm">Hi! Great to be here. How do I get started?</p>
                      <p className="text-xs text-blue-200 mt-1 flex items-center gap-1 justify-end">
                        9:01 AM <CheckCheck className="w-3 h-3" />
                      </p>
                    </div>
                  </div>
                  <div className="flex items-end gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-xs font-medium">HR</span>
                    </div>
                    <div className="bg-slate-100 rounded-2xl rounded-bl-md px-4 py-2 max-w-xs">
                      <p className="text-sm text-slate-700">Check out the onboarding guide in the files section!</p>
                      <p className="text-xs text-slate-500 mt-1">9:02 AM</p>
                    </div>
                  </div>
                </div>
                
                {/* Input */}
                <div className="p-4 border-t border-slate-200">
                  <div className="flex items-center gap-2 bg-slate-100 rounded-xl p-2">
                    <button className="p-2 hover:bg-slate-200 rounded-lg">
                      <Paperclip className="w-4 h-4 text-slate-600" />
                    </button>
                    <input 
                      type="text" 
                      placeholder="Type a message..." 
                      className="flex-1 bg-transparent outline-none text-sm"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                    />
                    <button className="p-2 hover:bg-slate-200 rounded-lg">
                      <Smile className="w-4 h-4 text-slate-600" />
                    </button>
                    <button 
                      onClick={handleSend}
                      className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Everything You Need to Communicate
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Powerful chat features designed for modern workplace communication
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
            >
              <div 
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-200 transition-all duration-300 h-full"
              >
                <div className={`w-12 h-12 bg-${feature.color}-100 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Chat Types */}
      <div className="bg-slate-100 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Flexible Communication Options
            </h2>
            <p className="text-slate-600">
              Choose the right communication mode for your team
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {chatTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-slate-200 flex items-center gap-4 hover:border-blue-300 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <type.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{type.title}</h3>
                  <p className="text-sm text-slate-500">{type.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Enterprise-Grade Security
          </h2>
          <p className="text-slate-300 mb-6 max-w-lg mx-auto">
            All your communications are encrypted with end-to-end security. Your data stays private and secure.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="flex items-center gap-2 text-slate-300">
              <Check className="w-4 h-4 text-green-400" /> End-to-End Encryption
            </span>
            <span className="flex items-center gap-2 text-slate-300">
              <Check className="w-4 h-4 text-green-400" /> SOC 2 Compliant
            </span>
            <span className="flex items-center gap-2 text-slate-300">
              <Check className="w-4 h-4 text-green-400" /> No Data Retention
            </span>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Start Chatting Today
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Get your team connected with VornHR's powerful chat features. Available on all devices.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/pricing?trial=true"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#003973] rounded-xl font-bold hover:bg-sky-50 transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                Get Started Free <ArrowRight className="w-5 h-5" />
              </Link>
            <Link 
              to="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Explore More</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { to: "/features", icon: Star, label: "Features" },
            { to: "/ai", icon: Zap, label: "AI Features" },
            { to: "/security", icon: Shield, label: "Security" },
          ].map((link, index) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                to={link.to} 
                className="p-4 bg-slate-50 rounded-xl hover:bg-white transition-all shadow-sm hover:shadow-md block group border border-transparent hover:border-blue-100"
              >
                <div className="flex items-center gap-3">
                  <link.icon className="w-5 h-5 text-blue-600 transition-transform group-hover:scale-110" />
                  <span className="font-medium text-slate-900 group-hover:text-blue-600">{link.label}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
