export default function IndonesianPattern() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-5">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="batikPattern" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            {/* Soft Parang inspired curves */}
            <path d="M 0 30 Q 15 0 30 30 T 60 30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M 0 45 Q 15 15 30 45 T 60 45" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            <circle cx="15" cy="15" r="2" fill="currentColor" />
            <circle cx="45" cy="45" r="2" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#batikPattern)" />
      </svg>
    </div>
  );
}
