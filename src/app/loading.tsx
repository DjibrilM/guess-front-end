import React from "react";
import loadingImage from '../../public/loading-gif.gif';
import Image from 'next/image';

const loading = () => {
    return <main className="w-full h-[100vh] flex items-center justify-center">
        <Image src={loadingImage} className="w-10" alt="loading"/>
    </main>;
};

export default loading;
