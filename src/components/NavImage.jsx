'use client'

import { useSession } from 'next-auth/react'
import Image from 'next/image'

export function NavImage() {
  const { data, status } = useSession()
  const { user } = data ?? { user: null }
  if (status !== 'authenticated') return null

  return (
    <Image
      className="rounded-full"
      src={user.image}
      alt={user.name}
      width={40}
      height={40}
      referrerPolicy="no-referrer"
    />
  )
}
