import '../globals.css'



export default function HomeLayoute({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body style={{overflow:"hidden"}} className='h-full   w-full bg-[#ffffff]' >{children}</body>
        </html>
    )
}