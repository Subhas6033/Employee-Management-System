import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import DashboardLayout from '../../components/Layout/DashboardLayout'

const employeeData = {
  1: { id: 1, name: 'John Doe', email: 'john.doe@company.com', phone: '+1 234-567-8901', department: 'Engineering', position: 'Senior Developer', manager: 'David Wilson', hireDate: '2023-01-15', salary: '$85,000', status: 'active', address: '123 Main St, San Francisco, CA', emergencyContact: 'Jane Doe (+1 234-567-8900)' },
  2: { id: 2, name: 'Sarah Smith', email: 'sarah.smith@company.com', phone: '+1 234-567-8902', department: 'Marketing', position: 'Marketing Manager', manager: 'CEO', hireDate: '2022-06-20', salary: '$75,000', status: 'active', address: '456 Oak Ave, San Francisco, CA', emergencyContact: 'Mark Smith (+1 234-567-8901)' },
}

const EmployeeDetail = () => {
  const { id } = useParams()
  const employee = employeeData[id] || employeeData[1]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Back button */}
        <Link to="/employees" className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Employees
        </Link>

        {/* Profile header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card p-6"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-3xl font-bold">
              {employee.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{employee.name}</h1>
                  <p className="text-slate-500 dark:text-slate-400">{employee.position}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="badge badge-success">Active</span>
                    <span className="badge badge-neutral">{employee.department}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="btn-outline">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    Edit
                  </button>
                  <button className="btn-primary">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Personal info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card">
              <div className="p-5 border-b border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Personal Information</h3>
              </div>
              <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="label">Email</label>
                  <p className="text-slate-900 dark:text-white">{employee.email}</p>
                </div>
                <div>
                  <label className="label">Phone</label>
                  <p className="text-slate-900 dark:text-white">{employee.phone}</p>
                </div>
                <div>
                  <label className="label">Address</label>
                  <p className="text-slate-900 dark:text-white">{employee.address}</p>
                </div>
                <div>
                  <label className="label">Emergency Contact</label>
                  <p className="text-slate-900 dark:text-white">{employee.emergencyContact}</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="p-5 border-b border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Employment Details</h3>
              </div>
              <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="label">Department</label>
                  <p className="text-slate-900 dark:text-white">{employee.department}</p>
                </div>
                <div>
                  <label className="label">Position</label>
                  <p className="text-slate-900 dark:text-white">{employee.position}</p>
                </div>
                <div>
                  <label className="label">Manager</label>
                  <p className="text-slate-900 dark:text-white">{employee.manager}</p>
                </div>
                <div>
                  <label className="label">Hire Date</label>
                  <p className="text-slate-900 dark:text-white">{new Date(employee.hireDate).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="card p-5">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Attendance</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">98%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Tasks Completed</span>
                  <span className="text-slate-900 dark:text-white font-medium">42</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Leave Balance</span>
                  <span className="text-slate-900 dark:text-white font-medium">12 days</span>
                </div>
              </div>
            </div>

            <div className="card p-5">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Salary</h3>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">{employee.salary}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Annual salary</p>
              <button className="w-full mt-4 btn-outline">View Payslips</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default EmployeeDetail