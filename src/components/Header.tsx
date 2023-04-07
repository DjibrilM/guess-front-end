"use client"

import React from "react";
import logo from '../../public/favicon.svg'
import Image from "next/image";
import { Pacifico } from '@next/font/google'
import Link from "next/link";


const logoFont = Pacifico({
    subsets: ['latin'],
    weight: "400",
    variable: "--logo-font"
})


interface Props {
    link: string,
    linkText: string
}

const Header: React.FC<Props> = ({ link, linkText }) => {

    return <header  className="w-full h-20 bg-[white] flex items-end justify-end">
        <div className="w-full sm:w-7/12 h-full flex items-center justify-between">
            <div className="flex items-center">
                <Image priority src={logo} alt="logo" className="w-10 sm:w-16 hover:rotate-[500deg] duration-[1s] cursor-pointer" />
                <h1 className={`${logoFont.className}  text-2xl text-gray-700`}>Guess</h1>
            </div>
            <Link className="mr-3 sm:mr-8  px-10 rounded-sm py-3 bg-global-0 text-white" href={link}>{linkText}</Link>
        </div>
    </header>;
};

export default Header;
