import { getProducts } from '@/service/products'
import Carousel from './Carousel'

export default async function SSRTest() {
  const todyEndUrl =
    '/releases/?page_size=20&ordering=-type,end_time,-id&is_closing_today=true&is_end=false&page=1'

  const todyEnd = await getProducts(todyEndUrl)
  return (
    <>
      <h1>오늘마감//SSR</h1>
      <Carousel products={todyEnd} />
    </>
  )
}
