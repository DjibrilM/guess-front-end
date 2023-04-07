import { Input } from "@/types/types";
import { AuthForm } from "@/types/types";

const valiateForm = (inputs: [Input]): boolean => {
    let valid: boolean[] = [];
    inputs.forEach((input: Input) => {
        valid.push(input.valid);
    })
    return !valid.includes(false);
}


export const validateEmail = (email: string, value: string, form: AuthForm): AuthForm => {
    const previousValue = form;
    const findInput = previousValue.inputs.findIndex((el: Input) => el.type === email);
    const input = previousValue.inputs[findInput];
    const validationRegex: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    input.value = value;

    if (input.value.match(validationRegex)) {
        input.valid = validationRegex.test(input.value);
    } else {
        input.valid = false;
    }
    previousValue.inputs[findInput] = input;
    previousValue.valid = valiateForm(previousValue.inputs);

    return previousValue;
}


export const validatePassword = (password: string, value: string, from: AuthForm): AuthForm => {
    const previousValue = from;
    const findPasswordInput = previousValue.inputs.findIndex((el: Input) => el.type === password);
    const passwordInput = previousValue.inputs[findPasswordInput];
    passwordInput.value = value;
    if (passwordInput.value.length > 3) {
        passwordInput.valid = true;
    } else {
        passwordInput.valid = false;
    }
    previousValue.valid = valiateForm(previousValue.inputs);
    return previousValue;
}
