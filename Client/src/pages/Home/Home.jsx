import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, TrendingUp, Users, Target, Shield, Zap, CheckCircle, Star, Play, BarChart3, Activity, Clock, Calendar, MessageSquare, Bell, Search, ChevronRight } from "lucide-react"
import { Button } from '../../components/index'

const Home = () => {
  const navigate = useNavigate()

  const features = [
    { icon: Users, title: 'Smart Employee Tracking', desc: 'Real-time location & attendance monitoring with AI-powered insights' },
    { icon: Target, title: 'Task Automation', desc: 'Automate workflows and assign tasks with intelligent routing' },
    { icon: TrendingUp, title: 'Analytics Dashboard', desc: 'Deep insights into team productivity and performance metrics' },
    { icon: Shield, title: 'Enterprise Security', desc: 'Bank-grade encryption and compliance with global standards' },
  ]

  const stats = [
    { label: 'Active Users', value: '2,547', growth: '+12%' },
    { label: 'Tasks Completed', value: '18,294', growth: '+8%' },
    { label: 'Productivity', value: '94.2%', growth: '+2.4%' },
    { label: 'Teams', value: '156', growth: '+15%' },
  ]

  const chartData = [
    { day: 'Mon', value: 45 },
    { day: 'Tue', value: 52 },
    { day: 'Wed', value: 78 },
    { day: 'Thu', value: 65 },
    { day: 'Fri', value: 89 },
    { day: 'Sat', value: 42 },
    { day: 'Sun', value: 38 },
  ]

  const recentActivity = [
    { user: 'Sarah J.', action: 'completed', task: 'API Integration', time: '2m ago', avatar: 'SJ' },
    { user: 'Mike C.', action: 'started', task: 'Design Review', time: '15m ago', avatar: 'MC' },
    { user: 'Emma D.', action: 'submitted', task: 'Weekly Report', time: '1h ago', avatar: 'ED' },
    { user: 'John W.', action: 'commented', task: 'Project Planning', time: '2h ago', avatar: 'JW' },
  ]

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e0f2fe] text-[#0284c7] text-sm font-medium mb-6">
                <Zap size={14} className="animate-pulse" />
                <span>#1 Employee Management Platform</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e293b] leading-tight">
                Track & Manage
                <span className="block text-gradient">Your Workforce</span>
                <span className="text-[#0ea5e9]">Effortlessly</span>
              </h1>

              <p className="mt-6 text-lg text-[#64748b] max-w-lg">
                Streamline your employee management with AI-powered tracking,
                automated workflows, and real-time analytics. Join 2,500+ companies
                already scaling their operations.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  onClick={() => navigate('/admin-dashboard')}
                  bgColor="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-8 py-4 rounded-[var(--radius-lg)] shadow-[var(--shadow-accent)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="flex items-center gap-2 text-base">
                    Get Started Free
                    <ArrowRight size={18} />
                  </span>
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[#e2e8f0] text-[#1e293b] hover:border-[#0ea5e9] hover:text-[#0ea5e9] hover:bg-[#e0f2fe] px-8 py-4 rounded-[var(--radius-lg)] transition-all duration-300"
                >
                  <span className="flex items-center gap-2 text-base">
                    <Play size={16} />
                    Watch Demo
                  </span>
                </Button>
              </div>

              <div className="mt-10 flex items-center gap-8">
                <div className="flex -space-x-3">
                  {['SJ', 'MC', 'ED', 'JW', 'AM'].map((initials, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] flex items-center justify-center text-white text-sm font-semibold border-2 border-white">
                      {initials}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-[#f59e0b] text-[#f59e0b]" />)}
                  </div>
                  <p className="text-sm text-[#64748b]">Trusted by 2,500+ companies</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 animate-fade-in-up stagger-2">
              <h2 className="text-xl font-semibold text-[#1e293b]">Why Choose TrackFlow?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] border border-[#e2e8f0] hover:shadow-[var(--shadow-md)] hover:-translate-y-1 transition-all duration-300">
                    <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[#e0f2fe] flex items-center justify-center flex-shrink-0">
                      <feature.icon className="text-[#0ea5e9]" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1e293b] text-sm">{feature.title}</h3>
                      <p className="text-xs text-[#64748b] mt-1">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-[var(--radius-xl)] shadow-[var(--shadow-xl)] border border-[#e2e8f0] overflow-hidden animate-scale-in">
              <div className="p-6 border-b border-[#e2e8f0] flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-[#1e293b]">Live Analytics</h2>
                  <p className="text-sm text-[#64748b]">Real-time productivity metrics</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
                  <span className="text-sm text-[#64748b]">Live</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-end gap-2 h-40 mb-6">
                  {chartData.map((item, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <div
                        className="w-full bg-gradient-to-t from-[#0ea5e9] to-[#38bdf8] rounded-t-lg animate-fade-in-up hover:opacity-80 transition-all duration-500 cursor-pointer"
                        style={{
                          height: `${item.value}%`,
                          animationDelay: `${i * 100}ms`,
                          transformOrigin: 'bottom'
                        }}
                      ></div>
                      <span className="text-xs text-[#94a3b8]">{item.day}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-4 gap-4 pt-4 border-t border-[#e2e8f0]">
                  {stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <p className="text-lg font-bold text-[#0ea5e9]">{stat.value}</p>
                      <p className="text-xs text-[#64748b]">{stat.label}</p>
                      <p className="text-xs text-[#10b981]">{stat.growth}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[var(--radius-xl)] shadow-[var(--shadow-lg)] border border-[#e2e8f0] overflow-hidden animate-fade-in-up stagger-2">
              <div className="p-4 border-b border-[#e2e8f0] flex items-center justify-between">
                <h3 className="font-semibold text-[#1e293b]">Recent Activity</h3>
                <Button variant="ghost" size="sm" className="text-[#0ea5e9]">View All <ChevronRight size={14} /></Button>
              </div>
              <div className="divide-y divide-[#e2e8f0]">
                {recentActivity.map((activity, i) => (
                  <div key={i} className="p-4 flex items-center gap-3 hover:bg-[#f8fafc] transition-colors">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] flex items-center justify-center text-white text-xs font-semibold">
                      {activity.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-[#1e293b] truncate">
                        <span className="font-medium">{activity.user}</span>
                        <span className="text-[#64748b]"> {activity.action} </span>
                        <span className="font-medium">{activity.task}</span>
                      </p>
                      <p className="text-xs text-[#94a3b8]">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#1e3a5f] to-[#0ea5e9] rounded-[var(--radius-xl)] p-6 shadow-[var(--shadow-lg)] animate-fade-in-up stagger-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">Upgrade to Pro</h3>
                  <p className="text-white/80 text-sm mt-1">Unlock advanced features & analytics</p>
                </div>
                <Button
                  bgColor="bg-white text-[#0ea5e9] hover:bg-white/90 px-4 py-2 rounded-[var(--radius-md)]"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home