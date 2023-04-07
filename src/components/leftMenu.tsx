import React from "react";
import { GrClose } from 'react-icons/gr';
import { CgAddR } from 'react-icons/cg';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { BiDollarCircle } from 'react-icons/bi';
import { BiMessageSquareDetail } from 'react-icons/bi'


interface Props {
    closeMenu: Function,
    opend: boolean,
}

const LeftMenu: React.FC<Props> = ({ closeMenu, opend }) => {
    return (
        <>
            <div onClick={() => closeMenu()} style={opend ? { display: "block" } : { display: "none" }} className="w-full h-[100vh] fixed top-0 left-0 z-[100] bg-[#00000088] duration-2000"></div>

            <div style={!opend ? { right: "-1000px", transition: "0.5s", } : { transition: "0.5s" }} className="w-[300px] p-2 bg-white z-[12000] top-0 right-0 shadow-lg border-l h-[100vh] fixed">
                <div className="h-10 border-b ">
                    <button onClick={() => closeMenu()} className="w-7 h-7 border rounded-md flex items-center justify-center">
                        <GrClose className="text-gray-400 cursor-pointer" />
                    </button>
                </div>

                <ul className="w-full flex flex-col gap-10 mt-3 text-right border-b pb-10">
                    <li className="flex gap-2 w-full  text-gray-700">
                        <CgAddR className="text-2xl" />
                        <p>Add post</p>
                    </li>

                    <li className="flex w-full gap-2  text-gray-700">
                        <BiDollarCircle className="text-2xl" />
                        <span>Donate</span>
                    </li>

                    <li className="flex w-full gap-2  text-gray-700">
                        <MdOutlineNotificationsNone className="text-2xl" />
                        <span>Notification</span>
                    </li>

                    <li className="flex w-full  text-gray-700">
                        <button className="text-white items-center justify-center flex gap-1 mr-4 bg-global-0 h-10 w-32 text-sm ">
                            <BiMessageSquareDetail className="" />
                            message
                        </button>
                    </li>
                </ul>
                <div className="w-10 mt-2 h-10 border-2 rounded-full border-global-0 flex items-center justify-center overflow-hidden">
                    <img className="w-full h-full object-cover rounded-full" src="https://images.pexels.com/photos/15418845/pexels-photo-15418845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
            </div>
        </>
    );
};

export default LeftMenu;
