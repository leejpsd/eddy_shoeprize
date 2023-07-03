'use client'

import useSWR, { SWRConfig } from 'swr'
import Carousel from './Carousel'

const API =
  'https://www.shoeprize.com/api/v2/products/?page_size=20&first_release_date_gte=2023-06-22&ordering=first_release_date&is_uncertain_date=false&is_active=true&is_official=true&page=1'

export function SWRTest() {
  const { data, error } = useSWR(API)

  if (error) return <div>Failed to load</div>

  return (
    <>
      <h1>발매확정//CSR-SWR</h1>
      <Carousel products={data} />
    </>
  )
}
