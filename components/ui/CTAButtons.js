import Link from 'next/link'
import { getAssetPath } from '@/app/utils/pathUtils'

export default function CTAButtons({ primaryLabel = 'View Portfolio', primaryHref = '/projects', secondaryLabel = 'Download Resume', secondaryHref = '/resume/Md Zaman - Resume.pdf' }) {
  // Check if secondaryHref is an internal link (starts with / and doesn't end with file extensions)
  const isInternalLink = secondaryHref.startsWith('/') && !secondaryHref.match(/\.(pdf|doc|docx|xls|xlsx|zip|rar)$/i)
  
  const buttonClassName = `
    px-6 py-3 rounded-lg font-semibold text-center
    border border-slate-600 text-slate-100 hover:border-sky-500 hover:text-sky-400
    transition-all duration-300
    hover:-translate-y-0.5 hover:shadow-lg
  `
  
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      <Link
        href={primaryHref}
        className="
          px-6 py-3 rounded-lg font-semibold text-center
          bg-sky-500 hover:bg-sky-400 text-slate-950
          transition-all duration-300
          hover:-translate-y-0.5 hover:shadow-lg
        "
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {primaryLabel}
      </Link>
      {isInternalLink ? (
        <Link
          href={secondaryHref}
          className={buttonClassName}
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {secondaryLabel}
        </Link>
      ) : (
        <a
          href={getAssetPath(secondaryHref)}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClassName}
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {secondaryLabel}
        </a>
      )}
    </div>
  )
}

