'use client';

import React, { useState } from 'react';

export interface HeroFrameProps {
  image?: string | null;
  name: string;
  icon?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  frameVariant?: 'gold' | 'purple' | 'cyan' | 'silver' | 'ruby';
  className?: string;
  showGlow?: boolean;
  tier?: string;
  ap?: number;
  pp?: number;
}

export const HeroFrame: React.FC<HeroFrameProps> = ({
  image,
  name,
  icon = '⚔️',
  size = 'md',
  frameVariant = 'gold',
  className = '',
  showGlow = false,
  tier,
  ap,
  pp,
}) => {
  const [imageError, setImageError] = useState<boolean>(false);

  // Size specifications (width, height, icon text size)
  const sizeClasses = {
    xs: 'w-7 h-7 text-xs rounded-md',
    sm: 'w-9 h-9 text-sm rounded-lg',
    md: 'w-11 h-11 text-base rounded-xl',
    lg: 'w-14 h-14 text-2xl rounded-xl',
    xl: 'w-18 h-18 text-3xl rounded-2xl',
    '2xl': 'w-24 h-24 text-4xl rounded-2xl',
  }[size];

  // Ornate fantasy border & glow variants
  const variantClasses = {
    gold: 'border-amber-400/80 ring-1 ring-amber-500/40 bg-gradient-to-b from-[#1c1917] via-[#0f172a] to-[#070b16] shadow-[0_0_12px_rgba(245,158,11,0.25)]',
    purple: 'border-purple-400/80 ring-1 ring-purple-500/40 bg-gradient-to-b from-[#2e1065] via-[#0f172a] to-[#070b16] shadow-[0_0_12px_rgba(168,85,247,0.3)]',
    cyan: 'border-cyan-400/80 ring-1 ring-cyan-500/40 bg-gradient-to-b from-[#083344] via-[#0f172a] to-[#070b16] shadow-[0_0_12px_rgba(6,182,212,0.3)]',
    silver: 'border-slate-300/80 ring-1 ring-slate-400/40 bg-gradient-to-b from-[#1e293b] via-[#0f172a] to-[#070b16] shadow-[0_0_10px_rgba(203,213,225,0.2)]',
    ruby: 'border-rose-400/80 ring-1 ring-rose-500/40 bg-gradient-to-b from-[#4c0519] via-[#0f172a] to-[#070b16] shadow-[0_0_12px_rgba(244,63,94,0.3)]',
  }[frameVariant];

  const glowEffect = showGlow ? 'shadow-[0_0_20px_rgba(245,158,11,0.5)] border-amber-300' : '';

  const displayImage = !imageError && image ? image : null;

  return (
    <div
      className={`relative border-2 overflow-hidden shrink-0 flex items-center justify-center transition-all duration-200 select-none ${sizeClasses} ${variantClasses} ${glowEffect} ${className}`}
      title={name}
    >
      {/* Corner Ornate Highlights */}
      <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-amber-300/60 pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-amber-300/60 pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-amber-300/60 pointer-events-none z-10" />
      <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-amber-300/60 pointer-events-none z-10" />

      {/* Hero Portrait Image */}
      {displayImage ? (
        <img
          src={displayImage}
          alt={name}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover object-top filter contrast-105 brightness-100 transition-transform duration-300 hover:scale-110"
          loading="eager"
        />
      ) : (
        /* Fallback Rune / Emoji Crest */
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 p-1">
          <span className="drop-shadow-md">{icon}</span>
        </div>
      )}

      {/* Optional Inset Vignette Shade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

      {/* Optional Tier Badge */}
      {tier && (
        <div className="absolute top-0.5 right-0.5 px-1 py-0.2 text-[8px] font-mono font-extrabold bg-amber-500 text-slate-950 rounded shadow z-20">
          {tier}
        </div>
      )}

      {/* Optional AP / PP Dots */}
      {(ap !== undefined || pp !== undefined) && (
        <div className="absolute bottom-0.5 inset-x-0 flex justify-center items-center gap-1 z-20">
          {ap !== undefined && (
            <span className="text-[7px] font-mono font-bold text-red-300 bg-red-950/90 px-1 rounded border border-red-500/50">
              {ap}A
            </span>
          )}
          {pp !== undefined && (
            <span className="text-[7px] font-mono font-bold text-blue-300 bg-blue-950/90 px-1 rounded border border-blue-500/50">
              {pp}P
            </span>
          )}
        </div>
      )}
    </div>
  );
};
