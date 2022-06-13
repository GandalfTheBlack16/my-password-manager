import { Request, Response } from "express";

export default interface IController {
    run(req:Request, res: Response): Promise<void|Response>;
}