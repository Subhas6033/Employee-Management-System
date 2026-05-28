import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import DashboardLayout from '../../components/Layout/DashboardLayout'

const initialEmployees = [
  { id: 1, name: 'John Doe', email: 'john.doe@company.com', department: 'Engineering', position: 'Senior Developer', status: 'active', phone: '+1 234-567-8901', hireDate: '2023-01-15' },
  { id: 2, name: 'Sarah Smith', email: 'sarah.smith@company.com', department: 'Marketing', position: 'Marketing Manager', status: 'active', phone: '+1 234-567-8902', hireDate: '2022-06-20' },
  { id: 3, name: 'Mike Johnson', email: 'mike.johnson@company.com', department: 'Sales', position: 'Sales Executive', status: 'on_leave', phone: '+1 234-567-8903', hireDate: '2023-03-10' },
  { id: 4, name: 'Emily Brown', email: 'emily.brown@company.com', department: 'HR', position: 'HR Specialist', status: 'active', phone: '+1 234-567-8904', hireDate: '2022-09-05' },
  { id: 5, name: 'David Wilson', email: 'david.wilson@company.com', department: 'Engineering', position: 'Tech Lead', status: 'active', phone: '+1 234-567-8905', hireDate: '2021-11-20' },
  { id: 6, name: 'Lisa Anderson', email: 'lisa.anderson@company.com', department: 'Finance', position: 'Financial Analyst', status: 'active', phone: '+1 234-567-8906', hireDate: '2023-02-28' },
  { id: 7, name: 'James Taylor', email: 'james.taylor@company.com', department: 'Operations', position: 'Operations Manager', status: 'inactive', phone: '+1 234-567-8907', hireDate: '2020-08-15' },
  { id: 8, name: 'Jennifer Martinez', email: 'jennifer.martinez@company.com', department: 'Engineering', position: 'Junior Developer', status: 'active', phone: '+1 234-567-8908', hireDate: '2024-01-10' },
]

const departments = ['All', 'Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations']
const statuses = ['All', 'active', 'on_leave', 'inactive']

const EmployeeList = () => {
  const [search, setSearch] = useState('')
  const [department, setDepartment] = useState('All')
  const [status, setStatus] = useState('All')
  const [showAddModal, setShowAddModal] = useState(false)

  const filteredEmployees = initialEmployees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(search.toLowerCase()) ||
                         emp.email.toLowerCase().includes(search.toLowerCase())
    const matchesDept = department === 'All' || emp.department === department
    const matchesStatus = status === 'All' || emp.status === status
    return matchesSearch && matchesDept && matchesStatus
  })

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Employees</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your team members</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="btn-primary"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add Employee
          </button>
        </div>

        {/* Filters */}
        <div className="card p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name or email..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="input pl-10"
                />
                <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="input md:w-48"
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept === 'All' ? 'All Departments' : dept}</option>
              ))}
            </select>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="input md:w-40"
            >
              {statuses.map(s => (
                <option key={s} value={s}>{s === 'All' ? 'All Status' : s.charAt(0).toUpperCase() + s.slice(1).replace('_', ' ')}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Employee table */}
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 dark:bg-slate-800">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Employee</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Position</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Hire Date</th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {filteredEmployees.map((employee, index) => (
                  <motion.tr
                    key={employee.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-slate-50 dark:hover:bg-slate-800/50"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-medium">
                          {employee.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-900 dark:text-white">{employee.name}</p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">{employee.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{employee.department}</td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{employee.position}</td>
                    <td className="px-6 py-4">
                      <span className={`badge ${
                        employee.status === 'active' ? 'badge-success' :
                        employee.status === 'on_leave' ? 'badge-warning' :
                        'badge-neutral'
                      }`}>
                        {employee.status === 'active' ? 'Active' : employee.status === 'on_leave' ? 'On Leave' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{new Date(employee.hireDate).toLocaleDateString()}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          to={`/employees/${employee.id}`}
                          className="p-2 text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </Link>
                        <button className="p-2 text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button className="p-2 text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Showing {filteredEmployees.length} of {initialEmployees.length} employees
          </p>
          <div className="flex items-center gap-2">
            <button className="btn-outline btn-sm" disabled>Previous</button>
            <button className="btn-primary btn-sm">1</button>
            <button className="btn-outline btn-sm">2</button>
            <button className="btn-outline btn-sm">3</button>
            <button className="btn-outline btn-sm">Next</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default EmployeeList