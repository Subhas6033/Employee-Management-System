import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import employeeReducer from '../features/employee/employeeSlice'
import attendanceReducer from '../features/attendance/attendanceSlice'
import leaveReducer from '../features/leave/leaveSlice'
import chatReducer from '../features/chat/chatSlice'
import notificationReducer from '../features/notification/notificationSlice'
import themeReducer from '../features/themeSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    employee: employeeReducer,
    attendance: attendanceReducer,
    leave: leaveReducer,
    chat: chatReducer,
    notification: notificationReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store