import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "w-10 h-10" }: LogoProps) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AuraGold Elite Logo"
    >
      {/* Boxy Background (Red) - Represents Safety & Vault */}
      <rect width="100" height="100" rx="16" fill="#B91C1C" />
      
      {/* Big Letter A (Outer) - White */}
      <path d="M50 18L22 82H40L45 68H55L60 82H78L50 18Z" fill="#FFFFFF" />
      
      {/* Inner Hole of A - Red */}
      <path d="M50 34L41 60H59L50 34Z" fill="#B91C1C" />
      
      {/* Gold Bar covering the middle (Safety & Gold) */}
      <rect x="30" y="52" width="40" height="18" rx="3" fill="#D4AF37" />
      
      {/* Gold Bar Details (3D effect) */}
      <path d="M34 56H66M34 60H66M34 64H66" stroke="#A16207" strokeWidth="1.5" />
      <rect x="30" y="52" width="40" height="18" rx="3" stroke="#FDE047" strokeWidth="2" />
      
      {/* Growth Element - Upward Arrow coming from the Gold Bar */}
      <path d="M65 52L88 28V42M88 28H74" stroke="#D4AF37" strokeWidth="6" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  );
}
