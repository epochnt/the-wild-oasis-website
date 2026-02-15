import { SelectCountry, UpdateProfileForm } from '@/components'

export const metaData = {
  title: 'Update Profile',
}

export default function Page() {
  // CHANGE
  // const countryFlag = '/pt.jpg'
  const nationality = 'portugal'
  return (
    <UpdateProfileForm>
      <SelectCountry
        name="nationality"
        id="nationality"
        className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm"
        defaultCountry={nationality}
      />
    </UpdateProfileForm>
  )
}
