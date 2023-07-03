'use client'

import { SWRConfig } from 'swr'

type Props = {
  children: React.ReactNode
}

export default function SWRConfigContext({ children }: Props) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          fetch(url)
            .then((res) => res.json())
            .then((v) => v.results),
      }}
    >
      {children}
    </SWRConfig>
  )
}
