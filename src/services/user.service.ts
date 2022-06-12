import { UserModel } from "../models/user.model";
import crypto from "crypto";
import argon2d from "argon2";
import logger from "../utils/logger";

export function genSalt(){
    return crypto.randomBytes(64).toString("hex");
}

export async function registerUser(input: {
    email: string,
    password: string
}){
    return UserModel.create(input);
}

export async function findUserByEmailPassword({
    email,
    password
}: {
    email: string,
    password: string
}){
    const user = await UserModel.findOne({ email });
    if (!user || !await argon2d.verify(user.password, password)){
        return null;
    }

    return user;
}