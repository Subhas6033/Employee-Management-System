import { useState } from 'react'
import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import DashboardLayout from '../../components/Layout/DashboardLayout'

const payrollData = [
  { id: 1, employee: 'John Doe', department: 'Engineering', salary: 85000, bonus: 5000, deductions: 2500, netPay: 87500 },
  { id: 2, employee: 'Sarah Smith', department: 'Marketing', salary: 75000, bonus: 3000, deductions: 2100, netPay: 75900 },
  { id: 3, employee: 'Mike Johnson', department: 'Sales', salary: 65000, bonus: 8000, deductions: 1800, netPay: 71200 },
  { id: 4, employee: 'Emily Brown', department: 'HR', salary: 60000, bonus: 2000, deductions: 1600, netPay: 60400 },
  { id: 5, employee: 'David Wilson', department: 'Engineering', salary: 95000, bonus: 6000, deductions: 2800, netPay: 98200 },
]

const departmentBreakdown = [
  { name: 'Engineering', value: 185700, color: '#0ea5e9' },
  { name: 'Marketing', value: 75900, color: '#8b5cf6' },
  { name: 'Sales', value: 71200, color: '#10b981' },
  { name: 'HR', value: 60400, color: '#f59e0b' },
]

const Payroll = () => {
  const [selectedMonth, setSelectedMonth] = useState('May 2026')

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Payroll</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Manage employee salaries and payments</p>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="input w-auto"
            >
              <option>May 2026</option>
              <option>April 2026</option>
              <option>March 2026</option>
            </select>
            <button className="btn-primary">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export Report
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card p-5">
            <p className="text-sm text-slate-500 dark:text-slate-400">Total Payroll</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">$393,200</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="card p-5">
            <p className="text-sm text-slate-500 dark:text-slate-400">Total Bonuses</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">$24,000</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="card p-5">
            <p className="text-sm text-slate-500 dark:text-slate-400">Total Deductions</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">$10,800</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="card p-5">
            <p className="text-sm text-slate-500 dark:text-slate-400">Employees</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">5</p>
          </motion.div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 card overflow-hidden">
            <div className="p-5 border-b border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Payroll Details</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 dark:bg-slate-800">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Employee</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Department</th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Base Salary</th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Bonus</th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Deductions</th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Net Pay</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  {payrollData.map((pay) => (
                    <tr key={pay.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-xs font-medium">
                            {pay.employee.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="text-sm font-medium text-slate-900 dark:text-white">{pay.employee}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{pay.department}</td>
                      <td className="px-6 py-4 text-sm text-slate-900 dark:text-white text-right">${pay.salary.toLocaleString()}</td>
                      <td className="px-6 py-4 text-sm text-emerald-600 dark:text-emerald-400 text-right">+${pay.bonus.toLocaleString()}</td>
                      <td className="px-6 py-4 text-sm text-red-600 dark:text-red-400 text-right">-${pay.deductions.toLocaleString()}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white text-right">${pay.netPay.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card p-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">By Department</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={departmentBreakdown} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" paddingAngle={2}>
                  {departmentBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} formatter={(value) => `$${value.toLocaleString()}`} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-4">
              {departmentBreakdown.map((dept) => (
                <div key={dept.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: dept.color }} />
                    <span className="text-slate-600 dark:text-slate-400">{dept.name}</span>
                  </div>
                  <span className="font-medium text-slate-900 dark:text-white">${dept.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Payroll