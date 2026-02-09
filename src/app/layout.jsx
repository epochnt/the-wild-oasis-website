import { Logo, Navigation } from '@/components'
import '@/styles/globals.css'

export const metadata = {
  title: 'The wild oasis',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-50 min-h-dvh">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
