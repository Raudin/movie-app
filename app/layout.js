import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import './globals.css'
import { Montserrat } from "next/font/google"
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'
import head from './head'

export const metadata = {
  title: 'Movie Buzz',
  description: "Showcasing the most popular movies currently capturing audiences"
};


const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}      
      <head />      
      <body className={`sans-serif px-10 md:px-32`}>
        <div className='flex justify-center'>
          <Navbar />
        </div>        
        <div className='py-20'>
          {children}
        </div>
        <div className='flex justify-center'>
          <Footer />
        </div> 
        <Analytics />        
      </body>
    </html>
  )
}