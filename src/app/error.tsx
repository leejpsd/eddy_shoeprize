'use client'

import { useEffect } from 'react'

type Props = {
  error: Error
  reset: () => void
}

export default function ProductsError({ error, reset }: Props) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <button onClick={() => reset()}>재시도</button>
    </div>
  )
}
