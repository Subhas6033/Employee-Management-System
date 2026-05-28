import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchAttendance = createAsyncThunk(
  'attendance/fetchAttendance',
  async (params, { rejectWithValue }) => {
    try {
      const query = new URLSearchParams(params).toString()
      const response = await fetch(`/api/attendance?${query}`)
      const data = await response.json()
      if (!response.ok) throw rejectWithValue(data.message)
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const checkIn = createAsyncThunk(
  'attendance/checkIn',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/attendance/check-in', { method: 'POST' })
      const data = await response.json()
      if (!response.ok) throw rejectWithValue(data.message)
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const checkOut = createAsyncThunk(
  'attendance/checkOut',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/attendance/check-out', { method: 'POST' })
      const data = await response.json()
      if (!response.ok) throw rejectWithValue(data.message)
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const attendanceSlice = createSlice({
  name: 'attendance',
  initialState: {
    records: [],
    todayRecord: null,
    loading: false,
    error: null,
    stats: {
      totalPresent: 0,
      totalAbsent: 0,
      totalLate: 0,
      averageHours: 0,
    },
  },
  reducers: {
    clearAttendanceError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAttendance.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchAttendance.fulfilled, (state, action) => {
        state.loading = false
        state.records = action.payload.records
        state.stats = action.payload.stats
      })
      .addCase(fetchAttendance.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(checkIn.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(checkIn.fulfilled, (state, action) => {
        state.loading = false
        state.todayRecord = action.payload
      })
      .addCase(checkIn.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(checkOut.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(checkOut.fulfilled, (state, action) => {
        state.loading = false
        state.todayRecord = action.payload
      })
      .addCase(checkOut.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { clearAttendanceError } = attendanceSlice.actions
export default attendanceSlice.reducer