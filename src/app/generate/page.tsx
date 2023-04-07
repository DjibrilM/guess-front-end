import GlobalShowcase from '@/components/HomeShowcase';
import { Titan_One, Lexend_Exa } from '@next/font/google';
import MainHeader from '@/components/MainHeader';
import gridFrame from '../../../public/gridWindow.png';
import GenerateForm from '@/components/GenerateForm';
import Image from 'next/image';


const globalFonts = Lexend_Exa({
    subsets: ['latin'],
    weight: ['400']
})

export default function HomePage() {
    return (
        <main className={` ${globalFonts.className}`}>
            <MainHeader fixedHeight={64} />
            <section className='flex md:flex-row  flex-col w-full p-4'>
                <div className="w-full max-w-[900px]  h-full">
                    <GenerateForm />
                </div>
                <div className="max-w-[800px] flex justify-center md:border-l border-[#3333331d] w-full">
                    <Image src={gridFrame} className='w-full max-w-[500px]' alt='gridWindow' />
                </div>
            </section>
        </main>
    )
}
