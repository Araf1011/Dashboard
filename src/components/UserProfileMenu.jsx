import React, { useState } from 'react';
import { 
  User, 
  Settings, 
  LogOut, 
  ShieldCheck, 
  BookOpen, 
  Mail, 
  Users, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function UserProfileMenu({ 
  isOpen, 
  onClose, 
  userProfile, 
  onEditProfile, 
  onSwitchRole, 
  onViewAssignedStudents,
  onStatusChange 
}) {
  if (!isOpen) return null;

  return (
    <>
      {/* Click outside backdrop */}
      <div className="fixed inset-0 z-40" onClick={onClose} />

      {/* Flyout Menu Container */}
      <div className="absolute right-0 top-12 z-50 w-72 sm:w-80 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xl p-4 text-xs font-sans animate-in fade-in zoom-in-95 duration-150">
        {/* User Card Header */}
        <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-950/60 rounded-2xl border border-slate-200/60 dark:border-slate-800">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-400 flex items-center justify-center text-white font-bold text-sm shadow-sm shrink-0">
            {userProfile.avatarInitials}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-slate-900 dark:text-white truncate text-xs sm:text-sm">
              {userProfile.name}
            </h4>
            <p className="text-[11px] text-slate-400 truncate">{userProfile.email}</p>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                {userProfile.status}
              </span>
            </div>
          </div>
        </div>

        {/* Quick Persona Switcher for Client Demo Showcase */}
        <div className="mt-3 p-2.5 bg-indigo-50/50 dark:bg-indigo-950/20 rounded-2xl border border-indigo-100 dark:border-indigo-900/40">
          <div className="flex items-center justify-between text-[10px] text-indigo-900 dark:text-indigo-200 font-bold mb-1.5">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-indigo-500" /> Switch Demo Persona:
            </span>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <button
              onClick={() => onSwitchRole('supervisor')}
              className={`px-2 py-1.5 rounded-xl text-[10px] font-semibold transition-all ${
                userProfile.id === 'supervisor'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-100'
              }`}
            >
              Dr. Sweta Thakur
            </button>
            <button
              onClick={() => onSwitchRole('student_lead')}
              className={`px-2 py-1.5 rounded-xl text-[10px] font-semibold transition-all ${
                userProfile.id === 'student_lead'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-100'
              }`}
            >
              Moses Kiprop
            </button>
          </div>
        </div>

        {/* Action Menu Items */}
        <div className="mt-3 space-y-1">
          <button
            onClick={() => {
              onEditProfile();
              onClose();
            }}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <User className="w-4 h-4 text-indigo-500" />
              <span>Edit Profile & Credentials</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          </button>

          <button
            onClick={() => {
              onViewAssignedStudents();
              onClose();
            }}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <Users className="w-4 h-4 text-emerald-500" />
              <span>View My Supervised Students</span>
            </div>
            <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 font-bold">50</span>
          </button>

          <button
            onClick={() => {
              onEditProfile();
              onClose();
            }}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <Settings className="w-4 h-4 text-slate-400" />
              <span>Notification Preferences</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>

        {/* Footer info */}
        <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px] text-slate-400 px-1">
          <span>King&apos;s Own Institute</span>
          <span className="font-mono">CRICOS 01871A</span>
        </div>
      </div>
    </>
  );
}

