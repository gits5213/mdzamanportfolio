export default function PageHeader({ title, subtitle, className = '' }) {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-100" style={{ fontFamily: 'var(--font-heading)' }}>
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}

