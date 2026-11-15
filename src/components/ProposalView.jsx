import React from 'react';
import { 
  FileText, 
  CheckCircle2, 
  Bookmark, 
  TrendingUp, 
  GraduationCap, 
  Library, 
  Target, 
  HelpCircle,
  Award
} from 'lucide-react';

export default function ProposalView() {
  const references = [
    {
      authors: "Chen, Y. (2019)",
      title: "The transformation of library operations in the digital age",
      journal: "Journal of Library Innovation, 10(2), 45–60."
    },
    {
      authors: "Gibbs, G., & Jenkins, A. (2019)",
      title: "Teaching and Learning in Higher Education: Enhancing Retention and Performance",
      journal: "London: Routledge."
    },
    {
      authors: "Heinrich, R., Smith, J., & Clark, D. (2018)",
      title: "Agile methodology for educational technology projects",
      journal: "Journal of Information Technology Education, 17, 55–74."
    },
    {
      authors: "Kuh, G. D., Kinzie, J., Schuh, J. H., & Whitt, E. J. (2015)",
      title: "Student Success in College: Creating Conditions That Matter",
      journal: "San Francisco: Jossey-Bass."
    },
    {
      authors: "Kumar, S., & Singh, M. (2021)",
      title: "Digital initiatives in library management: A review of trends and challenges",
      journal: "International Journal of Information Management, 59, 102–115."
    },
    {
      authors: "Oladapo, O. J., & Onyebuchi, N. (2022)",
      title: "Impact of automated library systems on user satisfaction in Nigerian universities",
      journal: "Library Hi Tech News, 39(4), 15–18."
    },
    {
      authors: "Tinto, V. (2017)",
      title: "Through the eyes of students",
      journal: "Journal of College Student Retention: Research, Theory & Practice, 19(3), 254–269."
    },
    {
      authors: "Welsh, J., McKinney, L., & Seaman, A. (2020)",
      title: "Developing employability skills in IT students through collaborative capstone projects",
      journal: "Journal of Information Technology Education: Innovations in Practice, 19, 101–122."
    },
    {
      authors: "ISO/IEC 31000. (2018)",
      title: "Risk management — Guidelines",
      journal: "Geneva: International Organization for Standardization."
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 font-mono">
            Academic Project Brief & Literature Synthesis
          </span>
          <h2 className="text-xl font-extrabold text-surface-900 dark:text-white mt-1">
            KOI ICT753 Assessment 2 Proposal Documentation
          </h2>
          <p className="text-xs text-surface-500 mt-1">
            Authored by Moses Kiprop KIPKOECH • Supervised by Dr. Sweta Thakur • King&apos;s Own Institute
          </p>
        </div>
        <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 font-semibold border border-brand-200 dark:border-brand-900">
          Word Count: ~2575 Words
        </span>
      </div>

      {/* Grid: Executive Summary & Problem Definition */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Executive Summary */}
        <div className="bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm space-y-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-surface-900 dark:text-white">
              1. Executive Summary
            </h3>
          </div>
          <div className="text-xs text-surface-600 dark:text-surface-400 space-y-2.5 leading-relaxed">
            <p>
              Increased demand for immediate academic correction has revealed how it is no longer adequate to examine student threats on a purely manual basis. Labor-intensive tracking of students who are likely to fail due to poor attendance, missed tutoring, or low assessment marks is uneven and often results in late intervention.
            </p>
            <p>
              This project recommends an automated system for attendance, tutorial work, and assessment metrics across multiple subjects to achieve a centralized view of at-risk students. Handled with Python manageable automation (Pandas/OpenPyXL) and standardized Excel templates, the system alerts students at essential stages before it is too late (<strong>Weeks 4 and 8</strong>).
            </p>
            <p>
              Automatic notifications direct students to available remediation, while summarized dashboards assist faculty in tracking retention and mitigating administrative bottlenecks (Kumar & Singh, 2021; Chen, 2019).
            </p>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm space-y-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-surface-900 dark:text-white">
              2. Problem Statement & Inefficiencies
            </h3>
          </div>
          <div className="text-xs text-surface-600 dark:text-surface-400 space-y-2.5 leading-relaxed">
            <p>
              Of primary concern to universities worldwide are academic performance and student retention. Risks of failure or course abandonment are high due to late identification of vulnerable cohorts (Tinto, 2017).
            </p>
            <p>
              Manual tracking of attendance and tutorial activities is generally disorganized, time-consuming, and prone to human error when large cohorts are involved. This creates an administrative burden and results in sluggish responses to students who need early support (Gibbs & Jenkins, 2019).
            </p>
            <p>
              The solution lies in digitalizing and automating workflows in higher education (Chen, 2019). Automating risk identification allows institutions to streamline monitoring, decrease bureaucracy, and deliver timely, specific advice to students.
            </p>
          </div>
        </div>
      </div>

      {/* Objectives & Success Criteria (Section 3) */}
      <div className="bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm space-y-4">
        <div className="pb-3 border-b border-surface-100 dark:border-surface-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-emerald-500" />
            <h3 className="font-bold text-sm text-surface-900 dark:text-white">
              3. Project Objectives & Success Criteria (Section 3)
            </h3>
          </div>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-bold">
            Academic Milestones
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2.5 text-xs">
            <h4 className="font-bold text-surface-900 dark:text-white">Core Project Objectives:</h4>
            <ul className="space-y-2 text-surface-600 dark:text-surface-400">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Objective 1:</strong> Select students who have &lt;50% attendance, tutorial, and assessment participation using automated algorithms.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Objective 2:</strong> Generalize performance statistics across subjects to provide a consistent institutional-level picture.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Goal 3:</strong> Improve automation of student notifications with clear, stepwise remedial guidance.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Goal 4:</strong> Track risk status at Week 4 and Week 8, evaluating the degree of academic improvement.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-2.5 text-xs">
            <h4 className="font-bold text-surface-900 dark:text-white">Measurable Success Criteria:</h4>
            <div className="grid grid-cols-2 gap-2 font-mono">
              <div className="p-3 rounded-xl bg-surface-50 dark:bg-surface-950 border border-surface-200 dark:border-surface-800">
                <span className="text-[10px] text-surface-400 block">Workload Reduction</span>
                <strong className="text-emerald-600 text-sm">≥ 40% Saved</strong>
              </div>
              <div className="p-3 rounded-xl bg-surface-50 dark:bg-surface-950 border border-surface-200 dark:border-surface-800">
                <span className="text-[10px] text-surface-400 block">Detection Accuracy</span>
                <strong className="text-brand-600 text-sm">&gt; 95% Precision</strong>
              </div>
              <div className="p-3 rounded-xl bg-surface-50 dark:bg-surface-950 border border-surface-200 dark:border-surface-800">
                <span className="text-[10px] text-surface-400 block">Dispatch SLA</span>
                <strong className="text-amber-600 text-sm">&lt; 24 Hours</strong>
              </div>
              <div className="p-3 rounded-xl bg-surface-50 dark:bg-surface-950 border border-surface-200 dark:border-surface-800">
                <span className="text-[10px] text-surface-400 block">Decision Reports</span>
                <strong className="text-purple-600 text-sm">Centralized Portal</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Academic References (Section 13) */}
      <div className="bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm space-y-4">
        <div className="pb-3 border-b border-surface-100 dark:border-surface-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Library className="w-5 h-5 text-brand-500" />
            <h3 className="font-bold text-sm text-surface-900 dark:text-white">
              13. Academic References & Literature Base
            </h3>
          </div>
          <span className="text-[11px] font-mono text-surface-400">Harvard Referencing Style</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {references.map((ref, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-surface-50/70 dark:bg-surface-950/40 border border-surface-200 dark:border-surface-800 text-xs space-y-1">
              <div className="font-bold text-surface-900 dark:text-white text-[11px]">{ref.authors}</div>
              <div className="text-surface-600 dark:text-surface-300 italic text-[11px]">{ref.title}</div>
              <div className="text-surface-400 text-[10px]">{ref.journal}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

