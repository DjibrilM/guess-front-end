import GlobalShowcase from '@/components/HomeShowcase'
import { Titan_One, Lexend_Exa } from '@next/font/google'
import ImageList from '@/components/ImageList'

const globalFonts = Lexend_Exa({
  subsets: ['latin'],
  weight: ['400']
})

export default function HomePage() {
  return (
    <main className={`${globalFonts.className}`}>
      <GlobalShowcase />
      <ImageList />
    </main>
  )
}