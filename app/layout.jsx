import '../styles/globals.css'

export const metadata = {
  metadataBase: new URL('https://harshitparkar.github.io'),
  title: 'Harshit Parkar — Senior React Native Engineer',
  description: 'Senior React Native Engineer. 6+ years building production mobile apps. IEEE published. Smart India Hackathon winner. TechCrunch Disrupt featured.',
  icons: { icon: '/assets/header-logo.png' },
  openGraph: {
    title: 'Harshit Parkar — Senior React Native Engineer',
    description: 'Senior React Native Engineer. 6+ years. IEEE published researcher. TechCrunch Disrupt featured builder.',
    url: 'https://harshitparkar.github.io',
    siteName: 'Harshit Parkar',
    images: [{ url: '/assets/og-preview.png', width: 1200, height: 630, alt: 'Harshit Parkar Portfolio' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harshit Parkar — Senior React Native Engineer',
    description: 'Senior React Native Engineer. 6+ years. IEEE published. TechCrunch Disrupt featured.',
    images: ['/assets/og-preview.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Noise overlay */}
        <svg className="noise-overlay" aria-hidden="true">
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
        {children}
      </body>
    </html>
  )
}
