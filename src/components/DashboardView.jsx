import React from 'react';
import { 
  Users, 
  AlertTriangle, 
  ShieldCheck, 
  TrendingDown, 
  Sliders, 
  Play, 
  Sparkles, 
  Mail, 
  ArrowUpRight, 
  CheckCircle2,
  Clock,
  ExternalLink
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Legend, 
  AreaChart, 
  Area 
} from 'recharts';

export default function DashboardView({
  students,
  attendanceThreshold,
  setAttendanceThreshold,
  submissionThreshold,
  setSubmissionThreshold,
  quizFlag,
  setQuizFlag,
  onRunSimulation,
  onPreviewEmail,
  isSimulating
}) {
  // Compute dynamic metrics
  const total = students.length;
  const atRisk = students.filter(s => s.stillAtRisk.includes('Needs Follow Up')).length;
  const resolved = students.filter(s => s.stillAtRisk === 'Resolved').length;
  const week4Risk = students.filter(s => s.week === 4 && s.stillAtRisk.includes('Needs Follow Up')).length;
  const week8Risk = students.filter(s => s.week === 8 && s.stillAtRisk.includes('Needs Follow Up')).length;

  // Chart data: Week 4 vs Week 8 by subject
  const subjectChartData = [
    { subject: 'MIS101', week4: 4, week8: 2, resolved: 8 },
    { subject: 'ICT201', week4: 5, week8: 2, resolved: 8 },
    { subject: 'BUS301', week4: 2, week8: 1, resolved: 9 },
    { subject: 'DAT401', week4: 3, week8: 1, resolved: 9 },
    { subject: 'NET101', week4: 4, week8: 2, resolved: 8 },
  ];

  // Failure Mode Pie Data
  const failureModeData = [
    { name: 'Attendance <50%', value: 44, color: '#f43f5e' },
    { name: 'Tutorial <50%', value: 36, color: '#f59e0b' },
    { name: 'Quiz Not Attempted', value: 20, color: '#8b5cf6' },
  ];

  // Retention Trend Data
  const retentionTrendData = [
    { checkpoint: 'Week 2 (Intake)', riskRate: 40, retentionRate: 60 },
    { checkpoint: 'Week 4 (1st Check)', riskRate: 36, retentionRate: 64 },
    { checkpoint: 'Week 6 (Remediation)', riskRate: 22, retentionRate: 78 },
    { checkpoint: 'Week 8 (2nd Check)', riskRate: 16, retentionRate: 84 },
    { checkpoint: 'Week 12 (Final)', riskRate: 8, retentionRate: 92 },
  ];

  return (
    <div className="space-y-6">
      {/* Top Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-surface-900 via-brand-950 to-surface-900 border border-brand-800/40 p-6 sm:p-8 text-white shadow-xl">
        <div className="absolute -right-16 -top-16 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-24 -bottom-16 w-56 h-56 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-brand-300 border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              KOI ICT753 Automated Student Risk Identification System
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Early Risk Intervention & Intelligence Platform
            </h1>
            <p className="text-xs sm:text-sm text-surface-300 leading-relaxed">
              Consolidating student attendance, tutorial submission logs, and assessment participation using Python (Pandas/OpenPyXL). Proactive identification at <strong>Week 4</strong> and <strong>Week 8</strong> ensures early remediation before final examination thresholds (Tinto, 2017).
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-2 shrink-0">
            <div className="bg-black/30 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-surface-400">Target Accuracy</div>
                <div className="font-bold text-sm text-emerald-300">&gt; 95% Verified Match</div>
              </div>
            </div>
            <div className="bg-black/30 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-surface-400">Admin Efficiency</div>
                <div className="font-bold text-sm text-amber-300">≥ 40% Workload Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Cohort */}
        <div className="bg-white dark:bg-surface-900 p-5 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-surface-500 uppercase tracking-wider">Active Cohort</span>
            <div className="p-2 rounded-xl bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-surface-900 dark:text-white font-mono">{total}</span>
            <span className="text-xs font-semibold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 px-2 py-0.5 rounded-full">
              5 Subjects
            </span>
          </div>
          <p className="mt-2 text-[11px] text-surface-500">MIS101, ICT201, BUS301, DAT401, NET101</p>
        </div>

        {/* Week 4 Flagged (Baseline) */}
        <div className="bg-white dark:bg-surface-900 p-5 rounded-2xl border border-amber-200/80 dark:border-amber-900/50 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Week 4 Flagged (Baseline)</span>
            <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
              <AlertTriangle className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-amber-600 dark:text-amber-400 font-mono">18</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 font-mono">
              36% Cohort
            </span>
          </div>
          <p className="mt-2 text-[11px] text-surface-500">Initial early risk detection cycle</p>
        </div>

        {/* Week 8 Persistent Risk */}
        <div className="bg-white dark:bg-surface-900 p-5 rounded-2xl border border-rose-200/80 dark:border-rose-900/50 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-rose-600 dark:text-rose-400 uppercase tracking-wider">Week 8 Persistent Risk</span>
            <div className="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400">
              <TrendingDown className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-rose-600 dark:text-rose-400 font-mono">8</span>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-mono">
              <TrendingDown className="w-3.5 h-3.5" /> -55.6% Drop
            </span>
          </div>
          <p className="mt-2 text-[11px] text-surface-500">10 students resolved after early warnings</p>
        </div>

        {/* Resolved Cases */}
        <div className="bg-white dark:bg-surface-900 p-5 rounded-2xl border border-emerald-200/80 dark:border-emerald-900/50 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Interventions Resolved</span>
            <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">{resolved}</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-mono">
              84% Rate
            </span>
          </div>
          <p className="mt-2 text-[11px] text-surface-500">Successful counseling & task completion</p>
        </div>
      </div>

      {/* Interactive Algorithm Simulator & Threshold Tuning */}
      <div className="bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-surface-100 dark:border-surface-800">
          <div>
            <h3 className="text-sm font-bold text-surface-900 dark:text-white flex items-center gap-2">
              <Sliders className="w-4 h-4 text-brand-500" />
              Python (Pandas / OpenPyXL) Algorithm Simulation Engine
            </h3>
            <p className="text-xs text-surface-500">
              Tune engagement thresholds and simulate batch execution on standardized Excel templates.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onRunSimulation(4)}
              disabled={isSimulating}
              className="px-3.5 py-1.5 rounded-xl bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-300 hover:bg-brand-100 font-semibold text-xs border border-brand-200 dark:border-brand-900/60 transition-all flex items-center gap-1.5"
            >
              <Play className="w-3 h-3" /> Simulate Week 4 Run
            </button>
            <button
              onClick={() => onRunSimulation(8)}
              disabled={isSimulating}
              className="px-3.5 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-100 font-semibold text-xs border border-indigo-200 dark:border-indigo-900/60 transition-all flex items-center gap-1.5"
            >
              <Play className="w-3 h-3" /> Simulate Week 8 Run
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {/* Threshold 1: Attendance */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-surface-700 dark:text-surface-300">Attendance Risk Threshold:</span>
              <span className="font-mono font-bold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 px-2 py-0.5 rounded">
                &lt; {attendanceThreshold}%
              </span>
            </div>
            <input
              type="range"
              min="20"
              max="80"
              step="5"
              value={attendanceThreshold}
              onChange={(e) => setAttendanceThreshold(Number(e.target.value))}
              className="w-full h-1.5 bg-surface-200 dark:bg-surface-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
            />
            <div className="text-[10px] text-surface-400">KOI standard baseline is 50% minimum attendance</div>
          </div>

          {/* Threshold 2: Submission */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-surface-700 dark:text-surface-300">Tutorial Submission Threshold:</span>
              <span className="font-mono font-bold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 px-2 py-0.5 rounded">
                &lt; {submissionThreshold}%
              </span>
            </div>
            <input
              type="range"
              min="20"
              max="80"
              step="5"
              value={submissionThreshold}
              onChange={(e) => setSubmissionThreshold(Number(e.target.value))}
              className="w-full h-1.5 bg-surface-200 dark:bg-surface-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
            />
            <div className="text-[10px] text-surface-400">Evaluates completion of weekly tutorial homework exercises</div>
          </div>

          {/* Threshold 3: Quiz Toggle */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-surface-700 dark:text-surface-300">Quiz Incomplete Flag:</span>
              <span className={`font-mono font-bold px-2 py-0.5 rounded ${quizFlag ? 'text-rose-500 bg-rose-50 dark:bg-rose-950' : 'text-surface-400 bg-surface-100 dark:bg-surface-800'}`}>
                {quizFlag ? 'Enabled (No = Risk)' : 'Disabled'}
              </span>
            </div>
            <label className="flex items-center gap-2 cursor-pointer pt-1">
              <input
                type="checkbox"
                checked={quizFlag}
                onChange={(e) => setQuizFlag(e.target.checked)}
                className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500"
              />
              <span className="text-xs text-surface-600 dark:text-surface-300 font-medium">
                Flag unattempted quiz as immediate high-risk factor
              </span>
            </label>
            <div className="text-[10px] text-surface-400">Mandatory requirement for Objective 1 compliance</div>
          </div>
        </div>
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart 1: Subject Risk Comparison */}
        <div className="lg:col-span-2 bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-surface-100 dark:border-surface-800">
            <div>
              <h3 className="text-sm font-bold text-surface-900 dark:text-white">
                Risk Distribution Across 5 Subjects (Week 4 vs Week 8)
              </h3>
              <p className="text-xs text-surface-500">
                Visualizing student recovery and persistent risk across MIS101, ICT201, BUS301, DAT401, NET101
              </p>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400">
              Live Chart
            </span>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={subjectChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                <XAxis dataKey="subject" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#0f172a', 
                    borderRadius: '12px', 
                    border: '1px solid #334155', 
                    fontSize: '12px',
                    color: '#fff' 
                  }} 
                />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                <Bar dataKey="week4" name="Week 4 Baseline Risk" fill="#f59e0b" radius={[6, 6, 0, 0]} />
                <Bar dataKey="week8" name="Week 8 Persistent Risk" fill="#f43f5e" radius={[6, 6, 0, 0]} />
                <Bar dataKey="resolved" name="Resolved / On Track" fill="#10b981" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Failure Mode Breakdown */}
        <div className="bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm space-y-4 flex flex-col justify-between">
          <div>
            <div className="pb-3 border-b border-surface-100 dark:border-surface-800">
              <h3 className="text-sm font-bold text-surface-900 dark:text-white">
                Primary Risk Drivers
              </h3>
              <p className="text-xs text-surface-500">Root cause distribution across flagged cohort</p>
            </div>

            <div className="h-56 w-full mt-2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={failureModeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={80}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {failureModeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#0f172a', 
                      borderRadius: '12px', 
                      fontSize: '11px', 
                      color: '#fff' 
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-1.5 mt-2 text-xs">
              {failureModeData.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-surface-600 dark:text-surface-400">{item.name}</span>
                  </div>
                  <span className="font-mono font-bold text-surface-900 dark:text-white">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-surface-100 dark:border-surface-800">
            <button
              onClick={() => onPreviewEmail(students.find(s => s.id === 'S10038') || students[0])}
              className="w-full py-2 rounded-xl bg-surface-50 dark:bg-surface-800/60 hover:bg-brand-50 dark:hover:bg-surface-800 text-xs font-semibold text-brand-600 dark:text-brand-400 transition-colors flex items-center justify-center gap-2 border border-surface-200 dark:border-surface-700/60"
            >
              <Mail className="w-4 h-4 text-amber-500" />
              Preview Sample Student Alert Email
            </button>
          </div>
        </div>
      </div>

      {/* Retention Efficacy Trajectory Area Chart */}
      <div className="bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-surface-100 dark:border-surface-800">
          <div>
            <h3 className="text-sm font-bold text-surface-900 dark:text-white">
              Institutional Retention & Intervention Efficacy Trajectory (Week 2 to Week 12)
            </h3>
            <p className="text-xs text-surface-500">
              Measuring early intervention impact on student retention against Tinto (2017) baseline
            </p>
          </div>
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-bold">
            +32% Retention Gain
          </span>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={retentionTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRetention" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0.0}/>
                </linearGradient>
                <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#f43f5e" stopOpacity={0.0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
              <XAxis dataKey="checkpoint" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#0f172a', 
                  borderRadius: '12px', 
                  fontSize: '11px', 
                  color: '#fff' 
                }} 
              />
              <Legend wrapperStyle={{ fontSize: '11px' }} />
              <Area type="monotone" dataKey="retentionRate" name="Student Retention Rate %" stroke="#10b981" fillOpacity={1} fill="url(#colorRetention)" />
              <Area type="monotone" dataKey="riskRate" name="At-Risk Cohort %" stroke="#f43f5e" fillOpacity={1} fill="url(#colorRisk)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

