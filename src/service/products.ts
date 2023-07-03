export type Product = {
  id: number
  uuid: string
  name: string
  type: number
  method: string
  mission: string
  url: string
  price: string
  thumb: string
  releaseMarket: {
    name: string
    icon: string
    channels: [
      {
        type: string
        link: string
        typeName: string
      },
    ]
  }
  closedTimestamp: number
  product: {
    brandName: string
    name: string
    thumb: string
    code: string
  }
  shippingMethod: string
  payMethod: string
}

const BASE_URL = 'https://www.shoeprize.com/api/v2/'

export async function getProduct(
  id: number,
  url: string,
): Promise<Product | undefined> {
  const products = await getProducts(url)
  return products.find((item) => item.id == id)
}

export async function getProducts(url: string): Promise<Product[]> {
  return await fetch(
    `https://www.shoeprize.com/api/v2${url}`,
    //ISR
    // {
    //   next: { revalidate: 3 },
    // },
  )
    .then((res) => res.json())
    .then((item) => item.results)
}
