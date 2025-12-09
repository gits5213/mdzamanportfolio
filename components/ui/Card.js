export default function Card({ children, className = '', hover = true }) {
  return (
    <div className={`
      rounded-2xl border border-slate-800 bg-slate-950/60 backdrop-blur-sm
      shadow-[0_0_60px_rgba(15,23,42,0.7)]
      ${hover ? 'hover:-translate-y-1 hover:shadow-xl transition-all duration-300' : ''}
      ${className}
    `}>
      {children}
    </div>
  )
}

