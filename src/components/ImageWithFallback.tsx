'use client'

import React, { useState } from 'react'

export default function ImageWithFallback({
  src,
  alt,
  className,
  fallback,
  ...props
}: {
  src: string
  alt: string
  className?: string
  fallback?: React.ReactNode
} & React.ImgHTMLAttributes<HTMLImageElement>) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className={`flex items-center justify-center ${className || ''}`}>
        {fallback || (
          <svg viewBox="0 0 120 120" className="h-32 w-32 text-copper/40" fill="none" stroke="currentColor" strokeWidth="0.5">
            <rect x="20" y="20" width="80" height="80" />
            <rect x="30" y="30" width="60" height="60" />
            <line x1="20" y1="20" x2="100" y2="100" />
            <line x1="100" y1="20" x2="20" y2="100" />
          </svg>
        )}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  )
}
