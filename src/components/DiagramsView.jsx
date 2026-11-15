import React, { useState } from 'react';
import { 
  GitBranch, 
  Workflow, 
  Database, 
  ArrowRight, 
  Check, 
  Key, 
  Layers, 
  Network,
  Share2,
  FileCode,
  Users
} from 'lucide-react';

export default function DiagramsView() {
  const [activeTab, setActiveTab] = useState('uml');

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 font-mono">
            Appendix • Engineering Artifacts (Pages 16–19)
          </span>
          <h2 className="text-xl font-extrabold text-surface-900 dark:text-white mt-1">
            System Modeling & Architecture Schematics
          </h2>
          <p className="text-xs text-surface-500 mt-1">
            Interactive visualization of the UML Class Diagram, Activity Flow, Sequence Interactions, and DFD Level-1.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-surface-100 dark:bg-surface-800 rounded-xl">
          <button
            onClick={() => setActiveTab('uml')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'uml'
                ? 'bg-white dark:bg-surface-900 text-brand-600 dark:text-brand-400 shadow-sm'
                : 'text-surface-600 dark:text-surface-400'
            }`}
          >
            UML Class Diagram
          </button>
          <button
            onClick={() => setActiveTab('activity')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'activity'
                ? 'bg-white dark:bg-surface-900 text-brand-600 dark:text-brand-400 shadow-sm'
                : 'text-surface-600 dark:text-surface-400'
            }`}
          >
            Activity Flow
          </button>
          <button
            onClick={() => setActiveTab('sequence')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'sequence'
                ? 'bg-white dark:bg-surface-900 text-brand-600 dark:text-brand-400 shadow-sm'
                : 'text-surface-600 dark:text-surface-400'
            }`}
          >
            Sequence Interactions
          </button>
          <button
            onClick={() => setActiveTab('dfd')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'dfd'
                ? 'bg-white dark:bg-surface-900 text-brand-600 dark:text-brand-400 shadow-sm'
                : 'text-surface-600 dark:text-surface-400'
            }`}
          >
            DFD Context
          </button>
        </div>
      </div>

      {/* VIEW 1: UML CLASS SCHEMA */}
      {activeTab === 'uml' && (
        <div className="bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-surface-100 dark:border-surface-800">
            <div>
              <h3 className="text-sm font-bold text-surface-900 dark:text-white">
                Relational Entity-Relationship & Class Model (Page 16)
              </h3>
              <p className="text-xs text-surface-500">
                8 Entities with Primary Keys (PK), Foreign Keys (FK), and attribute datatypes
              </p>
            </div>
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400">
              8 Core Tables
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* SUBJECT */}
            <div className="rounded-xl border border-blue-200 dark:border-blue-900/60 overflow-hidden bg-surface-50/50 dark:bg-surface-950/40">
              <div className="bg-blue-600 text-white font-bold text-xs px-3.5 py-2 flex items-center justify-between">
                <span>SUBJECT</span>
                <span className="text-[10px] font-mono uppercase opacity-80">Entity</span>
              </div>
              <div className="p-3 text-xs space-y-1 font-mono text-surface-700 dark:text-surface-300">
                <div className="flex justify-between font-bold text-blue-600 dark:text-blue-400">
                  <span>string subject_code</span>
                  <span className="text-[9px] bg-blue-100 dark:bg-blue-950 px-1 rounded">PK</span>
                </div>
                <div className="flex justify-between"><span>string subject_name</span></div>
                <div className="flex justify-between"><span>string coordinator</span></div>
                <div className="flex justify-between"><span>int credit_hours</span></div>
              </div>
            </div>

            {/* STUDENT */}
            <div className="rounded-xl border border-emerald-200 dark:border-emerald-900/60 overflow-hidden bg-surface-50/50 dark:bg-surface-950/40">
              <div className="bg-emerald-600 text-white font-bold text-xs px-3.5 py-2 flex items-center justify-between">
                <span>STUDENT</span>
                <span className="text-[10px] font-mono uppercase opacity-80">Entity</span>
              </div>
              <div className="p-3 text-xs space-y-1 font-mono text-surface-700 dark:text-surface-300">
                <div className="flex justify-between font-bold text-emerald-600 dark:text-emerald-400">
                  <span>string student_id</span>
                  <span className="text-[9px] bg-emerald-100 dark:bg-emerald-950 px-1 rounded">PK</span>
                </div>
                <div className="flex justify-between"><span>string name</span></div>
                <div className="flex justify-between"><span>string email</span></div>
                <div className="flex justify-between"><span>string course</span></div>
                <div className="flex justify-between"><span>int enrollment_year</span></div>
              </div>
            </div>

            {/* STAFF */}
            <div className="rounded-xl border border-purple-200 dark:border-purple-900/60 overflow-hidden bg-surface-50/50 dark:bg-surface-950/40">
              <div className="bg-purple-600 text-white font-bold text-xs px-3.5 py-2 flex items-center justify-between">
                <span>STAFF</span>
                <span className="text-[10px] font-mono uppercase opacity-80">Entity</span>
              </div>
              <div className="p-3 text-xs space-y-1 font-mono text-surface-700 dark:text-surface-300">
                <div className="flex justify-between font-bold text-purple-600 dark:text-purple-400">
                  <span>string staff_id</span>
                  <span className="text-[9px] bg-purple-100 dark:bg-purple-950 px-1 rounded">PK</span>
                </div>
                <div className="flex justify-between"><span>string name</span></div>
                <div className="flex justify-between"><span>string email</span></div>
                <div className="flex justify-between"><span>string role</span></div>
              </div>
            </div>

            {/* RISK_STATUS */}
            <div className="rounded-xl border border-rose-200 dark:border-rose-900/60 overflow-hidden bg-surface-50/50 dark:bg-surface-950/40">
              <div className="bg-rose-600 text-white font-bold text-xs px-3.5 py-2 flex items-center justify-between">
                <span>RISK_STATUS</span>
                <span className="text-[10px] font-mono uppercase opacity-80">Entity</span>
              </div>
              <div className="p-3 text-xs space-y-1 font-mono text-surface-700 dark:text-surface-300">
                <div className="flex justify-between font-bold text-rose-600 dark:text-rose-400">
                  <span>int risk_id</span>
                  <span className="text-[9px] bg-rose-100 dark:bg-rose-950 px-1 rounded">PK</span>
                </div>
                <div className="flex justify-between text-indigo-500">
                  <span>string student_id</span>
                  <span className="text-[9px] bg-surface-200 dark:bg-surface-800 px-1 rounded">FK</span>
                </div>
                <div className="flex justify-between"><span>date tracking_date</span></div>
                <div className="flex justify-between"><span>float attendance_pct</span></div>
                <div className="flex justify-between"><span>float tutorial_pct</span></div>
                <div className="flex justify-between"><span>float assessment_pct</span></div>
                <div className="flex justify-between font-bold text-amber-500"><span>string risk_level</span></div>
                <div className="flex justify-between"><span>string week_checkpoint</span></div>
              </div>
            </div>

            {/* ATTENDANCE */}
            <div className="rounded-xl border border-surface-200 dark:border-surface-800 overflow-hidden bg-surface-50/50 dark:bg-surface-950/40">
              <div className="bg-surface-700 text-white font-bold text-xs px-3.5 py-2 flex items-center justify-between">
                <span>ATTENDANCE</span>
                <span className="text-[10px] font-mono uppercase opacity-80">Entity</span>
              </div>
              <div className="p-3 text-xs space-y-1 font-mono text-surface-700 dark:text-surface-300">
                <div className="flex justify-between font-bold">
                  <span>int attendance_id</span>
                  <span className="text-[9px] bg-surface-200 dark:bg-surface-800 px-1 rounded">PK</span>
                </div>
                <div className="flex justify-between text-indigo-500">
                  <span>string student_id</span>
                  <span className="text-[9px] bg-surface-200 dark:bg-surface-800 px-1 rounded">FK</span>
                </div>
                <div className="flex justify-between text-indigo-500">
                  <span>string subject_code</span>
                  <span className="text-[9px] bg-surface-200 dark:bg-surface-800 px-1 rounded">FK</span>
                </div>
                <div className="flex justify-between"><span>date class_date</span></div>
                <div className="flex justify-between"><span>string status</span></div>
                <div className="flex justify-between"><span>float percentage</span></div>
              </div>
            </div>

            {/* TUTORIAL */}
            <div className="rounded-xl border border-surface-200 dark:border-surface-800 overflow-hidden bg-surface-50/50 dark:bg-surface-950/40">
              <div className="bg-surface-700 text-white font-bold text-xs px-3.5 py-2 flex items-center justify-between">
                <span>TUTORIAL</span>
                <span className="text-[10px] font-mono uppercase opacity-80">Entity</span>
              </div>
              <div className="p-3 text-xs space-y-1 font-mono text-surface-700 dark:text-surface-300">
                <div className="flex justify-between font-bold">
                  <span>int tutorial_id</span>
                  <span className="text-[9px] bg-surface-200 dark:bg-surface-800 px-1 rounded">PK</span>
                </div>
                <div className="flex justify-between text-indigo-500">
                  <span>string student_id</span>
                  <span className="text-[9px] bg-surface-200 dark:bg-surface-800 px-1 rounded">FK</span>
                </div>
                <div className="flex justify-between text-indigo-500">
                  <span>string subject_code</span>
                  <span className="text-[9px] bg-surface-200 dark:bg-surface-800 px-1 rounded">FK</span>
                </div>
                <div className="flex justify-between"><span>string week_number</span></div>
                <div className="flex justify-between"><span>string submission_status</span></div>
                <div className="flex justify-between"><span>date submission_date</span></div>
              </div>
            </div>

            {/* ASSESSMENT */}
            <div className="rounded-xl border border-surface-200 dark:border-surface-800 overflow-hidden bg-surface-50/50 dark:bg-surface-950/40">
              <div className="bg-surface-700 text-white font-bold text-xs px-3.5 py-2 flex items-center justify-between">
                <span>ASSESSMENT</span>
                <span className="text-[10px] font-mono uppercase opacity-80">Entity</span>
              </div>
              <div className="p-3 text-xs space-y-1 font-mono text-surface-700 dark:text-surface-300">
                <div className="flex justify-between font-bold">
                  <span>int assessment_id</span>
                  <span className="text-[9px] bg-surface-200 dark:bg-surface-800 px-1 rounded">PK</span>
                </div>
                <div className="flex justify-between text-indigo-500">
                  <span>string student_id</span>
                  <span className="text-[9px] bg-surface-200 dark:bg-surface-800 px-1 rounded">FK</span>
                </div>
                <div className="flex justify-between text-indigo-500">
                  <span>string subject_code</span>
                  <span className="text-[9px] bg-surface-200 dark:bg-surface-800 px-1 rounded">FK</span>
                </div>
                <div className="flex justify-between"><span>string assessment_name</span></div>
                <div className="flex justify-between"><span>float score</span></div>
                <div className="flex justify-between"><span>date due_date</span></div>
              </div>
            </div>

            {/* NOTIFICATION */}
            <div className="rounded-xl border border-amber-200 dark:border-amber-900/60 overflow-hidden bg-surface-50/50 dark:bg-surface-950/40">
              <div className="bg-amber-600 text-white font-bold text-xs px-3.5 py-2 flex items-center justify-between">
                <span>NOTIFICATION</span>
                <span className="text-[10px] font-mono uppercase opacity-80">Entity</span>
              </div>
              <div className="p-3 text-xs space-y-1 font-mono text-surface-700 dark:text-surface-300">
                <div className="flex justify-between font-bold text-amber-600 dark:text-amber-400">
                  <span>int notification_id</span>
                  <span className="text-[9px] bg-amber-100 dark:bg-amber-950 px-1 rounded">PK</span>
                </div>
                <div className="flex justify-between text-indigo-500">
                  <span>string student_id</span>
                  <span className="text-[9px] bg-surface-200 dark:bg-surface-800 px-1 rounded">FK</span>
                </div>
                <div className="flex justify-between"><span>date notification_date</span></div>
                <div className="flex justify-between"><span>string notification_type</span></div>
                <div className="flex justify-between"><span>string message_content</span></div>
                <div className="flex justify-between"><span>string status</span></div>
                <div className="flex justify-between font-bold text-emerald-500"><span>string action_taken</span></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: ACTIVITY DIAGRAM */}
      {activeTab === 'activity' && (
        <div className="bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm space-y-6">
          <div className="pb-3 border-b border-surface-100 dark:border-surface-800">
            <h3 className="text-sm font-bold text-surface-900 dark:text-white">
              Activity Process Flowchart (Page 17)
            </h3>
            <p className="text-xs text-surface-500">
              Deterministic workflow from weekly attendance ingestion to longitudinal management reporting
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl bg-brand-600 text-white font-bold flex items-center justify-center shrink-0">1</div>
              <div className="flex-1 p-4 rounded-xl bg-surface-50 dark:bg-surface-950 border border-surface-200 dark:border-surface-800">
                <h4 className="font-bold text-xs text-surface-900 dark:text-white">Data Ingestion & Error Check</h4>
                <p className="text-xs text-surface-500 mt-1">Raw attendance, tutorial homework logs, and assessment attempts read from Excel. If files missing or corrupted, log error and request file reissue.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl bg-brand-600 text-white font-bold flex items-center justify-center shrink-0">2</div>
              <div className="flex-1 p-4 rounded-xl bg-surface-50 dark:bg-surface-950 border border-surface-200 dark:border-surface-800">
                <h4 className="font-bold text-xs text-surface-900 dark:text-white">Clean & Standardize Data</h4>
                <p className="text-xs text-surface-500 mt-1">Pandas routine cleans inconsistent string fields, parses dates, and calculates cumulative engagement percentages per enrolled student.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white font-bold flex items-center justify-center shrink-0">3</div>
              <div className="flex-1 p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900">
                <h4 className="font-bold text-xs text-indigo-700 dark:text-indigo-300">Checkpoint Branch: Week 4 vs Week 8</h4>
                <p className="text-xs text-surface-600 dark:text-surface-400 mt-1">
                  <strong>Week 4:</strong> Early intervention trigger. Flag students &lt;50% attendance OR &lt;50% tutorial OR unattempted quiz.<br/>
                  <strong>Week 8:</strong> Mid-term evaluation. Check whether previously flagged student improved or remains persistently at risk.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl bg-amber-600 text-white font-bold flex items-center justify-center shrink-0">4</div>
              <div className="flex-1 p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900">
                <h4 className="font-bold text-xs text-amber-700 dark:text-amber-300">Automated Notification Generation</h4>
                <p className="text-xs text-surface-600 dark:text-surface-400 mt-1">
                  Construct individualized remedial email detailing exact attendance shortfall and specific action roadmap. Dispatched within 24-hour SLA and logged in audit store.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0">5</div>
              <div className="flex-1 p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900">
                <h4 className="font-bold text-xs text-emerald-700 dark:text-emerald-300">Staff Dashboard Update & Case Monitoring</h4>
                <p className="text-xs text-surface-600 dark:text-surface-400 mt-1">
                  Academic advisors review updated dashboard, log counseling sessions, monitor recovery milestones, and compile consolidated weekly institutional report.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: SEQUENCE DIAGRAM */}
      {activeTab === 'sequence' && (
        <div className="bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm space-y-4">
          <div className="pb-3 border-b border-surface-100 dark:border-surface-800">
            <h3 className="text-sm font-bold text-surface-900 dark:text-white">
              Sequence Interaction Timeline (Page 18)
            </h3>
            <p className="text-xs text-surface-500">
              Message calls and actor responses across Academic Staff, Automated Engine, Excel DB, Student, and Dashboard
            </p>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <div className="p-3.5 rounded-xl bg-surface-50 dark:bg-surface-950 border border-surface-200 dark:border-surface-800 flex items-center justify-between">
              <div><strong className="text-brand-600 dark:text-brand-400">Step 1:</strong> Academic Staff &rarr; Excel DB</div>
              <span className="text-[11px] text-surface-400">Upload attendance & tutorial data sheets</span>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-50 dark:bg-surface-950 border border-surface-200 dark:border-surface-800 flex items-center justify-between">
              <div><strong className="text-purple-600 dark:text-purple-400">Step 2:</strong> Automated System &rarr; Python Engine</div>
              <span className="text-[11px] text-surface-400">Trigger Pandas batch preprocessing</span>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-50 dark:bg-surface-950 border border-surface-200 dark:border-surface-800 flex items-center justify-between">
              <div><strong className="text-indigo-600 dark:text-indigo-400">Step 3:</strong> Python Engine &rarr; Database</div>
              <span className="text-[11px] text-surface-400">Query student records & evaluate &lt;50% threshold</span>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-50 dark:bg-surface-950 border border-surface-200 dark:border-surface-800 flex items-center justify-between">
              <div><strong className="text-amber-600 dark:text-amber-400">Step 4:</strong> Automated System &rarr; Student</div>
              <span className="text-[11px] text-surface-400">Deliver 24h notification with remedial steps</span>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-50 dark:bg-surface-950 border border-surface-200 dark:border-surface-800 flex items-center justify-between">
              <div><strong className="text-emerald-600 dark:text-emerald-400">Step 5:</strong> Automated System &rarr; Dashboard</div>
              <span className="text-[11px] text-surface-400">Refresh consolidated stats & at-risk flags</span>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-50 dark:bg-surface-950 border border-surface-200 dark:border-surface-800 flex items-center justify-between">
              <div><strong className="text-blue-600 dark:text-blue-400">Step 6:</strong> Student &rarr; Staff</div>
              <span className="text-[11px] text-surface-400">Acknowledge notice & attend counseling session</span>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-50 dark:bg-surface-950 border border-surface-200 dark:border-surface-800 flex items-center justify-between">
              <div><strong className="text-rose-600 dark:text-rose-400">Step 7:</strong> System: Week 8 Checkpoint</div>
              <span className="text-[11px] text-surface-400">Evaluate intervention impact & log still-at-risk</span>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 4: DFD CONTEXT */}
      {activeTab === 'dfd' && (
        <div className="bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm space-y-4">
          <div className="pb-3 border-b border-surface-100 dark:border-surface-800">
            <h3 className="text-sm font-bold text-surface-900 dark:text-white">
              Data Flow Diagram (Context Level & Level 1 • Page 19)
            </h3>
            <p className="text-xs text-surface-500">
              System boundary, external entities, internal processing modules, and data repositories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/60 space-y-2">
              <h4 className="font-bold text-xs text-blue-700 dark:text-blue-300 flex items-center gap-1.5">
                <Users className="w-4 h-4" /> External Entities
              </h4>
              <ul className="text-xs text-surface-600 dark:text-surface-400 space-y-1.5">
                <li><strong>Student:</strong> Generates attendance & quiz activity; receives remedial alerts; books counseling.</li>
                <li><strong>Academic Staff:</strong> Submits raw subject sheets; reviews flagged cohort; logs interventions.</li>
                <li><strong>Management:</strong> Evaluates institutional retention reports and student attrition trends.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900/60 space-y-2">
              <h4 className="font-bold text-xs text-purple-700 dark:text-purple-300 flex items-center gap-1.5">
                <Workflow className="w-4 h-4" /> Processing Modules
              </h4>
              <ul className="text-xs text-surface-600 dark:text-surface-400 space-y-1.5">
                <li><strong>Data Input Module:</strong> Ingests & validates standardized Excel sheets.</li>
                <li><strong>Risk Processing Engine:</strong> Computes engagement and flags &lt;50% thresholds.</li>
                <li><strong>Notification Service:</strong> Dispatches automated student emails within 24 hours.</li>
                <li><strong>Reporting Dashboard:</strong> Renders real-time cross-subject metrics.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 space-y-2">
              <h4 className="font-bold text-xs text-amber-700 dark:text-amber-300 flex items-center gap-1.5">
                <Database className="w-4 h-4" /> Data Stores
              </h4>
              <ul className="text-xs text-surface-600 dark:text-surface-400 space-y-1.5">
                <li><strong>Database / Excel Files:</strong> Multi-subject raw and cleaned activity sheets.</li>
                <li><strong>Risk Status Store:</strong> Longitudinal checkpoints (Week 4, Week 8).</li>
                <li><strong>Notification Audit Log:</strong> Time-stamped proof of delivery & student response.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

