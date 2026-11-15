import React from 'react';

// Relatable, high-end course badges and logos for KOI ICT courses

// 1. MIS101: Management Information Systems (Enterprise Servers, Cloud & Business Systems)
export function MIS101Icon({ className = "w-16 h-16" }) {
  return (
    <div className={`${className} rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-3.5 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25`}>
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Server 1 */}
        <rect x="6" y="8" width="36" height="8" rx="3" fill="currentColor" fillOpacity="0.9" />
        <circle cx="12" cy="12" r="1.5" fill="#38bdf8" />
        <circle cx="17" cy="12" r="1.5" fill="#38bdf8" />
        <line x1="32" y1="12" x2="36" y2="12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />

        {/* Server 2 */}
        <rect x="6" y="20" width="36" height="8" rx="3" fill="currentColor" fillOpacity="0.9" />
        <circle cx="12" cy="24" r="1.5" fill="#38bdf8" />
        <circle cx="17" cy="24" r="1.5" fill="#38bdf8" />
        <line x1="32" y1="24" x2="36" y2="24" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />

        {/* Server 3 */}
        <rect x="6" y="32" width="36" height="8" rx="3" fill="currentColor" fillOpacity="0.9" />
        <circle cx="12" cy="36" r="1.5" fill="#38bdf8" />
        <circle cx="17" cy="36" r="1.5" fill="#38bdf8" />
        <line x1="32" y1="36" x2="36" y2="36" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />

        {/* Connecting System Line */}
        <path d="M24 16 V20 M24 28 V32" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// 2. ICT201: Database Systems & Modeling (Relational Database Cylinders & SQL Data Store)
export function ICT201Icon({ className = "w-16 h-16" }) {
  return (
    <div className={`${className} rounded-3xl bg-gradient-to-tr from-purple-600 via-violet-600 to-fuchsia-400 p-3.5 flex items-center justify-center text-white shadow-lg shadow-purple-500/25`}>
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Top Cylinder */}
        <ellipse cx="24" cy="12" rx="16" ry="5.5" fill="currentColor" fillOpacity="0.95" />
        <path d="M8 12 V18 C8 21 15 23.5 24 23.5 C33 23.5 40 21 40 18 V12" stroke="#e9d5ff" strokeWidth="2" fill="none" />
        <ellipse cx="24" cy="12" rx="16" ry="5.5" stroke="#ffffff" strokeWidth="2" fill="none" />

        {/* Middle Tier */}
        <path d="M8 20 V26 C8 29 15 31.5 24 31.5 C33 31.5 40 29 40 26 V20" stroke="#ffffff" strokeWidth="2" fill="currentColor" fillOpacity="0.4" />

        {/* Bottom Tier */}
        <path d="M8 28 V34 C8 37 15 39.5 24 39.5 C33 39.5 40 37 40 34 V28" stroke="#ffffff" strokeWidth="2" fill="currentColor" fillOpacity="0.7" />

        {/* Relational Key / Query Indicator */}
        <circle cx="24" cy="34" r="2" fill="#f0abfc" />
      </svg>
    </div>
  );
}

// 3. BUS301: Business Analytics (Growth Trendline, Bar Graphs & Business Metrics)
export function BUS301Icon({ className = "w-16 h-16" }) {
  return (
    <div className={`${className} rounded-3xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-cyan-400 p-3.5 flex items-center justify-center text-white shadow-lg shadow-emerald-500/25`}>
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Base Grid */}
        <line x1="8" y1="40" x2="40" y2="40" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        
        {/* Analytics Bars */}
        <rect x="12" y="26" width="5" height="14" rx="2" fill="currentColor" fillOpacity="0.8" />
        <rect x="21" y="18" width="5" height="22" rx="2" fill="currentColor" fillOpacity="0.8" />
        <rect x="30" y="10" width="5" height="30" rx="2" fill="currentColor" fillOpacity="0.95" />

        {/* Ascending Trend Arrow Line */}
        <path d="M10 24 L20 16 L29 20 L38 8" stroke="#fef08a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <polygon points="38,8 33,8 38,13" fill="#fef08a" />
      </svg>
    </div>
  );
}

// 4. DAT401: Data Science Fundamentals (Neural Network / Machine Learning Clusters)
export function DAT401Icon({ className = "w-16 h-16" }) {
  return (
    <div className={`${className} rounded-3xl bg-gradient-to-tr from-amber-500 via-orange-600 to-rose-500 p-3.5 flex items-center justify-center text-white shadow-lg shadow-orange-500/25`}>
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Nodes */}
        <circle cx="12" cy="16" r="3.5" fill="#ffffff" />
        <circle cx="12" cy="32" r="3.5" fill="#ffffff" />
        <circle cx="24" cy="10" r="3.5" fill="#ffffff" />
        <circle cx="24" cy="24" r="4.5" fill="#fef08a" />
        <circle cx="24" cy="38" r="3.5" fill="#ffffff" />
        <circle cx="36" cy="18" r="3.5" fill="#ffffff" />
        <circle cx="36" cy="30" r="3.5" fill="#ffffff" />

        {/* Connections */}
        <line x1="12" y1="16" x2="24" y2="10" stroke="#fed7aa" strokeWidth="1.5" />
        <line x1="12" y1="16" x2="24" y2="24" stroke="#fed7aa" strokeWidth="1.5" />
        <line x1="12" y1="32" x2="24" y2="24" stroke="#fed7aa" strokeWidth="1.5" />
        <line x1="12" y1="32" x2="24" y2="38" stroke="#fed7aa" strokeWidth="1.5" />
        <line x1="24" y1="10" x2="36" y2="18" stroke="#fed7aa" strokeWidth="1.5" />
        <line x1="24" y1="24" x2="36" y2="18" stroke="#fed7aa" strokeWidth="1.5" />
        <line x1="24" y1="24" x2="36" y2="30" stroke="#fed7aa" strokeWidth="1.5" />
        <line x1="24" y1="38" x2="36" y2="30" stroke="#fed7aa" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

// 5. NET101: Networking Principles (Global Mesh & Network Routers)
export function NET101Icon({ className = "w-16 h-16" }) {
  return (
    <div className={`${className} rounded-3xl bg-gradient-to-tr from-sky-500 via-blue-600 to-indigo-600 p-3.5 flex items-center justify-center text-white shadow-lg shadow-sky-500/25`}>
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Center Hub */}
        <circle cx="24" cy="24" r="6" fill="#38bdf8" stroke="#ffffff" strokeWidth="2" />
        
        {/* Outer Nodes */}
        <circle cx="10" cy="14" r="3.5" fill="#ffffff" />
        <circle cx="38" cy="14" r="3.5" fill="#ffffff" />
        <circle cx="10" cy="34" r="3.5" fill="#ffffff" />
        <circle cx="38" cy="34" r="3.5" fill="#ffffff" />

        {/* Links */}
        <line x1="10" y1="14" x2="24" y2="24" stroke="#bae6fd" strokeWidth="2" strokeDasharray="2 2" />
        <line x1="38" y1="14" x2="24" y2="24" stroke="#bae6fd" strokeWidth="2" strokeDasharray="2 2" />
        <line x1="10" y1="34" x2="24" y2="24" stroke="#bae6fd" strokeWidth="2" strokeDasharray="2 2" />
        <line x1="38" y1="34" x2="24" y2="24" stroke="#bae6fd" strokeWidth="2" strokeDasharray="2 2" />
      </svg>
    </div>
  );
}
