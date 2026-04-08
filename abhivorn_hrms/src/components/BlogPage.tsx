import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  ArrowRight, Search, Calendar, User, Eye, MessageSquare,
  TrendingUp, Users, Lightbulb, Shield, Clock, Star,
  BookOpen, Heart, Zap, BarChart3, ChevronRight, X
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const BlogPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = React.useState<any>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const [activeCategory, setActiveCategory] = React.useState("All Posts");
  const [searchQuery, setSearchQuery] = React.useState("");

  const categories = [
    { name: "All Posts" },
    { name: "HR Trends" },
    { name: "Payroll" },
    { name: "Recruitment" },
    { name: "Employee Wellness" },
    { name: "Technology" }
  ];

  const featuredPost = {
    title: "The Future of HR: How AI is Transforming Employee Management",
    excerpt: "Discover how artificial intelligence is revolutionizing HR processes, from recruitment to performance management, and what it means for the future of work.",
    content: `The landscape of Human Resources is undergoing a seismic shift as Artificial Intelligence (AI) moves from being a futuristic concept to a core operational necessity. In 2025 and beyond, AI isn't just about automation; it's about intelligence that enhances human decision-making.

One of the most significant impacts is in talent acquisition. Modern AI algorithms can now scan thousands of resumes, identifying not just keywords but context, potential, and cultural alignment. However, the true transformation lies in "Predictive HR." By analyzing historical data, AI can now predict employee turnover with up to 90% accuracy, allowing HR teams to intervene before a key team member decides to leave.

Furthermore, AI-driven sentiment analysis is replacing the traditional annual employee survey. By monitoring communication patterns and feedback in real-time, organizations can gauge the "pulse" of their workforce instantly. As we move forward, the challenge for HR professionals will be balancing this technological power with the "human" element that defines the profession—ensuring that data-driven decisions remain ethical and inclusive.

Ethical AI implementation requires a rigorous framework. Organizations must ensure that their algorithms are free from historical biases that could inadvertently exclude qualified candidates based on gender, race, or age. Transparency in how these models work is non-negotiable; both HR teams and employees need to understand why a certain recommendation was made.

Finally, the role of the HR professional is evolving from an administrative one to a "Human-AI Partnership Architect." This means learning to prompt AI systems effectively while providing the empathy and nuanced judgement that machines cannot replicate. The future belongs to those who can leverage data to create more personalized, supportive employee experiences at scale.`,
    category: "Technology",
    date: "November 5, 2025",
    image: "/hranalytics.webp",
    author: "Sarah Chen"
  };

  const posts = [
    {
      title: "5 Essential Payroll Best Practices for 2025",
      excerpt: "Stay compliant and efficient with these proven payroll strategies that every HR professional should implement this year.",
      content: `Managing payroll in 2025 requires more than just timely payments; it's about strategic compliance and security. Here are the five essentials:

1. **Automated Statutory Compliance:** With ever-changing tax laws and labor regulations, manual calculations are a liability. Ensure your system automatically updates for regional tax changes.
2. **Transparent Deductions:** Employees today expect real-time access to their pay breakdown. Provide a self-service portal where they can view deductions, taxes, and net pay instantly.
3. **Multi-State Tax Handling:** As remote work becomes the norm, your payroll must handle tax nexus across different states and regions seamlessly.
4. **Enhanced Data Security:** Payroll data is highly sensitive. Implement end-to-end encryption and multi-factor authentication for anyone accessing salary records.
5. **Direct Deposit Optimization:** Move beyond traditional banking schedules. Explore "Everyday Pay" or "On-Demand Pay" features that allow employees to access earned wages before the official payday—a major trend for employee retention.

Beyond the basics, successful payroll management in 2025 necessitates "Audit Readiness." Teams should maintain digital trails for every adjustment made to an employee's salary or bonus structure. This level of documentation not only simplifies tax season but also builds immense internal trust during performance review cycles.

We are also seeing a rise in "Global Payout Complexity." For companies scaling internationally, understanding the nuances of local benefits and social security contributions is vital. Integrating your payroll system with a global HRIS ensures that whether you are paying a designer in New York or a developer in Hyderabad, the process remains unified and error-free.`,
      category: "Payroll",
      date: "November 15, 2025",
      image: "/payroll.webp",
      author: "Michael Ross"
    },
    {
      title: "Building a Positive Company Culture: A Complete Guide",
      excerpt: "Learn how to create an workplace environment that attracts talent, boosts retention, and drives organizational success.",
      content: `Company culture is no longer defined by office perks like ping-pong tables or free snacks. In the current era of work, culture is defined by psychological safety and inclusivity.

Building a positive environment begins with "Radical Transparency." When leadership shares wins and losses openly, it builds trust that resonates throughout the hierarchy. Another critical pillar is "Recognition Frameworks." Employees need to feel seen. Move beyond a simple 'thank you' and implement peer-to-peer recognition systems that celebrate specific behaviors aligned with company values.

Finally, remember that culture is lived, not written. Your core values should be visible in every meeting, performance review, and hiring decision. A strong culture acts as a magnetic force for top talent and a defensive armor against turnover.

To deepen culture, organizations must empower "Culture Ambassadors" at every level. This means encouraging employees to lead internal initiatives, whether they are focused on sustainability, diversity, or professional development. When employees feel they have a hand in shaping the environment, they become more invested in the company's long-term success.

Measuring the ROI of culture is often seen as difficult, but metrics like "Internal Net Promoter Score (eNPS)" and long-term retention rates provide clear evidence. A high-performing culture isn't just about happiness; it's about creating a sense of shared purpose that drives collective excellence.`,
      category: "HR Trends",
      date: "December 2, 2025",
      image: "/employees.webp",
      author: "Emily Watson"
    },
    {
      title: "The Complete Guide to Modern Recruitment",
      excerpt: "From job postings to onboarding, discover the latest strategies and tools for hiring top talent in today's competitive market.",
      content: `Recruitment in 2025 is less about "finding" candidates and more about "attracting" them. The market has shifted towards the candidate experience.

The first touchpoint—the JD (Job Description)—must be about the "Why" as much as the "What." Highlight your mission and growth paths. Secondly, optimize the application process; if it takes more than 10 minutes to apply, you're losing 60% of potential talent.

The modern recruiter also leverages "Talent Pooling." Don't just hire for the immediate vacancy; build relationships with passive candidates who might be perfect for future roles. Lastly, ensure your onboarding is seamless. A bad onboarding experience increases the chance of a new hire leaving within the first 6 months by nearly 40%.

Expanding on this, "Employer Branding" has become a department of its own. Your social media presence and Glassdoor reviews are often more important than the job board posting itself. Candidates want to see the real day-to-day life at the company, not just the polished corporate marketing version.

Furthermore, "Structured Interviewing" is the best defense against unconscious bias. By asking every candidate the same set of behavior-based questions and scoring them against a fixed rubric, you ensure that the best person for the job is hired based on merit, not just "gut feeling."`,
      category: "Recruitment",
      date: "December 20, 2025",
      image: "/recruitment.webp",
      author: "Abhishek Vorn"
    },
    {
      title: "Employee Wellness Programs That Actually Work",
      excerpt: "Move beyond generic wellness initiatives with data-driven programs that genuinely improve employee health and productivity.",
      content: `Generic wellness programs often suffer from low engagement because they don't address the specific needs of the workforce. To create a program that works, you must start with data.

Analyze leave patterns and productivity drops to identify the "Burnout Zones." Effective programs now include targeted mental health support, ergonomic stipends for remote workers, and "Digital Detaches"—dedicated times when internal messaging and emails are strictly prohibited.

Wellness should be a business strategy, not just an HR checkbox. Organizations that prioritize holistic wellbeing see a 25% reduction in absenteeism and a significant boost in creative output.

A modern wellness program must also extend "Holistic Support" to the family unit. This might include childcare support, flexible hours for caretakers, or extended maternity and paternity leaves. When an employee's home life is supported, their focus and energy at work naturally increase.

Managers play a pivotal role here. They need to be trained to spot signs of burnout early and empowered to offer flexibility without red tape. Wellness isn't just about the benefits package; it's about a supportive relationship between the company and its people.`,
      category: "Employee Wellness",
      date: "January 5, 2026",
      image: "/feature.webp",
      author: "Emily Watson"
    },
    {
      title: "Data-Driven HR: Leveraging Analytics for Better Decisions",
      excerpt: "Transform your HR decision-making process with actionable insights from workforce analytics and performance metrics.",
      content: `In the past, HR was seen as a "soft" function. Today, it is a data powerhouse. Modern HR leaders use workforce analytics to drive the bottom line.

Start by tracking "Quality of Hire" rather than just "Time to Fill." Use correlation data to see which candidate traits lead to high performance in your specific organization. Another vital metric is "Internal Mobility." Data often reveals that promoting from within is 30% more cost-effective than external hiring.

The goal is to turn "Raw Data" into "Actionable Insights." When you can present a board of directors with data-backed predictions on how a 5% increase in training budgets will lead to a 10% increase in project output, HR earns its seat at the strategic table.

"Data Storytelling" is the next frontier. It’s not enough to show a spreadsheet; you must build a narrative around the numbers. For instance, explaining how improved diversity metrics correlate directly with a 15% increase in product innovation provides a compelling reason for continued D&I investment.

However, with great data comes great responsibility. "Privacy Ethics" must be at the forefront. HR must ensure that employee data is anonymized where possible and used only for improvements that benefit the workforce as a whole, maintaining the delicate balance between insight and intrusion.`,
      category: "Technology",
      date: "January 18, 2026",
      image: "/hranalytics.webp",
      author: "Sarah Chen"
    },
    {
      title: "Remote Work Policies: Best Practices for HR",
      excerpt: "Navigate the new normal with effective remote work policies that maintain productivity while supporting employee wellbeing.",
      content: `The debate over "Back to Office" versus "Remote" has settled into a "Flexible Hero" model. The key to a successful remote policy is clarity and trust.

Establish clear "Asynchronous Communication" guidelines. Not every Slack message requires an immediate response, and documentation is king. Ensure your "Performance Tracking" is output-based rather than presence-based. If the work is done well and on time, location shouldn't matter.

Additionally, pay attention to "Hybrid Equity"—ensuring that remote employees have the same visibility and promotion opportunities as their in-office counterparts. A fair remote policy is a powerful retention tool in 2026.

Remote policies must also address "Geographical Compensation." Will you pay based on the employee's location or the company's headquarters? Being transparent about this from day one prevents future resentment.

Finally, don't overlook "Hardware & Ergonomics." A professional remote work policy should include a stipend or direct provision of ergonomic chairs, secondary monitors, and high-speed internet support. Ensuring your team has a physical environment that supports long-term health is an investment that pays off in sustained productivity.`,
      category: "HR Trends",
      date: "February 2, 2026",
      image: "/employee_portal.webp",
      author: "Michael Ross"
    }
  ];

  const handleReadMore = (post: any) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const popularPosts = [
    { title: "10 HR Metrics Every Manager Should Track", views: 12500 },
    { title: "How to Reduce Employee Turnover", views: 10200 },
    { title: "The Ultimate Payroll Checklist", views: 8900 },
    { title: "Building Your Dream Team", views: 7600 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#003973] via-[#00509E] to-[#003973] pt-32 pb-20 md:pt-40 md:pb-28 min-h-[300px] md:min-h-[350px] flex flex-col items-center justify-center px-4 text-center overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-grid-white/[0.03] [background-size:40px_40px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto z-10">
          <ScrollReveal direction="down">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              VornHR Blog
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Insights, tips, and trends to help you build better workplaces and manage your people more effectively
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Search & Categories */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <ScrollReveal delay={0.3} direction="up" distance={20}>
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
            <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((cat, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === cat.name 
                        ? 'bg-[#003973] text-white shadow-md scale-105' 
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-[#003973] w-full md:w-64"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery("")}
                      className="p-1 hover:bg-slate-100 rounded-full transition-colors"
                    >
                      <X className="w-4 h-4 text-slate-400" />
                    </button>
                  )}
                  <Search className="w-5 h-5 text-slate-400" />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Featured Post - Pinned only on 'All Posts' and when NOT searching */}
      {activeCategory === "All Posts" && !searchQuery && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-0">
          <ScrollReveal direction="up" distance={20} duration={0.5}>
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-500">
              <div className="grid md:grid-cols-2">
                <div 
                  className="h-64 md:h-auto bg-cover bg-center cursor-pointer group relative overflow-hidden"
                  style={{ backgroundImage: `url(${featuredPost.image})` }}
                  onClick={() => handleReadMore(featuredPost)}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300" />
                </div>
                <div className="p-8 md:p-10">
                  <span className="inline-block px-3 py-1 bg-[#003973]/10 text-[#003973] text-sm font-medium rounded-full mb-4">
                    {featuredPost.category}
                  </span>
                  <h2 
                    className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 cursor-pointer hover:text-[#003973] transition-colors"
                    onClick={() => handleReadMore(featuredPost)}
                  >
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
                    </div>
                    <button 
                      onClick={() => handleReadMore(featuredPost)}
                      className="text-[#003973] font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Read Story <ArrowRight className="w-4 h-4" />
                    </button>
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
          </ScrollReveal>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Posts Grid */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              {searchQuery 
                ? `Search results for "${searchQuery}"`
                : (activeCategory === "All Posts" ? "Latest Articles" : `${activeCategory} Articles`)}
            </h2>
            <div className="grid gap-6">
              <AnimatePresence mode="popLayout">
                {(() => {
                  const allPosts = [featuredPost, ...posts];
                  const filtered = allPosts.filter(p => {
                    const matchesCategory = activeCategory === "All Posts" || p.category === activeCategory;
                    
                    const query = searchQuery.toLowerCase();
                    const matchesSearch = 
                      p.title.toLowerCase().includes(query) || 
                      p.excerpt.toLowerCase().includes(query) ||
                      p.content.toLowerCase().includes(query) ||
                      p.category.toLowerCase().includes(query);
                    
                    // If searching, we show anything that matches searching across all fields
                    if (searchQuery) return matchesSearch;
                    
                    // If not searching, we show category matches, but exclude featured post from the grid if on "All Posts"
                    if (activeCategory === "All Posts") return p !== featuredPost;
                    return matchesCategory;
                  });

                  if (filtered.length === 0) {
                    return (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200"
                      >
                        <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                        <h3 className="text-lg font-bold text-slate-900 mb-2">No articles found</h3>
                        <p className="text-slate-500">Try adjusting your search or category filters</p>
                        <button 
                          onClick={() => { setSearchQuery(""); setActiveCategory("All Posts"); }}
                          className="mt-6 text-[#003973] font-bold hover:underline"
                        >
                          Clear all filters
                        </button>
                      </motion.div>
                    );
                  }

                  return filtered.map((post, index) => (
                    <motion.div
                      key={post.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow duration-300 h-full">
                      <div className="grid md:grid-cols-3">
                        <div 
                          className="h-48 md:h-auto bg-cover bg-center cursor-pointer overflow-hidden group relative"
                          style={{ backgroundImage: `url(${post.image})`, willChange: 'transform' }}
                          onClick={() => handleReadMore(post)}
                        >
                           <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300" />
                        </div>
                        <div className="p-6 md:col-span-2">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded">
                              {post.category}
                            </span>
                          </div>
                          <h3 
                            className="text-lg font-bold text-slate-900 mb-2 cursor-pointer hover:text-[#003973] transition-colors"
                            onClick={() => handleReadMore(post)}
                          >
                            {post.title}
                          </h3>
                          <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-500">{post.date}</span>
                            <button 
                              onClick={() => handleReadMore(post)}
                              className="text-[#003973] font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
                            >
                              Read More <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ));
              })()}
              </AnimatePresence>
            </div>

            {/* Load More */}
            <div className="text-center mt-10">
              <div className="inline-flex items-center justify-center px-6 py-3 font-bold text-slate-400 bg-slate-100 rounded-xl cursor-not-allowed">
                More articles are coming soon
                <Clock className="w-5 h-5 ml-2" />
              </div>
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
      {/* Article Reader Modal */}
      <AnimatePresence>
        {isModalOpen && selectedPost && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl relative z-10 flex flex-col"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="h-64 md:h-80 relative overflow-hidden">
                <img src={selectedPost.image} alt={selectedPost.title} loading="lazy" decoding="async" className="w-full h-full object-cover" style={{ willChange: 'transform' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full mb-3 w-fit">
                    {selectedPost.category}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">{selectedPost.title}</h2>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-8 md:p-12">
                <div className="flex items-center gap-6 mb-8 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{selectedPost.author}</p>
                      <p className="text-xs text-slate-500">Professional HR Expert</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {selectedPost.date}
                    </span>
                  </div>
                </div>

                <div className="prose prose-slate max-w-none">
                  {selectedPost.content.split('\n\n').map((paragraph: string, idx: number) => (
                    <p key={idx} className="text-slate-600 leading-relaxed mb-6 whitespace-pre-wrap">
                      {paragraph.startsWith('1.') || paragraph.startsWith('**') ? (
                         <span className="block">{paragraph}</span>
                      ) : paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-12 p-8 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-2">Want to learn more?</h4>
                  <p className="text-sm text-slate-600 mb-6">
                    Our HR experts can help you implement these practices in your own organization.
                  </p>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#003973] text-white rounded-xl font-bold hover:bg-[#00509E] transition-colors"
                  >
                    Contact an Expert <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlogPage;
