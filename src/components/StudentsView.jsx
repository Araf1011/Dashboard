import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Send, 
  UserCheck, 
  Download, 
  AlertCircle, 
  CheckCircle, 
  FileSpreadsheet,
  ArrowRight
} from 'lucide-react';

export default function StudentsView({
  students,
  onOpenEmailModal,
  onOpenInterventionModal,
  onBatchDispatch,
  onExportCsv
}) {
  const [search, setSearch] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('ALL');
  const [selectedWeek, setSelectedWeek] = useState('ALL');
  const [selectedStatus, setSelectedStatus] = useState('ALL');

  // Filter logic
  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesSearch = 
        student.id.toLowerCase().includes(search.toLowerCase()) ||
        student.name.toLowerCase().includes(search.toLowerCase());

      const matchesSubject = selectedSubject === 'ALL' || student.subject === selectedSubject;
      const matchesWeek = selectedWeek === 'ALL' || student.week.toString() === selectedWeek;
      const matchesStatus = 
        selectedStatus === 'ALL' ||
        (selectedStatus === 'AT_RISK' && student.stillAtRisk.includes('Needs Follow Up')) ||
        (selectedStatus === 'RESOLVED' && student.stillAtRisk === 'Resolved');

      return matchesSearch && matchesSubject && matchesWeek && matchesStatus;
    });
  }, [students, search, selectedSubject, selectedWeek, selectedStatus]);

  const atRiskCount = filteredStudents.filter(s => s.stillAtRisk.includes('Needs Follow Up')).length;

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Top Controls Header */}
      <div className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-200/70 dark:border-slate-800 shadow-xs space-y-3 sm:space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileSpreadsheet className="w-5 h-5 text-indigo-500" />
              Consolidated At-Risk Master Dataset
            </h2>
            <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
              KOI Standardized Excel Template schema across 5 subjects (MIS101, ICT201, BUS301, DAT401, NET101).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => onBatchDispatch(filteredStudents.filter(s => s.stillAtRisk.includes('Needs Follow Up')))}
              className="flex-1 sm:flex-initial px-3 sm:px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Batch 24h Alerts ({atRiskCount})</span>
            </button>
            <button
              onClick={onExportCsv}
              className="flex-1 sm:flex-initial px-3 sm:px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 pt-1 sm:pt-2">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search ID, name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-8 pr-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs focus:ring-2 focus:ring-indigo-500 outline-none text-slate-800 dark:text-slate-200"
            />
          </div>

          {/* Subject Filter */}
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs focus:ring-2 focus:ring-indigo-500 outline-none text-slate-800 dark:text-slate-200 font-medium cursor-pointer"
          >
            <option value="ALL">All Subjects (5 Units)</option>
            <option value="MIS101">MIS101 - Management Info Systems</option>
            <option value="ICT201">ICT201 - Database Systems & Modeling</option>
            <option value="BUS301">BUS301 - Business Analytics</option>
            <option value="DAT401">DAT401 - Data Science Fundamentals</option>
            <option value="NET101">NET101 - Networking Principles</option>
          </select>

          {/* Week Checkpoint */}
          <select
            value={selectedWeek}
            onChange={(e) => setSelectedWeek(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs focus:ring-2 focus:ring-indigo-500 outline-none text-slate-800 dark:text-slate-200 font-medium cursor-pointer"
          >
            <option value="ALL">All Checkpoints (Week 4 & 8)</option>
            <option value="4">Week 4 (Early Identification)</option>
            <option value="8">Week 8 (Mid-term Evaluation)</option>
          </select>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs focus:ring-2 focus:ring-indigo-500 outline-none text-slate-800 dark:text-slate-200 font-medium cursor-pointer"
          >
            <option value="ALL">All Risk Statuses</option>
            <option value="AT_RISK">YES - Needs Follow Up</option>
            <option value="RESOLVED">Resolved / On Track</option>
          </select>
        </div>
      </div>

      {/* Main Table Container */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200/70 dark:border-slate-800 shadow-xs overflow-hidden">
        {/* Mobile Swipe Notice */}
        <div className="sm:hidden px-4 py-2 bg-indigo-50/60 dark:bg-indigo-950/40 border-b border-indigo-100 dark:border-indigo-900/40 text-[10px] text-indigo-700 dark:text-indigo-300 flex items-center justify-center gap-1 font-medium">
          <span>← Swipe horizontally to view full student columns →</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs min-w-[700px]">
            <thead>
              <tr className="bg-slate-50/80 dark:bg-slate-950/60 text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider border-b border-slate-200/80 dark:border-slate-800">
                <th className="py-3 px-4">Student ID</th>
                <th className="py-3 px-4">Student Name</th>
                <th className="py-3 px-4">Subject</th>
                <th className="py-3 px-4 text-center">Week</th>
                <th className="py-3 px-4">Attendance %</th>
                <th className="py-3 px-4">Submission %</th>
                <th className="py-3 px-4 text-center">Quiz</th>
                <th className="py-3 px-4 text-center">Action Taken</th>
                <th className="py-3 px-4">Risk Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 font-medium">
              {filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan="10" className="py-8 text-center text-slate-400 text-xs">
                    No students match the selected filter criteria.
                  </td>
                </tr>
              ) : (
                filteredStudents.map((student) => {
                  const isRisk = student.stillAtRisk.includes('Needs Follow Up');

                  return (
                    <tr 
                      key={student.id}
                      className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
                    >
                      {/* ID */}
                      <td className="py-3 px-4 font-mono font-bold text-slate-900 dark:text-white">
                        {student.id}
                      </td>

                      {/* Name */}
                      <td className="py-3 px-4 text-slate-700 dark:text-slate-300">
                        {student.name}
                      </td>

                      {/* Subject */}
                      <td className="py-3 px-4">
                        <span className="font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono text-[11px]">
                          {student.subject}
                        </span>
                      </td>

                      {/* Week */}
                      <td className="py-3 px-4 text-center font-mono">
                        W{student.week}
                      </td>

                      {/* Attendance */}
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-14 sm:w-16 bg-slate-100 dark:bg-slate-800 h-1.5 sm:h-2 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${student.attendance < 50 ? 'bg-rose-500' : 'bg-emerald-500'}`} 
                              style={{ width: `${student.attendance}%` }} 
                            />
                          </div>
                          <span className={`font-mono text-[11px] font-bold ${student.attendance < 50 ? 'text-rose-600 dark:text-rose-400' : 'text-slate-700 dark:text-slate-300'}`}>
                            {student.attendance}%
                          </span>
                        </div>
                      </td>

                      {/* Submission */}
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-14 sm:w-16 bg-slate-100 dark:bg-slate-800 h-1.5 sm:h-2 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${student.submission < 50 ? 'bg-rose-500' : 'bg-emerald-500'}`} 
                              style={{ width: `${student.submission}%` }} 
                            />
                          </div>
                          <span className={`font-mono text-[11px] font-bold ${student.submission < 50 ? 'text-rose-600 dark:text-rose-400' : 'text-slate-700 dark:text-slate-300'}`}>
                            {student.submission}%
                          </span>
                        </div>
                      </td>

                      {/* Quiz Attempted */}
                      <td className="py-3 px-4 text-center">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold font-mono ${
                          student.quizAttempted === 'Yes'
                            ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400'
                            : 'bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400'
                        }`}>
                          {student.quizAttempted}
                        </span>
                      </td>

                      {/* Action Taken Count */}
                      <td className="py-3 px-4 text-center font-mono">
                        {student.actionTaken > 0 ? (
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">{student.actionTaken}</span>
                        ) : (
                          <span className="text-slate-400">0</span>
                        )}
                      </td>

                      {/* Still At Risk? */}
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold whitespace-nowrap ${
                          isRisk
                            ? 'bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300 border border-rose-200 dark:border-rose-900/60'
                            : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/60'
                        }`}>
                          {isRisk ? (
                            <>
                              <AlertCircle className="w-3 h-3 text-rose-500 shrink-0" />
                              Needs Follow Up
                            </>
                          ) : (
                            <>
                              <CheckCircle className="w-3 h-3 text-emerald-500 shrink-0" />
                              Resolved
                            </>
                          )}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          {/* Alert Email Button */}
                          <button
                            onClick={() => onOpenEmailModal(student)}
                            className="p-1.5 rounded-lg text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950/50 transition-colors"
                            title="Generate 24h Remedial Alert Email"
                          >
                            <Send className="w-3.5 h-3.5" />
                          </button>

                          {/* Log Intervention Button */}
                          <button
                            onClick={() => onOpenInterventionModal(student)}
                            className="p-1.5 rounded-lg text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-colors"
                            title="Log Staff Intervention Counseling"
                          >
                            <UserCheck className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Footer Statistics Bar */}
        <div className="p-3.5 sm:p-4 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 text-xs">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-slate-500 dark:text-slate-400 text-[11px] sm:text-xs">
            <div>Total: <strong className="text-slate-900 dark:text-white font-mono">{filteredStudents.length}</strong></div>
            <div>At-Risk: <strong className="text-rose-600 font-mono">{atRiskCount}</strong></div>
            <div>Resolved: <strong className="text-emerald-600 font-mono">{filteredStudents.length - atRiskCount}</strong></div>
            <div>Risk Rate: <strong className="text-amber-600 font-mono">{filteredStudents.length > 0 ? Math.round((atRiskCount / filteredStudents.length) * 100) : 0}%</strong></div>
          </div>
          <div className="text-[10px] sm:text-[11px] text-slate-400 font-mono">
            KOI ICT753 Assessment 2 Standardized Schema
          </div>
        </div>
      </div>
    </div>
  );
}
