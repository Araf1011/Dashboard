import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Send, 
  UserCheck, 
  Download, 
  AlertCircle, 
  CheckCircle, 
  FileSpreadsheet,
  MailCheck,
  ChevronRight
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
    <div className="space-y-6">
      {/* Top Controls Header */}
      <div className="bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-surface-900 dark:text-white flex items-center gap-2">
              <FileSpreadsheet className="w-5 h-5 text-brand-500" />
              Consolidated At-Risk Master Dataset
            </h2>
            <p className="text-xs text-surface-500">
              Direct implementation of the KOI Standardized Excel Template (Page 8) across 5 study units.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => onBatchDispatch(filteredStudents.filter(s => s.stillAtRisk.includes('Needs Follow Up')))}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs shadow-md shadow-amber-500/20 transition-all flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              Batch Dispatch 24h Alerts ({atRiskCount})
            </button>
            <button
              onClick={onExportCsv}
              className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              Export Master CSV
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-surface-400" />
            <input
              type="text"
              placeholder="Search by student ID, name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-surface-50 dark:bg-surface-950 border border-surface-200 dark:border-surface-800 text-xs focus:ring-2 focus:ring-brand-500 outline-none text-surface-800 dark:text-surface-200"
            />
          </div>

          {/* Subject Filter */}
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-surface-50 dark:bg-surface-950 border border-surface-200 dark:border-surface-800 text-xs focus:ring-2 focus:ring-brand-500 outline-none text-surface-800 dark:text-surface-200 font-medium"
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
            className="w-full px-3 py-2 rounded-xl bg-surface-50 dark:bg-surface-950 border border-surface-200 dark:border-surface-800 text-xs focus:ring-2 focus:ring-brand-500 outline-none text-surface-800 dark:text-surface-200 font-medium"
          >
            <option value="ALL">All Checkpoints (Week 4 & 8)</option>
            <option value="4">Week 4 (Early Identification)</option>
            <option value="8">Week 8 (Mid-term Evaluation)</option>
          </select>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-surface-50 dark:bg-surface-950 border border-surface-200 dark:border-surface-800 text-xs focus:ring-2 focus:ring-brand-500 outline-none text-surface-800 dark:text-surface-200 font-medium"
          >
            <option value="ALL">All Risk Statuses</option>
            <option value="AT_RISK">YES - Needs Follow Up</option>
            <option value="RESOLVED">Resolved / On Track</option>
          </select>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white dark:bg-surface-900 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-surface-50 dark:bg-surface-950/60 text-surface-600 dark:text-surface-400 font-bold uppercase tracking-wider border-b border-surface-200 dark:border-surface-800">
                <th className="py-3 px-4">Student ID</th>
                <th className="py-3 px-4">Student Name</th>
                <th className="py-3 px-4">Subject</th>
                <th className="py-3 px-4 text-center">Week</th>
                <th className="py-3 px-4">Attendance %</th>
                <th className="py-3 px-4">Submission %</th>
                <th className="py-3 px-4 text-center">Quiz Attempt</th>
                <th className="py-3 px-4 text-center">Action Taken</th>
                <th className="py-3 px-4">Still At Risk?</th>
                <th className="py-3 px-4 text-right">Intervention Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100 dark:divide-surface-800/80 font-medium">
              {filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan="10" className="py-8 text-center text-surface-400">
                    No students match the selected filter criteria.
                  </td>
                </tr>
              ) : (
                filteredStudents.map((student) => {
                  const isRisk = student.stillAtRisk.includes('Needs Follow Up');

                  return (
                    <tr 
                      key={student.id}
                      className="hover:bg-surface-50/80 dark:hover:bg-surface-800/40 transition-colors"
                    >
                      {/* ID */}
                      <td className="py-3 px-4 font-mono font-bold text-surface-900 dark:text-white">
                        {student.id}
                      </td>

                      {/* Name */}
                      <td className="py-3 px-4 text-surface-700 dark:text-surface-300">
                        {student.name}
                      </td>

                      {/* Subject */}
                      <td className="py-3 px-4">
                        <span className="font-semibold px-2 py-0.5 rounded bg-surface-100 dark:bg-surface-800 text-surface-800 dark:text-surface-200 font-mono text-[11px]">
                          {student.subject}
                        </span>
                      </td>

                      {/* Week */}
                      <td className="py-3 px-4 text-center font-mono">
                        Week {student.week}
                      </td>

                      {/* Attendance */}
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-surface-100 dark:bg-surface-800 h-2 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${student.attendance < 50 ? 'bg-rose-500' : 'bg-emerald-500'}`} 
                              style={{ width: `${student.attendance}%` }} 
                            />
                          </div>
                          <span className={`font-mono text-[11px] font-bold ${student.attendance < 50 ? 'text-rose-600 dark:text-rose-400' : 'text-surface-700 dark:text-surface-300'}`}>
                            {student.attendance}%
                          </span>
                        </div>
                      </td>

                      {/* Submission */}
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-surface-100 dark:bg-surface-800 h-2 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${student.submission < 50 ? 'bg-rose-500' : 'bg-emerald-500'}`} 
                              style={{ width: `${student.submission}%` }} 
                            />
                          </div>
                          <span className={`font-mono text-[11px] font-bold ${student.submission < 50 ? 'text-rose-600 dark:text-rose-400' : 'text-surface-700 dark:text-surface-300'}`}>
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
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">{student.actionTaken} logged</span>
                        ) : (
                          <span className="text-surface-400">0</span>
                        )}
                      </td>

                      {/* Still At Risk? */}
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                          isRisk
                            ? 'bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300 border border-rose-200 dark:border-rose-900/60'
                            : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/60'
                        }`}>
                          {isRisk ? (
                            <>
                              <AlertCircle className="w-3 h-3 text-rose-500" />
                              YES - Needs Follow Up
                            </>
                          ) : (
                            <>
                              <CheckCircle className="w-3 h-3 text-emerald-500" />
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
                            className="p-1.5 rounded-lg text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-950/50 transition-colors"
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

        {/* Footer Statistics Bar (Matching Figure on Page 8) */}
        <div className="p-4 bg-surface-50 dark:bg-surface-950/60 border-t border-surface-200 dark:border-surface-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-4 text-surface-600 dark:text-surface-400">
            <div>Total Displayed: <strong className="text-surface-900 dark:text-white font-mono">{filteredStudents.length}</strong></div>
            <div>At-Risk Count: <strong className="text-rose-600 font-mono">{atRiskCount}</strong></div>
            <div>OK / Resolved: <strong className="text-emerald-600 font-mono">{filteredStudents.length - atRiskCount}</strong></div>
            <div>At-Risk %: <strong className="text-amber-600 font-mono">{filteredStudents.length > 0 ? Math.round((atRiskCount / filteredStudents.length) * 100) : 0}%</strong></div>
          </div>
          <div className="text-[11px] text-surface-400 font-mono">
            KOI ICT753 Assessment 2 Standardized Excel Data
          </div>
        </div>
      </div>
    </div>
  );
}

