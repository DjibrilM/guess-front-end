import Image from 'next/image'
import { Login } from '@/components/form'
import Header from '@/components/Header'
import { Almarai } from '@next/font/google'
import { Titan_One, Lexend_Exa } from '@next/font/google'

const globalFonts = Lexend_Exa({
  subsets: ['latin'],
  weight: ['400']
})

export default function Home() {
  return (
    <main className={`${globalFonts.className}  h-full w-full`}>
      <Header linkText='Rgister' link='/' />
      <Login />
    </main>
  )
}
