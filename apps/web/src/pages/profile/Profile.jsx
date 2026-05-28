import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { updateUser } from '../../features/auth/authSlice'
import DashboardLayout from '../../components/Layout/DashboardLayout'

const Profile = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '+1 234-567-8900',
    address: user?.address || '123 Main St, San Francisco, CA',
  })

  const handleSave = () => {
    dispatch(updateUser(formData))
    setIsEditing(false)
  }

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-4xl">
        {/* Profile header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card p-6"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-3xl font-bold">
                {user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
              </div>
              <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{user?.name || 'User'}</h1>
                  <p className="text-slate-500 dark:text-slate-400">{user?.role || 'Employee'}</p>
                </div>
                <button
                  onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                  className="btn-primary"
                >
                  {isEditing ? (
                    <>
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Save Changes
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                      Edit Profile
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Profile form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card">
            <div className="p-5 border-b border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Personal Information</h3>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <label className="label">Full Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input"
                  />
                ) : (
                  <p className="text-slate-900 dark:text-white">{user?.name || 'Not set'}</p>
                )}
              </div>
              <div>
                <label className="label">Email Address</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input"
                  />
                ) : (
                  <p className="text-slate-900 dark:text-white">{user?.email || 'Not set'}</p>
                )}
              </div>
              <div>
                <label className="label">Phone Number</label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="input"
                  />
                ) : (
                  <p className="text-slate-900 dark:text-white">{formData.phone}</p>
                )}
              </div>
              <div>
                <label className="label">Address</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="input"
                  />
                ) : (
                  <p className="text-slate-900 dark:text-white">{formData.address}</p>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card">
              <div className="p-5 border-b border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Work Information</h3>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <label className="label">Employee ID</label>
                  <p className="text-slate-900 dark:text-white">EMP-2024-{user?.id || '001'}</p>
                </div>
                <div>
                  <label className="label">Department</label>
                  <p className="text-slate-900 dark:text-white">{user?.department || 'Engineering'}</p>
                </div>
                <div>
                  <label className="label">Position</label>
                  <p className="text-slate-900 dark:text-white">{user?.position || 'Software Developer'}</p>
                </div>
                <div>
                  <label className="label">Join Date</label>
                  <p className="text-slate-900 dark:text-white">{user?.joinDate || 'January 15, 2023'}</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="p-5 border-b border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Emergency Contact</h3>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <label className="label">Contact Name</label>
                  <p className="text-slate-900 dark:text-white">Jane Doe</p>
                </div>
                <div>
                  <label className="label">Phone Number</label>
                  <p className="text-slate-900 dark:text-white">+1 234-567-8900</p>
                </div>
                <div>
                  <label className="label">Relationship</label>
                  <p className="text-slate-900 dark:text-white">Spouse</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Password change */}
        <div className="card">
          <div className="p-5 border-b border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Security</h3>
          </div>
          <div className="p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">Password</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Last changed 30 days ago</p>
              </div>
              <button className="btn-outline">
                Change Password
              </button>
            </div>
          </div>
        </div>

        {/* Danger zone */}
        <div className="card border-red-200 dark:border-red-900">
          <div className="p-5 border-b border-red-200 dark:border-red-900">
            <h3 className="text-lg font-semibold text-red-600 dark:text-red-400">Danger Zone</h3>
          </div>
          <div className="p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">Delete Account</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Permanently delete your account and all data</p>
              </div>
              <button className="btn-danger">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Profile