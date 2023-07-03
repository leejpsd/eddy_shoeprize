import { Metadata } from 'next'
import styles from './layout.module.scss'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: '제품 정보 사이트 | 전체 제품 확인',
  description: '제품 정보를 확인해 보세요',
}

export default function TodayLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const menu = [
    {
      href: '/today/todayEnd',
      title: '오늘 마감',
    },
    {
      href: '/today/todayNew',
      title: '오늘 등록',
    },
    {
      href: '/today/favorite',
      title: '관심 상품',
    },
    {
      href: '/today/participated',
      title: '참여함',
    },
    {
      href: '/today/releaseDone',
      title: '발매 완료',
    },
  ]

  const styles = {
    color: 'red',
    fontSize: '20px',
    backgroundColor: 'yellow',
    ul: {
      padding: '0 20px',
    },
  }

  return (
    <>
      <Navbar menu={menu} styles={styles} />

      <section>{children}</section>
    </>
  )
}
