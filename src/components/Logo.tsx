export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="seedGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4F46E5" />
          <stop offset="1" stopColor="#9333EA" />
        </linearGradient>
      </defs>
      {/* stem */}
      <path
        d="M20 34V22"
        stroke="url(#seedGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* left leaf */}
      <path
        d="M20 24C20 24 9 24 9 14C9 14 20 13 20 24Z"
        fill="url(#seedGradient)"
      />
      {/* right leaf */}
      <path
        d="M20 22C20 22 31 22 31 12C31 12 20 11 20 22Z"
        fill="url(#seedGradient)"
        fillOpacity="0.85"
      />
      {/* seed base */}
      <circle cx="20" cy="34" r="3" fill="url(#seedGradient)" />
    </svg>
  );
}

export function LogoWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`text-xl font-semibold tracking-tight ${className}`}>
      <span className="text-ink">Genes</span>
      <span className="brand-gradient-text">ease</span>
    </span>
  );
}
