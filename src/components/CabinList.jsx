import { CabinCard } from '@/components'
import { getCabins } from '@/lib'

export async function CabinList({ capacity }) {
  const cabins = await getCabins()
  if (!cabins.length) return null

  //Filer cabins
  const capacityRanges = {
    small: [0, 2],
    medium: [4, 6],
    large: [8, 10],
  }

  const filteredCabins =
    capacity && capacityRanges[capacity]
      ? cabins.filter(cabin => {
          const [min, max] = capacityRanges[capacity]
          return cabin.maxCapacity >= min && cabin.maxCapacity <= max
        })
      : cabins

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
      {filteredCabins.map(cabin => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  )
}
