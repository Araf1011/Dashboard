import React from 'react';
import { 
  LayoutGrid, 
  Users, 
  Layers, 
  Workflow, 
  Calendar, 
  FileText, 
  Moon, 
  Sun,
  GraduationCap
} from 'lucide-react';

export default function SidebarRail({ activeTab, setActiveTab, darkMode, setDarkMode }) {
  const navItems = [
    { id: 'dashboard', icon: LayoutGrid, label: 'Dashboard', tooltip: 'Executive Dashboard' },
    { id: 'students', icon: Users, label: 'Roster', tooltip: 'Master Student Roster' },
    { id: 'architecture', icon: Layers, label: '3-Tier', tooltip: '3-Tier Architecture' },
    { id: 'diagrams', icon: Workflow, label: 'Diagrams', tooltip: 'UML & Appendix Diagrams' },
    { id: 'roadmap', icon: Calendar, label: 'Timeline', tooltip: 'Gantt WBS Timeline' },
    { id: 'proposal', icon: FileText, label: 'Proposal', tooltip: 'Proposal & References' },
  ];

  return (
    <>
      {/* ================= DESKTOP VERTICAL RAIL (hidden on mobile, visible md+) ================= */}
      <aside className="hidden md:flex w-16 py-6 flex-col items-center justify-between shrink-0 select-none h-full">
        {/* Top App Icon */}
        <div className="flex flex-col items-center space-y-6">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 hover:scale-105 transition-transform"
            title="King's Own Institute - ASRIS"
          >
            <GraduationCap className="w-5 h-5" />
          </button>

          {/* Navigation Icons */}
          <nav className="flex flex-col items-center space-y-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all relative group ${
                    isActive
                      ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-bold shadow-xs'
                      : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-white/60 dark:hover:bg-slate-800/60'
                  }`}
                  title={item.tooltip}
                >
                  <Icon className="w-5 h-5" />

                  {/* Tooltip on hover */}
                  <span className="absolute left-14 px-2.5 py-1 rounded-xl bg-slate-900 text-white text-[11px] whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 shadow-lg font-medium">
                    {item.tooltip}
                  </span>

                  {isActive && (
                    <span className="absolute -left-1 w-1 h-5 bg-indigo-600 rounded-r-full" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Dark Mode Toggle */}
        <div className="flex flex-col items-center space-y-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 rounded-2xl flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-white/60 dark:hover:bg-slate-800/60 transition-colors"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </aside>

      {/* ================= MOBILE BOTTOM NAVIGATION DOCK (visible on mobile < md) ================= */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#0e0c18]/95 backdrop-blur-lg border-t border-slate-200/80 dark:border-slate-800/80 px-2 py-1.5 shadow-lg">
        <div className="flex items-center justify-around max-w-lg mx-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all ${
                  isActive
                    ? 'text-indigo-600 dark:text-indigo-400 font-bold scale-105'
                    : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                }`}
              >
                <div className={`p-1 rounded-lg ${isActive ? 'bg-indigo-50 dark:bg-indigo-950/60' : ''}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] mt-0.5 tracking-tight font-medium">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
