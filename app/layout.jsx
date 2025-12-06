import '../styles/globals.css'
import { ThemeProvider } from '../contexts/ThemeContext'

export const metadata = {
  title: 'Harshit Parkar — Portfolio',
  description: 'Senior Software Engineer — React Native, Next.js, animations',
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
