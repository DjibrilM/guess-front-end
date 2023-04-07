import React, { useEffect } from "react";
import priceIndicator from '../../src/../public/price.svg';
import priceIndicator2 from '../../src/../public/price2.svg';
import fileUpload from '../../src/../public/8191581.png';
import ai from '../../src/../public/deep-learning.png';
import fileSelectImage from '../../src/../public/imageDotted.png';
import { IoMdClose } from 'react-icons/io';
import { BsCloudUploadFill } from 'react-icons/bs'
import Image from "next/image";
import { motion } from "framer-motion";
import { dropIMages } from "@/helpers/FileReader";
import { useState } from "react";
import { useRef } from "react";
import { previewUploadedImage } from "@/helpers/FileReader";
import { IoCloseOutline } from 'react-icons/io5';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import Link from "next/link";



interface Props {
    visible: boolean,
    onClose: Function
}

const UploadModel: React.FC<Props> = ({ visible, onClose }) => {
    const [droped, setDroped] = useState<boolean>(false);
    const [dropedFile, setDropedFile] = useState<File | null>();
    const [showUploadModel, setShowUploadModel] = useState<boolean>();
    const inputFile = useRef<any>();

    return visible ? (
        <section className="w-full flex top-0 sm:px-2 right-0 bottom-0 left-0 bg-[#000000b3] justify-center h-screen fixed z-[3000]">
            {visible &&
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -10
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    className="w-full sm:mt-5 p-3 sm:p-5 md:h-[500px]  max-w-[800px] min-w-[300px]  bg-white">

                    {!showUploadModel &&
                        <div className="w-full h-full relative pb-16  rounded-lg bg-gray-200">
                            <div className="w-10 h-10 rounded-full m-3 border-[3px] cursor-pointer  border-gray-300 left-0 top-0 absolute flex items-center justify-center " onClick={() => onClose()}><IoMdClose /></div>
                            <div className="flex sm:gap-10 flex-col sm:flex-row gap-4 h-full w-full justify-center items-center">
                                <div onClick={() => setShowUploadModel(true)} className="w-[190px] cursor-pointer rounded-lg h-[150px] flex flex-col justify-center items-center bg-white">
                                    <Image src={fileUpload} alt="" className="w-20" />
                                    <h1 className=' font-bold text-gray-500'>Upload localFile</h1>
                                </div>

                                <div className="w-[190px]  cursor-pointer  relative rounded-lg h-[150px] bg-white">
                                    <Image src={priceIndicator2} className="w-32 z-0  hidden sm:block  absolute price-rotate  top-[-80px]  right-[-90px]" alt="" />
                                    <Link onClick={() => {
                                        visible = false;
                                    }} href={'/generate'}>
                                        <div className="relative flex items-center justify-center rounded-lg z-10 flex-col gap-5  w-full h-full bg-white">
                                            <Image src={priceIndicator} className="w-32 hidden sm:block absolute price-indicator  top-[-65px]  right-[-90px]" alt="" />
                                            <Image src={ai} alt="" className="w-16 " />
                                            <h1 className=' font-bold text-gray-500'>Generae With AI</h1>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    }

                    {showUploadModel &&
                        <div className="w-full p-3 pb-16 rounded-lg  bg-gray-200">
                            <div onClick={() => setShowUploadModel(false)} className="w-10 cursor-pointer flex items-center justify-center  h-10 mb-5 border border-gray-500 rounded-full">
                                <HiOutlineArrowLeft />
                            </div>

                            <div className="w-full  gap-5 md:flex-row flex-col flex h-full">
                                <input className="input-file" onChange={() => {
                                    const getInputFile = document.querySelector(".input-file") as HTMLInputElement | any;
                                    previewUploadedImage(getInputFile.files[0], "selectedImage", (file: File) => {
                                        setDroped(true);
                                        setDropedFile(file);
                                    });
                                }}
                                    ref={inputFile} hidden type="file" accept="image/png, image/jpeg , image/tiff , image/bmp , image/eps,  image/ai , image/webp , image/heic ,    " />
                                <div
                                    id="drop_zone"
                                    onDragOver={(event) => {
                                        event.preventDefault();
                                        const getDropArea = document.querySelector('.drop-area') as HTMLDivElement;
                                        getDropArea.classList.add('dragOver');
                                    }}
                                    onClick={() => {
                                        inputFile.current?.click();
                                    }}
                                    onDragLeave={(event) => {
                                        event.preventDefault();
                                        const getDropArea = document.querySelector('.drop-area') as HTMLDivElement;
                                        getDropArea.classList.remove('dragOver');
                                    }}

                                    onDrop={(event: any) => {
                                        event.preventDefault();
                                        dropIMages(event.dataTransfer.items, "selectedImage", (file: File) => {
                                            setDroped(true);
                                            setDropedFile(file);
                                        });

                                        const getDropArea = document.querySelector('.drop-area') as HTMLDivElement;
                                        getDropArea.classList.remove('dragOver');
                                    }}
                                    className="w-full md:w-[30rem] h-[15rem] sm:h-[20rem] relative cursor-pointer border-gray-400 border-2 drop-area bg-white border-dashed">

                                    {droped &&
                                        <div onClick={(event) => {
                                            event.stopPropagation();
                                            setDroped(false);
                                            setDropedFile(null);
                                        }} className="absolute flex items-center justify-center z-20  w-10 h-10 right-1 bg-gray-200 border-2 mr-1 mt-2 border-gray-400 rounded-full">
                                            <IoCloseOutline />
                                        </div>
                                    }

                                    <img style={droped ? {
                                        display: "block"
                                    } : { display: "none" }}
                                        src="" className="selectedImage relative z-10 object-cover w-full h-full" alt="" />

                                    {!droped && <Image className=" w-20 sm:w-32 m-auto mt-12 mb-2" alt="" src={fileSelectImage} />}
                                    {!droped && <h1 className="text-center font-extrabold	">Drag or click👌</h1>}
                                </div>

                                <div className="w-full sm:w-8/12 relative">
                                    <input type="text" className="w-full h-12 bg-transparent border-gray-400 rounded-sm border p-2 text-[12px] outline-none focus:border-gray-600" placeholder="Image Title" />
                                    <p className="text-[10px] mt-6">Providing the image description facilitate the searching mechanisme🤓</p>
                                    <textarea name="" placeholder="Descriptions " id="" cols={30} rows={10} className="bg-transparent border border-gray-400 w-full mt-1 h-[165px] outline-none p-2 text-sm resize-none  "></textarea>

                                    <div className="">
                                        <button className="text-white gap-2 w-full h-10 bg-global-0 flex items-center justify-center active:bg-[#0fa487]">
                                            <BsCloudUploadFill className="text-white relative top-1" />
                                            post
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </motion.div>
            }
        </section>
    ) : <></>;
};

export default UploadModel;
