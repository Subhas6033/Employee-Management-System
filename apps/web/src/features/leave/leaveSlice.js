import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchLeaves = createAsyncThunk(
  'leave/fetchLeaves',
  async (params, { rejectWithValue }) => {
    try {
      const query = new URLSearchParams(params).toString()
      const response = await fetch(`/api/leave?${query}`)
      const data = await response.json()
      if (!response.ok) throw rejectWithValue(data.message)
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const applyLeave = createAsyncThunk(
  'leave/applyLeave',
  async (leaveData, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/leave/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leaveData),
      })
      const data = await response.json()
      if (!response.ok) throw rejectWithValue(data.message)
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const approveLeave = createAsyncThunk(
  'leave/approveLeave',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/leave/${id}/approve`, { method: 'PUT' })
      const data = await response.json()
      if (!response.ok) throw rejectWithValue(data.message)
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const rejectLeave = createAsyncThunk(
  'leave/rejectLeave',
  async ({ id, reason }, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/leave/${id}/reject`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reason }),
      })
      const data = await response.json()
      if (!response.ok) throw rejectWithValue(data.message)
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const leaveSlice = createSlice({
  name: 'leave',
  initialState: {
    leaves: [],
    balance: {
      casual: 0,
      sick: 0,
      paid: 0,
      unpaid: 0,
    },
    loading: false,
    error: null,
  },
  reducers: {
    clearLeaveError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeaves.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchLeaves.fulfilled, (state, action) => {
        state.loading = false
        state.leaves = action.payload.leaves
        state.balance = action.payload.balance
      })
      .addCase(fetchLeaves.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(applyLeave.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(applyLeave.fulfilled, (state, action) => {
        state.loading = false
        state.leaves.unshift(action.payload)
      })
      .addCase(applyLeave.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(approveLeave.fulfilled, (state, action) => {
        const index = state.leaves.findIndex((l) => l._id === action.payload._id)
        if (index !== -1) state.leaves[index] = action.payload
      })
      .addCase(rejectLeave.fulfilled, (state, action) => {
        const index = state.leaves.findIndex((l) => l._id === action.payload._id)
        if (index !== -1) state.leaves[index] = action.payload
      })
  },
})

export const { clearLeaveError } = leaveSlice.actions
export default leaveSlice.reducer