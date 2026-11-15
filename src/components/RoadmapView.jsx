import React from 'react';
import { 
  CalendarRange, 
  CheckCircle2, 
  Clock, 
  ShieldAlert, 
  Users2, 
  FileCheck,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';

export default function RoadmapView() {
  const workPackages = [
    {
      phase: "Phase 1: Initiation & Discovery",
      weeks: "Weeks 2–3",
      items: [
        { wp: "WP1.1", name: "Data Collection & Initial Analysis", lead: "Eddie", deliverable: "Cleaned sample datasets ready for processing", weeks: [2, 3] },
        { wp: "WP1.2", name: "Current Workflow Mapping ('As-Is')", lead: "Moses", deliverable: "Process mapping & bottleneck analysis report", weeks: [2, 3] },
        { wp: "WP1.3", name: "Secondary Research on Best Practices", lead: "Abraham & Iqra", deliverable: "Summary report of automation strategies (Kumar & Singh, 2021)", weeks: [2, 3] }
      ]
    },
    {
      phase: "Phase 2: Design & Solutioning",
      weeks: "Weeks 4–5",
      items: [
        { wp: "WP2.1", name: "Standardized Excel Template Design", lead: "Iqra", deliverable: "Standardized input templates for attendance & tutorials", weeks: [4, 5] },
        { wp: "WP2.2", name: "Risk Logic Definition (<50% Thresholds)", lead: "Abraham", deliverable: "Formal risk logic specification document", weeks: [4, 5] },
        { wp: "WP2.3", name: "Notification System Workflow Design", lead: "Moses & Iqra", deliverable: "Mockups of automated 24h notification flow", weeks: [4, 5] }
      ]
    },
    {
      phase: "Phase 3: Development & Integration",
      weeks: "Weeks 6–8",
      items: [
        { wp: "WP3.1", name: "Python Script Development (Pandas)", lead: "Abraham", deliverable: "Functional data cleaning & risk identification scripts", weeks: [6, 7, 8] },
        { wp: "WP3.2", name: "Integration with Excel Templates & Dashboards", lead: "Eddie & Iqra", deliverable: "Consolidated master dataset & staff dashboard in Excel", weeks: [6, 7, 8] },
        { wp: "WP3.3", name: "Automated Notification System Implementation", lead: "Iqra", deliverable: "Operational email dispatch engine with audit trail", weeks: [6, 7, 8] }
      ]
    },
    {
      phase: "Phase 4: Testing, Validation & Documentation",
      weeks: "Weeks 9–11",
      items: [
        { wp: "WP4.1", name: "System Pilot Testing & Data Validation", lead: "Moses & Team", deliverable: "Validated system with Week 4 & Week 8 status tracking", weeks: [9, 10, 11] },
        { wp: "WP4.2", name: "Staff Guide & User Manual Creation", lead: "Moses & Iqra", deliverable: "Comprehensive implementation guide & SOPs (Welsh et al., 2020)", weeks: [9, 10] },
        { wp: "WP4.3", name: "Training & Handover Sessions", lead: "Team", deliverable: "Faculty training sessions & user onboarding", weeks: [11, 12] }
      ]
    },
    {
      phase: "Phase 5: Final Reporting & Closure",
      weeks: "Week 12",
      items: [
        { wp: "WP5.1", name: "Final Project Report Compilation", lead: "Moses", deliverable: "Complete final project report ready for submission", weeks: [12] },
        { wp: "WP5.2", name: "Lessons Learned & Retrospective", lead: "Team", deliverable: "Document team learnings & recommendations", weeks: [12] }
      ]
    }
  ];

  const weeksList = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 font-mono">
            Sections 7 & 8 • Project Timeline & WBS (Pages 9–13)
          </span>
          <h2 className="text-xl font-extrabold text-surface-900 dark:text-white mt-1">
            Gantt Schedule & Work Breakdown Structure
          </h2>
          <p className="text-xs text-surface-500 mt-1">
            12-week capstone delivery roadmap across 5 phases, 12 work packages, and assigned project leads.
          </p>
        </div>
        <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 font-semibold border border-brand-200 dark:border-brand-900">
          Trimester T126 • 12 Weeks
        </span>
      </div>

      {/* Interactive Gantt Table */}
      <div className="bg-white dark:bg-surface-900 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm overflow-hidden">
        <div className="p-4 bg-surface-50 dark:bg-surface-950/60 border-b border-surface-200 dark:border-surface-800 flex items-center justify-between">
          <h3 className="font-bold text-xs text-surface-900 dark:text-white flex items-center gap-2">
            <CalendarRange className="w-4 h-4 text-brand-500" />
            Interactive Gantt Chart Matrix
          </h3>
          <span className="text-[11px] text-surface-400 font-mono">Active Weeks: W2 to W12</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse min-w-[760px]">
            <thead>
              <tr className="bg-surface-100/70 dark:bg-surface-800/60 text-surface-600 dark:text-surface-400 font-bold border-b border-surface-200 dark:border-surface-800">
                <th className="py-2.5 px-4 w-60">Phase & Work Package</th>
                <th className="py-2.5 px-3 w-32">Lead Member</th>
                <th className="py-2.5 px-3 w-48">Key Deliverable</th>
                {weeksList.map((w) => (
                  <th key={w} className="py-2.5 px-1.5 text-center font-mono w-10">
                    W{w}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100 dark:divide-surface-800 font-medium">
              {workPackages.map((phaseGroup, pIdx) => (
                <React.Fragment key={pIdx}>
                  {/* Phase Group Header */}
                  <tr className="bg-brand-50/40 dark:bg-brand-950/20 font-bold">
                    <td colSpan={14} className="py-2 px-4 text-brand-700 dark:text-brand-300">
                      {phaseGroup.phase} ({phaseGroup.weeks})
                    </td>
                  </tr>

                  {/* Work Packages */}
                  {phaseGroup.items.map((item) => (
                    <tr key={item.wp} className="hover:bg-surface-50 dark:hover:bg-surface-800/40 transition-colors">
                      <td className="py-2.5 px-4">
                        <strong className="text-surface-900 dark:text-white font-mono text-[11px]">{item.wp}:</strong> {item.name}
                      </td>
                      <td className="py-2.5 px-3 text-surface-600 dark:text-surface-300 font-medium">
                        {item.lead}
                      </td>
                      <td className="py-2.5 px-3 text-surface-500 text-[11px]">
                        {item.deliverable}
                      </td>
                      {weeksList.map((w) => {
                        const isActive = item.weeks.includes(w);
                        return (
                          <td key={w} className="py-2.5 px-1.5 text-center">
                            {isActive ? (
                              <div className="w-5 h-5 mx-auto rounded bg-brand-500 text-white font-bold text-[10px] flex items-center justify-center shadow-xs">
                                ✓
                              </div>
                            ) : null}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Team Contribution Roster */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-800 shadow-sm space-y-2">
          <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-bold text-xs">
            <Users2 className="w-4 h-4" /> Moses Kiprop KIPKOECH
          </div>
          <div className="text-[11px] text-surface-500 font-mono">Project Manager & Process Lead</div>
          <p className="text-[11px] text-surface-600 dark:text-surface-400 leading-relaxed">
            Owns &apos;As-Is&apos; process mapping, timeline coordination, staff documentation (SOPs), pilot testing, and final project report compilation.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-800 shadow-sm space-y-2">
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
            <Users2 className="w-4 h-4" /> Eddie
          </div>
          <div className="text-[11px] text-surface-500 font-mono">Data Analyst</div>
          <p className="text-[11px] text-surface-600 dark:text-surface-400 leading-relaxed">
            Owns sample dataset collection, raw attendance & tutorial data cleaning, normalization procedures, and master dataset preparation.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-800 shadow-sm space-y-2">
          <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-xs">
            <Users2 className="w-4 h-4" /> Abraham
          </div>
          <div className="text-[11px] text-surface-500 font-mono">Data Scientist</div>
          <p className="text-[11px] text-surface-600 dark:text-surface-400 leading-relaxed">
            Defines the &lt;50% risk classification logic, authors core Python Pandas data processing scripts, and coordinates algorithm accuracy testing.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-800 shadow-sm space-y-2">
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs">
            <Users2 className="w-4 h-4" /> Iqra
          </div>
          <div className="text-[11px] text-surface-500 font-mono">Developer</div>
          <p className="text-[11px] text-surface-600 dark:text-surface-400 leading-relaxed">
            Designs standardized Excel templates, develops the 24h automated email notification workflow, and builds the consolidated staff dashboard.
          </p>
        </div>
      </div>

      {/* Risk Analysis & Mitigation Matrix (Section 10) */}
      <div className="bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-surface-100 dark:border-surface-800">
          <div>
            <h3 className="text-sm font-bold text-surface-900 dark:text-white flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-rose-500" />
              Risk Analysis & Mitigation Matrix (Section 10 • ISO/IEC 31000 Aligned)
            </h3>
            <p className="text-xs text-surface-500">
              Proactive technical, operational, and stakeholder contingency controls
            </p>
          </div>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 font-bold">
            Risk Governance
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl border border-surface-200 dark:border-surface-800 bg-surface-50/50 dark:bg-surface-950/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs text-surface-900 dark:text-white">Data Inconsistency</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 font-bold">Medium</span>
            </div>
            <p className="text-[11px] text-surface-500"><strong>Impact:</strong> Misidentification or false flagging of at-risk students.</p>
            <p className="text-[11px] text-emerald-600 dark:text-emerald-400"><strong>Mitigation:</strong> Standardized Excel input templates with strict data validation & preprocessing scripts.</p>
          </div>

          <div className="p-4 rounded-xl border border-surface-200 dark:border-surface-800 bg-surface-50/50 dark:bg-surface-950/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs text-surface-900 dark:text-white">Technical Errors</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 font-bold">High</span>
            </div>
            <p className="text-[11px] text-surface-500"><strong>Impact:</strong> Python script failure during batch aggregation or threshold evaluation.</p>
            <p className="text-[11px] text-emerald-600 dark:text-emerald-400"><strong>Mitigation:</strong> Iterative unit testing, automated fallback routines, and robust try-catch logging.</p>
          </div>

          <div className="p-4 rounded-xl border border-surface-200 dark:border-surface-800 bg-surface-50/50 dark:bg-surface-950/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs text-surface-900 dark:text-white">Scope Creep</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 font-bold">Low</span>
            </div>
            <p className="text-[11px] text-surface-500"><strong>Impact:</strong> Demands for predictive AI beyond Week 8 or direct mobile app development.</p>
            <p className="text-[11px] text-emerald-600 dark:text-emerald-400"><strong>Mitigation:</strong> Strict adherence to agreed project scope; maintain out-of-scope boundaries.</p>
          </div>

          <div className="p-4 rounded-xl border border-surface-200 dark:border-surface-800 bg-surface-50/50 dark:bg-surface-950/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs text-surface-900 dark:text-white">Communication Failure</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 font-bold">Medium</span>
            </div>
            <p className="text-[11px] text-surface-500"><strong>Impact:</strong> Students ignore automated email alerts; no engagement improvement.</p>
            <p className="text-[11px] text-emerald-600 dark:text-emerald-400"><strong>Mitigation:</strong> Track &apos;Action Taken&apos; status on staff dashboard; escalate unacknowledged cases to advisors.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

