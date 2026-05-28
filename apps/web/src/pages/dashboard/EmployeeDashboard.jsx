import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import DashboardLayout from '../../components/Layout/DashboardLayout'

const upcomingTasks = [
  { id: 1, title: 'Complete project documentation', due: 'Today', priority: 'high', status: 'in_progress' },
  { id: 2, title: 'Team meeting preparation', due: 'Tomorrow', priority: 'medium', status: 'pending' },
  { id: 3, title: 'Submit weekly report', due: 'Fri, May 28', priority: 'low', status: 'pending' },
  { id: 4, title: 'Code review for PR #42', due: 'Mon, May 31', priority: 'high', status: 'pending' },
]

const recentAnnouncements = [
  { id: 1, title: 'Office timing change effective June 1st', date: 'May 25, 2026', category: 'HR' },
  { id: 2, title: 'New health insurance benefits', date: 'May 22, 2026', category: 'Benefits' },
  { id: 3, title: 'Q2 Town Hall meeting scheduled', date: 'May 20, 2026', category: 'Events' },
]

const attendanceStats = [
  { day: 'Mon', in: '9:00 AM', out: '6:00 PM', hours: 8 },
  { day: 'Tue', in: '9:15 AM', out: '6:10 PM', hours: 7.9 },
  { day: 'Wed', in: '9:00 AM', out: '6:30 PM', hours: 8.5 },
  { day: 'Thu', in: '9:05 AM', out: '6:00 PM', hours: 7.9 },
  { day: 'Fri', in: '9:00 AM', out: '-', hours: 0 },
]

const leaveBalance = [
  { type: 'Annual Leave', used: 5, total: 15 },
  { type: 'Sick Leave', used: 2, total: 10 },
  { type: 'Personal Leave', used: 1, total: 5 },
]

const EmployeeDashboard = () => {
  const { user } = useSelector((state) => state.auth)

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card p-6 bg-gradient-to-r from-primary-600 to-accent-600 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white">Welcome back, {user?.name?.split(' ')[0] || 'Employee'}!</h1>
              <p className="text-primary-100 mt-1">Here's your activity overview for today.</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 bg-white/20 text-white rounded-xl font-medium hover:bg-white/30 transition-colors flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Clock In
              </button>
            </div>
          </div>
        </motion.div>

        {/* Quick stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card p-5"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Attendance</p>
                <p className="text-xl font-bold text-slate-900 dark:text-white">On Time</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card p-5"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Tasks</p>
                <p className="text-xl font-bold text-slate-900 dark:text-white">4 Pending</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card p-5"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Leave Balance</p>
                <p className="text-xl font-bold text-slate-900 dark:text-white">12 Days</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card p-5"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Messages</p>
                <p className="text-xl font-bold text-slate-900 dark:text-white">3 New</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming tasks */}
            <div className="card">
              <div className="p-5 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Upcoming Tasks</h3>
                <Link to="/tasks" className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700">
                  View all
                </Link>
              </div>
              <div className="divide-y divide-slate-200 dark:divide-slate-700">
                {upcomingTasks.map((task) => (
                  <div key={task.id} className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <div className="flex items-center gap-4">
                      <button className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        task.status === 'completed'
                          ? 'border-emerald-500 bg-emerald-500'
                          : task.status === 'in_progress'
                          ? 'border-primary-500 bg-primary-500'
                          : 'border-slate-300 dark:border-slate-600'
                      }`}>
                        {task.status === 'completed' && (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                      <div>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">{task.title}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Due: {task.due}</p>
                      </div>
                    </div>
                    <span className={`badge ${
                      task.priority === 'high' ? 'badge-danger' :
                      task.priority === 'medium' ? 'badge-warning' :
                      'badge-neutral'
                    }`}>
                      {task.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly hours chart */}
            <div className="card p-5">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">This Week's Hours</h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={attendanceStats}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="day" stroke="#64748b" fontSize={12} />
                  <YAxis stroke="#64748b" fontSize={12} domain={[0, 10]} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1e293b',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#fff',
                    }}
                  />
                  <Line type="monotone" dataKey="hours" stroke="#0ea5e9" strokeWidth={2} dot={{ fill: '#0ea5e9' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Leave balance */}
            <div className="card p-5">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Leave Balance</h3>
              <div className="space-y-4">
                {leaveBalance.map((leave) => (
                  <div key={leave.type}>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-slate-600 dark:text-slate-400">{leave.type}</span>
                      <span className="font-medium text-slate-900 dark:text-white">{leave.total - leave.used}/{leave.total}</span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary-500 rounded-full"
                        style={{ width: `${((leave.total - leave.used) / leave.total) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/leave"
                className="mt-4 w-full btn-outline text-center justify-center"
              >
                Request Leave
              </Link>
            </div>

            {/* Announcements */}
            <div className="card">
              <div className="p-5 border-b border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Announcements</h3>
              </div>
              <div className="divide-y divide-slate-200 dark:divide-slate-700">
                {recentAnnouncements.map((announcement) => (
                  <div key={announcement.id} className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <span className="badge badge-info text-xs">{announcement.category}</span>
                    <p className="text-sm font-medium text-slate-900 dark:text-white mt-2">{announcement.title}</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">{announcement.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick actions */}
            <div className="card p-5">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <Link to="/leave" className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Request Leave</span>
                </Link>
                <Link to="/chat" className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</span>
                </Link>
                <Link to="/meetings" className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Join Meeting</span>
                </Link>
                <Link to="/profile" className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">My Profile</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default EmployeeDashboard