import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "w-10 h-10" }: LogoProps) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AuraGold Elite Logo"
    >
      <defs>
        <linearGradient id="bgBox" x1="0" y1="0" x2="120" y2="120">
          <stop offset="0%" stopColor="#B91C1C" /> 
          <stop offset="100%" stopColor="#7F1D1D" /> 
        </linearGradient>
        
        {/* Shiny Premium Gold Gradient for the Bar */}
        <linearGradient id="goldBar" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#B45309" />
          <stop offset="20%" stopColor="#FDE047" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="80%" stopColor="#FEF08A" />
          <stop offset="100%" stopColor="#92400E" />
        </linearGradient>
      </defs>

      {/* Solid Vault Box */}
      <rect width="120" height="120" rx="24" fill="url(#bgBox)" />
      
      {/* Subtle Inner Frame */}
      <rect x="8" y="8" width="104" height="104" rx="16" stroke="white" strokeWidth="1" strokeOpacity="0.15" />

      {/* The Letter "A" - Flat top, solid, architectural, perfectly parallel lines */}
      <path d="M 52 20 H 68 L 96 90 H 74 L 60 55 L 46 90 H 24 Z" fill="white" />

      {/* Thick Gold Bar replacing/overlaying the crossbar (Safety & Wealth) */}
      <rect x="34" y="60" width="52" height="14" rx="2" fill="url(#goldBar)" />
      
      {/* 3D edge details on Gold Bar */}
      <rect x="34" y="60" width="52" height="14" rx="2" stroke="#FDE047" strokeWidth="1" />
      <path d="M 36 62 H 84" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="1" />
      
      {/* Minimalist Growth Arrow ascending from the Gold Bar up the right side */}
      <path d="M 72 50 L 92 30 M 92 30 H 78 M 92 30 V 44" stroke="#FDE047" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter" />

    </svg>
  );
}
