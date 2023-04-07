"use client"

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useEffect } from 'react';
import { BiBookmark } from 'react-icons/bi'
import { AiFillHeart, AiOutlineDownload } from 'react-icons/ai'
import { useState } from 'react';
import Image from 'next/image';

const ImageListComponent = () => {
    const [listCol, setListCol] = useState<number>(3);
    useEffect(() => {
        const getImageList: any = document.querySelector('.image-list');
        const listeObserve = new ResizeObserver((entries) => {


            if (entries[0].contentRect.width < 550.390625) {
                setListCol(2)
            } else {
                setListCol(3)
            }
        })

        listeObserve.observe(getImageList);
    }, [])

    return (
        <section className='max-w-[1200px] m-auto mt-5 px-2'>
            <h1 className='text-2xl my-5 text-gray-600'>Our Gallery</h1>
            <ImageList className='image-list' variant="masonry" cols={listCol} gap={15}>
                {itemData.map((item) => (
                    <ImageListItem className='relative image-el overflow-hidden cursor-pointer' key={item.img}>
                        <div className="absolute w-full flex justify-between top-0 p-3">
                            <button style={{
                                backdropFilter: "blur(50px)"
                            }} className="w-8 sm:w-12 h-8 sm:h-12 items-center justify-center flex rounded-md bg-[#ffffff86]">
                                <BiBookmark className='text-2xl text-gray-500' />
                            </button>

                            <button style={{
                                backdropFilter: "blur(50px)"
                            }} className="w-8 sm:w-12 h-8 sm:h-12 flex items-center justify-center  rounded-md bg-[#ffffff96]">
                                <AiFillHeart className='sm:text-2xl text-red-500' />
                            </button>
                        </div>
                        <Image
                            loading='lazy'
                            width={500}
                            height={500}
                            className='w-full h-auto'
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                        />

                        <div className="w-full image-desc absolute bottom-[-100px] duration-200 p-2">
                            <div
                                style={{ backdropFilter: "blur(10px)" }}
                                className="w-full  bg-[#0f0f2ce8] p-2 rounded-lg duration-200">
                                <div className="w-full flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 rounded-full">
                                            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" className='rounded-full h-full w-full object-cover' alt="" />
                                        </div>

                                        <p className='text-sm text-[#ffffffc6]'>@mark </p>
                                    </div>

                                    <button style={{
                                        backdropFilter: "blur(50px)"
                                    }} className="w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center  rounded-md bg-white">
                                        <AiOutlineDownload className='text-[#0f0f2ce8] text-[20px]' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </ImageListItem>
                ))}
            </ImageList>
        </section>
    );
};


const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        title: 'Bed',
    },
    {
        img: 'https://images.pexels.com/photos/15488686/pexels-photo-15488686.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        title: 'Books',
    },
    {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink',
    },
    {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchen',
    },
    {
        img: 'https://images.pexels.com/photos/15489094/pexels-photo-15489094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Blinds',
    },
    {
        img: 'https://images.pexels.com/photos/15418150/pexels-photo-15418150.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        title: 'Chairs',
    },
    {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink',
    },
    {
        img: 'https://images.pexels.com/photos/15418150/pexels-photo-15418150.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        title: 'Chairs',
    },
    {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink',
    },
    {
        img: 'https://images.pexels.com/photos/15489121/pexels-photo-15489121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Kitchen',
    },
    {
        img: 'https://images.pexels.com/photos/15489094/pexels-photo-15489094.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        title: 'Blinds',
    },
    {
        img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
        title: 'Chairs',
    },
    {
        img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
        title: 'Laptop',
    },
    {
        img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
        title: 'Doors',
    },
    {
        img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
        title: 'Storage',
    },
    {
        img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
        title: 'Candle',
    },
    {
        img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
        title: 'Coffee table',
    },
];

export default ImageListComponent;
