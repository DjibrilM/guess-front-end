'use client'

import React from "react";
import logo from '../../public/favicon.svg';
import Image from "next/image";
import { Pacifico } from '@next/font/google'
import { AiOutlinePlusSquare, AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import LeftMenu from "./leftMenu";
import UploadModel from "./UploadModel";
import { FiHome } from 'react-icons/fi';
import Link from "next/link";
import { usePathname } from 'next/navigation';


const logoFont = Pacifico({
    subsets: ['latin'],
    weight: "400",
    variable: "--logo-font"
})

interface Props {
    fixedHeight: number
}


const mainHeader: React.FC<Props> = ({ fixedHeight }): JSX.Element => {
    const [fixHeader, setFixeHeader] = useState<boolean>();
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [uploadModel, setUploadModel] = useState<boolean>(false);
    const route = usePathname();


    useEffect(() => {
        window.addEventListener('scroll', (event: Event): void => {
            const window = event.currentTarget as Window;
            if (window.scrollY >= fixedHeight) {
                setFixeHeader(true);
            } else {
                setFixeHeader(false);
            }
        })
    }, [])


    return (
        <>
            <UploadModel onClose={() => setUploadModel(false)} visible={uploadModel} />
            <header style={fixHeader ? {
                position: "fixed",
                top: "-1px",
                left: 0,
                zIndex: 1000,
                borderBottom: "0.5px solid #00000017",
                background: '#ffffffc3'

            } : {}} className="w-full h-16 relative border-b  z-40 bg-[#fff] backdrop-blur-lg">
                <div className="w-full h-full flex items-center justify-between gap-4 sm:px-5 px-2">
                    <div className={`flex items-center  sm:basis-[50%] ${logoFont.className} `}>
                        <Link href={'/'}><Image src={logo} alt="" className="w-10" /></Link>
                        <h1 className={`text-gray-700`}>Guess</h1>
                    </div>

                    <div style={fixHeader && window.innerWidth > 500 ? { right: "10%" } : { left: 10 }} className={`${!fixHeader ? "sm:basis-[50%]" : "sm:basis-[80%]"} justify-end relative`}>
                        {fixHeader && <SearchInput />}
                        {!fixHeader && <div className="w-10 h-10 border-2 rounded-full border-global-0 flex items-center justify-center overflow-hidden">
                            <img className="w-full h-full object-cover rounded-full" src="https://images.pexels.com/photos/15418845/pexels-photo-15418845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                        }
                    </div>

                    <div className="sm:basis-[50%] hidden  md:flex  h-full justify-between items-center ">
                        <div className="flex h-full items-center gap-4 sm:gap-10 text-gray-700">
                            <Link href='/'><FiHome className={`${route === '/' && 'text-global-0'} text-2xl cursor-pointer`} /></Link>
                            <AiOutlinePlusSquare onClick={() => setUploadModel(true)} className={`${route === '/generate' && 'text-global-0'} text-2xl cursor-pointer`} />
                            {/* <MdOutlineNotificationsNone className="text-2xl" /> */}
                            {fixHeader &&
                                <div className="w-10 h-10 border-2 rounded-full border-global-0 flex items-center justify-center overflow-hidden">
                                    <img className="w-full h-full object-cover rounded-full" src="https://images.pexels.com/photos/15418845/pexels-photo-15418845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                </div>
                            }
                        </div>

                        <button className="text-white sm:flex items-center justify-center gap-1   sm:gap-2 bg-global-0 h-10 sm:px-7 px-2 text-sm hidden ml-3">
                            <BiMessageSquareDetail className="" />
                            logout
                        </button>
                    </div>

                    <div className="md:hidden cursor-pointer relative z-[1000]" onClick={() => {
                        setOpenMenu(true)
                    }
                    }>
                        <AiOutlineMenu className="cursor-pointer" />
                    </div>
                    <LeftMenu opend={openMenu} closeMenu={() => setOpenMenu(false)} />
                </div>
            </header>
        </>
    )
}

export default mainHeader