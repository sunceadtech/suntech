import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import { 
  TrendingUp, Eye, Users, MousePointer, 
  Calendar, Download, Filter, RefreshCw,
  ArrowUp, ArrowDown, Target, Zap,
  Globe, Smartphone, Tablet, Monitor,
  Clock, DollarSign, Award, Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AnalyticsReportingPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState('traffic');

  // Sample data for charts
  const trafficData = [
    { month: 'Jan', sessions: 12500, users: 8200, pageviews: 45000 },
    { month: 'Feb', sessions: 15200, users: 9800, pageviews: 52000 },
    { month: 'Mar', sessions: 18900, users: 12100, pageviews: 68000 },
    { month: 'Apr', sessions: 22400, users: 14800, pageviews: 78000 },
    { month: 'May', sessions: 26800, users: 17200, pageviews: 89000 },
    { month: 'Jun', sessions: 31200, users: 19900, pageviews: 95000 }
  ];

  const deviceData = [
    { name: 'Desktop', value: 45, color: '#6366f1' },
    { name: 'Mobile', value: 38, color: '#8b5cf6' },
    { name: 'Tablet', value: 17, color: '#06b6d4' }
  ];

  const campaignData = [
    { name: 'Google Ads', impressions: 125000, clicks: 8400, conversions: 420, cost: 15600 },
    { name: 'Facebook Ads', impressions: 98000, clicks: 6200, conversions: 380, cost: 12400 },
    { name: 'LinkedIn Ads', impressions: 45000, clicks: 2800, conversions: 180, cost: 8900 },
    { name: 'Twitter Ads', impressions: 32000, clicks: 1900, conversions: 95, cost: 4200 }
  ];

  const kpiCards = [
    { title: 'Total Sessions', value: '156.7K', change: '+12.5%', positive: true, icon: Eye },
    { title: 'Unique Users', value: '82.4K', change: '+8.2%', positive: true, icon: Users },
    { title: 'Conversion Rate', value: '3.4%', change: '+0.8%', positive: true, icon: Target },
    { title: 'Revenue', value: '$124.6K', change: '+15.3%', positive: true, icon: DollarSign },
    { title: 'Avg. Session Duration', value: '3m 42s', change: '-5.2%', positive: false, icon: Clock },
    { title: 'Bounce Rate', value: '42.8%', change: '-3.1%', positive: true, icon: TrendingUp }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const refreshData = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto mt-6 px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 animate-fade-in">
              <Award className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-white/90 text-sm font-medium">Advanced Analytics Dashboard</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
              Analytics &{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Reporting
              </span>
            </h1>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto animate-slide-up delay-200">
              Transform your data into actionable insights with our comprehensive analytics suite. 
              Track, measure, and optimize your digital marketing performance in real-time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-400">
              <button 
                onClick={() => setActiveTab('overview')}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                View Dashboard
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          {/* Dashboard Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Performance Dashboard</h2>
              <p className="text-white/70">Real-time insights and comprehensive reporting</p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button
                onClick={refreshData}
                disabled={isLoading}
                className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-300 disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                Refresh
              </button>
              <button className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-300">
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
              <button className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-300">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-12 p-2 bg-white/5 backdrop-blur-sm rounded-xl">
            {[
              { id: 'overview', label: 'Overview', icon: Eye },
              { id: 'traffic', label: 'Traffic', icon: TrendingUp },
              { id: 'campaigns', label: 'Campaigns', icon: Target },
              { id: 'conversion', label: 'Conversions', icon: Zap }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-12">
            {kpiCards.map((kpi, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 border border-white/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <kpi.icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  <div className={`flex items-center text-sm font-medium ${
                    kpi.positive ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {kpi.positive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                    {kpi.change}
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{kpi.value}</div>
                <div className="text-white/60 text-sm">{kpi.title}</div>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Traffic Chart */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Traffic Overview</h3>
                <select className="bg-white/10 text-white rounded-lg px-3 py-2 border border-white/20 focus:outline-none focus:border-blue-400">
                  <option value="6m">Last 6 Months</option>
                  <option value="3m">Last 3 Months</option>
                  <option value="1m">Last Month</option>
                </select>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={trafficData}>
                    <defs>
                      <linearGradient id="colorSessions" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                    <XAxis dataKey="month" stroke="#ffffff60" />
                    <YAxis stroke="#ffffff60" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        color: 'white'
                      }} 
                    />
                    <Area type="monotone" dataKey="sessions" stroke="#6366f1" fillOpacity={1} fill="url(#colorSessions)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Device Breakdown */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Device Breakdown</h3>
              <div className="h-80 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={deviceData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      animationBegin={0}
                      animationDuration={1000}
                    >
                      {deviceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        color: 'white'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center space-x-6 mt-4">
                {deviceData.map((device, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-2`} style={{ backgroundColor: device.color }}></div>
                    <span className="text-white/80 text-sm">{device.name} ({device.value}%)</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Campaign Performance Table */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Campaign Performance</h3>
              <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">View All</button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-white/20">
                    <th className="text-white/70 pb-4 font-medium">Campaign</th>
                    <th className="text-white/70 pb-4 font-medium">Impressions</th>
                    <th className="text-white/70 pb-4 font-medium">Clicks</th>
                    <th className="text-white/70 pb-4 font-medium">CTR</th>
                    <th className="text-white/70 pb-4 font-medium">Conversions</th>
                    <th className="text-white/70 pb-4 font-medium">Cost</th>
                    <th className="text-white/70 pb-4 font-medium">ROAS</th>
                  </tr>
                </thead>
                <tbody>
                  {campaignData.map((campaign, index) => (
                    <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200">
                      <td className="py-4 text-white font-medium">{campaign.name}</td>
                      <td className="py-4 text-white/80">{campaign.impressions.toLocaleString()}</td>
                      <td className="py-4 text-white/80">{campaign.clicks.toLocaleString()}</td>
                      <td className="py-4 text-white/80">{((campaign.clicks / campaign.impressions) * 100).toFixed(2)}%</td>
                      <td className="py-4 text-white/80">{campaign.conversions}</td>
                      <td className="py-4 text-white/80">${campaign.cost.toLocaleString()}</td>
                      <td className="py-4">
                        <span className="text-green-400 font-medium">
                          {((campaign.conversions * 150) / campaign.cost).toFixed(2)}x
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Real-time Tracking',
                description: 'Monitor your campaigns and website performance in real-time with live data updates and instant notifications.'
              },
              {
                icon: Target,
                title: 'Conversion Optimization',
                description: 'Identify high-performing elements and optimize conversion funnels with advanced attribution modeling.'
              },
              {
                icon: Globe,
                title: 'Multi-channel Analytics',
                description: 'Track performance across all digital channels from social media to email marketing in one unified dashboard.'
              },
              {
                icon: Users,
                title: 'Audience Insights',
                description: 'Deep dive into user behavior, demographics, and journey mapping to better understand your customers.'
              },
              {
                icon: Zap,
                title: 'Automated Reports',
                description: 'Schedule and customize automated reports delivered to stakeholders with key metrics and insights.'
              },
              {
                icon: Award,
                title: 'Custom Dashboards',
                description: 'Create personalized dashboards with drag-and-drop widgets tailored to your specific business needs.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 border border-white/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="w-12 h-12 text-blue-400 mb-6 group-hover:text-blue-300 transition-colors duration-300" />
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Start making data-driven decisions with our comprehensive analytics platform. 
              Get insights that drive real business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                Start Free Trial
              </Link>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default AnalyticsReportingPage;