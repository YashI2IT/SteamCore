import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, Target, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000/api';

export default function AdminDashboard() {
  const [analytics, setAnalytics] = useState(null);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [analyticsRes, leadsRes] = await Promise.all([
          fetch(`${BACKEND_URL}/analytics`),
          fetch(`${BACKEND_URL}/lead`)
        ]);
        
        const analyticsData = await analyticsRes.json();
        const leadsData = await leadsRes.json();
        
        if (analyticsData.success) setAnalytics(analyticsData.data);
        if (leadsData.success) setLeads(leadsData.data);
      } catch (error) {
        console.error('Failed to fetch admin data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const deleteLead = async (id) => {
    if (!window.confirm('Are you sure you want to delete this lead?')) return;
    try {
      await fetch(`${BACKEND_URL}/lead/${id}`, { method: 'DELETE' });
      setLeads(leads.filter(l => l._id !== id));
    } catch (error) {
      console.error('Error deleting lead:', error);
    }
  };

  if (loading) return <div className="flex h-screen items-center justify-center">Loading Admin Panel...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-steam-navy">AI Chatbot Admin</h1>
            <p className="text-gray-600">Dashboard & Lead Management</p>
          </div>
          <Link to="/" className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-medium text-steam-navy shadow-sm border border-gray-200 hover:bg-gray-50">
            <ArrowLeft size={18} />
            Back to Website
          </Link>
        </div>

        {/* Analytics Cards */}
        {analytics && (
          <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Users size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Visitors</p>
                  <p className="text-2xl font-bold text-gray-900">{analytics.totalVisitors}</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-50 text-green-600">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Conversations</p>
                  <p className="text-2xl font-bold text-gray-900">{analytics.totalConversations}</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                  <Target size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Leads</p>
                  <p className="text-2xl font-bold text-gray-900">{analytics.totalLeads}</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Avg. Chat Length</p>
                  <p className="text-2xl font-bold text-gray-900">{analytics.avgChatLength} msgs</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Leads Table */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Leads</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700">
                <tr>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Name / Company</th>
                  <th className="px-6 py-3">Contact</th>
                  <th className="px-6 py-3">Requirement</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {leads.length === 0 ? (
                  <tr><td colSpan="5" className="px-6 py-4 text-center">No leads yet.</td></tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead._id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-6 py-4">{new Date(lead.createdAt).toLocaleDateString()}</td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">{lead.fullName}</div>
                        <div className="text-xs">{lead.companyName || '-'}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div>{lead.email}</div>
                        <div>{lead.phoneNumber}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                          {lead.requirement}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button onClick={() => deleteLead(lead._id)} className="font-medium text-red-600 hover:underline">Delete</button>
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
