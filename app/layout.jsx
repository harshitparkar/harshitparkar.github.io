import '../styles/globals.css'

export const metadata = {
  title: 'Harshit Parkar — Portfolio',
  description: 'Senior Software Engineer — React Native, Next.js, animations',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
