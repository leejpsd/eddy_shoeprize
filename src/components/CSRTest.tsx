'use client'
import { useEffect, useState } from 'react'
import Carousel from './Carousel'
import { Product } from '@/service/products'

export default function CSRTest() {
  const [todayNew, setTodayNew] = useState<any>()

  const API =
    'https://www.shoeprize.com/api/v2/releases/?page_size=20&ordering=type,end_time,-id&is_opening_today=true&is_end=false&is_participate=false&page=1'

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setTodayNew(data.results))
  }, [])

  return (
    <>
      <h1>오늘 등록//CSR</h1>
      <Carousel products={todayNew} />
    </>
  )
}
