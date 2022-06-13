import { Request, Response } from "express";
import httpStatus from "http-status";
import { findUserByEmailPassword } from "../../services/user.service";
import { findVaultByUser } from "../../services/vault.service";
import IController from "../controller";

export default class LoginUserController implements IController {
    
    async run(req: Request, res: Response): Promise<void|Response> {
        try {
            const { email, password } = req.body;

            const user = await findUserByEmailPassword({ email, password });
            if (!user){
                return res.status(httpStatus.UNAUTHORIZED).json({
                    status: 'Error',
                    message: "Authentication error. Please, provide valid credentials"
                });
            }
            
            const vault = await findVaultByUser(user._id);

            //TODO: Sign JWT
            //Send back encrypted vault, vault salt, user and JWT
            res.status(httpStatus.OK).json({
                vault: vault?.data,
                salt: vault?.salt,
                user: user,
                accessToken: null
            });
        } catch (err) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                status: 'Unknown error',
                message: err
            });
        }
    }
    
}