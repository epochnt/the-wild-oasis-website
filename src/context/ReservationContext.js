'use client'
import { createContext, useContext, useState } from 'react'
const ReservationContext = createContext()
const initalState = { from: undefined, to: undefined }

function ReservationContextProvider({ children }) {
  const [range, setRange] = useState(initalState)
  const resetRange = () => setRange(initalState)

  return (
    <ReservationContext.Provider value={{ range, resetRange, setRange }}>
      {children}
    </ReservationContext.Provider>
  )
}

function useReservation() {
  const context = useContext(ReservationContext)
  if (!context) throw new Error('context was used outside the provider')
  return context
}

export { ReservationContextProvider, useReservation }
