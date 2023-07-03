import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '제품 정보 사이트 | 전체 제품 확인',
  description: '제품 정보를 확인해 보세요',
}

export default function TodayLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <section>{children}</section>
    </>
  )
}
