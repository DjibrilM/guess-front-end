'use client'

import { useState } from "react";
import React from "react";
import AnimatedInput from "./inputs/Animated";
import Button from "./buttons/Button";
import googleLogo from '../../public/google.png';
import Image from "next/image";
import FrameImage from '../../public/image.png';
import { Input } from "@/types/types";
import { AuthForm } from "@/types/types";
import { validateEmail, validatePassword } from "@/helpers/validation";
import { signinWithPopup } from '../../firebase'

const onInputFocus = (input: string, form: AuthForm): AuthForm => {
    const previousValue = form;
    const findInput = previousValue.inputs.findIndex((el: Input) => {
        return el.type === input
    })
    previousValue.inputs[findInput].touched = true;
    console.log(previousValue.inputs[findInput].touched)
    return previousValue;

}

const loginFormInitialValue: Input[] = [
    {
        type: "email",
        valid: false,
        value: "",
        placeHolder: 'Email',
        touched: false,
        errorMessage: 'Invalid Email'
    },
    {
        type: "password",
        valid: false,
        value: "",
        placeHolder: 'Password',
        touched: false,
        errorMessage: 'only more that 4 characters'
    },
];

const registerFormCol1: Input[] = [
    {
        type: "email",
        valid: false,
        value: "",
        placeHolder: 'Email',
        touched: false,
        errorMessage: 'Invalid Email'
    },
];

const registerFormCol2: Input[] = [
    {
        type: "password",
        valid: false,
        value: "",
        placeHolder: 'Password ',
        touched: false,
        errorMessage: 'more that 4 characters'
    },
    {
        type: "userName",
        valid: false,
        value: "",
        placeHolder: 'User Name',
        touched: false,
        errorMessage: 'Invalid Email'
    },
];


export const Login = () => {
    const [loginForm, setLoginForm] = useState<AuthForm>({
        inputs: [...loginFormInitialValue],
        valid: false,
    });

    const onchaneValue = (type: string, value: string) => {
        switch (type) {
            case "email":
                setLoginForm({ ...validateEmail(type, value, loginForm) });
                break;
            case "password":
                setLoginForm({ ...validatePassword(type, value, loginForm) });
            default:
                break;
        }
    }

    return <section className='flex flex-col md:flex-row w-full items-center md:items-start gap-3 justify-center'>
        <div className="mt-5 sm:mt-24  border bg-white mx-2 w-full sm:w-[35rem]  sm:h-[20rem] pt-5">
            <form onSubmit={(e) => {
                e.preventDefault();
            }} action="" className="w-full sm:p-4 p-2">
                {loginForm.inputs.map((input: Input, index: number) => {
                    return (
                        <div key={index} className="w-full sm:flex gap-3 mt-3">
                            <div className="w-full text-[14px]">
                                <AnimatedInput
                                    errorMessage={input.errorMessage}
                                    value={input.value}
                                    valid={input.valid}
                                    touched={input.touched}
                                    onFocus={() => onInputFocus(input.type, loginForm)}
                                    onchange={(value: string) => onchaneValue(input.type, value)}
                                    type={input.type} placeHolder={input.placeHolder} />
                            </div>
                        </div>
                    )
                })}


                <div className="mt-3">
                    <Button content={'Login'} disabed={loginForm.valid} />
                </div>

                <div className="w-full mt-3 flex items-center">
                    <button onClick={(e) => {
                        signinWithPopup();
                    }} className="w-full gap-10 sm:gap-32 py-3 px-2 items-center flex bg-gray-100 text-gray-600">
                        <Image alt="google logo" className="w-8" src={googleLogo} priority />
                        Rgister with Google

                    </button>
                </div>
            </form>
        </div>
    </section>;
};


export const Register = () => {
    const [RegisterFormCol1, setRegisterFormCol1] = useState<AuthForm>({
        inputs: [...registerFormCol1],
        valid: false,
    });
    const [RgsiterFormCol2, setRgisterFormCol2] = useState<AuthForm>({
        inputs: [...registerFormCol2],
        valid: false,
    })

    const onchaneValue = (type: string, value: string) => {
        switch (type) {
            case "email":
                setRegisterFormCol1({ ...validateEmail(type, value, RegisterFormCol1) });
                break;
            case "password":
                setRegisterFormCol1({ ...validatePassword(type, value, RegisterFormCol1) });
            default:
                break;
        }
    }

    const onchangeValueCol2 = (type: string, value: string) => {
        switch (type) {
            case "email":
                setRgisterFormCol2({ ...validateEmail(type, value, RgsiterFormCol2) });
                break;
            case "password":
                setRgisterFormCol2({ ...validatePassword(type, value, RgsiterFormCol2) });
            default:
                break;
        }
    }

    return <section className='flex flex-col md:flex-row w-full items-center md:items-start gap-3 justify-center'>
        <div className="mt-5 sm:mt-24  border bg-white mx-2 w-full sm:w-[38rem]  sm:h-[20rem] pt-5">
            <form action="" className="w-fuell p-4">
                {RegisterFormCol1.inputs.map((input: Input, index: number) => {
                    return (<AnimatedInput
                        key={index}
                        errorMessage={input.errorMessage}
                        value={input.value}
                        valid={input.valid}
                        touched={input.touched}
                        onFocus={() => onInputFocus(input.type, RegisterFormCol1)}
                        onchange={(value: string) => onchaneValue(input.type, value)}
                        type={input.type} placeHolder={input.placeHolder} />
                    )
                })}


                <div className="w-full sm:flex gap-2 mt-3 text-[14px]">
                    {RgsiterFormCol2.inputs.map((input: Input, index: number) => {
                        return (<AnimatedInput
                            key={index}
                            errorMessage={input.errorMessage}
                            value={input.value}
                            valid={input.valid}
                            touched={input.touched}
                            onFocus={() => onInputFocus(input.type, RgsiterFormCol2)}
                            onchange={(value: string) => onchangeValueCol2(input.type, value)}
                            type={input.type} placeHolder={input.placeHolder} />
                        )
                    })}
                </div>

                <div className="mt-3">
                    <Button content={'Register'} disabed={RgsiterFormCol2.valid && RegisterFormCol1 ? true : false} />
                </div>

                <div className="w-full mt-3 flex items-center">
                    <button className="w-full gap-10 sm:gap-32 py-3 px-2 items-center flex bg-gray-100 text-gray-600">
                        <Image alt="google logo" className="w-8" src={googleLogo} priority />
                        Rgister with Google
                    </button>
                </div>
            </form>
        </div>




        <div className="w-[32rem] border-l">
            <Image alt="" className="w-[22rem] m-auto md:m-0 md:w-[27rem]" priority={true} src={FrameImage} />
        </div>
    </section>;
};


