import { Inter } from '@next/font/google'
import CSRTest from '@/components/CSRTest'
import { SWRTest } from '@/components/SWRTest'
import SSRTest from '@/components/SSRTest'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })
;('/')
export default async function Home() {
  return (
    <>
      <SWRTest />

      {/* @ts-expect-error Server Component */}
      <SSRTest />

      <CSRTest />
    </>
  )
}
