import React from "react";
import image from '../../public/new-v4-aspect-ratio-1.jpg';
import Image from "next/image";
import { AiOutlineDownload, AiFillHeart } from 'react-icons/ai';
import { BiBookmark } from 'react-icons/bi';





const datas = [
    '  ',
    '  ',
    '  ',
    '  ',
    '  ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
]

const ProfilePosts = () => {
    return (
        <section className="w-full md:max-w-[1300px] mt-10 px-5  md:mt-52 m-auto ">
            <div className="w-full flex flex-wrap gap-5 items-center justify-center">
                {datas.map((post: any, inde: number) => {
                    return <PostCard key={inde} />
                })}
            </div>
        </section>
    );
};

const PostCard = () => {
    return <div className="overflow-hidden  md:max-w-[400px] profile-post justify-center flex max-h-[350px] relative">
        <div className="w-11/12  mt-5 flex justify-between absolute">
            <button className="w-10 cursor-pointer outline-none border flex items-center justify-center h-10 bg-[#ffffffa4] backdrop-blur-lg rounded-md ">
                <AiFillHeart className="text-2xl text-white" />
            </button>

            <button className="w-10 cursor-pointer outline-none border-none h-10 flex items-center justify-center bg-[#ffffff97] backdrop-blur-lg rounded-md ">
                <BiBookmark className="text-2xl text-white" />
            </button>
        </div>

        <div className="w-11/12 profile-post-desc bottom-[-300px] transition-[1s] backdrop-blur-md  shadow-lg bg-[#0f0f2cb1] rounded-md  p-2   mt-5 flex justify-between absolute">
            <button style={{
                backdropFilter: "blur(50px)"
            }} className="w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center  rounded-md bg-white active:bg-gray-300">

                <AiOutlineDownload className='text-[#0f0f2ce8] text-[20px]' />
            </button>
        </div>
        <Image src={image} alt="title" className="w-full h-full object-cover object-center" />
    </div>
}


export default ProfilePosts;
