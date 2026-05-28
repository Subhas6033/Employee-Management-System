import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { DashboardLayout } from './components/Layout'
import Landing from './pages/Home/Landing'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import AdminDashboard from './pages/dashboard/AdminDashboard'
import EmployeeDashboard from './pages/dashboard/EmployeeDashboard'
import EmployeeList from './pages/employee/EmployeeList'
import EmployeeDetail from './pages/employee/EmployeeDetail'
import Attendance from './pages/attendance/Attendance'
import Leave from './pages/leave/Leave'
import Payroll from './pages/payroll/Payroll'
import Chat from './pages/chat/Chat'
import Calls from './pages/calls/Calls'
import Meetings from './pages/meetings/Meetings'
import Notifications from './pages/notifications/Notifications'
import Profile from './pages/profile/Profile'

function PrivateRoute({ children, allowedRoles }) {
  const { isAuthenticated, user } = useSelector((state) => state.auth)

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/dashboard" replace />
  }

  return children
}

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.auth)

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected routes with Dashboard Layout */}
      <Route path="/dashboard" element={
        <PrivateRoute allowedRoles={['admin', 'hr']}>
          <DashboardLayout />
        </PrivateRoute>
      }>
        <Route index element={<AdminDashboard />} />
        <Route path="employees" element={<EmployeeList />} />
        <Route path="employees/:id" element={<EmployeeDetail />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="leave" element={<Leave />} />
        <Route path="payroll" element={<Payroll />} />
        <Route path="chat" element={<Chat />} />
        <Route path="calls" element={<Calls />} />
        <Route path="meetings" element={<Meetings />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* Employee dashboard */}
      <Route path="/employee-dashboard" element={
        <PrivateRoute>
          <DashboardLayout />
        </PrivateRoute>
      }>
        <Route index element={<EmployeeDashboard />} />
        <Route path="employees" element={<EmployeeList />} />
        <Route path="employees/:id" element={<EmployeeDetail />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="leave" element={<Leave />} />
        <Route path="chat" element={<Chat />} />
        <Route path="calls" element={<Calls />} />
        <Route path="meetings" element={<Meetings />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* Redirect based on role */}
      <Route path="/home" element={
        <Navigate to={user?.role === 'admin' || user?.role === 'hr' ? '/dashboard' : '/employee-dashboard'} replace />
      } />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App