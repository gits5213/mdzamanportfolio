'use client'

import { useEffect } from 'react'

/**
 * AdSense Script Loader Component
 * Loads the AdSense script without Next.js Script component attributes
 * that AdSense doesn't support (like data-nscript)
 */
export default function AdSenseScript() {
  useEffect(() => {
    // Check if script is already loaded
    if (document.querySelector('script[src*="adsbygoogle.js"]')) {
      return
    }

    // Create and inject the AdSense script
    const script = document.createElement('script')
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9112023534705295'
    script.async = true
    script.crossOrigin = 'anonymous'
    script.setAttribute('data-ad-client', 'ca-pub-9112023534705295')
    
    // Append to head
    document.head.appendChild(script)

    // Cleanup function (though script will remain in head)
    return () => {
      // Script stays in head even after component unmounts
      // This is fine as AdSense script should persist
    }
  }, [])

  return null // This component doesn't render anything
}
