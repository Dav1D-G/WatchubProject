import { Resolver } from "react-hook-form";

type SignUpValues = {
    name: string
    email: string
    password : string
    confirmPassword : string
}

const resolverSignUp: Resolver<SignUpValues> = async (values) => {
    const errors: any = {};
    console.log(values);

    if (!values.name) {
        errors.name = {
            type: "required",
            message: "Name is required.",
        };
    }

    if (!values.email) {
        errors.email = {
            type: "required",
            message: "Email is required.",
        };
    }

    if (!values.password) {
        errors.password = {
            type: "required",
            message: "Password is required.",
        };
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = {
            type: "required",
            message: "Confirm Password is required.",
        };
    } 
    
    if (values.password !== values.confirmPassword) {
        errors.confirmPassword = {
            type: "validate",
            message: "Passwords do not match.",
        };
    }

    return {
        values: Object.keys(errors).length ? {} : values,
        errors: errors,
    };
};

export { resolverSignUp };
export type { SignUpValues };
