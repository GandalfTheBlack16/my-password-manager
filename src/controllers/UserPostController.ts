import { Request, Response } from "express";
import { registerUser } from "../services/user.service";
import IController from "./IController";

export default class UserPostController implements IController{
    
    run(req: Request, res: Response): Promise<void> {
        const input = req.body;
        // const user = registerUser();
        //TODO: Sign JWT and attach it to cookie response
        throw new Error("Method not implemented.");
    }

}