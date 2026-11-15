import React from 'react';
import { Mail, CheckCircle2, AlertTriangle, ArrowRight, X } from 'lucide-react';

export default function EmailModal({ isOpen, onClose, student, onSendSuccess }) {
  if (!isOpen || !student) return null;

  const handleSend = () => {
    onSendSuccess(student);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-800 rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-surface-50 dark:bg-surface-950/60 border-b border-surface-200 dark:border-surface-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-surface-900 dark:text-white">Automated Remedial Notification</h3>
              <p className="text-xs text-surface-500">24-Hour SLA Stepwise Intervention Engine</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-surface-400 hover:text-surface-600 dark:hover:text-surface-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Email Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs font-sans">
          <div className="bg-surface-50 dark:bg-surface-950/40 p-3.5 rounded-xl border border-surface-200 dark:border-surface-800 space-y-1.5 font-mono text-[11px]">
            <div className="flex justify-between">
              <span className="text-surface-400">To:</span>
              <span className="font-semibold text-brand-600 dark:text-brand-400">{student.id.toLowerCase()}@koi.edu.au ({student.name})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-surface-400">Subject:</span>
              <span className="font-semibold text-rose-600 dark:text-rose-400">[URGENT] Academic Progress Alert: Action Required for {student.subject}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-surface-400">Trigger:</span>
              <span className="text-surface-500">Automated Python Engine (Week {student.week} Checkpoint)</span>
            </div>
          </div>

          <div className="space-y-3 leading-relaxed text-surface-700 dark:text-surface-300">
            <p>Dear {student.name},</p>
            <p>
              Under King&apos;s Own Institute&apos;s academic monitoring framework (ICT753 Automated Student Risk Identification System), your current engagement in <strong className="text-brand-600 dark:text-brand-400">{student.subject}</strong> has fallen below the mandated threshold (&lt;50%).
            </p>

            <div className="bg-rose-50 dark:bg-rose-950/30 p-4 rounded-xl border border-rose-200 dark:border-rose-900/40 space-y-2">
              <div className="font-bold text-rose-700 dark:text-rose-300 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-500" />
                Current Engagement Deficit Analysis:
              </div>
              <div className="grid grid-cols-3 gap-2 pt-1 font-mono text-[11px]">
                <div className="p-2 rounded-lg bg-white/60 dark:bg-black/30">
                  <div className="text-surface-500 text-[10px]">Attendance</div>
                  <div className={`font-bold ${student.attendance < 50 ? 'text-rose-600' : 'text-emerald-600'}`}>
                    {student.attendance}% {student.attendance < 50 ? '(Risk <50%)' : '✓'}
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-white/60 dark:bg-black/30">
                  <div className="text-surface-500 text-[10px]">Tutorial Homework</div>
                  <div className={`font-bold ${student.submission < 50 ? 'text-rose-600' : 'text-emerald-600'}`}>
                    {student.submission}% {student.submission < 50 ? '(Risk <50%)' : '✓'}
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-white/60 dark:bg-black/30">
                  <div className="text-surface-500 text-[10px]">Quiz Attempt</div>
                  <div className={`font-bold ${student.quizAttempted === 'No' ? 'text-rose-600' : 'text-emerald-600'}`}>
                    {student.quizAttempted} {student.quizAttempted === 'No' ? '(Missing)' : '✓'}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <h4 className="font-bold text-surface-900 dark:text-white">Required Stepwise Remedial Actions:</h4>
              <ul className="space-y-1.5 text-surface-600 dark:text-surface-300 pl-1">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
                  <span><strong>Step 1:</strong> Access the KOI Moodle portal and review the recorded sessions for Week {student.week}.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
                  <span><strong>Step 2:</strong> Schedule an academic consultation with your {student.subject} lecturer before Friday 5:00 PM.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
                  <span><strong>Step 3:</strong> Submit pending tutorial tasks to achieve the requisite 50% participation mark before Week 8 final evaluation.</span>
                </li>
              </ul>
            </div>

            <p className="text-[11px] text-surface-400 italic">
              * This is an automated academic support alert issued in accordance with KOI ICT753 Project Guidelines. Your response is tracked in the Centralized Staff Dashboard.
            </p>
          </div>

          <div className="pt-4 border-t border-surface-200 dark:border-surface-800 flex items-center justify-between">
            <span className="text-[11px] text-surface-400 flex items-center gap-1 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              SLA Timestamp: &lt;24 hours active
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800 font-semibold text-xs transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSend}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-bold text-xs shadow-md shadow-brand-500/20 transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Dispatch Alert & Log Audit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

