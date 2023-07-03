'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Product } from '@/service/products'
import Image from 'next/image'
import Link from 'next/link'

type Props = { products: Product[] }

export default function Carousel({ products }: Props) {
  return (
    <>
      <Swiper spaceBetween={50} slidesPerView={4}>
        {products?.map(({ id, name, thumb, product }) => (
          <SwiperSlide key={id}>
            <Link href={`/raffles/${id}`}>
              <Image
                src={thumb || product.thumb}
                alt={name || product.name}
                width={100}
                height={100}
              />
              <p>{name || product.name}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
