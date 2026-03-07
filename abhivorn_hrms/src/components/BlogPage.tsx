import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Search, Calendar, User, Eye, MessageSquare,
  TrendingUp, Users, Lightbulb, Shield, Clock, Star,
  BookOpen, Heart, Zap, BarChart3, ChevronRight
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const categories = [
    { name: "All Posts", active: true },
    { name: "HR Trends", active: false },
    { name: "Payroll", active: false },
    { name: "Recruitment", active: false },
    { name: "Employee Wellness", active: false },
    { name: "Technology", active: false }
  ];

  const featuredPost = {
    title: "The Future of HR: How AI is Transforming Employee Management",
    excerpt: "Discover how artificial intelligence is revolutionizing HR processes, from recruitment to performance management, and what it means for the future of work.",
    category: "Technology",
    date: "March 5, 2024",
    readTime: "8 min read",
    image: "/hr_analytics.webp",
    author: "Sarah Chen"
  };

  const posts = [
    {
      title: "5 Essential Payroll Best Practices for 2024",
      excerpt: "Stay compliant and efficient with these proven payroll strategies that every HR professional should implement this year.",
      category: "Payroll",
      date: "March 3, 2024",
      readTime: "5 min read",
      image: "/payroll.webp",
      author: "Michael Ross"
    },
    {
      title: "Building a Positive Company Culture: A Complete Guide",
      excerpt: "Learn how to create an workplace environment that attracts talent, boosts retention, and drives organizational success.",
      category: "HR Trends",
      date: "February 28, 2024",
      readTime: "7 min read",
      image: "/employees.webp",
      author: "Emily Watson"
    },
    {
      title: "The Complete Guide to Modern Recruitment",
      excerpt: "From job postings to onboarding, discover the latest strategies and tools for hiring top talent in today's competitive market.",
      category: "Recruitment",
      date: "February 25, 2024",
      readTime: "10 min read",
      image: "/recruitment.webp",
      author: "Abhishek Vorn"
    },
    {
      title: "Employee Wellness Programs That Actually Work",
      excerpt: "Move beyond generic wellness initiatives with data-driven programs that genuinely improve employee health and productivity.",
      category: "Employee Wellness",
      date: "February 20, 2024",
      readTime: "6 min read",
      image: "/feature.webp",
      author: "Emily Watson"
    },
    {
      title: "Data-Driven HR: Leveraging Analytics for Better Decisions",
      excerpt: "Transform your HR decision-making process with actionable insights from workforce analytics and performance metrics.",
      category: "Technology",
      date: "February 15, 2024",
      readTime: "8 min read",
      image: "/hranalytics.webp",
      author: "Sarah Chen"
    },
    {
      title: "Remote Work Policies: Best Practices for HR",
      excerpt: "Navigate the new normal with effective remote work policies that maintain productivity while supporting employee wellbeing.",
      category: "HR Trends",
      date: "February 10, 2024",
      readTime: "6 min read",
      image: "/employee_portal.webp",
      author: "Michael Ross"
    }
  ];

  const popularPosts = [
    { title: "10 HR Metrics Every Manager Should Track", views: 12500 },
    { title: "How to Reduce Employee Turnover", views: 10200 },
    { title: "The Ultimate Payroll Checklist", views: 8900 },
    { title: "Building Your Dream Team", views: 7600 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#003973] via-[#00509E] to-[#003973] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            VornHR Blog
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Insights, tips, and trends to help you build better workplaces and manage your people more effectively
          </p>
        </div>
      </div>

      {/* Search & Categories */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    cat.active 
                      ? 'bg-[#003973] text-white' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-[#003973] w-full md:w-64"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
          <div className="grid md:grid-cols-2">
            <div className="h-64 md:h-auto bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
              <BookOpen className="w-16 h-16 text-slate-400" />
            </div>
            <div className="p-8 md:p-10">
              <span className="inline-block px-3 py-1 bg-[#003973]/10 text-[#003973] text-sm font-medium rounded-full mb-4">
                {featuredPost.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-slate-600 mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#003973]/10 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-[#003973]" />
                </div>
                <span className="font-medium text-slate-900">{featuredPost.author}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Posts Grid */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Latest Articles</h2>
            <div className="grid gap-6">
              {posts.map((post, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="grid md:grid-cols-3">
                    <div className="h-48 md:h-auto bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-slate-400" />
                    </div>
                    <div className="p-6 md:col-span-2">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded">
                          {post.category}
                        </span>
                        <span className="text-slate-400 text-sm">{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 hover:text-[#003973] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500">{post.date}</span>
                        <button className="text-[#003973] font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                          Read More <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-10">
              <button className="inline-flex items-center justify-center px-6 py-3 font-bold text-white bg-[#003973] rounded-xl hover:bg-[#00509E] transition-colors">
                Load More Articles
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Popular Posts */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#003973]" />
                Popular Posts
              </h3>
              <div className="space-y-4">
                {popularPosts.map((post, index) => (
                  <div key={index} className="group cursor-pointer">
                    <h4 className="text-slate-900 font-medium group-hover:text-[#003973] transition-colors">
                      {post.title}
                    </h4>
                    <span className="text-slate-500 text-sm flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {post.views.toLocaleString()} views
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-[#003973] to-[#00509E] rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Newsletter</h3>
              <p className="text-slate-300 text-sm mb-4">
                Get the latest HR insights delivered to your inbox
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg text-slate-900 mb-3 focus:outline-none"
              />
              <button className="w-full py-2 bg-white text-[#003973] font-bold rounded-lg hover:bg-slate-100 transition-colors">
                Subscribe
              </button>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {["HR Software", "Payroll", "Recruitment", "Employee Engagement", "Remote Work", "AI in HR", "Compliance", "Performance Management", "Benefits", "Onboarding"].map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full hover:bg-[#003973]/10 hover:text-[#003973] cursor-pointer transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Want to Write for Us?
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Share your HR expertise with our community of HR professionals and business leaders
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-[#003973] rounded-xl hover:bg-[#00509E] transition-colors"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
