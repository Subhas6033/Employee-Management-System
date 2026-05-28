import { useState } from 'react'
import { motion } from 'framer-motion'
import DashboardLayout from '../../components/Layout/DashboardLayout'

const leaveTypes = [
  { type: 'Annual Leave', total: 15, used: 5, color: 'bg-primary-500' },
  { type: 'Sick Leave', total: 10, used: 2, color: 'bg-amber-500' },
  { type: 'Personal Leave', total: 5, used: 1, color: 'bg-purple-500' },
  { type: 'Work From Home', total: 12, used: 4, color: 'bg-emerald-500' },
]

const leaveRequests = [
  { id: 1, employee: 'John Doe', type: 'Annual Leave', startDate: 'May 28, 2026', endDate: 'May 30, 2026', days: 3, status: 'pending', reason: 'Family vacation' },
  { id: 2, employee: 'Sarah Smith', type: 'Sick Leave', startDate: 'May 25, 2026', endDate: 'May 25, 2026', days: 1, status: 'approved', reason: 'Medical appointment' },
  { id: 3, employee: 'Mike Johnson', type: 'Personal Leave', startDate: 'June 2, 2026', endDate: 'June 3, 2026', days: 2, status: 'pending', reason: 'Personal work' },
  { id: 4, employee: 'Emily Brown', type: 'Annual Leave', startDate: 'June 10, 2026', endDate: 'June 14, 2026', days: 5, status: 'rejected', reason: 'Wedding anniversary' },
]

const Leave = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Leave Management</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Manage leave requests and balances</p>
          </div>
          <button onClick={() => setShowModal(true)} className="btn-primary">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Request Leave
          </button>
        </div>

        {/* Leave balance cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {leaveTypes.map((leave, index) => (
            <motion.div
              key={leave.type}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{leave.type}</span>
                <span className="text-lg font-bold text-slate-900 dark:text-white">{leave.total - leave.used}/{leave.total}</span>
              </div>
              <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div
                  className={`h-full ${leave.color} rounded-full transition-all duration-500`}
                  style={{ width: `${((leave.total - leave.used) / leave.total) * 100}%` }}
                />
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">{leave.used} days used</p>
            </motion.div>
          ))}
        </div>

        {/* Leave requests */}
        <div className="card">
          <div className="p-5 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Leave Requests</h3>
            <div className="flex gap-2">
              <button className="btn-outline btn-sm">All</button>
              <button className="btn-ghost btn-sm">Pending</button>
              <button className="btn-ghost btn-sm">Approved</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 dark:bg-slate-800">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Employee</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Type</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Dates</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Days</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Status</th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {leaveRequests.map((request) => (
                  <tr key={request.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-xs font-medium">
                          {request.employee.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-sm font-medium text-slate-900 dark:text-white">{request.employee}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{request.type}</td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                      {request.startDate} - {request.endDate}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{request.days}</td>
                    <td className="px-6 py-4">
                      <span className={`badge ${
                        request.status === 'approved' ? 'badge-success' :
                        request.status === 'rejected' ? 'badge-danger' :
                        'badge-warning'
                      }`}>
                        {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      {request.status === 'pending' && (
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-1.5 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition-colors">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </button>
                          <button className="p-1.5 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Leave