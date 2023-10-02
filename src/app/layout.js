import Header from '@/conponents/HomeSection/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Foreign-Calculate-Rate',
  description: 'Foreign-Calculate-Rate',
}

 const RootLayout =({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        </body>
    </html>
  )
}
export default RootLayout
