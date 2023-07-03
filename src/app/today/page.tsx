import Today from '@/components/Today'
import { getProducts } from '@/service/products'

export default async function Page() {
  const todyEndUrl =
    '/releases/?page=1&page_size=10&is_end=false&is_closing_today=true&ordering=end_time,-id'

  const todyEnd = await getProducts(todyEndUrl)
  return <Today products={todyEnd} />
}
