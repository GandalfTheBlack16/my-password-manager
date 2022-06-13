import { Request, Response } from "express";
import httpStatus from "http-status";
import { genSalt, registerUser } from "../../services/user.service";
import { createVault } from "../../services/vault.service";
import logger from "../../utils/logger";
import IController from "../controller";

export default class RegisterUserController implements IController{
    
    async run(req: Request, res: Response): Promise<void> {
        try {
            const { email, password } = req.body;
            const user = await registerUser({ email, password });
            
            const salt = genSalt();
            await createVault({ user: user._id, salt });

            //TODO: Sign JWT and attach it to cookie response
            
            res.status(httpStatus.CREATED).json(user);
        } catch (err){
            logger.error(err);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                status: 'Error',
                message: 'Internal Server Error'
            });
        }
    }

}