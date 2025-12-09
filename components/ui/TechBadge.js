export default function TechBadge({ children, className = '' }) {
  return (
    <span className={`
      inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm
      bg-slate-900/80 border border-slate-700 text-slate-300
      font-mono font-medium
      hover:border-sky-500 hover:text-sky-400 transition-colors duration-200
      ${className}
    `}>
      {children}
    </span>
  )
}

