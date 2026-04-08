import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, Users, Send, Paperclip, Smile, 
  Phone, Video, Search, MoreVertical, Check, CheckCheck,
  ArrowRight, Star, Shield, Zap, FileText, Image,
  Mic, Circle, Group, Archive, Star as StarIcon, 
  MicOff, VideoOff, PhoneOff, Monitor, Hand,
  SmileIcon, MessageSquare, Wifi, WifiOff
} from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const RealTimeChatPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: "Instant Messaging",
      description: "Real-time message delivery with typing indicators and read receipts.",
      color: "yellow"
    },
    {
      icon: Video,
      title: "HD Video Calls",
      description: "Crystal clear video conferences with up to 50 participants.",
      color: "blue"
    },
    {
      icon: Users,
      title: "Team Channels",
      description: "Organized channels for departments, projects, and teams.",
      color: "purple"
    },
    {
      icon: FileText,
      title: "File Sharing",
      description: "Share documents, images, and files up to 100MB.",
      color: "green"
    },
    {
      icon: Shield,
      title: "End-to-End Encryption",
      description: "Enterprise-grade security for all your communications.",
      color: "indigo"
    },
    {
      icon: Archive,
      title: "Message History",
      description: "Search and access complete conversation history anytime.",
      color: "orange"
    }
  ];

  const callFeatures = [
    { icon: Video, label: "Video" },
    { icon: Mic, label: "Audio" },
    { icon: Monitor, label: "Share Screen" },
    { icon: Hand, label: "Raise Hand" },
    { icon: Users, label: "Participants" },
    { icon: MessageSquare, label: "Chat" }
  ];

  const participants = [
    { name: "Sarah Johnson", role: "HR Manager", status: "online" },
    { name: "Michael Chen", role: "Team Lead", status: "online" },
    { name: "Emily Davis", role: "Employee", status: "away" },
    { name: "James Wilson", role: "Employee", status: "offline" },
    { name: "Lisa Anderson", role: "HR Specialist", status: "online" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-cyan-900 to-blue-900 min-h-[50vh] md:min-h-[60vh] flex items-center pt-40 pb-12">
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -45, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -right-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-[80px]" 
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <ScrollReveal direction="down">
            <div className="flex items-center gap-2 text-cyan-400 mb-4">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Communication</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Real-Time Chat
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-lg text-slate-300 max-w-2xl">
              Connect with your team instantly through text, voice, and video. Seamless communication that keeps everyone on the same page.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4} direction="up" distance={10}>
            <p className="text-sm text-cyan-400 mt-4 font-medium flex items-center gap-2">
              <Wifi className="w-4 h-4" /> Always Connected, Always Available
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Video Call Preview */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <ScrollReveal delay={0.2} direction="up" distance={40}>
          <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
            {/* Video Grid */}
            <div className="p-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {/* Main Speaker */}
                <div className="col-span-2 md:col-span-2 aspect-video bg-slate-800 rounded-xl relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">SJ</span>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-white text-sm">Sarah Johnson (You)</span>
                  </div>
                  <div className="absolute top-3 right-3 flex items-center gap-2">
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                      <Circle className="w-2 h-2 fill-current" /> REC
                    </span>
                  </div>
                </div>
                {/* Other Participants */}
                {[
                  { initials: "MC", name: "Michael Chen" },
                  { initials: "ED", name: "Emily Davis" },
                  { initials: "JW", name: "James Wilson" }
                ].map((p, idx) => (
                  <div key={idx} className="aspect-video bg-slate-800 rounded-xl relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-blue-600/80 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-white">{p.initials}</span>
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-2">
                      <span className="text-white text-xs">{p.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call Controls */}
            <div className="bg-slate-800 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-400">
                  <Wifi className="w-4 h-4 text-green-500" />
                  <span className="text-sm">00:12:45</span>
                  <span className="text-sm">|</span>
                  <Users className="w-4 h-4" />
                  <span className="text-sm">5 participants</span>
                </div>
                <div className="flex items-center gap-3">
                  <button className="p-3 bg-slate-700 hover:bg-slate-600 rounded-full text-white transition-colors">
                    <Mic className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-slate-700 hover:bg-slate-600 rounded-full text-white transition-colors">
                    <Video className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-red-600 hover:bg-red-700 rounded-full text-white transition-colors">
                    <PhoneOff className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-slate-700 hover:bg-slate-600 rounded-full text-white transition-colors">
                    <Monitor className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-slate-700 hover:bg-slate-600 rounded-full text-white transition-colors">
                    <SmileIcon className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-slate-700 hover:bg-slate-600 rounded-full text-white transition-colors">
                    <Hand className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Chat Features */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Powerful Communication Features
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Everything your team needs for seamless real-time collaboration
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

      {/* Participant List */}
      <div className="bg-slate-100 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Manage Participants Easily
            </h2>
            <p className="text-slate-600">
              View and manage all participants in your meetings
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            {participants.map((person, index) => (
              <div 
                key={index} 
                className="p-4 flex items-center justify-between border-b border-slate-100 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-medium text-sm">
                      {person.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">{person.name}</h4>
                    <p className="text-sm text-slate-500">{person.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="p-2 hover:bg-slate-100 rounded-lg">
                    <Mic className="w-4 h-4 text-slate-600" />
                  </button>
                  <button className="p-2 hover:bg-slate-100 rounded-lg">
                    <Video className="w-4 h-4 text-slate-600" />
                  </button>
                  <span className={`w-2 h-2 rounded-full ${
                    person.status === 'online' ? 'bg-green-500' :
                    person.status === 'away' ? 'bg-amber-500' : 'bg-slate-300'
                  }`}></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Integration Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-slate-600">
              VornHR Chat integrates with your favorite tools
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "Slack", desc: "Connect with Slack channels" },
              { name: "Microsoft Teams", desc: "Teams integration" },
              { name: "Google Calendar", desc: "Schedule meetings" }
            ].map((tool, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-slate-200 text-center">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="w-6 h-6 text-slate-600" />
                </div>
                <h3 className="font-semibold text-slate-900">{tool.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Start Communicating Today
          </h2>
          <p className="text-rose-100 mb-8 max-w-xl mx-auto">
            Connect with your team instantly. Video calls, voice chat, and messaging all in one place.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/pricing?trial=true"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 shadow-lg"
            >
              Get Started Free <ArrowRight className="w-4 h-4" />
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
            { to: "/chat", icon: MessageCircle, label: "Team Chat" },
            { to: "/notifications", icon: Zap, label: "Notifications" },
            { to: "/features", icon: Star, label: "All Features" },
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

export default RealTimeChatPage;
