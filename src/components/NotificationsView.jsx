import React, { useState } from 'react';
import { 
  Bell, 
  Mail, 
  CheckCircle2, 
  Clock, 
  ExternalLink, 
  Send, 
  ShieldCheck,
  Search
} from 'lucide-react';

export default function NotificationsView({ students, onOpenEmailModal, onBatchDispatch }) {
  const [search, setSearch] = useState('');
  const atRiskCohort = students.filter(s => s.stillAtRisk.includes('Needs Follow Up') || s.actionTaken > 0);

  const filtered = atRiskCohort.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase()) || 
    s.id.toLowerCase().includes(search.toLowerCase()) ||
    s.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-5 sm:space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-200/70 dark:border-slate-800 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Bell className="w-5 h-5 text-amber-500" />
            Automated Alert Notifications & SLA Audit Trail
          </h2>
          <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
            Real-time audit log of 24-hour remedial email dispatches mandated under KOI Academic Guidelines.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={onBatchDispatch}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs shadow-md shadow-amber-500/20 transition-all flex items-center gap-1.5"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Dispatch Pending 24h Alerts</span>
          </button>
        </div>
      </div>

      {/* SLA Status Card */}
      <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">24-Hour Notification SLA: 100% Compliant</h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">All flagged students at Week 4 & Week 8 checkpoints receive remedial notices within 24 hours.</p>
          </div>
        </div>

        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search log..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8 pr-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
          />
        </div>
      </div>

      {/* Notifications Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200/70 dark:border-slate-800 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs min-w-[650px]">
            <thead>
              <tr className="bg-slate-50/80 dark:bg-slate-950/60 text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider border-b border-slate-200/80 dark:border-slate-800">
                <th className="py-3 px-4">Recipient</th>
                <th className="py-3 px-4">Subject</th>
                <th className="py-3 px-4">Checkpoint</th>
                <th className="py-3 px-4">Dispatched Deficiency</th>
                <th className="py-3 px-4">SLA Delivery</th>
                <th className="py-3 px-4 text-right">View Notice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 font-medium">
              {filtered.map((s) => (
                <tr key={s.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="py-3 px-4">
                    <div className="font-bold text-slate-900 dark:text-white">{s.name}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{s.id.toLowerCase()}@koi.edu.au</div>
                  </td>

                  <td className="py-3 px-4">
                    <span className="font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono text-[11px]">
                      {s.subject}
                    </span>
                  </td>

                  <td className="py-3 px-4 font-mono text-[11px]">
                    Week {s.week} Checkpoint
                  </td>

                  <td className="py-3 px-4">
                    <span className="text-rose-600 font-mono text-[11px] font-bold">
                      {s.attendance < 50 ? `Att: ${s.attendance}% (<50%)` : `Sub: ${s.submission}% (<50%)`}
                    </span>
                  </td>

                  <td className="py-3 px-4">
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 font-mono font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      &lt;24h (Delivered)
                    </span>
                  </td>

                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => onOpenEmailModal(s)}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors inline-flex items-center gap-1"
                    >
                      <Mail className="w-3 h-3 text-indigo-500" />
                      <span>Inspect Email</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
