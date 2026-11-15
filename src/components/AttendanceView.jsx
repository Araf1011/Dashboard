import React, { useState } from 'react';
import { 
  CalendarCheck, 
  Search, 
  Filter, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  BarChart2, 
  AlertTriangle 
} from 'lucide-react';

export default function AttendanceView({ students }) {
  const [selectedSubject, setSelectedSubject] = useState('ALL');
  const [search, setSearch] = useState('');

  const filtered = students.filter(s => {
    const matchSubject = selectedSubject === 'ALL' || s.subject === selectedSubject;
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.id.toLowerCase().includes(search.toLowerCase());
    return matchSubject && matchSearch;
  });

  return (
    <div className="space-y-5 sm:space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-200/70 dark:border-slate-800 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <CalendarCheck className="w-5 h-5 text-indigo-500" />
            Attendance & Tutorial Homework Tracking
          </h2>
          <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
            Weekly classroom presence and tutorial lab submissions across all 5 monitored units.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative flex-1 sm:w-48">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Filter student..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-medium outline-none cursor-pointer"
          >
            <option value="ALL">All Subjects</option>
            <option value="MIS101">MIS101</option>
            <option value="ICT201">ICT201</option>
            <option value="BUS301">BUS301</option>
            <option value="DAT401">DAT401</option>
            <option value="NET101">NET101</option>
          </select>
        </div>
      </div>

      {/* Cohort Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
        {filtered.map((s) => {
          const attendanceRisk = s.attendance < 50;
          const submissionRisk = s.submission < 50;

          return (
            <div 
              key={s.id} 
              className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/70 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-3"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-xs text-slate-900 dark:text-white">{s.name}</span>
                    <span className="text-[10px] font-mono text-slate-400">({s.id})</span>
                  </div>
                  <span className="inline-block mt-1 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-indigo-600 dark:text-indigo-400">
                    {s.subject} • Week {s.week}
                  </span>
                </div>

                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  attendanceRisk || submissionRisk
                    ? 'bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
                    : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                }`}>
                  {attendanceRisk || submissionRisk ? 'Flagged' : 'Normal'}
                </span>
              </div>

              {/* Attendance Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-500">Classroom Presence:</span>
                  <span className={`font-mono font-bold ${attendanceRisk ? 'text-rose-600' : 'text-slate-700 dark:text-slate-200'}`}>
                    {s.attendance}% {attendanceRisk && '(Below 50%)'}
                  </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${attendanceRisk ? 'bg-rose-500' : 'bg-emerald-500'}`} 
                    style={{ width: `${s.attendance}%` }} 
                  />
                </div>
              </div>

              {/* Tutorial Submission Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-500">Tutorial Submissions:</span>
                  <span className={`font-mono font-bold ${submissionRisk ? 'text-rose-600' : 'text-slate-700 dark:text-slate-200'}`}>
                    {s.submission}% {submissionRisk && '(Below 50%)'}
                  </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${submissionRisk ? 'bg-rose-500' : 'bg-indigo-500'}`} 
                    style={{ width: `${s.submission}%` }} 
                  />
                </div>
              </div>

              {/* Quiz attempt indicator */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Weekly Quiz Attempt:</span>
                <span className={`font-semibold ${s.quizAttempted === 'Yes' ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {s.quizAttempted === 'Yes' ? '✓ Completed' : '✕ Unattempted'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

