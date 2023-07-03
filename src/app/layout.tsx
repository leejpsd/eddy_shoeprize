import { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'
import Header from '@/components/Header'
import SWRConfigContext from 'context/SWRContext'
import StyledComponentsRegistry from '../style/registry'

export const metadata: Metadata = {
  title: '슈프라이즈',
  description: '발매정보 사이트.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Header />
          <SWRConfigContext>{children}</SWRConfigContext>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
