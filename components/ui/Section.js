export default function Section({ children, className = '', id }) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {children}
      </div>
    </section>
  )
}

