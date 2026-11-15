import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { INITIAL_STUDENTS } from './data/mockData';
import SidebarRail from './components/SidebarRail';
import CleanDashboard from './components/CleanDashboard';
import StudentsView from './components/StudentsView';
import ArchitectureView from './components/ArchitectureView';
import DiagramsView from './components/DiagramsView';
import RoadmapView from './components/RoadmapView';
import ProposalView from './components/ProposalView';
import EmailModal from './components/EmailModal';
import InterventionModal from './components/InterventionModal';
import { CheckCircle2, AlertCircle, Info, X, GraduationCap, Sun, Moon } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(false);
  const [students, setStudents] = useState(INITIAL_STUDENTS);

  // Threshold controls
  const [attendanceThreshold, setAttendanceThreshold] = useState(50);
  const [submissionThreshold, setSubmissionThreshold] = useState(50);
  const [quizFlag, setQuizFlag] = useState(true);
  const [isSimulating, setIsSimulating] = useState(false);

  // Modals state
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [selectedStudentForEmail, setSelectedStudentForEmail] = useState(null);

  const [interventionModalOpen, setInterventionModalOpen] = useState(false);
  const [selectedStudentForIntervention, setSelectedStudentForIntervention] = useState(null);

  // Toast notifications
  const [toasts, setToasts] = useState([]);

  const addToast = (type, title, message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, type, title, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Sync dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Recalculate risk status dynamically based on current thresholds
  const runAlgorithmEvaluation = (targetWeek = null) => {
    setIsSimulating(true);
    addToast('info', 'Python Engine Triggered', 'Executing Pandas & OpenPyXL batch classification...');

    setTimeout(() => {
      setStudents((prev) =>
        prev.map((student) => {
          if (targetWeek && student.week !== targetWeek) {
            return student;
          }

          const hasLowAttendance = student.attendance < attendanceThreshold;
          const hasLowSubmission = student.submission < submissionThreshold;
          const hasMissedQuiz = quizFlag && student.quizAttempted === 'No';

          const isAtRisk = hasLowAttendance || hasLowSubmission || hasMissedQuiz;

          return {
            ...student,
            stillAtRisk: isAtRisk ? 'YES - Needs Follow Up' : 'Resolved',
          };
        })
      );

      setIsSimulating(false);
      addToast(
        'success',
        'Batch Execution Complete',
        `Evaluated 50 students using <${attendanceThreshold}% attendance and <${submissionThreshold}% submission thresholds.`
      );
    }, 700);
  };

  // Handle single email dispatch
  const handleSendEmailSuccess = (student) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === student.id ? { ...s, actionTaken: s.actionTaken + 1 } : s))
    );
    addToast(
      'success',
      'Remedial Email Dispatched',
      `Sent 24h notification to ${student.name} (${student.id}) for ${student.subject}.`
    );
  };

  // Handle batch dispatch with confetti
  const handleBatchDispatch = () => {
    const atRiskStudents = students.filter((s) => s.stillAtRisk.includes('Needs Follow Up'));
    if (atRiskStudents.length === 0) {
      addToast('info', 'No Action Required', 'No students currently require follow-up alerts.');
      return;
    }

    const atRiskIds = new Set(atRiskStudents.map((s) => s.id));
    setStudents((prev) =>
      prev.map((s) => (atRiskIds.has(s.id) ? { ...s, actionTaken: s.actionTaken + 1 } : s))
    );

    // Confetti celebration
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.6 },
    });

    addToast(
      'success',
      'Batch 24h Alerts Dispatched',
      `Sent automated emails to all ${atRiskStudents.length} at-risk students within 24h SLA.`
    );
  };

  // Handle saving an intervention
  const handleSaveIntervention = ({ studentId, newStatus, interventionType, advisor }) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === studentId
          ? {
              ...s,
              stillAtRisk: newStatus,
              actionTaken: s.actionTaken + 1,
            }
          : s
      )
    );

    if (newStatus === 'Resolved') {
      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.7 },
      });
    }

    addToast(
      'success',
      'Intervention Logged',
      `${interventionType} recorded by ${advisor}. Status: ${newStatus}.`
    );
  };

  // Export Master Dataset as CSV
  const handleExportCsv = () => {
    const headers = [
      'Student ID',
      'Student Name',
      'Subject',
      'Week',
      'Attendance %',
      'Submission %',
      'Quiz Attempted',
      'Action Taken',
      'Still At Risk?',
    ];

    const rows = students.map((s) => [
      s.id,
      s.name,
      s.subject,
      s.week,
      s.attendance,
      s.submission,
      s.quizAttempted,
      s.actionTaken,
      `"${s.stillAtRisk}"`,
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `KOI_ICT753_ASRIS_Master_Dataset.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    addToast('success', 'Master Dataset Exported', 'Downloaded KOI_ICT753_ASRIS_Master_Dataset.csv');
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc] dark:bg-[#0c0b14] text-slate-800 dark:text-slate-100 flex flex-col md:flex-row transition-colors duration-200">
      {/* Mobile Top Header (only visible on mobile < md) */}
      <header className="md:hidden sticky top-0 z-30 bg-white/90 dark:bg-[#0e0c18]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-sm">
            <GraduationCap className="w-4 h-4" />
          </div>
          <div>
            <h1 className="text-xs font-extrabold tracking-tight text-slate-900 dark:text-white">ASRIS Platform</h1>
            <p className="text-[10px] text-slate-400 font-medium">KOI ICT753 • Dr. Sweta Thakur</p>
          </div>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 transition-colors"
          title="Toggle Theme"
        >
          {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
        </button>
      </header>

      {/* Navigation Rail (Desktop sticky left rail & Mobile bottom dock) */}
      <div className="hidden md:block sticky top-0 h-screen border-r border-slate-200/70 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/40 backdrop-blur-md z-30">
        <SidebarRail
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </div>

      {/* Mobile bottom dock (fixed at bottom on < md) */}
      <div className="md:hidden">
        <SidebarRail
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </div>

      {/* Main Content Area (with bottom padding on mobile for dock) */}
      <main className="flex-1 min-w-0 p-3 sm:p-5 lg:p-8 pb-24 md:pb-8 max-w-[1440px] mx-auto w-full">
        {activeTab === 'dashboard' && (
          <CleanDashboard
            students={students}
            onOpenTable={() => setActiveTab('students')}
            onOpenEmailModal={(student) => {
              setSelectedStudentForEmail(student);
              setEmailModalOpen(true);
            }}
            onRunBatchAlert={handleBatchDispatch}
            attendanceThreshold={attendanceThreshold}
            setAttendanceThreshold={setAttendanceThreshold}
            isSimulating={isSimulating}
          />
        )}

        {activeTab === 'students' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setActiveTab('dashboard')}
                className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
              >
                ← Back to Executive Dashboard
              </button>
            </div>
            <StudentsView
              students={students}
              onOpenEmailModal={(student) => {
                setSelectedStudentForEmail(student);
                setEmailModalOpen(true);
              }}
              onOpenInterventionModal={(student) => {
                setSelectedStudentForIntervention(student);
                setInterventionModalOpen(true);
              }}
              onBatchDispatch={handleBatchDispatch}
              onExportCsv={handleExportCsv}
            />
          </div>
        )}

        {activeTab === 'architecture' && (
          <div className="space-y-4">
            <button
              onClick={() => setActiveTab('dashboard')}
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
            >
              ← Back to Executive Dashboard
            </button>
            <ArchitectureView />
          </div>
        )}

        {activeTab === 'diagrams' && (
          <div className="space-y-4">
            <button
              onClick={() => setActiveTab('dashboard')}
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
            >
              ← Back to Executive Dashboard
            </button>
            <DiagramsView />
          </div>
        )}

        {activeTab === 'roadmap' && (
          <div className="space-y-4">
            <button
              onClick={() => setActiveTab('dashboard')}
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
            >
              ← Back to Executive Dashboard
            </button>
            <RoadmapView />
          </div>
        )}

        {activeTab === 'proposal' && (
          <div className="space-y-4">
            <button
              onClick={() => setActiveTab('dashboard')}
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
            >
              ← Back to Executive Dashboard
            </button>
            <ProposalView />
          </div>
        )}
      </main>

      {/* Modals */}
      <EmailModal
        isOpen={emailModalOpen}
        onClose={() => setEmailModalOpen(false)}
        student={selectedStudentForEmail}
        onSendSuccess={handleSendEmailSuccess}
      />

      <InterventionModal
        isOpen={interventionModalOpen}
        onClose={() => setInterventionModalOpen(false)}
        student={selectedStudentForIntervention}
        onSaveIntervention={handleSaveIntervention}
      />

      {/* Toast Notifications */}
      <div className="fixed bottom-20 md:bottom-5 right-3 md:right-5 z-50 flex flex-col gap-2 pointer-events-none max-w-[calc(100vw-24px)]">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto flex items-start gap-3 p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl max-w-sm text-xs"
          >
            {toast.type === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />}
            {toast.type === 'error' && <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />}
            {toast.type === 'info' && <Info className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />}

            <div className="flex-1">
              <div className="font-bold text-slate-900 dark:text-white text-xs">{toast.title}</div>
              <div className="text-slate-500 text-[11px] mt-0.5 leading-snug">{toast.message}</div>
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
