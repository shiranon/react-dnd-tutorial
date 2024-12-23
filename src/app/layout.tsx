import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'

export const NotoSansJP = Noto_Sans_JP({
  weight: 'variable',
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})

export const metadata: Metadata = {
  title: 'DnD Tutorial',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${NotoSansJP.variable} antialiased`}>
      <body className="mx-auto">{children}</body>
    </html>
  )
}
