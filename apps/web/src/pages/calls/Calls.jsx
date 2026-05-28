import { useState } from 'react'
import { motion } from 'framer-motion'
import DashboardLayout from '../../components/Layout/DashboardLayout'

const callHistory = [
  { id: 1, name: 'David Wilson', type: 'incoming', duration: '5:23', time: 'Today, 10:30 AM', avatar: 'DW' },
  { id: 2, name: 'Sarah Smith', type: 'outgoing', duration: '12:45', time: 'Today, 9:15 AM', avatar: 'SS' },
  { id: 3, name: 'Mike Johnson', type: 'missed', duration: '-', time: 'Yesterday, 6:45 PM', avatar: 'MJ' },
  { id: 4, name: 'Emily Brown', type: 'incoming', duration: '3:10', time: 'Yesterday, 2:30 PM', avatar: 'EB' },
  { id: 5, name: 'Team Engineering', type: 'outgoing', duration: '25:00', time: 'May 24, 2026', avatar: 'TE' },
]

const favorites = [
  { id: 1, name: 'David Wilson', avatar: 'DW', online: true },
  { id: 2, name: 'Sarah Smith', avatar: 'SS', online: true },
  { id: 3, name: 'Emily Brown', avatar: 'EB', online: false },
  { id: 4, name: 'John Doe', avatar: 'JD', online: true },
]

const Calls = () => {
  const [activeTab, setActiveTab] = useState('all')

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Calls</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your calls and history</p>
          </div>
          <button className="btn-primary">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            New Call
          </button>
        </div>

        {/* Quick dial */}
        <div className="card p-5">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Favorites</h3>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {favorites.map((contact) => (
              <motion.button
                key={contact.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-2 p-3 min-w-fit"
              >
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-medium">
                    {contact.avatar}
                  </div>
                  {contact.online && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-slate-800 rounded-full" />
                  )}
                </div>
                <span className="text-sm text-slate-600 dark:text-slate-400">{contact.name.split(' ')[0]}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-slate-200 dark:border-slate-700">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'all'
                ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab('missed')}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'missed'
                ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            Missed
          </button>
        </div>

        {/* Call history */}
        <div className="card">
          <div className="divide-y divide-slate-200 dark:divide-slate-700">
            {callHistory.map((call, index) => (
              <motion.div
                key={call.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-medium">
                    {call.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">{call.name}</p>
                    <div className="flex items-center gap-2">
                      {call.type === 'incoming' && (
                        <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                      )}
                      {call.type === 'outgoing' && (
                        <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      )}
                      {call.type === 'missed' && (
                        <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                        </svg>
                      )}
                      <span className="text-sm text-slate-500 dark:text-slate-400">{call.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-slate-400">{call.time}</span>
                  <button className="p-2 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Calls