import React from "react";
import Image from "next/image";
import profile from '../../public/unnamed.jpg'
import { GoLocation, GoPencil, CgEye, BiCamera, BiPhotoAlbum, IoPeople } from 'react-icons/all'

const UserProfile = () => {
    return <>
        <section className="max-w-[1300px] w-full flex items-center justify-center bg-[#0591751e] m-auto h-[300px] md:h-[500px] mt-10 rounded-lg border-4 border-white">
            <div className="flex cursor-pointer items-center m-auto absolute justify-center gap-2">
                <BiCamera />
                <p className="text-sm">Change Background</p>
            </div>
            <div className="h-full w-full flex  justify-end relative top-[150px] md:top-[250px]  items-center">
                <div className="w-[100px] h-[100px] relative right-32 sm:right-10 sm:w-[200px] sm:h-[200px]  md:w-[250px] md:h-[250px] overflow-hidden shadow  rounded-full border-4 border-white">
                    <Image src={profile} alt="user" className="w-full h-full rounded-full " />
                </div>
                <div className="w-[300px] hidden md:block p-2 h-[250px] absolute left-5   bg-white  border">
                    <ul className="flex flex-col gap-2">
                        <li className="flex w-full justify-between border-b py-2">
                            <div className="flex items-center gap-1">
                                <div className=""><GoLocation /></div>
                                <p className="text-sm">Location: <strong className="text-gray-700">chicago USA</strong></p>
                            </div>

                            <div className="text-sm">
                                <GoPencil />
                            </div>
                        </li>

                        <li className="flex w-full justify-between border-b py-2">
                            <div className="flex items-center gap-1 w-full">
                                <div className=""><CgEye /></div>
                                <p className="text-sm w-full flex items-center justify-between">Profile View: <strong className="text-gray-700">300</strong></p>
                            </div>
                        </li>

                        <li className="flex w-full justify-between border-b py-2">
                            <div className="flex items-center gap-1 w-full">
                                <div className=""><BiPhotoAlbum /></div>
                                <p className="text-sm w-full flex items-center justify-between">Total Posts: <strong className="text-gray-700">5</strong></p>
                            </div>
                        </li>

                        <li className="flex w-full justify-between border-b py-2">
                            <div className="flex items-center gap-1 w-full">
                                <div className=""><IoPeople /></div>
                                <p className="text-sm w-full flex items-center justify-between">Followers:<strong className="text-gray-700">5</strong></p>
                            </div>
                        </li>
                    </ul>

                    <button className="w-full h-10 bg-global-0 active:bg-[#059175] mt-3 text-white">Follow</button>
                </div>
            </div>
        </section>

        <div className="max-w-[1300px] md:hidden block m-auto mt-10 sm:mt-36 p-2 h-[250px]    bg-white  border">
            <ul className="flex flex-col gap-2">
                <li className="flex w-full justify-between border-b py-2">
                    <div className="flex items-center gap-1">
                        <div className=""><GoLocation /></div>
                        <p className="text-sm">Location: <strong className="text-gray-700">chicago USA</strong></p>
                    </div>

                    <div className="text-sm">
                        <GoPencil />
                    </div>
                </li>

                <li className="flex w-full justify-between border-b py-2">
                    <div className="flex items-center gap-1 w-full">
                        <div className=""><CgEye /></div>
                        <p className="text-sm w-full flex items-center justify-between">Profile View: <strong className="text-gray-700">300</strong></p>
                    </div>
                </li>

                <li className="flex w-full justify-between border-b py-2">
                    <div className="flex items-center gap-1 w-full">
                        <div className=""><BiPhotoAlbum /></div>
                        <p className="text-sm w-full flex items-center justify-between">Total Posts: <strong className="text-gray-700">5</strong></p>
                    </div>
                </li>

                <li className="flex w-full justify-between border-b py-2">
                    <div className="flex items-center gap-1 w-full">
                        <div className=""><IoPeople /></div>
                        <p className="text-sm w-full flex items-center justify-between">Followers:<strong className="text-gray-700">5</strong></p>
                    </div>
                </li>
            </ul>

            <button className="w-full h-10 bg-global-0 active:bg-[#059175] mt-3 text-white">Follow</button>
        </div>
    </>
};

export default UserProfile;
