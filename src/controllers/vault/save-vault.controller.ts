import { Request, Response } from "express";
import httpStatus from "http-status";
import { updateVault } from "../../services/vault.service";
import IController from "../controller";

export default class SaveVaultController implements IController {
    async run(req: Request, res: Response): Promise<void|Response> {
        try {

            //TODO: Check JWT Access Token

            const { userId } = req.params;
            const { vaultData } = req.body;
        
            const vault = await updateVault(userId, vaultData);
            if (!vault){
                return res.status(httpStatus.NOT_FOUND).json({
                    status: 'Error',
                    message: `Cannot find personal vault for user ${userId}`
                });
            }
                
            res.status(httpStatus.OK).json({
                status: 'Success',
                message: `User ${userId} vault's updated`
            });
            
        } catch (err) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                status: 'Unknown error',
                message: 'err'
            });
        }
    }

}