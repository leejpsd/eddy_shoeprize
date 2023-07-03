import { getProduct, getProducts } from '@/service/products'
import { notFound } from 'next/navigation'

// export const revalidate = 3

type Props = {
  params: {
    slug: number
  }
}

export function generateMetadata({ params }: Props) {
  //동적 메타데이터
  return {
    title: `제품의 번호: ${params.slug}`,
  }
}

const todyEndUrl =
  '/releases/?page_size=20&ordering=-type,end_time,-id&is_closing_today=true&is_end=false&page=1'

// export const revalidate = 3

export async function generateStaticParams() {
  // 동적 라우팅을 SSG로 생성하는법
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임 (SSG)
  // 해당 레이아웃 또는 페이지가 생성되기 전에 실행됨 next build.
  // 재검증(ISR) 중에는 generateStaticParams다시 호출되지 않음
  const todyEnd = await getProducts(todyEndUrl)
  return todyEnd.map((product) => ({ params: { slug: product.id } }))
}

export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug, todyEndUrl)

  if (!product) {
    notFound()
  }

  return (
    <>
      <h1>SSG</h1>
      <div>
        <p>브랜드명1:{product.product.brandName}</p>
        <p>상품명:{product.product.name}</p>
      </div>
    </>
  )
}
