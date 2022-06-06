import { UserModel } from "../models/user.model";
import crypto from "crypto";

export function genSalt(){
    return crypto.randomBytes(64).toString("hex");
}

export async function registerUser(input: {
    hashedPassword: string,
    email: string
}){
    return UserModel.create(input);
}