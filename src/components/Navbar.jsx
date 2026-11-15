import React from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  Moon, 
  Sun, 
  Download, 
  Play, 
  ShieldCheck, 
  FileSpreadsheet,
  Terminal
} from 'lucide-react';

export default function Navbar({ 
  darkMode, 
  setDarkMode, 
  onRunEngine, 
  onExportCsv, 
  isSimulating 
}) {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-surface-950/80 backdrop-blur-md border-b border-surface-200 dark:border-surface-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand & Project Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-700 via-brand-600 to-brand-400 flex items-center justify-center text-white shadow-md shadow-brand-500/20">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base tracking-tight bg-gradient-to-r from-surface-900 to-surface-700 dark:from-white dark:to-surface-300 bg-clip-text text-transparent">
                  ASRIS
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 font-mono border border-brand-200/50 dark:border-brand-900/50">
                  KOI ICT753
                </span>
              </div>
              <p className="text-[11px] text-surface-500 hidden sm:block font-medium">
                Automated Student Risk Identification System • Trimester T126
              </p>
            </div>
          </div>

          {/* Live Automation Badge & SLA */}
          <div className="hidden md:flex items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Python Automation: Active</span>
              <span className="text-emerald-400 font-mono text-[10px]">| SLA: &lt;24h</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Quick Engine Run Button */}
            <button
              onClick={onRunEngine}
              disabled={isSimulating}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white text-xs font-semibold shadow-sm shadow-brand-500/20 transition-all flex items-center gap-1.5 disabled:opacity-50"
              title="Execute Python Pandas / OpenPyXL batch classification"
            >
              <Play className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">
                {isSimulating ? 'Processing...' : 'Run Engine'}
              </span>
            </button>

            {/* Export CSV Button */}
            <button
              onClick={onExportCsv}
              className="px-3 py-1.5 rounded-xl bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 text-surface-700 dark:text-surface-200 text-xs font-semibold transition-all flex items-center gap-1.5 border border-surface-200/70 dark:border-surface-700/60"
              title="Download Master Consolidated Excel/CSV"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span className="hidden sm:inline">Export CSV</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 text-surface-600 dark:text-surface-300 transition-colors"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-surface-600" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

