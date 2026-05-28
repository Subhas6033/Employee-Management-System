import { useState } from 'react'
import { motion } from 'framer-motion'
import DashboardLayout from '../../components/Layout/DashboardLayout'

const upcomingMeetings = [
  { id: 1, title: 'Sprint Planning', time: 'Today, 2:00 PM', duration: '1 hour', participants: 5, type: 'zoom', status: 'upcoming' },
  { id: 2, title: 'Design Review', time: 'Today, 4:00 PM', duration: '30 min', participants: 3, type: 'meet', status: 'upcoming' },
  { id: 3, title: 'Team Standup', time: 'Tomorrow, 9:00 AM', duration: '15 min', participants: 8, type: 'zoom', status: 'upcoming' },
  { id: 4, title: 'Product Demo', time: 'May 28, 2026, 10:00 AM', duration: '1 hour', participants: 12, type: 'meet', status: 'upcoming' },
]

const pastMeetings = [
  { id: 5, title: 'One-on-One with Manager', time: 'May 24, 2026', duration: '30 min', participants: 2, type: 'zoom', recording: true },
  { id: 6, title: 'Tech Talk: React 19', time: 'May 23, 2026', duration: '1 hour', participants: 25, type: 'meet', recording: true },
  { id: 7, title: 'Budget Review', time: 'May 22, 2026', duration: '45 min', participants: 4, type: 'zoom', recording: false },
]

const Meetings = () => {
  const [activeTab, setActiveTab] = useState('upcoming')
  const [showScheduleModal, setShowScheduleModal] = useState(false)

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Meetings</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Schedule and join video meetings</p>
          </div>
          <button onClick={() => setShowScheduleModal(true)} className="btn-primary">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Schedule Meeting
          </button>
        </div>

        {/* Quick join */}
        <div className="card p-6 bg-gradient-to-r from-primary-600 to-accent-600">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="text-white">
              <h3 className="text-lg font-semibold">Daily Standup</h3>
              <p className="text-primary-100 text-sm mt-1">Starting in 15 minutes</p>
            </div>
            <button className="px-6 py-3 bg-white text-primary-600 rounded-xl font-medium hover:bg-primary-50 transition-colors flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Join Now
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-slate-200 dark:border-slate-700">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'upcoming'
                ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'past'
                ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            Past Meetings
          </button>
        </div>

        {/* Meetings list */}
        <div className="grid gap-4">
          {(activeTab === 'upcoming' ? upcomingMeetings : pastMeetings).map((meeting, index) => (
            <motion.div
              key={meeting.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="card p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  meeting.type === 'zoom' ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-emerald-100 dark:bg-emerald-900/30'
                }`}>
                  {meeting.type === 'zoom' ? (
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.585 3.125h11.625l3.375 3.375v11.625l-3.375 3.375H4.585l-3.375-3.375V6.5l3.375-3.375zM8.5 10.5v6.625l4.625-3.313-4.625-3.312z"/>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  )}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{meeting.title}</h4>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-sm text-slate-500 dark:text-slate-400">{meeting.time}</span>
                    <span className="text-sm text-slate-400">•</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">{meeting.duration}</span>
                    <span className="text-sm text-slate-400">•</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">{meeting.participants} participants</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {'recording' in meeting && meeting.recording && (
                  <span className="badge badge-danger flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                    Recording
                  </span>
                )}
                {activeTab === 'upcoming' && meeting.status === 'upcoming' && (
                  <button className="btn-primary">
                    Join
                  </button>
                )}
                {'recording' in meeting && meeting.recording && (
                  <button className="btn-outline">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Watch
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Meetings