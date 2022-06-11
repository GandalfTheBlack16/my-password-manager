import { User, UserModel } from "../models/user.model";
import crypto from "crypto";
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