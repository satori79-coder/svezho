export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="/" className={`flex items-center gap-2 ${className}`}>
      <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="#16A34A"/>
        <path d="M20 8c-6 0-10 4-10 10 0 5 3 9 8 10 1-4 4-7 8-8-1-6-3-12-6-12z" fill="#DCFCE7"/>
        <path d="M18 18c0 3 2 6 5 7" stroke="#14532D" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      <span className="text-2xl font-extrabold tracking-tight text-brand-900">
        Свежо
      </span>
    </a>
  );
}
