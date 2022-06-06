import { Request, Response } from "express";
import httpStatus from "http-status";
import logger from "../utils/logger";
import Controller from "./controller";

export default class HealthCheckController implements Controller {
    async run(req: Request, res: Response){
        res.status(httpStatus.OK).json({
            status: 'UP'
        });
    }
}