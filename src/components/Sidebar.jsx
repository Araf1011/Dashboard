import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Layers, 
  Workflow, 
  CalendarRange, 
  FileText 
} from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, atRiskCount }) {
  const navItems = [
    { id: 'dashboard', label: 'Executive Dashboard', icon: LayoutDashboard },
    { id: 'students', label: 'Student Risk Roster', icon: Users, badge: atRiskCount },
    { id: 'architecture', label: '3-Tier Architecture', icon: Layers },
    { id: 'diagrams', label: 'UML & Workflows', icon: Workflow },
    { id: 'roadmap', label: 'Gantt Roadmap & WBS', icon: CalendarRange },
    { id: 'proposal', label: 'Proposal & References', icon: FileText },
  ];

  return (
    <aside className="w-full lg:w-64 shrink-0">
      <div className="bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-800 rounded-2xl p-2.5 shadow-sm space-y-1">
        <div className="px-3 py-2 text-[11px] font-bold tracking-wider text-surface-400 uppercase font-mono">
          System Navigation
        </div>

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 shadow-sm border border-brand-200/50 dark:border-brand-900/50'
                  : 'text-surface-600 dark:text-surface-400 hover:bg-surface-50 dark:hover:bg-surface-800/60 hover:text-surface-900 dark:hover:text-surface-100'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Icon className={`w-4 h-4 ${isActive ? 'text-brand-600 dark:text-brand-400' : 'text-surface-400'}`} />
                <span>{item.label}</span>
              </div>

              {item.badge !== undefined && (
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold font-mono ${
                  isActive 
                    ? 'bg-brand-600 text-white' 
                    : 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}

        {/* Academic Project Context Footer in Sidebar */}
        <div className="mt-4 pt-3 border-t border-surface-100 dark:border-surface-800/80 px-3 py-2">
          <div className="text-[10px] text-surface-400 uppercase font-mono font-bold">Academic Institution</div>
          <div className="font-bold text-xs text-surface-800 dark:text-surface-200 mt-0.5">King&apos;s Own Institute</div>
          <div className="text-[11px] text-surface-500 mt-0.5">CRICOS 01871A • Dr. Sweta Thakur</div>
        </div>
      </div>
    </aside>
  );
}

