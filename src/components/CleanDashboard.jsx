import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  FileText, 
  TrendingUp, 
  Star, 
  Zap, 
  ChevronDown, 
  CheckCircle2, 
  Mail, 
  ArrowRight,
  Filter,
  Sparkles,
  Sliders
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { Flower3D, Star3D, Arrow3D, Cube3D, Quote3D, Ribbon3D } from './Geometric3DIcons';

export default function CleanDashboard({
  students,
  onOpenTable,
  onOpenEmailModal,
  onRunBatchAlert,
  attendanceThreshold,
  setAttendanceThreshold,
  isSimulating
}) {
  const [selectedChartWeek, setSelectedChartWeek] = useState('Week 4');
  const [showSlider, setShowSlider] = useState(false);

  // Dynamic metrics from student data
  const totalStudents = students.length;
  const atRiskCount = students.filter(s => s.stillAtRisk.includes('Needs Follow Up')).length;
  const resolvedCount = students.filter(s => s.stillAtRisk === 'Resolved').length;
  const clearanceRate = Math.round((resolvedCount / totalStudents) * 100);

  // Smooth spline chart data matching the elegant curved style from the image
  const chartData = [
    { day: 'Mon', attendance: 78, hours: '3.8h', flag: 'Normal' },
    { day: 'Tue', attendance: 82, hours: '4.1h', flag: 'Normal' },
    { day: 'Wed', attendance: 65, hours: '3.2h', flag: 'Warning' },
    { day: 'Thu', attendance: 58, hours: '2.9h', flag: 'Warning' },
    { day: 'Fri', attendance: 34, hours: '1h 32 min', flag: 'High Risk (<50%)' },
    { day: 'Sat', attendance: 48, hours: '2.4h', flag: 'Remediation' },
    { day: 'Sun', attendance: 72, hours: '3.6h', flag: 'Recovered' },
  ];

  // Custom sleek tooltip matching "Friday 1h 32 min" black pill in reference
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-900 text-white px-3 py-2 rounded-xl text-xs shadow-xl border border-slate-700/60 font-sans">
          <div className="font-bold">{label}</div>
          <div className="text-indigo-300 font-mono text-[11px] mt-0.5">{data.hours} • {data.attendance}% Presence</div>
          <div className={`text-[10px] font-semibold mt-1 ${data.attendance < 50 ? 'text-rose-400' : 'text-emerald-400'}`}>
            {data.flag}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Top Bar: Search Pill & User Profile */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Rounded Search Pill */}
        <div className="relative max-w-xs sm:max-w-sm w-full">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search students, units, risk flags..."
            onClick={onOpenTable}
            readOnly
            className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 shadow-xs cursor-pointer focus:outline-none"
          />
        </div>

        {/* User Profile Pill */}
        <div className="flex items-center space-x-3 self-end sm:self-auto">
          <div className="text-right hidden sm:block">
            <div className="font-bold text-xs text-slate-900 dark:text-white">Dr. Sweta Thakur</div>
            <div className="text-[11px] text-slate-400 font-medium">@koi.academics</div>
          </div>

          <div className="relative">
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-indigo-200 dark:border-indigo-900 shadow-sm bg-gradient-to-tr from-indigo-500 to-purple-400 flex items-center justify-center text-white font-bold text-xs">
              ST
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full" />
          </div>

          <button 
            onClick={() => onOpenEmailModal(students[0])}
            className="w-9 h-9 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors relative"
            title="Notification Center"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-rose-500 rounded-full" />
          </button>
        </div>
      </div>

      {/* Main Grid: Left 2/3 and Right 1/3 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT COLUMN: Metrics + Smooth Spline Chart + Subject Cards (8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* 4 Clean Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {/* Card 1: Total Courses */}
            <div className="bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-500">Total Cohort</span>
                <FileText className="w-4 h-4 text-slate-400" />
              </div>
              <div className="mt-2">
                <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-sans">{totalStudents}</div>
                <div className="text-[10px] text-emerald-600 font-medium mt-0.5">5 units monitored</div>
              </div>
            </div>

            {/* Card 2: Attendance */}
            <div className="bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-500">Avg Presence</span>
                <TrendingUp className="w-4 h-4 text-slate-400" />
              </div>
              <div className="mt-2">
                <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-sans">68%</div>
                <div className="text-[10px] text-emerald-600 font-medium mt-0.5">+4% post-Week 4</div>
              </div>
            </div>

            {/* Card 3: Risk Clearance */}
            <div className="bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-500">Clearance Rate</span>
                <Star className="w-4 h-4 text-slate-400" />
              </div>
              <div className="mt-2">
                <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-sans">{clearanceRate}%</div>
                <div className="text-[10px] text-emerald-600 font-medium mt-0.5">+55.6% resolved</div>
              </div>
            </div>

            {/* Card 4: Active At-Risk */}
            <div className="bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-500">Persistent Risk</span>
                <Zap className="w-4 h-4 text-slate-400" />
              </div>
              <div className="mt-2">
                <div className="text-2xl font-extrabold text-rose-600 font-sans">{atRiskCount}</div>
                <div className="text-[10px] text-slate-400 font-medium mt-0.5">Week 8 Target: &lt;5</div>
              </div>
            </div>
          </div>

          {/* Smooth Spline Chart: Class Attendance & Early Warning Trajectory */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">Class Attendance & Risk Curve</h3>
                <p className="text-[11px] text-slate-400">Weekly cohort engagement tracking with &lt;50% risk threshold line</p>
              </div>

              {/* Week Dropdown */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowSlider(!showSlider)}
                  className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center gap-1 hover:bg-slate-200 transition-colors"
                >
                  <Sliders className="w-3 h-3 text-indigo-500" />
                  Cutoff: {attendanceThreshold}%
                </button>
                <div className="relative">
                  <select
                    value={selectedChartWeek}
                    onChange={(e) => setSelectedChartWeek(e.target.value)}
                    className="appearance-none bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold px-3 py-1 pr-7 rounded-full outline-none cursor-pointer"
                  >
                    <option value="Week 4">Week 4 ▾</option>
                    <option value="Week 8">Week 8 ▾</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Threshold Adjuster Accordion */}
            {showSlider && (
              <div className="p-3 bg-indigo-50/50 dark:bg-indigo-950/20 rounded-2xl border border-indigo-100 dark:border-indigo-900/40 text-xs flex items-center justify-between gap-4">
                <span className="text-indigo-950 dark:text-indigo-200 text-[11px] font-medium">
                  Adjust Python Algorithm Risk Cutoff:
                </span>
                <input
                  type="range"
                  min="30"
                  max="70"
                  value={attendanceThreshold}
                  onChange={(e) => setAttendanceThreshold(Number(e.target.value))}
                  className="w-48 h-1.5 bg-indigo-200 dark:bg-indigo-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">{attendanceThreshold}%</span>
              </div>
            )}

            {/* Smooth Recharts Spline */}
            <div className="h-56 w-full pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                  <defs>
                    <linearGradient id="curveFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#818cf8" stopOpacity={0.25} />
                      <stop offset="100%" stopColor="#818cf8" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#94a3b8' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#94a3b8' }} domain={[0, 100]} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="natural"
                    dataKey="attendance"
                    stroke="#6366f1"
                    strokeWidth={2.5}
                    fill="url(#curveFill)"
                    dot={{ r: 3, fill: '#6366f1', strokeWidth: 2, stroke: '#ffffff' }}
                    activeDot={{ r: 5, fill: '#4f46e5', stroke: '#ffffff', strokeWidth: 2 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bottom Subject / Unit Cards with 3D Iridescent Badges */}
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Subject 1: MIS101 */}
              <div 
                onClick={onOpenTable}
                className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div className="flex justify-center py-2 group-hover:scale-105 transition-transform">
                  <Flower3D className="w-20 h-20" />
                </div>
                <div className="mt-3">
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white">MIS101 - Management Info</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">2 of 10 students at risk</p>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-indigo-500 h-full rounded-full" style={{ width: '80%' }} />
                  </div>
                </div>
              </div>

              {/* Subject 2: ICT201 */}
              <div 
                onClick={onOpenTable}
                className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div className="flex justify-center py-2 group-hover:scale-105 transition-transform">
                  <Star3D className="w-20 h-20" />
                </div>
                <div className="mt-3">
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white">ICT201 - Database Systems</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">2 of 10 students at risk</p>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-indigo-500 h-full rounded-full" style={{ width: '80%' }} />
                  </div>
                </div>
              </div>

              {/* Subject 3: BUS301 */}
              <div 
                onClick={onOpenTable}
                className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div className="flex justify-center py-2 group-hover:scale-105 transition-transform">
                  <Arrow3D className="w-20 h-20" />
                </div>
                <div className="mt-3">
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white">BUS301 - Business Analytics</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">1 of 10 students at risk</p>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-indigo-500 h-full rounded-full" style={{ width: '90%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Sleek Dark Pill Button (matching "View all my courses" in screenshot) */}
            <button
              onClick={onOpenTable}
              className="w-full py-3.5 rounded-2xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-semibold text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>View all 50 student records in master table</span>
              <ArrowRight className="w-4 h-4 text-indigo-400" />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Soft Pastel Action Card + My Schedule (4 Cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Featured Soft Pastel Action Card (matching "Illustration" card in image) */}
          <div className="bg-[#ddd6fe] dark:bg-indigo-950/60 text-slate-900 dark:text-white p-6 rounded-3xl space-y-4 shadow-sm border border-indigo-200/50 dark:border-indigo-900/40">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm tracking-tight text-indigo-950 dark:text-indigo-100">
                Automated Risk Alerts
              </span>
              <span className="px-3 py-1 rounded-full bg-white/70 dark:bg-white/10 text-[10px] font-bold text-indigo-900 dark:text-indigo-200 backdrop-blur-sm">
                24h SLA
              </span>
            </div>

            <p className="text-xs text-indigo-900/80 dark:text-indigo-200/80 leading-relaxed">
              Automated student risk identification triggers at <strong>Week 4 & 8</strong>. Generates individualized remedial emails with academic support contacts.
            </p>

            {/* Overlapping student avatar circles */}
            <div className="flex items-center space-x-2 pt-1">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white dark:border-indigo-950">S1</div>
                <div className="w-7 h-7 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white dark:border-indigo-950">S2</div>
                <div className="w-7 h-7 rounded-full bg-purple-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white dark:border-indigo-950">S3</div>
                <div className="w-7 h-7 rounded-full bg-slate-900 text-white text-[9px] font-bold flex items-center justify-center border-2 border-white dark:border-indigo-950">+{atRiskCount}</div>
              </div>
              <span className="text-[11px] text-indigo-950/90 dark:text-indigo-200 font-medium">currently flagged</span>
            </div>

            {/* Dark CTA button */}
            <button
              onClick={onRunBatchAlert}
              disabled={isSimulating}
              className="w-full py-3 rounded-2xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-semibold text-xs shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Mail className="w-4 h-4 text-indigo-400" />
              <span>{isSimulating ? 'Processing Alerts...' : 'Dispatch All 24h Alerts'}</span>
            </button>
          </div>

          {/* Intervention Schedule & Action Logs (matching "My schedule" in image) */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">Intervention Agenda</h3>
              <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1 cursor-pointer">
                Week ▾
              </span>
            </div>

            <div className="space-y-4">
              {/* Item 1 */}
              <div className="flex items-center justify-between gap-3 group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50">
                    <Cube3D className="w-7 h-7" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                      Student_38 Counseling
                    </h5>
                    <p className="text-[10px] text-slate-400">Dr. Sweta Thakur • 1-on-1</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Today</div>
                  <div className="text-[10px] text-slate-400">10:00 AM</div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center justify-between gap-3 group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-2xl bg-purple-50 dark:bg-purple-950/50">
                    <Quote3D className="w-7 h-7" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                      Week 4 Python Batch
                    </h5>
                    <p className="text-[10px] text-slate-400">Pandas Engine Evaluation</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs font-bold text-slate-900 dark:text-white">12 Mar</div>
                  <div className="text-[10px] text-slate-400">12:15 PM</div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center justify-between gap-3 group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-2xl bg-pink-50 dark:bg-pink-950/50">
                    <Ribbon3D className="w-7 h-7" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                      Tutorial Homework Audit
                    </h5>
                    <p className="text-[10px] text-slate-400">MIS101 Lab Exercises</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs font-bold text-slate-900 dark:text-white">13 Mar</div>
                  <div className="text-[10px] text-slate-400">9:00 AM</div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-center justify-between gap-3 group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50">
                    <Cube3D className="w-7 h-7" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                      Week 8 Final Retention Check
                    </h5>
                    <p className="text-[10px] text-slate-400">KOI Management Review</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs font-bold text-slate-900 dark:text-white">14 Mar</div>
                  <div className="text-[10px] text-slate-400">11:00 AM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

