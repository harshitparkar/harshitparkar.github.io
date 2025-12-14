import '../styles/globals.css'
import { ThemeProvider } from '../contexts/ThemeContext'

export const metadata = {
  metadataBase: new URL('https://harshitparkar.github.io'),
  title: 'Harshit Parkar — Portfolio',
  description: 'Senior Software Engineer — React Native, Next.js, animations',
  icons: {
    icon: '/assets/header-logo.png',
  },
  openGraph: {
    title: 'Harshit Parkar — Portfolio',
    description: 'Senior Software Engineer — React Native, Next.js, animations',
    url: 'https://harshitparkar.github.io',
    siteName: 'Harshit Parkar Portfolio',
    images: [
      {
        url: '/assets/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Harshit Parkar Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harshit Parkar — Portfolio',
    description: 'Senior Software Engineer — React Native, Next.js, animations',
    images: ['/assets/og-preview.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
