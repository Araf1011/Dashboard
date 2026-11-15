import React, { useState } from 'react';
import { 
  Layers, 
  Database, 
  Cpu, 
  MonitorCheck, 
  Mail, 
  FileSpreadsheet, 
  BarChart3, 
  CheckCircle2, 
  Code2, 
  ArrowDown, 
  UserSquare2,
  FileCode2,
  Share2
} from 'lucide-react';

export default function ArchitectureView() {
  const [selectedLayer, setSelectedLayer] = useState('ALL');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm">
        <div className="max-w-3xl">
          <span className="text-[11px] font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 font-mono">
            Section 5 • System Design & Architecture (Pages 8–9)
          </span>
          <h2 className="text-xl font-extrabold text-surface-900 dark:text-white mt-1">
            3-Tier Modular Architectural Model
          </h2>
          <p className="text-xs sm:text-sm text-surface-600 dark:text-surface-400 mt-2 leading-relaxed">
            The Automated Student Risk Management System assumes a three-layer operational model. This ensures loose coupling between data persistence (Excel), programmatic business logic (Python Pandas/OpenPyXL), and staff/student presentation services.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-surface-100 dark:border-surface-800">
          <button
            onClick={() => setSelectedLayer('ALL')}
            className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
              selectedLayer === 'ALL'
                ? 'bg-brand-600 text-white shadow-sm'
                : 'bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-300'
            }`}
          >
            Full Architecture View
          </button>
          <button
            onClick={() => setSelectedLayer('TOP')}
            className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
              selectedLayer === 'TOP'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-300'
            }`}
          >
            Layer 1: Presentation
          </button>
          <button
            onClick={() => setSelectedLayer('MIDDLE')}
            className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
              selectedLayer === 'MIDDLE'
                ? 'bg-brand-600 text-white shadow-sm'
                : 'bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-300'
            }`}
          >
            Layer 2: Application
          </button>
          <button
            onClick={() => setSelectedLayer('BOTTOM')}
            className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
              selectedLayer === 'BOTTOM'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-300'
            }`}
          >
            Layer 3: Data Persistence
          </button>
        </div>
      </div>

      {/* Layer 1: Presentation Layer */}
      {(selectedLayer === 'ALL' || selectedLayer === 'TOP') && (
        <div className="bg-white dark:bg-surface-900 rounded-2xl border-2 border-emerald-500/40 dark:border-emerald-500/30 p-6 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-surface-100 dark:border-surface-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white font-bold flex items-center justify-center text-sm shadow">
                1
              </div>
              <div>
                <h3 className="font-extrabold text-sm sm:text-base text-emerald-800 dark:text-emerald-300">
                  PRESENTATION LAYER (TOP)
                </h3>
                <p className="text-xs text-surface-500">
                  Staff Reporting Dashboards, Longitudinal Charts & Student Automated Email Triggers
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-semibold border border-emerald-200 dark:border-emerald-800">
                Governance: Project Manager (Moses)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Box 1 */}
            <div className="p-4 rounded-xl bg-surface-50 dark:bg-surface-950/60 border border-surface-200 dark:border-surface-800 space-y-2">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs">
                <Mail className="w-4 h-4" />
                Automated Email Notifications
              </div>
              <p className="text-[11px] text-surface-600 dark:text-surface-400 leading-relaxed">
                Dispatches targeted emails directly to flagged students containing structured step-by-step remedial instructions within 24 hours of Week 4/8 detection.
              </p>
              <div className="text-[10px] text-surface-400 font-mono">Output: Personalized guidance & booking links</div>
            </div>

            {/* Box 2 */}
            <div className="p-4 rounded-xl bg-surface-50 dark:bg-surface-950/60 border border-surface-200 dark:border-surface-800 space-y-2">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
                <FileSpreadsheet className="w-4 h-4" />
                Consolidated Excel Dashboards
              </div>
              <p className="text-[11px] text-surface-600 dark:text-surface-400 leading-relaxed">
                Enables academic staff and advisors to monitor cohort recovery, log intervention sessions, and track still-at-risk statuses.
              </p>
              <div className="text-[10px] text-surface-400 font-mono">Output: Centralized staff review portal</div>
            </div>

            {/* Box 3 */}
            <div className="p-4 rounded-xl bg-surface-50 dark:bg-surface-950/60 border border-surface-200 dark:border-surface-800 space-y-2">
              <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-bold text-xs">
                <BarChart3 className="w-4 h-4" />
                Summary Trend Charts
              </div>
              <p className="text-[11px] text-surface-600 dark:text-surface-400 leading-relaxed">
                Aggregates cross-subject risk trends and retention trajectories to give KOI management institution-level academic intelligence.
              </p>
              <div className="text-[10px] text-surface-400 font-mono">Output: Cross-subject retention comparisons</div>
            </div>
          </div>
        </div>
      )}

      {/* Connection Flow Indicator */}
      {selectedLayer === 'ALL' && (
        <div className="flex justify-center text-surface-400">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 dark:bg-surface-800 text-[11px] font-mono">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-brand-500" />
            Consolidated master dataset feeds dashboard reporting & email triggers
          </div>
        </div>
      )}

      {/* Layer 2: Application Layer */}
      {(selectedLayer === 'ALL' || selectedLayer === 'MIDDLE') && (
        <div className="bg-white dark:bg-surface-900 rounded-2xl border-2 border-brand-500/40 dark:border-brand-500/30 p-6 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-surface-100 dark:border-surface-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand-600 text-white font-bold flex items-center justify-center text-sm shadow">
                2
              </div>
              <div>
                <h3 className="font-extrabold text-sm sm:text-base text-brand-800 dark:text-brand-300">
                  APPLICATION LAYER (MIDDLE)
                </h3>
                <p className="text-xs text-surface-500">
                  Python Processing Scripts (Pandas, OpenPyXL, Risk Detection Logic & Automation Triggers)
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 font-semibold border border-brand-200 dark:border-brand-800">
                Lead: Abraham (Data Scientist) & Iqra (Dev)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-surface-50 dark:bg-surface-950/60 border border-surface-200 dark:border-surface-800 space-y-2">
              <div className="font-bold text-xs text-brand-600 dark:text-brand-400 flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                Data Cleaning & Normalization
              </div>
              <p className="text-[11px] text-surface-600 dark:text-surface-400 leading-relaxed">
                Processes disparate weekly records, validates data types, handles null values, and maps student identifiers across subjects.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-50 dark:bg-surface-950/60 border border-surface-200 dark:border-surface-800 space-y-2">
              <div className="font-bold text-xs text-rose-600 dark:text-rose-400 flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                Risk Identification Logic
              </div>
              <p className="text-[11px] text-surface-600 dark:text-surface-400 font-mono leading-relaxed">
                Flag if (attendance &lt; 50% OR tutorial_submissions &lt; 50% OR quiz == 0). Evaluated at Week 4 & Week 8.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-50 dark:bg-surface-950/60 border border-surface-200 dark:border-surface-800 space-y-2">
              <div className="font-bold text-xs text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Master Dataset Consolidation
              </div>
              <p className="text-[11px] text-surface-600 dark:text-surface-400 leading-relaxed">
                Fuses subject-level Excel sheets into a singular institutional data frame using Pandas merge & groupby functions.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-50 dark:bg-surface-950/60 border border-surface-200 dark:border-surface-800 space-y-2">
              <div className="font-bold text-xs text-amber-600 dark:text-amber-400 flex items-center gap-2">
                <MonitorCheck className="w-4 h-4" />
                Automated Notification Triggers
              </div>
              <p className="text-[11px] text-surface-600 dark:text-surface-400 leading-relaxed">
                Generates payload containing student email, personalized deficiency report, and academic counseling links.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Connection Flow Indicator */}
      {selectedLayer === 'ALL' && (
        <div className="flex justify-center text-surface-400">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 dark:bg-surface-800 text-[11px] font-mono">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-amber-500" />
            Standardized Excel inputs preprocessed and parsed via OpenPyXL
          </div>
        </div>
      )}

      {/* Layer 3: Data Layer */}
      {(selectedLayer === 'ALL' || selectedLayer === 'BOTTOM') && (
        <div className="bg-white dark:bg-surface-900 rounded-2xl border-2 border-amber-500/40 dark:border-amber-500/30 p-6 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-surface-100 dark:border-surface-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500 text-white font-bold flex items-center justify-center text-sm shadow">
                3
              </div>
              <div>
                <h3 className="font-extrabold text-sm sm:text-base text-amber-800 dark:text-amber-300">
                  DATA LAYER (BOTTOM)
                </h3>
                <p className="text-xs text-surface-500">
                  Microsoft Excel Standardized Repository & Subject Ingestion Templates
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-semibold border border-amber-200 dark:border-amber-800">
                Lead: Eddie (Data Analyst)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-surface-50 dark:bg-surface-950/60 border border-surface-200 dark:border-surface-800 space-y-2">
              <div className="font-bold text-xs text-surface-900 dark:text-white flex items-center gap-2">
                <Database className="w-4 h-4 text-amber-500" />
                1. Attendance Records (Per Subject)
              </div>
              <p className="text-[11px] text-surface-600 dark:text-surface-400 leading-relaxed">
                Captures weekly classroom and online session presence, computing cumulative participation rates per student.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-50 dark:bg-surface-950/60 border border-surface-200 dark:border-surface-800 space-y-2">
              <div className="font-bold text-xs text-surface-900 dark:text-white flex items-center gap-2">
                <Database className="w-4 h-4 text-amber-500" />
                2. Tutorial Submission Logs
              </div>
              <p className="text-[11px] text-surface-600 dark:text-surface-400 leading-relaxed">
                Weekly lab exercise and homework submission timestamps, grading completion %, and late penalty flags.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-50 dark:bg-surface-950/60 border border-surface-200 dark:border-surface-800 space-y-2">
              <div className="font-bold text-xs text-surface-900 dark:text-white flex items-center gap-2">
                <Database className="w-4 h-4 text-amber-500" />
                3. Assessment Attempt Records
              </div>
              <p className="text-[11px] text-surface-600 dark:text-surface-400 leading-relaxed">
                Formal quiz attempts, mid-term milestone submissions, and score percentiles validating academic progress.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

