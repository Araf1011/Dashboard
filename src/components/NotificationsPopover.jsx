import React from 'react';
import { 
  Bell, 
  CheckCheck, 
  Mail, 
  AlertTriangle, 
  UserCheck, 
  Clock, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export default function NotificationsPopover({ 
  isOpen, 
  onClose, 
  notifications, 
  onMarkAllRead, 
  onViewAllNotifications,
  onOpenEmailModal,
  students
}) {
  if (!isOpen) return null;

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <>
      {/* Click outside backdrop */}
      <div className="fixed inset-0 z-40" onClick={onClose} />

      {/* Popover Card */}
      <div className="absolute right-0 top-12 z-50 w-80 sm:w-96 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xl p-4 text-xs font-sans animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <h4 className="font-bold text-slate-900 dark:text-white">Alerts & System Activity</h4>
            {unreadCount > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 font-mono text-[10px] font-bold">
                {unreadCount} new
              </span>
            )}
          </div>

          <button
            onClick={onMarkAllRead}
            className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
          >
            <CheckCheck className="w-3.5 h-3.5" />
            <span>Mark read</span>
          </button>
        </div>

        {/* Notifications List */}
        <div className="mt-3 space-y-2 max-h-72 overflow-y-auto pr-1">
          {notifications.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                if (item.studentId) {
                  const s = students.find(x => x.id === item.studentId);
                  if (s) onOpenEmailModal(s);
                }
                onClose();
              }}
              className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                item.read
                  ? 'bg-white dark:bg-slate-900 border-slate-200/60 dark:border-slate-800/80 opacity-80'
                  : 'bg-indigo-50/40 dark:bg-indigo-950/20 border-indigo-200/60 dark:border-indigo-900/40 shadow-xs'
              } hover:bg-slate-50 dark:hover:bg-slate-800/60`}
            >
              <div className="flex items-start gap-2.5">
                <div className={`p-2 rounded-xl shrink-0 mt-0.5 ${
                  item.type === 'risk' 
                    ? 'bg-rose-50 text-rose-600 dark:bg-rose-950/60' 
                    : item.type === 'email'
                    ? 'bg-amber-50 text-amber-600 dark:bg-amber-950/60'
                    : 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60'
                }`}>
                  {item.type === 'risk' && <AlertTriangle className="w-3.5 h-3.5" />}
                  {item.type === 'email' && <Mail className="w-3.5 h-3.5" />}
                  {item.type === 'intervention' && <UserCheck className="w-3.5 h-3.5" />}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 dark:text-white text-[11px] truncate">{item.title}</span>
                    <span className="text-[10px] text-slate-400 font-mono shrink-0 ml-1">{item.time}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Footer */}
        <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={() => {
              onViewAllNotifications();
              onClose();
            }}
            className="w-full py-2 rounded-xl text-center text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-colors flex items-center justify-center gap-1.5"
          >
            <span>View Full Notification Audit Trail</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </>
  );
}
