import React, { useState } from 'react';
import { UserCheck, ShieldAlert, Check, X, FileText } from 'lucide-react';

export default function InterventionModal({ isOpen, onClose, student, onSaveIntervention }) {
  if (!isOpen || !student) return null;

  const [interventionType, setInterventionType] = useState('1-on-1 Academic Counseling');
  const [newStatus, setNewStatus] = useState('Resolved');
  const [notes, setNotes] = useState('');
  const [advisor, setAdvisor] = useState('Dr. Sweta Thakur');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveIntervention({
      studentId: student.id,
      interventionType,
      newStatus,
      notes,
      advisor
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-800 rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 bg-surface-50 dark:bg-surface-950/60 border-b border-surface-200 dark:border-surface-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-surface-900 dark:text-white">Log Academic Intervention</h3>
              <p className="text-xs text-surface-500">Academic Staff Case Review & Remediation</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-surface-400 hover:text-surface-600 dark:hover:text-surface-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
          {/* Student Banner */}
          <div className="p-3.5 bg-brand-50/50 dark:bg-brand-950/20 border border-brand-200/60 dark:border-brand-900/40 rounded-xl flex items-center justify-between">
            <div>
              <span className="font-mono text-brand-700 dark:text-brand-300 font-bold">{student.id}</span>
              <h4 className="font-bold text-surface-900 dark:text-white text-sm">{student.name}</h4>
              <p className="text-[11px] text-surface-500">{student.subject} • Week {student.week} Checkpoint</p>
            </div>
            <div className="text-right">
              <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${
                student.stillAtRisk === 'Resolved' 
                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' 
                  : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
              }`}>
                {student.stillAtRisk}
              </span>
              <div className="text-[11px] text-surface-400 mt-1 font-mono">
                Att: {student.attendance}% | Sub: {student.submission}%
              </div>
            </div>
          </div>

          <div>
            <label className="block text-surface-600 dark:text-surface-400 font-semibold mb-1">
              Intervention Strategy Conducted:
            </label>
            <select
              value={interventionType}
              onChange={(e) => setInterventionType(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-surface-50 dark:bg-surface-950 border border-surface-200 dark:border-surface-800 text-xs font-medium focus:ring-2 focus:ring-brand-500 outline-none"
            >
              <option value="1-on-1 Academic Counseling">1-on-1 Academic Counseling Session Completed</option>
              <option value="Assigned Peer Tutoring">Assigned to Peer Tutoring Support Group</option>
              <option value="Remedial Study Agreement">Signed Remedial Study Plan Agreement</option>
              <option value="Formal Academic Warning">Issued Formal Academic Warning Letter</option>
              <option value="Special Consideration Plan">Granted Extension & Special Consideration</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-surface-600 dark:text-surface-400 font-semibold mb-1">
                Updated Case Status:
              </label>
              <select
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-surface-50 dark:bg-surface-950 border border-surface-200 dark:border-surface-800 text-xs font-bold focus:ring-2 focus:ring-brand-500 outline-none text-emerald-600 dark:text-emerald-400"
              >
                <option value="Resolved">Resolved (Student on Track)</option>
                <option value="YES - Needs Follow Up">YES - Needs Continued Follow Up</option>
              </select>
            </div>

            <div>
              <label className="block text-surface-600 dark:text-surface-400 font-semibold mb-1">
                Supervising Faculty / Advisor:
              </label>
              <input
                type="text"
                value={advisor}
                onChange={(e) => setAdvisor(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-surface-50 dark:bg-surface-950 border border-surface-200 dark:border-surface-800 text-xs font-medium focus:ring-2 focus:ring-brand-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-surface-600 dark:text-surface-400 font-semibold mb-1">
              Intervention Notes & Milestones:
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Student committed to attending all upcoming workshops. Agreed on makeup submission for tutorial exercises 3 & 4."
              className="w-full px-3 py-2 rounded-xl bg-surface-50 dark:bg-surface-950 border border-surface-200 dark:border-surface-800 text-xs focus:ring-2 focus:ring-brand-500 outline-none"
            />
          </div>

          <div className="pt-3 border-t border-surface-200 dark:border-surface-800 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800 font-semibold text-xs transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              Save & Update Case
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

