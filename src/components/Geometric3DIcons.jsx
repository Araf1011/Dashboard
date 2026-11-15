import React from 'react';

// Geometric 3D Abstract Icons inspired by the uploaded clean aesthetic
export function Flower3D({ className = "w-16 h-16" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="gFlower1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="50%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="gFlower2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <filter id="shadow3D" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="2" dy="6" stdDeviation="4" floodColor="#4338ca" floodOpacity="0.25" />
        </filter>
      </defs>
      <g filter="url(#shadow3D)">
        <path d="M50 15 C45 30 30 45 15 50 C30 55 45 70 50 85 C55 70 70 55 85 50 C70 45 55 30 50 15 Z" fill="url(#gFlower1)" />
        <path d="M50 25 C40 38 38 40 25 50 C38 60 40 62 50 75 C60 62 62 60 75 50 C62 40 60 38 50 25 Z" fill="url(#gFlower2)" opacity="0.85" />
        <circle cx="50" cy="50" r="10" fill="#ffffff" opacity="0.9" />
      </g>
    </svg>
  );
}

export function Star3D({ className = "w-16 h-16" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="gStar1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a5b4fc" />
          <stop offset="60%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
        <linearGradient id="gStar2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e879f9" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
      </defs>
      <g>
        <polygon points="50,10 63,36 92,39 70,58 77,87 50,72 23,87 30,58 8,39 37,36" fill="url(#gStar1)" />
        <polygon points="50,22 59,40 79,42 63,56 68,76 50,65 32,76 37,56 21,42 41,40" fill="url(#gStar2)" opacity="0.75" />
      </g>
    </svg>
  );
}

export function Arrow3D({ className = "w-16 h-16" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="gArrow" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
      </defs>
      <path 
        d="M30 75 L30 45 L50 45 L50 25 L85 55 L50 85 L50 65 L40 65 L40 75 Z" 
        fill="url(#gArrow)"
        transform="rotate(-45 50 50)" 
      />
    </svg>
  );
}

export function Cube3D({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M25 5 L45 15 L25 25 L5 15 Z" fill="#818cf8" />
      <path d="M5 15 L25 25 L25 45 L5 35 Z" fill="#6366f1" />
      <path d="M45 15 L45 35 L25 45 L25 25 Z" fill="#4f46e5" />
    </svg>
  );
}

export function Quote3D({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="gQuote" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="22" r="10" fill="url(#gQuote)" />
      <path d="M16 22 L8 38 L18 38 Z" fill="url(#gQuote)" />
      <circle cx="34" cy="22" r="10" fill="url(#gQuote)" />
      <path d="M34 22 L26 38 L36 38 Z" fill="url(#gQuote)" />
    </svg>
  );
}

export function Ribbon3D({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M10 15 C20 10 30 10 40 15 C35 25 35 35 40 45 C30 40 20 40 10 45 C15 35 15 25 10 15 Z" fill="#a855f7" />
    </svg>
  );
}

