export default function Today(props: any) {
  const { products } = props

  return (
    <>
      {products?.map(({ product: { name } }: { product: { name: string } }) => (
        <div>{name}</div>
      ))}
    </>
  )
}
