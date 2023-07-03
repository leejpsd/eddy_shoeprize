'use client'

import Today from '@/components/Today'
import { Product, getProducts } from '@/service/products'
import { notFound } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type Props = {
  params: {
    slug: string
  }
}

export default async function Page({ params: { slug } }: Props) {
  const [products, setProducts] = useState<Product[]>()

  const fetchProducts = async (slug: string) => {
    switch (slug) {
      case 'todayEnd':
        slug =
          '/releases/?page=1&page_size=10&is_end=false&is_closing_today=true&ordering=end_time,-id'
        break
      case 'todayNew':
        slug =
          '/releases/?page=1&page_size=10&is_end=false&is_opening_today=true&ordering=end_time,-id'
        break
      default:
        slug =
          '/releases/?page=1&page_size=10&is_end=true&released_date=20230621&ordering=end_time,-id'
        break
    }

    const fetchedProducts = await getProducts(slug)

    setProducts(fetchedProducts)
  }

  useEffect(() => {
    fetchProducts(slug)
  }, [slug])

  return (
    <>
      <Today products={products} />
    </>
  )
}
