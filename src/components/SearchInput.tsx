import React from "react";
import { ImSearch } from 'react-icons/im';
import Image from "next/image";
import { useState } from "react";
import animal from '../../public/cat.png';
import cars from '../../public/car.png';
import flower from '../../public/flower.png';
import ocean from '../../public/ocean.png';
import tech from '../../public/cpu.png';
import games from '../../public/game-controller.png';
import ai from '../../public/robot.png';

interface Props {
    onFucus: Function,
    onBlur: Function,
}

const SearchInput = () => {
    const [searchResult, showSearchResult] = useState<boolean>(false);

    return (
        <div
            style={
                searchResult ?
                    {
                        borderBottomRightRadius: "0px",
                        borderBottomLeftRadius: "0px"
                    } : {}} className="px-5 flex border border-[#0000000f] items-center sm:mr-20 z-50 w-full h-12  border-r   bg-gray-200 rounded-md justify-between relative">
            <input onBlur={() => showSearchResult(false)} onFocus={() => { showSearchResult(true) }} type="text" placeholder="Search An Image..." className="w-10/12 outline-none text-sm bg-transparent" />
            <div className={`h-full pl-2 flex items-center border-l-gray-300 ${searchResult && "border-l"}`}>
                <ImSearch className="text-gray-400" />
            </div>
            {searchResult &&
                <div className="w-[100.2%] shadow-md border-r border-l z-50 absolute pb-5 border-t border-t-[#00000020] bg-white top-[2.78rem] right-[-0.2px]">
                    <div className="h-[18rem]  w-full">
                    </div>

                    <div className="border-t px-4 pt-2 flex gap-3 flex-wrap">
                        <div className="px-2 h-10 border rounded-md text-[12px] gap-1 flex items-center justify-center">
                            <Image src={animal} alt="" className="w-5" />
                            <span>Animal</span>
                        </div>

                        <div className=" px-2 h-10 border rounded-md text-[12px] gap-1 flex items-center justify-center">
                            <Image src={cars} alt="" className="w-5" />
                            <span>cars</span>
                        </div>

                        <div className=" h-10 px-2 border rounded-md text-[12px] gap-1 flex items-center justify-center">
                            <Image src={flower} alt="" className="w-5" />
                            <span>Flowers</span>
                        </div>

                        <div className=" px-2 h-10 border rounded-md gap-1 text-[12px] flex items-center justify-center">
                            <Image src={ocean} alt="" className="w-5" />
                            <span>Ocean</span>
                        </div>


                        <div className=" px-2 h-10 border rounded-md gap-1 text-[12px] flex items-center justify-center">
                            <Image src={tech} alt="" className="w-5" />
                            <span>Tech</span>
                        </div>

                        <div className=" px-2 h-10 border rounded-md gap-1 text-[12px] flex items-center justify-center">
                            <Image src={games} alt="" className="w-5" />
                            <span>Gamaes</span>
                        </div>

                        <div className=" px-2 h-10 border rounded-md gap-1 text-[12px] flex items-center justify-center">
                            <Image src={ai} alt="" className="w-5" />
                            <span>AI</span>
                        </div>
                    </div>
                </div>}
        </div>
    );
};

export default SearchInput;