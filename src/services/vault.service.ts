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