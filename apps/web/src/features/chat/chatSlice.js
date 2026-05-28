import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchConversations = createAsyncThunk(
  'chat/fetchConversations',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/chat/conversations')
      const data = await response.json()
      if (!response.ok) throw rejectWithValue(data.message)
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const fetchMessages = createAsyncThunk(
  'chat/fetchMessages',
  async (conversationId, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/chat/conversations/${conversationId}/messages`)
      const data = await response.json()
      if (!response.ok) throw rejectWithValue(data.message)
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const sendMessage = createAsyncThunk(
  'chat/sendMessage',
  async ({ conversationId, content }, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/chat/conversations/${conversationId}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
      })
      const data = await response.json()
      if (!response.ok) throw rejectWithValue(data.message)
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    conversations: [],
    currentConversation: null,
    messages: [],
    loading: false,
    error: null,
    typingUsers: [],
  },
  reducers: {
    setCurrentConversation: (state, action) => {
      state.currentConversation = action.payload
    },
    addMessage: (state, action) => {
      state.messages.push(action.payload)
    },
    setTypingUser: (state, action) => {
      const { conversationId, userId, isTyping } = action.payload
      if (isTyping && !state.typingUsers.includes(userId)) {
        state.typingUsers.push(userId)
      } else if (!isTyping) {
        state.typingUsers = state.typingUsers.filter((id) => id !== userId)
      }
    },
    clearChat: (state) => {
      state.currentConversation = null
      state.messages = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchConversations.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchConversations.fulfilled, (state, action) => {
        state.loading = false
        state.conversations = action.payload
      })
      .addCase(fetchConversations.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(fetchMessages.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.loading = false
        state.messages = action.payload
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.messages.push(action.payload)
      })
  },
})

export const { setCurrentConversation, addMessage, setTypingUser, clearChat } = chatSlice.actions
export default chatSlice.reducer