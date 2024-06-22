import { Resolver } from "react-hook-form";

type SignInValues = {
    email: string
    password : string
}

const resolverSignIn: Resolver<SignInValues> = async (values) => {
    const errors: any = {};


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

    return {
        values: Object.keys(errors).length ? {} : values,
        errors: errors,
    };
};

export { resolverSignIn };
export type { SignInValues };
