import { Suspense } from 'react'
import { CabinList, Spinner, Filter } from '@/components'

// export const revalidate = 604800 No need as this now becomes dynamic page

export const metadata = {
  title: 'Cabins',
}

export default async function Page({ searchParams }) {
  const { capacity } = await searchParams

  return (
    <div>
      <h1 className="text-accent-400 mb-5 text-4xl font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 mb-10 text-lg">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <div className="mb-8 flex justify-end">
        <Filter />
      </div>
      <Suspense fallback={<Spinner />} key={capacity}>
        <CabinList {...{ capacity }} />
      </Suspense>
    </div>
  )
}
