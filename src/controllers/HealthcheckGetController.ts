import { Request, Response } from "express";
import httpStatus from "http-status";
import IController from "./IController";

export default class HealthCheckController implements IController {
    async run(req: Request, res: Response){
        res.status(httpStatus.OK).json({
            status: 'UP'
        });
    }
}