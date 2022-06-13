import { Document } from "mongoose";
import { VaultModel } from "../models/vault.model"

export async function createVault(input: {
    user: string,
    salt: string
}) {
    return await VaultModel.create(input);
}

export async function findVaultByUser(userId: string) {
    return VaultModel.findOne({ user: userId });
}

export async function updateVault(userId: string, vaultData: string) {
    const vault = await VaultModel.findOne({ user: userId });
    if(vault){
        vault.data = vaultData;
        vault.save();
    }
    return vault;
}