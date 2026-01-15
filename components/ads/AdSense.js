'use client'

import { useEffect } from 'react'

/**
 * Google AdSense Ad Component
 * 
 * Usage:
 * <AdSense 
 *   adSlot="1234567890" 
 *   adFormat="auto" 
 *   fullWidthResponsive={true} 
 * />
 */
export default function AdSense({ 
  adSlot = '1234567890', // Replace with your actual ad slot ID from AdSense
  adFormat = 'auto',
  fullWidthResponsive = true,
  style = { display: 'block' },
  className = ''
}) {
  useEffect(() => {
    try {
      // Push ad to Google AdSense
      if (typeof window !== 'undefined' && window.adsbygoogle && window.adsbygoogle.loaded !== true) {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (err) {
      console.error('AdSense error:', err)
    }
  }, [])

  return (
    <div className={`adsense-container ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-9112023534705295"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
      />
    </div>
  )
}

/**
 * Banner Ad Component
 * Replace "1234567890" with your actual banner ad slot ID from AdSense
 */
export function BannerAd({ className = '', adSlot = '1234567890' }) {
  return (
    <div className={`my-8 flex justify-center ${className}`}>
      <AdSense 
        adSlot={adSlot}
        adFormat="auto"
        fullWidthResponsive={true}
        className="w-full max-w-728px"
      />
    </div>
  )
}

/**
 * In-Article Ad Component
 * Replace "1234567890" with your actual in-article ad slot ID from AdSense
 */
export function InArticleAd({ className = '', adSlot = '1234567890' }) {
  return (
    <div className={`my-8 flex justify-center ${className}`}>
      <AdSense 
        adSlot={adSlot}
        adFormat="fluid"
        fullWidthResponsive={true}
      />
    </div>
  )
}

/**
 * In-Feed Ad Component
 * Replace "1234567890" with your actual in-feed ad slot ID from AdSense
 */
export function InFeedAd({ className = '', adSlot = '1234567890' }) {
  return (
    <div className={`my-8 flex justify-center ${className}`}>
      <AdSense 
        adSlot={adSlot}
        adFormat="fluid"
        fullWidthResponsive={true}
      />
    </div>
  )
}

/**
 * Sidebar Ad Component
 * Replace "1234567890" with your actual sidebar ad slot ID from AdSense
 */
export function SidebarAd({ className = '', adSlot = '1234567890' }) {
  return (
    <div className={`my-8 ${className}`}>
      <AdSense 
        adSlot={adSlot}
        adFormat="auto"
        fullWidthResponsive={true}
      />
    </div>
  )
}
