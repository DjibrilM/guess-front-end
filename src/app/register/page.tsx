
import Image from 'next/image';
import { Register } from '@/components/form';
import Header from '@/components/Header';
import { Almarai } from '@next/font/google';
import { Titan_One, Lexend_Exa } from '@next/font/google';

const globalFonts = Lexend_Exa({
  subsets: ['latin'],
  weight: ['400']
})

export default function RegisterPage() {
  return (

    <main className={`${globalFonts.className}  w-full min-h-screen bg-[#e2e2e2]`}>
      <Header linkText='Login' link='login' />
      <Register />
    </main>
  )
}
