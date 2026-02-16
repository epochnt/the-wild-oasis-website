'use client'

import Link from 'next/link'
import { SessionProvider } from 'next-auth/react'
import { NavImage } from './NavImage'

export function Navigation() {
  return (
    <SessionProvider>
      <nav className="z-10">
        <ul className="flex items-center gap-16">
          <li>
            <Link
              href="/cabins"
              className="hover:text-accent-400 transition-colors"
            >
              Cabins
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-accent-400 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/account"
              className="hover:text-accent-400 flex items-center gap-4 transition-colors"
            >
              <NavImage />
              Guest area
            </Link>
          </li>
        </ul>
      </nav>
    </SessionProvider>
  )
}
