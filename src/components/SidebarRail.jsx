import React from 'react';
import { 
  LayoutGrid, 
  Users, 
  Layers, 
  Workflow, 
  Calendar, 
  FileText, 
  Settings, 
  Moon, 
  Sun,
  GraduationCap
} from 'lucide-react';

export default function SidebarRail({ activeTab, setActiveTab, darkMode, setDarkMode }) {
  const navItems = [
    { id: 'dashboard', icon: LayoutGrid, tooltip: 'Clean Dashboard' },
    { id: 'students', icon: Users, tooltip: 'Master Student Roster' },
    { id: 'architecture', icon: Layers, tooltip: '3-Tier Architecture' },
    { id: 'diagrams', icon: Workflow, tooltip: 'UML & Appendix Diagrams' },
    { id: 'roadmap', icon: Calendar, tooltip: 'Gantt WBS Timeline' },
    { id: 'proposal', icon: FileText, tooltip: 'Proposal & References' },
  ];

  return (
    <aside className="w-16 py-6 flex flex-col items-center justify-between shrink-0 select-none">
      {/* Top App Icon (matching the purple squircle in the screenshot) */}
      <div className="flex flex-col items-center space-y-6">
        <button 
          onClick={() => setActiveTab('dashboard')}
          className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 hover:scale-105 transition-transform"
          title="King's Own Institute - ASRIS"
        >
          <GraduationCap className="w-5 h-5" />
        </button>

        {/* Navigation Icons */}
        <nav className="flex flex-col items-center space-y-4">
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

      {/* Bottom Icons (Settings & Dark Mode) */}
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
  );
}

