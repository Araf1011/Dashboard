import React, { useState } from 'react';
import { 
  X, 
  User, 
  Mail, 
  Building, 
  GraduationCap, 
  ShieldCheck, 
  Bell, 
  Check, 
  Camera,
  BookOpen
} from 'lucide-react';

export default function UserProfileModal({ isOpen, onClose, userProfile, onSaveProfile }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({ ...userProfile });
  const [activeTab, setActiveTab] = useState('profile');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveProfile(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Supervisor Profile & Credentials</h3>
              <p className="text-[11px] text-slate-400">King&apos;s Own Institute • Faculty of ICT</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-100 dark:border-slate-800 px-6 pt-3 gap-4 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('profile')}
            className={`pb-2.5 transition-colors border-b-2 ${
              activeTab === 'profile'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            Profile Details
          </button>
          <button
            onClick={() => setActiveTab('preferences')}
            className={`pb-2.5 transition-colors border-b-2 ${
              activeTab === 'preferences'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            Notification Rules
          </button>
          <button
            onClick={() => setActiveTab('units')}
            className={`pb-2.5 transition-colors border-b-2 ${
              activeTab === 'units'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            Assigned Units
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-xs">
          {activeTab === 'profile' && (
            <div className="space-y-4">
              {/* Avatar Pill & Status */}
              <div className="flex items-center gap-4 p-3.5 bg-slate-50 dark:bg-slate-950/40 rounded-2xl border border-slate-200/70 dark:border-slate-800">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-400 flex items-center justify-center text-white font-bold text-lg shadow-sm shrink-0">
                  {formData.avatarInitials || 'ST'}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-slate-900 dark:text-white truncate">{formData.name}</h4>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 font-mono text-[10px] font-bold">
                      {formData.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 truncate">{formData.role}</p>
                  <p className="text-[10px] text-indigo-500 font-mono mt-0.5">{formData.institution}</p>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">
                  Full Academic Name:
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs focus:ring-2 focus:ring-indigo-500 outline-none"
                  required
                />
              </div>

              {/* Academic Title & Handle */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">
                    Academic Title:
                  </label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">
                    Portal Handle:
                  </label>
                  <input
                    type="text"
                    value={formData.handle}
                    onChange={(e) => setFormData({ ...formData, handle: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs focus:ring-2 focus:ring-indigo-500 outline-none font-mono"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">
                  Faculty Email Address:
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs focus:ring-2 focus:ring-indigo-500 outline-none"
                  required
                />
              </div>

              {/* Status Switcher */}
              <div>
                <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">
                  Faculty Availability Status:
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer"
                >
                  <option value="Available / Online">🟢 Available / Online</option>
                  <option value="In Counseling Session">🟡 In 1-on-1 Counseling Session</option>
                  <option value="Conducting Lecture">🔵 Conducting Lecture / Lab</option>
                  <option value="Away / Marking">⚪ Away / Marking Assessment</option>
                </select>
              </div>
            </div>
          )}

          {activeTab === 'preferences' && (
            <div className="space-y-3.5">
              <div className="p-3 bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 rounded-2xl text-[11px] text-indigo-900 dark:text-indigo-200 leading-relaxed">
                Configure when and how ASRIS notifies you regarding students under risk thresholds.
              </div>

              <div className="space-y-2.5">
                <label className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200/70 dark:border-slate-800 cursor-pointer">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white block">Immediate &lt;50% Attendance Alert</span>
                    <span className="text-[10px] text-slate-400">Receive alert as soon as student falls below threshold</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={formData.notifyAttendance}
                    onChange={(e) => setFormData({ ...formData, notifyAttendance: e.target.checked })}
                    className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500"
                  />
                </label>

                <label className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200/70 dark:border-slate-800 cursor-pointer">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white block">24h SLA Automated Copy</span>
                    <span className="text-[10px] text-slate-400">Receive CC on all student remedial guidance notices</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={formData.notifySLA}
                    onChange={(e) => setFormData({ ...formData, notifySLA: e.target.checked })}
                    className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500"
                  />
                </label>

                <label className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200/70 dark:border-slate-800 cursor-pointer">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white block">Weekly Retention Digest</span>
                    <span className="text-[10px] text-slate-400">Consolidated institutional report delivered on Mondays</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={formData.notifyDigest}
                    onChange={(e) => setFormData({ ...formData, notifyDigest: e.target.checked })}
                    className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500"
                  />
                </label>
              </div>
            </div>
          )}

          {activeTab === 'units' && (
            <div className="space-y-3">
              <div className="text-[11px] text-slate-500">
                You currently supervise academic early intervention across 5 accredited units:
              </div>

              <div className="space-y-2">
                {[
                  { code: 'MIS101', name: 'Management Information Systems', students: 10, risk: 2 },
                  { code: 'ICT201', name: 'Database Systems & Modeling', students: 10, risk: 2 },
                  { code: 'BUS301', name: 'Business Analytics', students: 10, risk: 1 },
                  { code: 'DAT401', name: 'Data Science Fundamentals', students: 10, risk: 1 },
                  { code: 'NET101', name: 'Networking Principles', students: 10, risk: 2 },
                ].map((u) => (
                  <div key={u.code} className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200/70 dark:border-slate-800">
                    <div>
                      <span className="font-bold font-mono text-indigo-600 dark:text-indigo-400">{u.code}</span>
                      <div className="text-slate-800 dark:text-slate-200 text-xs">{u.name}</div>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-bold text-rose-600 font-mono">{u.risk} At Risk</span>
                      <div className="text-[10px] text-slate-400">{u.students} Total</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-xs transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              Save Profile Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

