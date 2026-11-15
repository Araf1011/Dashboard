import React from 'react';
import { 
  Settings, 
  Sliders, 
  Play, 
  ShieldCheck, 
  GraduationCap, 
  RotateCcw,
  BellRing
} from 'lucide-react';

export default function SettingsView({
  attendanceThreshold,
  setAttendanceThreshold,
  submissionThreshold,
  setSubmissionThreshold,
  quizFlag,
  setQuizFlag,
  onRunSimulation,
  isSimulating
}) {
  const handleReset = () => {
    setAttendanceThreshold(50);
    setSubmissionThreshold(50);
    setQuizFlag(true);
  };

  return (
    <div className="space-y-5 sm:space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-200/70 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Settings className="w-5 h-5 text-indigo-500" />
            Risk Classification Rules & Engine Settings
          </h2>
          <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
            Configure algorithmic thresholds and automation schedules for early student risk detection.
          </p>
        </div>

        <button
          onClick={handleReset}
          className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold transition-colors flex items-center gap-1.5 self-start sm:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset to Baseline (50%)</span>
        </button>
      </div>

      {/* Rules Config Box */}
      <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-200/70 dark:border-slate-800 shadow-xs space-y-6">
        <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-2">
          <Sliders className="w-4 h-4 text-indigo-500" />
          Algorithmic Threshold Parameters
        </h3>

        {/* Rule 1: Attendance Threshold */}
        <div className="space-y-2 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-center text-xs">
            <div>
              <span className="font-bold text-slate-800 dark:text-slate-200">Class Attendance Cutoff:</span>
              <p className="text-[11px] text-slate-400 mt-0.5">Students below this percentage are automatically flagged for attendance intervention.</p>
            </div>
            <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-xl text-xs">
              &lt; {attendanceThreshold}%
            </span>
          </div>

          <div className="pt-2 flex items-center gap-4">
            <input
              type="range"
              min="30"
              max="70"
              step="5"
              value={attendanceThreshold}
              onChange={(e) => setAttendanceThreshold(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
          </div>
        </div>

        {/* Rule 2: Tutorial Submission Threshold */}
        <div className="space-y-2 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-center text-xs">
            <div>
              <span className="font-bold text-slate-800 dark:text-slate-200">Tutorial Homework Submission Cutoff:</span>
              <p className="text-[11px] text-slate-400 mt-0.5">Triggers if completed lab exercises fall below this percentage.</p>
            </div>
            <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-xl text-xs">
              &lt; {submissionThreshold}%
            </span>
          </div>

          <div className="pt-2 flex items-center gap-4">
            <input
              type="range"
              min="30"
              max="70"
              step="5"
              value={submissionThreshold}
              onChange={(e) => setSubmissionThreshold(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
          </div>
        </div>

        {/* Rule 3: Quiz Incomplete Flag */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 text-xs">
          <div>
            <span className="font-bold text-slate-800 dark:text-slate-200">Unattempted Assessment Flag:</span>
            <p className="text-[11px] text-slate-400 mt-0.5">Instantly flags students who did not attempt the weekly assessment quiz.</p>
          </div>

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={quizFlag}
              onChange={(e) => setQuizFlag(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-indigo-600"></div>
          </label>
        </div>

        {/* Manual Batch Execution */}
        <div className="pt-2 space-y-3">
          <h4 className="font-bold text-xs text-slate-900 dark:text-white">Batch Algorithmic Checkpoint Run:</h4>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onRunSimulation(4)}
              disabled={isSimulating}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all flex items-center gap-1.5 disabled:opacity-50"
            >
              <Play className="w-3.5 h-3.5" />
              <span>Simulate Week 4 Early Check</span>
            </button>

            <button
              onClick={() => onRunSimulation(8)}
              disabled={isSimulating}
              className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md shadow-purple-600/20 transition-all flex items-center gap-1.5 disabled:opacity-50"
            >
              <Play className="w-3.5 h-3.5" />
              <span>Simulate Week 8 Mid-term Evaluation</span>
            </button>
          </div>
        </div>
      </div>

      {/* Institutional Metadata Card */}
      <div className="p-5 rounded-2xl sm:rounded-3xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
        <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
          <GraduationCap className="w-4 h-4 text-indigo-500" />
          <span>King&apos;s Own Institute • Academic Risk Intelligence System</span>
        </div>
        <p className="text-[11px] text-slate-500 leading-relaxed">
          Unit: ICT753 Industry Project (Trimester T126) • Supervisor: Dr. Sweta Thakur • Developed for academic early-intervention compliance.
        </p>
      </div>
    </div>
  );
}

