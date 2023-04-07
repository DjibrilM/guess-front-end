import { useState, useRef } from "react"
import React from "react"


interface Props {
    placeHolder: string,
    type: string,
    onchange: Function,
    onFocus: Function,
    touched: boolean,
    valid: boolean,
    value: string,
    errorMessage: string,
}


const AnimatedInput: React.FC<Props> = ({ placeHolder, type, onchange, touched, onFocus, value, valid, errorMessage }) => {
    const [focused, setFocused] = useState<boolean>(false);
    const [activePlaceholder, setActivePlaceHolder] = useState<boolean>();
    const inputRef = useRef<any>(null);

    return (
        <div className="h-14 relative w-full">
            {!valid && value.length > 0 && touched && <p className="absolute right-0 top-[-15px] text-red-500 text-[10px]">{errorMessage}</p>}
            <div className="h-full relative w-full">
                <p style={focused ? {
                    bottom: "3rem",
                    color: activePlaceholder ? `${!valid && value.length > 0 && touched ? "red" : "#06c69f"}` : ``,
                } : {}} className="bg-white flex px-4 h-5  ml-2 duration-200  absolute bottom-6 text-gray-600">{placeHolder}</p>
                <input
                    style={!valid && value.length > 0 && touched ? { borderColor: "red", color: "red" } : {}}
                    onChange={(event) => onchange(event.target.value)}
                    type={type}
                    ref={inputRef}
                    onFocus={() => {
                        onFocus();
                        setActivePlaceHolder(true);
                        setFocused(true)
                    }
                    }
                    onBlur={() => {
                        setActivePlaceHolder(!valid && value.length && touched ? true : false);
                        if (inputRef.current.value.length > 0) return
                        setFocused(false)
                    }} className="w-full full outline-none p-3 border focus:border-global-0 text-gray-600" />
            </div>
        </div>
    )
}

export default AnimatedInput