export interface Input {
    type: string,
    valid: boolean,
    value: string,
    placeHolder: string,
    touched: boolean,
    errorMessage:string,
}

export interface AuthForm {
    inputs: [Input] | any,
    valid: boolean,
}