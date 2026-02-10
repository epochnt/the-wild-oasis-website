import { Header } from '@/components'
import '@/styles/globals.css'

import { Josefin_Sans } from 'next/font/google'

const josefin = Josefin_Sans({
  subsets: ['lating'],
  display: 'swap',
})

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
      <body
        className={`${josefin.className} bg-primary-950 text-primary-50 flex min-h-dvh flex-col antialiased`}
      >
        <Header />
        <div className="flex-1 px-8 py-12">
          <main className="mx-auto max-w-7xl">{children}</main>
        </div>
      </body>
    </html>
  )
}
