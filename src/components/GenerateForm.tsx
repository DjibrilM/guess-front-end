import React from "react";
import botPng from '../../public/technical-support.png';
import { FaRegQuestionCircle } from 'react-icons/fa';
import Image from "next/image";
import openAiLogo from '../../public/OpenAI.png'
import { FaRobot } from 'react-icons/fa';

const GenerateForm = () => {
    return (
        <div className="relative">
            <div className="w-full max-w-[450px] z-50 relative gap-3 sm:h-[300px] h-[200px] flex-col bg-[#3333330a]   flex items-center justify-center    border border-gray-300 generate-form">
                <Image src={botPng} alt="" className="w-10" />
                <h1 className="text-gray-500">Image Preview 🥳</h1>
                <p className="text-[10px] md:w-auto max-w-[50%] text-center">your image will be displayed in this section</p>
            </div>
            <div className="flex items-center">
                <FaRegQuestionCircle className="text-green-500 text-[15px] relative md:top-[0.3rem]" />
                <h1 className="md:flex md:items-center gap-1 mb-1 mt-4 text-[12px] ml-2"> for unexpected behaviors and problems please read <a href="" className="text-green-500 underline">here</a></h1>
            </div>
            <div className="flex relative z-40">
                <textarea placeholder="image prompt" name="" id="" className="resize-none max-w-[450px] w-full h-[150px] outline-none border p-2 text-[12px] " cols={30} rows={10}></textarea>
            </div>

            <div className="flex gap-3 mt-7">
                <button className="bg-global-0 px-1 text-[12px] active:bg-[#049a7c] flex items-center gap-2   text-gray py-4 w-full sm:w-auto  md:px-[3.3rem]">
                    <FaRobot className="hidden sm:block" />
                    generate 0.5$/<span className=" line-through">0.9$</span>
                </button>
                <button className="bg-global-0 text-[12px]  py-4 sm:px-[2.9rem] px-2 w-full sm:w-auto  disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed" disabled={true}>download</button>
            </div>

            {/* <Image className="absolute right-[-100px] z-0 top-48 rotate-[91deg] w-[18rem] opacity-[0.1] hidden md:block" src={openAiLogo} alt="" /> */}
        </div>
    );
};

export default GenerateForm;
