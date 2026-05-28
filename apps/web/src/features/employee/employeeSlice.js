import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchEmployees = createAsyncThunk(
  'employee/fetchEmployees',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/employees')
      const data = await response.json()
      if (!response.ok) throw rejectWithValue(data.message)
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const fetchEmployeeById = createAsyncThunk(
  'employee/fetchEmployeeById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/employees/${id}`)
      const data = await response.json()
      if (!response.ok) throw rejectWithValue(data.message)
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const createEmployee = createAsyncThunk(
  'employee/createEmployee',
  async (employeeData, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/employees', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employeeData),
      })
      const data = await response.json()
      if (!response.ok) throw rejectWithValue(data.message)
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const updateEmployee = createAsyncThunk(
  'employee/updateEmployee',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/employees/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await response.json()
      if (!response.ok) throw rejectWithValue(result.message)
      return result
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    employees: [],
    currentEmployee: null,
    loading: false,
    error: null,
    filters: {
      search: '',
      department: '',
      status: '',
    },
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload }
    },
    clearFilters: (state) => {
      state.filters = { search: '', department: '', status: '' }
    },
    clearCurrentEmployee: (state) => {
      state.currentEmployee = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.loading = false
        state.employees = action.payload
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(fetchEmployeeById.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchEmployeeById.fulfilled, (state, action) => {
        state.loading = false
        state.currentEmployee = action.payload
      })
      .addCase(fetchEmployeeById.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(createEmployee.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(createEmployee.fulfilled, (state, action) => {
        state.loading = false
        state.employees.push(action.payload)
      })
      .addCase(createEmployee.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(updateEmployee.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        state.loading = false
        const index = state.employees.findIndex((e) => e._id === action.payload._id)
        if (index !== -1) state.employees[index] = action.payload
      })
      .addCase(updateEmployee.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { setFilters, clearFilters, clearCurrentEmployee } = employeeSlice.actions
export default employeeSlice.reducer