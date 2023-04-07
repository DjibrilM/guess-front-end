import React from "react";
import { useRef, useState } from "react";

interface Props {
    disabed: boolean,
    content: string | JSX.Element,
}

const Button: React.FC<Props> = ({ disabed, content }) => {
    return <>
        {/* <div className="w-full h-12 relative animated-button-container">
            {!disabed &&
                <div className="w-[11rem] hidden rounded-md h-10 top-[-35px] left-5 z-20 bg-red-300 border border-red-500 absolute  button-container">
                    <p className="absolute disabled-indicator  text-center text-sm mt-2 z-30 ml-7 text-red-500">Invalid input</p>
                    <div className="w-7 h-5 z-20 left-3 absolute bottom-0 border bg-red-300 border-red-300"></div>
                    <div className="w-5  h-5 bg-red-300 relative top-7 rotate-45 left-4 border-red-700 border"></div>
                </div>
            } */}

        <button
            disabled={!disabed}
            onClick={(event: any) => {
                event.preventDefault();
                const button = event.currentTarget;
                const circle = document.createElement("span");
                const diameter = Math.max(button.clientWidth, button.clientHeight);
                const radius = diameter / 2;
                circle.style.width = circle.style.height = `${diameter}px`;
                circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
                circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
                circle.classList.add("ripple");
                const ripple = button.getElementsByClassName("ripple")[0];

                if (ripple) {
                    ripple.remove();
                }
                button.appendChild(circle);
            }}
            className="w-full overflow-hidden relative h-12 bg-global-0 text-white gobal-btn disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-600">
            {content}
        </button>
        {/* </div> */}
    </>;
};

export default Button;
