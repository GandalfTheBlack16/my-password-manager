import { Express } from "express";
import { body, param } from "express-validator";
import SaveVaultController from "../../controllers/vault/save-vault.controller";
import validateInput from "../../middlewares/input-validation.middleware";

export const register = (app: Express) => {
    const saveVaultCtrl: SaveVaultController = new SaveVaultController();
    app.post('/api/vault', validateInput([ param('userId').isUUID(), body('vaultData').notEmpty() ]), saveVaultCtrl.run.bind(saveVaultCtrl));
}