'use client'
import React from "react";
import logo from '../../public/favicon.svg';
import { Pacifico } from '@next/font/google'
import ShowcaseInputBar from "./ShowcaseInputBar";
import { useEffect, useState } from "react";
import MainHeader from "./MainHeader";

const logoFont = Pacifico({
    subsets: ['latin'],
    weight: "400",
    variable: "--logo-font"
})


const GlobalShowcase = () => {

    return (
        <section
            style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundImage: 'linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)),url("https://images.pexels.com/photos/65031/pexels-photo-65031.jpeg")'
            }}
            className="w-full  h-[24rem] sm:h-[34rem]">
            <MainHeader fixedHeight={350} />
            <ShowcaseInputBar />
        </section>
    )
};

export default GlobalShowcase;
