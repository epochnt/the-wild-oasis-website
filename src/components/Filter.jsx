'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'

function Button({ filter, activeFilter, handleFilter, children }) {
  return (
    <button
      className={`hover:bg-primary-700 px-5 py-2 ${activeFilter === filter ? 'bg-primary-700 text-primary-50' : ''}`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  )
}

export function Filter() {
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const activeFilter = searchParams.get('capacity') ?? 'all'

  const handleFilter = filter => {
    const params = new URLSearchParams(searchParams)
    params.set('capacity', filter)
    router.replace(`${pathName}?${params.toString()}`, { scroll: false })
  }

  return (
    <div className="border-primary-800 flex border">
      <Button {...{ handleFilter, activeFilter, filter: 'all' }}>
        All Cabins
      </Button>
      <Button {...{ handleFilter, activeFilter, filter: 'small' }}>
        1&mdash;3
      </Button>
      <Button {...{ handleFilter, activeFilter, filter: 'medium' }}>
        4&mdash;6
      </Button>
      <Button {...{ handleFilter, activeFilter, filter: 'large' }}>
        7&mdash;10
      </Button>
    </div>
  )
}
