import { useState } from 'react'
import { motion } from 'framer-motion'
import DashboardLayout from '../../components/Layout/DashboardLayout'

const contacts = [
  { id: 1, name: 'David Wilson', avatar: 'DW', lastMessage: 'Can you review the PR?', time: '2 min ago', unread: 2, online: true },
  { id: 2, name: 'Sarah Smith', avatar: 'SS', lastMessage: 'Meeting confirmed for tomorrow', time: '15 min ago', unread: 0, online: true },
  { id: 3, name: 'Mike Johnson', avatar: 'MJ', lastMessage: 'Thanks for the update!', time: '1 hour ago', unread: 0, online: false },
  { id: 4, name: 'Emily Brown', avatar: 'EB', lastMessage: 'Let me check the documentation', time: '2 hours ago', unread: 1, online: true },
  { id: 5, name: 'Team Engineering', avatar: 'TE', lastMessage: 'John: Deployment successful', time: '3 hours ago', unread: 5, online: true, isGroup: true },
]

const messages = [
  { id: 1, sender: 'David Wilson', text: 'Hey, are you available for a quick call?', time: '10:30 AM', isMe: false },
  { id: 2, sender: 'Me', text: 'Sure, what is it about?', time: '10:31 AM', isMe: true },
  { id: 3, sender: 'David Wilson', text: 'I wanted to discuss the new feature implementation', time: '10:32 AM', isMe: false },
  { id: 4, sender: 'David Wilson', text: 'Can you review the PR I submitted yesterday?', time: '10:32 AM', isMe: false },
  { id: 5, sender: 'Me', text: 'Of course! I will take a look this afternoon', time: '10:35 AM', isMe: true },
]

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(contacts[0])
  const [newMessage, setNewMessage] = useState('')

  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-8rem)]">
        <div className="card h-full flex overflow-hidden">
          {/* Contacts sidebar */}
          <div className="w-80 border-r border-slate-200 dark:border-slate-700 flex flex-col">
            <div className="p-4 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Messages</h2>
              <div className="relative mt-3">
                <input type="text" placeholder="Search conversations..." className="input pl-10" />
                <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {contacts.map((contact) => (
                <motion.button
                  key={contact.id}
                  onClick={() => setSelectedChat(contact)}
                  whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
                  className={`w-full p-4 flex items-center gap-3 border-b border-slate-100 dark:border-slate-700 transition-colors ${
                    selectedChat.id === contact.id ? 'bg-primary-50 dark:bg-primary-900/20' : ''
                  }`}
                >
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-medium">
                      {contact.avatar}
                    </div>
                    {contact.online && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-slate-800 rounded-full" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-slate-900 dark:text-white truncate">{contact.name}</p>
                      <span className="text-xs text-slate-400">{contact.time}</span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 truncate">{contact.lastMessage}</p>
                  </div>
                  {contact.unread > 0 && (
                    <span className="w-5 h-5 bg-primary-500 text-white text-xs rounded-full flex items-center justify-center">
                      {contact.unread}
                    </span>
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Chat area */}
          <div className="flex-1 flex flex-col">
            {/* Chat header */}
            <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-medium">
                  {selectedChat.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">{selectedChat.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{selectedChat.online ? 'Online' : 'Offline'}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </button>
                <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[70%] ${msg.isMe ? 'order-2' : ''}`}>
                    <div className={`px-4 py-2 rounded-2xl ${
                      msg.isMe
                        ? 'bg-primary-500 text-white rounded-br-md'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-bl-md'
                    }`}>
                      <p className="text-sm">{msg.text}</p>
                    </div>
                    <p className={`text-xs text-slate-400 mt-1 ${msg.isMe ? 'text-right' : ''}`}>{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="input flex-1"
                />
                <button className="btn-primary px-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Chat