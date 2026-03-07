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
      <div className="bg-gradient-to-r from-rose-900 via-pink-900 to-rose-900 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-rose-400 mb-4">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm font-medium">Communication</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real-Time Chat
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Connect with your team instantly through text, voice, and video. Seamless communication that keeps everyone on the same page.
          </p>
          <p className="text-sm text-rose-400 mt-4 font-medium flex items-center gap-2">
            <Wifi className="w-4 h-4" /> Always Connected, Always Available
          </p>
        </div>
      </div>

      {/* Video Call Preview */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
          {/* Video Grid */}
          <div className="p-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {/* Main Speaker */}
              <div className="col-span-2 md:col-span-2 aspect-video bg-slate-800 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-rose-600 rounded-full flex items-center justify-center">
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
                    <div className="w-12 h-12 bg-rose-600/80 rounded-full flex items-center justify-center">
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
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-50 transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-${feature.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm">{feature.description}</p>
            </div>
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
                  <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                    <span className="text-rose-600 font-medium text-sm">
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
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 md:p-12">
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
        <div className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Start Communicating Today
          </h2>
          <p className="text-rose-100 mb-8 max-w-xl mx-auto">
            Connect with your team instantly. Video calls, voice chat, and messaging all in one place.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-rose-600 rounded-lg font-medium hover:bg-rose-50 transition-colors"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-rose-700 text-white rounded-lg font-medium hover:bg-rose-800 transition-colors"
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
            to="/chat" 
            className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-rose-600" />
              <span className="font-medium text-slate-900 group-hover:text-rose-600">Team Chat</span>
            </div>
          </Link>
          <Link 
            to="/notifications" 
            className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-rose-600" />
              <span className="font-medium text-slate-900 group-hover:text-rose-600">Notifications</span>
            </div>
          </Link>
          <Link 
            to="/features" 
            className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Star className="w-5 h-5 text-rose-600" />
              <span className="font-medium text-slate-900 group-hover:text-rose-600">All Features</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RealTimeChatPage;
