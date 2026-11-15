import React, { useState } from 'react';
import { 
  UserCheck, 
  Search, 
  CheckCircle2, 
  Clock, 
  FileCheck, 
  AlertCircle, 
  MessageSquare,
  Plus
} from 'lucide-react';

export default function InterventionsView({ students, onOpenInterventionModal }) {
  const [filter, setFilter] = useState('ALL');
  const [search, setSearch] = useState('');

  const intervenedStudents = students.filter(s => s.actionTaken > 0 || s.stillAtRisk === 'Resolved');
  const displayList = intervenedStudents.filter(s => {
    const matchStatus = 
      filter === 'ALL' ||
      (filter === 'RESOLVED' && s.stillAtRisk === 'Resolved') ||
      (filter === 'PENDING' && s.stillAtRisk.includes('Needs Follow Up'));
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.id.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  const totalResolved = students.filter(s => s.stillAtRisk === 'Resolved').length;
  const activeFollowUps = students.filter(s => s.stillAtRisk.includes('Needs Follow Up')).length;

  return (
    <div className="space-y-5 sm:space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-200/70 dark:border-slate-800 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-emerald-500" />
            Academic Interventions & Case Records
          </h2>
          <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
            Documented student consultations, peer tutoring assignments, and remedial progression agreements.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search case..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 pr-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-medium outline-none cursor-pointer"
          >
            <option value="ALL">All Case Statuses</option>
            <option value="RESOLVED">Resolved / Recovered</option>
            <option value="PENDING">Active Follow-Up</option>
          </select>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-[11px] text-slate-500 font-medium">Interventions Resolved</span>
            <div className="text-2xl font-extrabold text-emerald-600 font-sans mt-1">{totalResolved} Cases</div>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-[11px] text-slate-500 font-medium">Active Monitoring Backlog</span>
            <div className="text-2xl font-extrabold text-rose-600 font-sans mt-1">{activeFollowUps} Students</div>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 flex items-center justify-center">
            <AlertCircle className="w-5 h-5" />
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-[11px] text-slate-500 font-medium">Average Recovery Rate</span>
            <div className="text-2xl font-extrabold text-indigo-600 font-sans mt-1">84% Success</div>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 flex items-center justify-center">
            <FileCheck className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Cases List */}
      <div className="space-y-3">
        {displayList.map((s) => {
          const isResolved = s.stillAtRisk === 'Resolved';

          return (
            <div
              key={s.id}
              className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className={`p-2.5 rounded-2xl shrink-0 mt-0.5 ${
                  isResolved 
                    ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400' 
                    : 'bg-rose-50 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400'
                }`}>
                  <UserCheck className="w-4 h-4" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{s.name}</h4>
                    <span className="font-mono text-[10px] text-slate-400">({s.id})</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-indigo-600 dark:text-indigo-400">
                      {s.subject} • Week {s.week}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-500 mt-1">
                    {isResolved 
                      ? 'Student completed academic consultation with Dr. Sweta Thakur. Attendance & tutorial obligations met.' 
                      : 'Initial remedial warning dispatched. Pending 1-on-1 counseling appointment confirmation.'}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-[10px] text-slate-400 mt-2 font-mono">
                    <span>Attendance: {s.attendance}%</span>
                    <span>•</span>
                    <span>Submission: {s.submission}%</span>
                    <span>•</span>
                    <span>Actions Logged: {s.actionTaken}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3 self-end sm:self-auto shrink-0">
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                  isResolved
                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                    : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                }`}>
                  {isResolved ? 'Case Resolved' : 'Needs Follow-Up'}
                </span>

                <button
                  onClick={() => onOpenInterventionModal(s)}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors"
                >
                  Update Log
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
