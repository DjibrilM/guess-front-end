
import Image from 'next/image'
import { Register } from '@/components/form'
import Header from '@/components/Header'
import { Titan_One, Lexend_Exa } from '@next/font/google'

const globalFonts = Lexend_Exa({
  subsets: ['latin'],
  weight: ['400']
})

export default function RegisterPage() {
  return (
    <main className={`${globalFonts.className}`}>
      <Header linkText='Login' link='login' />
      <Register />
    </main>
  )
}
