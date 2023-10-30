import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
import '@/app/_styles/globals.scss'
import Navbar from './_components/global/Navbar'

const josefin_sans = Josefin_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Remote Kitchen',
  description: 'Remote Kitchen: Your Destination for Culinary Excellence - Explore a world of flavors with Remote Kitchen, your premier online food shop. Indulge in diverse and delectable dishes, from international cuisines to local favorites, delivered to your doorstep. Order now and experience culinary convenience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${josefin_sans.className} bg-blue-50`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
