import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, LogOut, Search, Trash2 } from 'lucide-react';

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
}

export default function Admin() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/get_contacts.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok && data.status === 'success') {
        setIsAuthenticated(true);
        setMessages(data.data || []);
      } else {
        setError(data.message || 'Authentication failed');
      }
    } catch (err) {
      setError('Failed to connect to the server');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    setMessages([]);
  };

  const filteredMessages = messages.filter(
    (msg) =>
      msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-neutral-50 pt-32 pb-24 px-6 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-neutral-200"
        >
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center">
              <Lock className="w-6 h-6 text-neutral-600" />
            </div>
          </div>
          <h1 className="text-2xl font-serif font-medium text-neutral-900 text-center mb-2">
            Admin Access
          </h1>
          <p className="text-neutral-500 text-center mb-8">
            Enter your secure password to view contact submissions.
          </p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                placeholder="Enter password"
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm p-3 bg-red-50 rounded-lg">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full px-8 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Authenticating...' : 'View Submissions'}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 pt-32 pb-24 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-serif font-medium text-neutral-900 mb-2">
              Contact Submissions
            </h1>
            <p className="text-neutral-500">
              Total {messages.length} message{messages.length !== 1 ? 's' : ''} received.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 text-sm font-medium text-neutral-700 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden">
          <div className="p-4 border-b border-neutral-200 flex items-center">
            <div className="relative w-full max-w-md block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search by name, email, or subject..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-neutral-50 border-none focus:ring-0 text-sm"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-neutral-50 text-neutral-500 border-b border-neutral-200">
                <tr>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Name</th>
                  <th className="px-6 py-4 font-medium">Email</th>
                  <th className="px-6 py-4 font-medium">Subject</th>
                  <th className="px-6 py-4 font-medium">Message</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {filteredMessages.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-neutral-500">
                      No messages found.
                    </td>
                  </tr>
                ) : (
                  filteredMessages.map((msg) => (
                    <tr key={msg.id} className="hover:bg-neutral-50/50 transition-colors">
                      <td className="px-6 py-4 text-neutral-500">
                        {new Date(msg.created_at).toLocaleDateString()}{' '}
                        {new Date(msg.created_at).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </td>
                      <td className="px-6 py-4 font-medium text-neutral-900">{msg.name}</td>
                      <td className="px-6 py-4 text-neutral-600">
                        <a href={`mailto:${msg.email}`} className="hover:text-neutral-900 hover:underline">
                          {msg.email}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-neutral-900">{msg.subject}</td>
                      <td className="px-6 py-4 text-neutral-600">
                        <div className="max-w-xs truncate" title={msg.message}>
                          {msg.message}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
