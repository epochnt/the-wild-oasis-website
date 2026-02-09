import { Logo, Navigation } from '@/components'
import '@/styles/globals.css'

export const metadata = {
  title: {
    template: "%s The Wild Oasis'",
    default: "Welcome The Wild Oasis'",
  },
  description: `Luxorious cabin out in Arizona just south of Tucson where tumbleweeds tumble in search of a home.
    There lies a town they call Tombstone, where the brave never cry, they live by a sixgun by a sixgun
    they die`,
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
